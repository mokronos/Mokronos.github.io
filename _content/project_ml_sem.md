---
layout: base
title: Project - ML Seminar
---

# Project - ML Seminar

## Task

The Task is to classify audio samples of a drill according to their rpm.

## Plan

### 1. Clean Data
- saved data in pandas dataframe

### 2. Analysis
- manually looking over audio samples
- cut out part of audio during stable operation
- generating fft to analyse frequency spectrum
- inspecting cross-correlation between samples of different rpm

### 3. Extract Features
- get differentiating features of different rpm's and save in dataframe

### 4. Classify
- deploy simple regression, clustering and neural net and first check for bugs with simple dataset
- train and test with real dataset for different features

### 5. Evaluate
- compare different results between algorithms and features
