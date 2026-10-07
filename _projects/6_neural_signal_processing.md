---
layout: page
title: "Signal processing for neural interfaces"
description: "Wavelet compression, spike detection and neuron clustering for implantable recording devices, plus a hearing-aid noise suppression idea."
img: assets/img/projects/neural-signal-processing-card.jpg
importance: 6
category: methods
permalink: /projects/neural-signal-processing/
topics: [neural, methods]
related_publications: true
---

## Why it matters

Arrays of microelectrodes implanted in the brain can record from many neurons at once, but the data rate is high and the implant has strict limits on wireless bandwidth, power and chip area {% cite Suhail2004 %}. Signal processing that fits within those limits makes it practical to record and interpret what large groups of neurons are doing.

## Approach

This work dates from my master's studies at Michigan State University, with papers appearing from 2004 to 2007. It followed three strands.

- Wavelet-based compression of multichannel neural data, redesigned so that it can run on small, low-power hardware.
- Detecting spikes in recordings from many electrodes, using statistical tests that make no assumptions about the shape of the signal.
- Grouping neurons whose firing is correlated, without having to choose a time scale in advance.

A fourth, smaller strand applied wavelet ideas to speech for hearing aids and cochlear implants.

<div class="project-figure">
{% include figure.liquid loading="eager" path="assets/img/projects/neural-signal-processing-1.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Schematic with multielectrode recordings leading to three strands: wavelet compression, spike detection and grouping of neurons, with a side branch to speech denoising." caption="The strands of this work, drawn for this page (not a figure from the papers). Wavelet ideas from the compression work also fed a speech denoising idea for hearing devices." %}
</div>

## What we have found

A fixed-point version of the wavelet transform could do most of its computation with limited numerical precision and with little loss compared with ordinary floating-point arithmetic {% cite Suhail2004 %}. Related hardware designs showed that a computing core that runs the filter steps one after another can be better than a pipelined design, and that the signal stays intact with filter coefficients as short as 5 bits {% cite Oweiss2007b %}. Collaborators and I also described two hardware layouts that scale to any number of channels {% cite Thomson2005 %}, and compared two ways of building the wavelet transform for neural implants {% cite Thomson2006 %}.

For spike detection, a multiresolution Bayesian test that uses the layout of the electrode array detected spikes better than single-channel processing {% cite Suhail2005 %}.

To find groups of neurons with correlated firing, collaborators and I used nonparametric methods that represent spike trains at several time scales and then apply spectral clustering {% cite Jin2006 Oweiss2007 %}. In one study, simulated data from 120 neurons was used to compare the approach with k-means and expectation-maximization clustering {% cite Oweiss2007 %}.

For hearing devices, I proposed combining wavelet denoising with a low-rank decomposition of the signal to suppress competing voices. It improved speech recognition in listeners with normal hearing, although it had not yet been tested in patients {% cite Suhail2006 %}.

## Where it is going

My research later moved to biological networks, cell communication and tissue-level models, but the central problem is the same: getting reliable information out of noisy measurements under practical constraints. That thread continues in the [network and statistical methods]({{ '/projects/network-statistical-methods/' | relative_url }}) behind my current work.
