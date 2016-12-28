---
layout: service
title: Conditional Simulations
---

The idea of conditional simulations is to assess the joint uncertainty between multiple realizations allowing a more complete representation of block uncertainty and the uncertainty between multiple block locations. Conditional simulations provide tools that allow transferring uncertainty of the resource estimates into risk in downstream studies. These studies can be mine design, mine planning, or operational optimization studies.

Simulated models provide the same information that an estimated block model does, but, in addition, it also provides a joint model of uncertainty.  A “complete” resource model should not only include an estimated grade, or even an estimated distribution, but also a more detailed assessment of uncertainty and the consequences of that uncertainty.
 
Estimation provides a value that is, on average, as close as possible to the actual (unknown) value, based on some definition of goodness or quality.  It is unbiased, has minimal quadratic error, uses linear combinations of the available data, and has an unavoidable smoothing effect.  Simulations reproduce the original variability observed in the data and allow an assessment of uncertainty.  This implies that the extreme values of the original distribution are preserved. The uncertainty model also provide the tools for risk analysis when applying to it a transfer function
 
Estimation honors local data, is locally more accurate, and has a smoothing effect appropriate for visualizing trends, but is inappropriate for simulating extreme values provides no assessment of local uncertainty.  Simulation also honors the local data, but additionally reproduces the histogram, honors spatial variability, and is able to provide an assessment of uncertainty.
 
Geostatistical conditional simulations have become popular as tools that provide models of uncertainty at different stages of a mining project.  They have been used as grade control tools in daily operations, to analyze risk related to resource classifications, to assess the uncertainty of minable reserves at the project’s feasibility stage, and to assess mineralization potential in certain settings. Other applications include assessment of recoverable reserves and drill hole spacing optimization studies.

The simulation model should correctly represent the proportion of high and low values, the mean, the variance, and other univariate statistical characteristics of the data, as represented by the histogram.  It should also correctly reproduce the spatial continuity of the variable, including the connectivity of low and high contaminant zones, anisotropies, relative nugget effect, and other characteristics of the variogram model. 
 
Conditional simulations are built on fine grids, fine enough to provide a sufficient number of nodes within the block size of interest.  The vertical resolution of the grid should be a function of the support data, for example the size of the mining bench, if modeling a variable mined by open pit. Larger grid sizes may be used sometimes because of the amount of computer time and hard disk space involved.