---
title: 论文阅读笔记示例
published: 2026-07-22
description: 用于验证论文分类、公式、代码和文章目录的草稿。
tags: [论文阅读, 概率]
category: 论文
draft: false
image: /images/1.jpg
---

## 一个阅读问题

设随机变量 $X$ 的均值为 $\mu$，方差为 $\sigma^2$。阅读论文时，先明确假设、估计量与所需结论之间的关系。

$$
\operatorname{Var}(\bar X_n) = \frac{\sigma^2}{n}.
$$

## 简单计算

```python
import numpy as np

samples = np.array([1.0, 2.0, 4.0])
print(samples.mean())
```

![示例图片路径](/images/1.jpg)
