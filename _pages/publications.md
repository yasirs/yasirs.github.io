---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed papers and conference proceedings, newest first. Filter by research topic or search by keyword.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Topic filter -->

<div class="topic-filter" id="topic-filter" role="group" aria-label="Filter publications by topic">
  <button type="button" class="topic-chip active" data-filter="all" aria-pressed="true">All <span class="count"></span></button>
  <button type="button" class="topic-chip" data-filter="selected" aria-pressed="false">Selected <span class="count"></span></button>
  {% for topic in site.data.topics %}
    <button type="button" class="topic-chip" data-filter="{{ topic.slug }}" aria-pressed="false" title="{{ topic.description }}">
      {{ topic.label }} <span class="count"></span>
    </button>
  {% endfor %}
</div>
<script src="{{ '/assets/js/topicfilter.js' | relative_url | bust_file_cache }}" type="module"></script>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

{% include figure_credits.liquid %}
