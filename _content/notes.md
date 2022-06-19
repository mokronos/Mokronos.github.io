---
title: Notes
layout: base
---


# Modeling nonlinear differential equations with LSTMs

## Create data

- model nonlinear differential equations with a state space model
- use input data and the state space model to produce output data
- create datasets for LSTM training

## Defining different LSTM models

- maybe normal RNN for testing
- basic LSTM
- peephole LSTM

## Training LSTMs and compare different models

- keep hyperparameters for different models similar to just compare type of LSTM
- train models on datasets
- compare datasets and different models

## Priorities

- Literature review
    - different LSTM variants
    - neural networks to represent nonlinear sequential models
- set up whole pipeline first with one dataset, one LSTM model and test for bugs
- write down theory parts
- add more datasets and models depending on time left

## Questions

- what are the inputs to the RNN/LSTM (example pendulum with or without bump):
    - all parameters of the differential equation? in practice those aren't all known as we wouldn't know the model, only some of the inputs and some of the outputs
    - just the time step? needs some starting value
    - just knowable variable (eg. Input voltage of system)? might be best
    - outputs of previous time step? Shouldn't be necessary as that's what the RNN is for.

- how to get differential equation from papers
- hidden layer (memory) needs to remember "initial conditions"

black, grey, white box

\\fauad.fau.de\LRT\Arbeit\ne19ryji
