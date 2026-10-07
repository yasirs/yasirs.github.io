document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("topic-filter");
  if (!bar) return;

  const entries = Array.from(document.querySelectorAll(".bibliography > li")).map((li) => {
    const meta = li.querySelector("[data-topics]");
    return {
      li: li,
      topics: meta ? (meta.dataset.topics || "").split(/\s+/).filter(Boolean) : [],
      selected: meta ? meta.dataset.selected === "true" : false,
    };
  });
  const chips = Array.from(bar.querySelectorAll("[data-filter]"));
  const valid = chips.map((c) => c.dataset.filter);

  const matches = (entry, filter) => {
    if (filter === "all") return true;
    if (filter === "selected") return entry.selected;
    return entry.topics.includes(filter);
  };

  // Hide year headings and lists whose entries are all hidden (by topic or by the text search).
  const refreshGroups = () => {
    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      let visible = false;
      let node = heading.nextElementSibling;
      while (node && node.tagName !== "H2") {
        if (node.tagName === "OL") {
          const items = Array.from(node.querySelectorAll(":scope > li"));
          const shown = items.some((li) => !li.classList.contains("topic-hidden") && !li.classList.contains("unloaded"));
          node.classList.toggle("topic-hidden", !shown && items.some((li) => li.classList.contains("topic-hidden")));
          visible = visible || shown;
        }
        node = node.nextElementSibling;
      }
      heading.classList.toggle("topic-hidden", !visible && !heading.classList.contains("unloaded"));
    });
  };

  chips.forEach((chip) => {
    const count = chip.querySelector(".count");
    if (count) count.textContent = entries.filter((e) => matches(e, chip.dataset.filter)).length;
  });

  const apply = (filter, updateUrl) => {
    entries.forEach((e) => e.li.classList.toggle("topic-hidden", !matches(e, filter)));
    chips.forEach((chip) => {
      const on = chip.dataset.filter === filter;
      chip.classList.toggle("active", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    refreshGroups();
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (filter === "all") url.searchParams.delete("topic");
      else url.searchParams.set("topic", filter);
      window.history.replaceState(null, "", url);
    }
  };

  chips.forEach((chip) => chip.addEventListener("click", () => apply(chip.dataset.filter, true)));

  document.querySelectorAll("[data-topic-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      apply(link.dataset.topicLink, true);
      bar.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  // The text search toggles its own class; recompute headings after it has run.
  const search = document.getElementById("bibsearch");
  if (search) search.addEventListener("input", () => setTimeout(refreshGroups, 0));
  window.addEventListener("hashchange", () => setTimeout(refreshGroups, 0));

  const requested = new URLSearchParams(window.location.search).get("topic");
  apply(valid.includes(requested) ? requested : "all", false);
});
