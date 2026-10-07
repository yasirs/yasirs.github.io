#!/usr/bin/env python3
"""Refresh _data/scholar_citations.yml from the public Google Scholar profile.

Google answers HTTP 403 to GitHub's build servers, so the citation counts cannot be
fetched while the site builds. Run this from your own computer (or any machine Google
does not block), commit the updated data file, and push.

usage (from the repository root):  python3 scripts/update_scholar_citations.py
"""
import datetime
import html
import re
import sys
import time
import urllib.request

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
PAGE = 100

config = open("_config.yml", encoding="utf-8").read()
user = re.search(r"^scholar_userid:\s*(\S+)", config, re.M).group(1)
bib = open("_bibliography/papers.bib", encoding="utf-8").read()
wanted = re.findall(r"google_scholar_id\s*=\s*\{([^}]+)\}", bib)

counts, start = {}, 0
while True:
    url = f"https://scholar.google.com/citations?user={user}&hl=en&cstart={start}&pagesize={PAGE}"
    page = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30).read().decode("utf-8")
    rows = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, flags=re.S)
    for row in rows:
        ident = re.search(r"citation_for_view=[^:]+:([^\"&]+)", row)
        cited = re.search(r'class="gsc_a_ac[^"]*"[^>]*>(\d*)<', row)
        if ident:
            counts[html.unescape(ident.group(1))] = int(cited.group(1)) if cited and cited.group(1) else 0
    if len(rows) < PAGE:
        break
    start += PAGE
    time.sleep(2)

if not counts:
    sys.exit("No papers found on the profile page: Google may be blocking this machine.")

missing = [i for i in wanted if i not in counts]
with open("_data/scholar_citations.yml", "w", encoding="utf-8") as out:
    out.write(f"# Citation counts from the Google Scholar profile {user}.\n")
    out.write(f"# Written by scripts/update_scholar_citations.py on {datetime.date.today()}. Do not edit by hand.\n")
    for ident in wanted:
        if ident in counts:
            out.write(f'"{ident}": {counts[ident]}\n')
print(f"{len(counts)} papers on the profile, {len(wanted) - len(missing)} of {len(wanted)} bib entries updated")
if missing:
    print("Not found on the profile (check google_scholar_id):", ", ".join(missing))
