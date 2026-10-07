---
layout: page
title: "Cell-cell communication and secretomes"
description: "Models and data analysis of how cells exchange molecules, from tunneling nanotubes and secretomes to tissue-wide signaling maps."
img: assets/img/projects/cell-communication-card.jpg
importance: 4
category: research
permalink: /projects/cell-communication/
topics: [communication, omics]
related_publications: true
---

## Why it matters

Cells coordinate with their neighbors by exchanging molecules. Some molecules pass through direct physical links, and others are released into the surroundings as secreted signals. These exchanges are hard to measure directly, which makes quantitative models and careful data analysis especially useful for understanding them.

## Approach

- Mathematical models of how molecules move between cells, including through tunneling nanotubes, thin and short-lived tubes that can connect neighboring cells.
- Cultures in which two cell types are patterned so that the size of the contact interface between them can be controlled, combined with a model of the transfer.
- An experimental and computational platform that reconstructs the secretion dynamics of adherent cells from only a few time points. In my PhD work this included information-theoretic bounds on the variance of the estimates.
- Single-cell RNA sequencing combined with a database of ligands and receptors, to build maps of which cell types signal to which.

<div class="project-figure" style="max-width: 440px; margin-left: auto; margin-right: auto;">
{% include figure.liquid loading="eager" path="assets/img/projects/cell-communication-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Network diagrams of lung cell types connected by ligand-receptor edges in four species, with edge-weight plots." caption="Mapping cell-cell signaling in the lung. Single-cell expression is matched against a ligand-receptor database to build weighted networks, which are then compared across mouse, rat, pig and human. Source: Raredon et al., Science Advances (2019), CC BY-NC." %}
</div>

## What we have found

An early piece of this work was a simple model of how fast molecules cross a tunneling nanotube. The model shows that transfer depends on how long the tube lasts, how fast molecules diffuse, how far apart the cells are and how large the molecule is, and it makes predictions that experiments can test {% cite Suhail2013 %}. In a melanoma and endothelial cell pair, collaborators and I then showed that proteins from inside the cell can pass between different cell types, that the amount depends on the size of the interface between them, and that transferring an activated BRAF protein boosts downstream signaling in the receiving cell {% cite Kshitiz2015 %}.

For secreted signals, a platform that reconstructs secretion over time showed that the secretory signature of bone marrow stromal cells depends on context, for example on signals from injured heart cells under oxidative stress. A mixture of recombinant factors that reproduced those dynamics rescued injured cells and improved cardiac output {% cite Kshitiz2019 %}. A related study of several kinds of stem cells reported a shared secreted signature that protects cardiac cells from stress after blood flow returns {% cite Kshitiz2017 %}.

At the level of whole tissues, collaborators and I compared single-cell data from mouse, rat, pig and human lungs and found conserved patterns of cell signaling. Alveolar type I cells, which line the air sacs, play a major part in regulating the tissue, and they dominate VEGF and semaphorin signaling in all four species {% cite Raredon2019 %}. Related tissue-engineering collaborations showed that a heart-like matrix speeds the maturation of stem cell-derived heart muscle cells {% cite Afzal2022 %}, and that the pore size of a scaffold changes how blood vessels grow into it {% cite Chiou2020 %}.

<div class="project-figure" style="max-width: 440px; margin-left: auto; margin-right: auto;">
{% include figure.liquid loading="eager" path="assets/img/projects/cell-communication-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Lung tissue diagram, immunofluorescence of alveolar type I cells, and network plots of VEGF and semaphorin signaling." caption="Alveolar type I cells dominate VEGF and semaphorin signaling in all four species, shown with protein staining, ligand-receptor mapping and network centrality. Source: Raredon et al., Science Advances (2019), CC BY-NC." %}
</div>

## Where it is going

Signals between cells now sit at the center of my maternal-fetal work, where interleukin-11 from trophoblasts and interleukin-8 from scar-affected fibroblasts shape how the placenta invades {% cite Afzal2025 Du2024 %}. The ideas in this project continue there, in models that link stromal cell states to disease. See [AI for maternal-fetal disease prognosis]({{ '/projects/maternal-fetal-prognostics/' | relative_url }}).
