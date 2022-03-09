---
layout: base
title: Data Preparation and Feature Engineering
---

# Overview

Machine Learning generally tries to recognise patterns in data to then generate new data points.
To achieve that, one needs to generate and transform a dataset to feed into the algorithms.

Mainly just notes taken from [Google](https://developers.google.com/machine-learning/data-prep).

# Dataset Generation

# Dataset Transformation

## When to transform

### Prior to training

#### Pros

- computation only performed once

#### Cons

- Transformations need to be reproduced at prediction time. New data can be unpredictable.
- need to rerun dataset generation when changing transformations, which may lead to slow iterations. Not an issue with a small dataset.

### Within the model

#### Pros

- can always use the same data, as happen in the model.
- when changing transformations the same data is still used, which leads to fast iterations.

#### Cons

- transformations can increase latency, this is the case with transformations at prediction time as well.

## Visualisations

Always look at graphs or other visualisations of your dataset, before and after transformations to detect errors or irregularities.

## Normalisation

When having features with highly different ranges of numeric values it is recommended to perform normalisation.
Gradient decent can have issues and slowly converge otherwise.
