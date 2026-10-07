---
layout: page
title: "Network and statistical methods"
description: "Graph, epidemic and machine learning methods that cope with noisy, incomplete and biased biological and clinical data."
img: assets/img/projects/network-statistical-methods-card.jpg
importance: 5
category: methods
permalink: /projects/network-statistical-methods/
topics: [methods, ml]
related_publications: true
---

## Why it matters

Biological and clinical data are noisy, incomplete and shaped by how they were collected. Methods that take network structure and sampling bias into account can turn such data into more reliable predictions than methods that ignore them.

## Approach

- Graph methods that use the known interactions between genes or proteins to predict missing ones.
- Epidemic models in which testing bias is part of the model, so its effect on estimates can be measured and corrected.
- Machine learning classifiers for clinical decisions where experts sometimes disagree.
- Information-theoretic limits on how accurately a quantity such as cell secretion over time can be reconstructed from sparse measurements, which came out of my PhD work.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/network-statistical-methods-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Scatter plot and time series of case fatality rate, and diagrams of a basic and an augmented epidemic compartment model with testing bias." caption="Modeling testing bias in an epidemic. Panels A and B relate observed fatality rates to testing, panel C is a standard susceptible-infected-recovered-dead model, and panels D to F extend it with high- and low-symptom groups and a testing capacity that favors the more symptomatic. Source: Suhail et al., BMC Medical Research Methodology (2021), CC BY." %}
</div>

## What we have found

In yeast, a graph diffusion kernel built from the network of synthetic lethal gene pairs can infer two things at once: which genes belong to the same pathway or complex ("friends") and which new genetic interactions ("enemies") are likely to exist. It reached about 50% precision at 20% to 50% recall in genome-wide predictions, supported by experimental validation, and improved on earlier methods {% cite Qi2008 %}.

In the early phase of the COVID-19 pandemic, I developed an augmented epidemic model that includes sampling bias explicitly. Simulations showed that preferentially testing people with more severe disease can badly skew estimates of how many people are infected and how many die, that serological testing partly reduces the distortion, and that relatively small randomized samples can give statistically significant estimates of death rates {% cite Suhail2021b %}.

In orthodontics, I trained machine learning models on data from 287 patients whose tooth extraction needs had been judged independently by five orthodontists. Ensemble methods suited the task, and their predictions approached the level at which the orthodontists agreed with one another {% cite Suhail2020 %}. A review I contributed to surveyed deep learning for locating landmarks on dental radiographs and the barriers to clinical use, such as variable patient presentations, scarce labeled data and heavy computing needs {% cite Mehta2021 %}.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/network-statistical-methods-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Flow diagram of the procedure from collecting patient data to machine learning diagnosis of orthodontic extractions." caption="The orthodontic study design, from data collection to the machine learning diagnosis. Source: Suhail et al., Bioengineering (2020), CC BY." %}
</div>

## Where it is going

The same concerns, noisy and biased data and the structure of networks, shape my current prognostic models for maternal-fetal disease, which use graph neural networks on spatial transcriptomics data. See [AI for maternal-fetal disease prognosis]({{ '/projects/maternal-fetal-prognostics/' | relative_url }}).
