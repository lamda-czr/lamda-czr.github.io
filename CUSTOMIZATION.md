# 自定义图片与内容

## 图片路径

请将你授权使用的图片放在以下位置：

- 站点背景：`public/images/sitebackground.jpg`，在页面中使用 `/images/sitebackground.jpg`。
- 头像：`public/images/avatar.jpg`，在页面中使用 `/images/avatar.jpg`。

这两个文件暂未提供时，站点会使用 CSS 渐变作为背景与头像占位，不会影响构建。请不要使用模板中的动漫、游戏或未获授权素材作为正式图片。

## 新文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx` 文件。最小 frontmatter 示例：

```yaml
title: 文章标题
published: 2026-07-22
description: 一句摘要
tags: [数学]
category: 学习资料
draft: false
image: /images/optional-cover.webp
```

主分类统一使用 `论文`、`想法` 或 `学习资料`。首页与导航链接会使用现有归档页按 `category` 筛选文章。
