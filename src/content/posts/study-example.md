---
title: 学习资料示例
published: 2026-07-22
description: 用于验证学习资料分类、中文标签和代码块的草稿。
tags: [学习笔记, 机器学习]
category: 学习资料
draft: false
image: /images/3.jpg
---

## 梯度下降

对可微目标函数，迭代更新可写为：

$$
\theta_{t+1} = \theta_t - \eta \nabla f(\theta_t).
$$

```python
def step(theta, grad, learning_rate=0.01):
    return theta - learning_rate * grad
```

![示例图片路径](/images/3.jpg)
