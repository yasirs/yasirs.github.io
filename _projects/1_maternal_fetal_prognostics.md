---
layout: page
title: "AI for maternal-fetal disease prognosis"
description: "Models that read the state of stromal cells at the maternal-fetal interface to predict pre-eclampsia and fetal growth disorders."
img: assets/img/projects/maternal-fetal-prognostics-card.jpg
importance: 1
category: research
permalink: /projects/maternal-fetal-prognostics/
topics: [placenta, ml, omics]
related_publications: true
---

## Why it matters

Pre-eclampsia and fetal growth disorders are pregnancy complications that are difficult to see coming. Both involve the interface where the placenta meets the uterus, a place where cells from two genetically different individuals sit side by side and constantly signal to each other. This project asks whether the state of the stromal cells at that interface, mainly fibroblasts, can be read from gene expression data and used to estimate the risk of disease before it develops.

## Approach

The work is supported by an NICHD R00 award (2025 to 2028) that follows a K99 award on trophoblast-decidual signaling. The models are still in development, so this page describes the plan and the published groundwork rather than finished results.

- Fibroblast cell models built from gene expression data, designed to connect the transcriptional state of fibroblasts to disease states of the whole body.
- Semi-supervised learning on large single-cell RNA sequencing datasets, which lets a model learn from both labeled and unlabeled cells.
- A variational autoencoder, a generative model that compresses the expression profile of each cell into a handful of numbers while keeping the information needed to rebuild it.
- Graph neural networks applied to spatial transcriptomics from patient samples, treating each cell and its neighbors as a network. These models bring together expression profiles, genetic perturbations and cell behavior assays.
- Spatial transcriptomics of tissue from patients with placenta accreta, a condition in which the placenta grows too deeply into the uterine wall.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/maternal-fetal-prognostics-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Multi-panel figure with a schematic of trophoblast invasion near a uterine scar, tissue sections, stiffness measurements and an in vitro invasion model." caption="Placenta accreta spectrum, from patient tissue to a laboratory model. Panel A sketches invading trophoblasts near a uterine scar; later panels show patient tissue, scar stiffness and the culture system used to test invasion. Source: Du et al., Nature Communications (2024), CC BY." %}
</div>

## What we have found

The prognostic models build on published work about how the interface behaves. Invasive trophoblasts, the placental cells that burrow into the uterus, secrete two proteins, Emilin-1 and Gremlin-1, that block a growth-factor pathway and partly undo the matrix-producing, defensive state that decidual fibroblasts acquire during pregnancy {% cite Suhail2025 %}. Collaborators and I also found that invasive trophoblasts change decidual fibroblasts from cells that build matrix into cells that break it down. The main messenger is the secreted protein interleukin-11, and the fibroblasts have adapted to this signal in turn {% cite Afzal2025 %}.

Disease can arise when this exchange goes wrong. In a laboratory model of the uterine scar left by cesarean surgery, collaborators and I found that scar matrix activates a force-sensing channel called Piezo1 in decidual fibroblasts. The cells then release inflammatory messengers (IL-8 and G-CSF) that pull invading trophoblasts toward the scar, which is how placenta accreta begins {% cite Du2024 %}.

Together these studies suggest that the state of stromal cells is closely tied to how invasive the neighboring trophoblasts become. That link is the biological reason for trying to read stromal states in patients.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/maternal-fetal-prognostics-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Schematic of trophoblast invasion into the maternal decidua, with invasion assay images and quantification." caption="Invasive trophoblasts and the maternal decidua. Panel A is a schematic of trophoblast invasion into the decidua; the other panels show experiments on how trophoblasts reverse the defensive state of decidual fibroblasts. Source: Afzal et al., Proceedings of the National Academy of Sciences (2025), CC BY-NC-ND." %}
</div>

## Where it is going

The R00 award funds the development of a variational autoencoder model for prognosticating pre-eclampsia and fetal growth disorders, together with fibroblast models that relate transcriptional states to systemic disease. A central test for these models is whether the stromal states they learn carry real prognostic information in patient samples. The stromal biology behind this question is described in the project on [evolved stromal resistance to invasion]({{ '/projects/stromal-resistance/' | relative_url }}).
