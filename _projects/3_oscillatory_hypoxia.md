---
layout: page
title: "Oscillatory hypoxia in cancer"
description: "How oxygen that rises and falls, rather than staying low, rewires gene expression in cancer cells and surrounding stromal cells."
img: assets/img/projects/oscillatory-hypoxia-card.jpg
importance: 3
category: research
permalink: /projects/oscillatory-hypoxia/
topics: [hypoxia, stroma]
related_publications: true
---

## Why it matters

Solid tumors often outgrow their blood supply, which leaves regions short of oxygen. That shortage is not always steady. Because supply and consumption can fall out of step, oxygen levels in a tumor can rise and fall {% cite Novin2024 %}. The main cellular response to low oxygen is controlled by a transcription factor called HIF-1, and its activity can rise and fall as well {% cite Kshitiz2022 %}. How cycling oxygen differs from a steady shortage, and what it does to cancer, is still poorly understood {% cite Suhail2024 %}.

## Approach

- Grow breast cancer cells in culture under controlled cycles of low and normal oxygen, and compare their gene expression with cells in steady low oxygen and in normal oxygen.
- Test whether the resulting gene signatures predict survival in public patient datasets.
- Build mathematical models of gene circuits to explain why some genes respond specifically to cycling oxygen.
- Measure how the surrounding stromal cells respond, using invasion assays on nanopatterned surfaces and force measurements.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/oscillatory-hypoxia-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Tumor schematic with oxygen regions, cell culture set-up, scatter plots and heatmaps comparing gene expression in normal, steady low and cycling oxygen." caption="Cycling oxygen has its own gene expression pattern. Panel A sketches regions of steady and cycling low oxygen in a tumor, panels B and C show the culture set-up that controls oxygen over time, and later panels compare gene expression under normal, steady low and cycling oxygen. Source: Qiu et al., npj Systems Biology and Applications (2025), CC BY." %}
</div>

## What we have found

Cycling oxygen changes gene expression in a way that differs from steady low oxygen, and for some genes the change goes in the opposite direction. I found that the signature of this response is common across human cancers and is linked to lower survival in breast cancer patients, and that cycling oxygen switches on the cell's response to misfolded proteins {% cite Suhail2024 %}.

Most genes respond to cycling oxygen with a change that sits between normal and steady low oxygen, but a small set responds specifically to the cycling. In a study where I was last author, models of gene circuits called incoherent feed-forward loops showed that this is plausible. In these circuits HIF-1 acts on a gene directly and also through a second factor that pushes the other way. Experiments pointed to p53 and Notch1 as partners of HIF-1 in such loops {% cite Qiu2025 %}. Earlier work by collaborators showed that individual cancer cells differ in their HIF-1 dynamics, with some showing oscillations that depend on lactate and on a protein-recycling process called chaperone-mediated autophagy {% cite Kshitiz2022 %}.

Other factors shape the response. Lactate, which accumulates in hypoxic tumors, activates genes for cell division and for invasion-related tissue remodeling and is linked to worse survival {% cite Liu2024b %}, and the tissue a cancer comes from changes how it responds to HIF-1 {% cite Liu2024 %}.

Stromal cells respond too. Cycling oxygen pushes fat-derived stromal cells into senescence, a state in which they stop dividing, and normal breast epithelial cells treated with their conditioned medium became more invasive {% cite Novin2024 %}. Cancer-associated fibroblasts pull harder under cycling oxygen than under steady low oxygen, and become easier for cancer cells to invade {% cite Du2024b %}.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/oscillatory-hypoxia-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Schematic of a breast tumor microenvironment and invasion assay, with microscopy images of cancer cells invading stroma." caption="Fat-derived stromal cells and invasion. A schematic of a breast tumor with a low-oxygen core and recruited stromal cells, the nanopatterned invasion assay, and the effect of the stromal cells on the invasion of cancer and normal breast epithelial cells. Source: Novin et al., Cancers (2024), CC BY." %}
</div>

## Where it is going

The gene-circuit models make it possible to search for the intermediate regulators that read out cycling oxygen {% cite Qiu2025 %}. This thread also shares its questions with the work on [stromal resistance to invasion]({{ '/projects/stromal-resistance/' | relative_url }}), since stromal cells change how readily cancer cells spread.
