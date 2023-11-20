---
title: ML Glossary
layout: base
---

# Collection of terms and definitions for machine learning, statistics and data science.

## L1 Regularization
## One-hot Encoding

A way to represent categorical features as binary features.

<details>
<summary>Example</summary>

Let's say we have a dataset with a feature `weather` that can take on the values `sunny`, `cloudy` and `rainy`.
We can one-hot encode this feature as `[1, 0, 0]` for `sunny`, `[0, 1, 0]` for `cloudy` and `[0, 0, 1]` for `rainy`.
Thus we created three binary features from one categorical feature.
</details>

## Regularization

A technique to prevent overfitting by penalizing large weights in a model.

<details>
<summary>Maths</summary>

The most common form of regularization is L2 regularization, which adds a term to the loss function of the form

$L_2 = \lambda \sum_{i=1}^n w_i^2$, 

where $\lambda$ is the regularization parameter, which controls how much regularization there should be, and $w_i$ is the weight of the $i$th feature.
We sum over all the weights in the model.


</details>
<details>
<summary>Implementation</summary>

In pytorch, we can use the [`weight_decay`](https://pytorch.org/docs/stable/generated/torch.optim.Adam.html#:~:text=weight_decay%20(float%2C%20optional)%20%E2%80%93%20weight%20decay%20(L2%20penalty)%20(default%3A%200)) parameter in the optimizer to change the lambda of L2 regularization.

```python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)
```

In sklearn, most models, like the [SGDClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#:~:text=penalty%7B%E2%80%98l2%E2%80%99%2C%20%E2%80%98l1,0.0%2C%20inf\).), have a `penalty` parameter that can be set to `'l2'` to use L2 regularization.
And the `alpha` parameter that controls the lambda.
```python
clf = SGDClassifier(penalty='l2', alpha=0.01)
```
</details>

## Sparse Feature

A feature that is mostly zero across all observations and is therefore sparse in the sense that it has few non-zero values.
For example, a dataset of people and their favorite songs might have a feature for each song of 100000 songs.
However, most people have only listened to a few songs, so most of the feature values would be zero and some ones ([one-hot encoding](#one-hot-encoding)).

## Feature Cross

A new feature that is created by combining two or more existing features.
This is often used to create non-linearity in a linear model.
<details>
<summary>Example</summary>

So for example, we can have the feature $x$ and a non-linear relationship to $y$.
Instead of using a non-linear model, we can create a new feature $x^2$ and use a linear model.

</details>

<details>
<summary>Implementation</summary>

In pandas, one can just add another column to the dataframe with the new feature.
```python
df['x_squared'] = df['x'] ** 2
```

</details>


