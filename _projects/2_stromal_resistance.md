---
layout: page
title: "Evolved stromal resistance to invasion"
description: "Why stroma resists invasion by placental and cancer cells in some mammals, and which genes and regulators explain it."
img: assets/img/projects/stromal-resistance-card.jpg
importance: 2
category: research
permalink: /projects/stromal-resistance/
topics: [stroma, evolution, placenta]
related_publications: true
---

## Why it matters

Invasion into stroma, the connective tissue that supports epithelial tissues, happens in two very different settings: when placental cells embed in the uterus, and when cancer cells spread. Across placental mammals, species whose placentas invade deeply also tend to have higher rates of malignant cancer {% cite Suhail2022 %}. Metastasis itself is now understood as many overlapping processes rather than a single chain of steps {% cite Suhail2019 %}.

The framework I proposed, Evolved Levels of Invasibility (ELI), holds that in species with shallow placentation the maternal stroma gained the ability to resist being invaded by trophoblasts, and that this ability incidentally holds back cancer spread in other tissues {% cite Du2026 %}. The project tests that idea and looks for the genes behind it.

## Approach

- Compare gene expression in fibroblasts from the uterus and the skin across mammals with different placental types, and find genes whose expression tracks how easily the fibroblasts are invaded.
- Look for the regulatory DNA elements and transcription factors that control those genes.
- Test candidates in laboratory invasion assays, including gene knockout with CRISPR-Cas9.
- Check whether the same gene sets matter in human cancer data, such as patient survival and the early stages of tumor progression.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/stromal-resistance-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Phylogenetic tree of mammals with an index of stromal invasibility, a scatter plot and heatmaps of gene expression across species." caption="Comparing fibroblasts across mammals. The tree ranks species by how invasive their placentas are, and the plots and heatmaps show genes whose expression tracks that ranking. Source: Suhail et al., Proceedings of the National Academy of Sciences of the United States of America (2022), CC BY-NC-ND." %}
</div>

## What we have found

A comparative genomics study traced the differences to regulatory DNA. Transcription factors control genes that raise or lower invasibility, and knocking out two of them, GATA2 and TFDP1, strongly changed how easily endometrial and skin fibroblasts were invaded {% cite Suhail2022 %}.

The same genes matter in cancer. In patients with melanoma, loss of the anti-invasive genes was linked to more spread and lower survival, even though these genes are expressed at lower levels in humans than in species with non-invasive placentas {% cite Suhail2021 %}. A later analysis asked whether two routes to resistance, the evolution of shallow placentation and decidualization in human pregnancy, use similar pathways, and built a shared gene set from their overlap. The study also showed that two regulators of that set, Nr2f6 and JDP2, can control the resistance of human fibroblasts to invasion {% cite Suhail2025b %}.

Collaborators and I studied other pieces of the puzzle. The matrix receptor CD44 raises the invasibility of fibroblasts, and its expression is higher in the human lineage than in other mammals {% cite Ma2022 %}. In pancreatic cancer, the move to lymph node metastasis coincides with weaker expression of ELI resistance genes and the appearance of a more invasible fibroblast subclass {% cite Liu2022 %}. Work on cattle, sheep and pigs refined the framework: fibroblasts from cattle and sheep strongly resist invading trophoblasts, while pig fibroblasts resist much less {% cite Du2026 %}.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/stromal-resistance-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Schematic comparing contact between trophoblasts and maternal stroma in three types of placenta." caption="Three types of placenta. The schematic compares how trophoblasts and maternal stroma meet in hemochorial, epitheliochorial and synepitheliochorial placentation, the contrast on which the refined ELI framework rests. Source: Du et al., Journal of Reproduction and Development (2026), CC BY-NC-ND." %}
</div>

## Where it is going

The same questions now run through my work on maternal-fetal disease, where the aim is to relate the state of stromal cells to excessive invasion in conditions such as placenta accreta. See the project on [AI for maternal-fetal disease prognosis]({{ '/projects/maternal-fetal-prognostics/' | relative_url }}).
