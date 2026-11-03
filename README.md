# 曾丽在迭代 · 3D 个人主页

[![License: MIT](https://img.shields.io/badge/License-MIT-E8643A.svg)](./LICENSE)
[![Deploy to GitHub Pages](https://github.com/lilizeng7-max/zengli-island/actions/workflows/deploy.yml/badge.svg)](https://github.com/lilizeng7-max/zengli-island/actions/workflows/deploy.yml)

低多边形 **Three.js** 交互式 3D 履历岛：海洋生态 × 潜艇下潜 × 樱花天气。点击主岛建筑浏览求学与职业地标，潜入第二秘境查看私域运营与 AI 相关代表作。

**线上地址：** [https://lilizeng7-max.github.io/zengli-island/](https://lilizeng7-max.github.io/zengli-island/)

## 本地开发

```bash
npm ci
npm run dev
```

构建静态站点（`dist/`，相对路径 `base: './'`）：

```bash
npm run build
npm run preview
```

可选环境变量（见 [`.env.example`](./.env.example)）：

- `SITE_GITHUB_REPO` / `VITE_SITE_GITHUB_REPO` — 站点源码仓库，默认 `https://github.com/lilizeng7-max/zengli-island`

## 部署

推送到 `main` 后，[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) 会构建并发布到 **GitHub Pages**。若首次部署，请在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 定制内容

个人档案在 [`src/data/defaultProfile.ts`](./src/data/defaultProfile.ts)，站点标题与 GitHub 链接亦在此配置。

## 致谢与协议

本项目基于 MIT 开源项目定制：

- [6LAILAI/resume](https://github.com/6LAILAI/resume)（源自 [jasonz-ai/3d-island](https://github.com/jasonz-ai/3d-island)）

遵循 [LICENSE](./LICENSE)（MIT）。上游版权归各自作者所有。

更完整的功能说明见上游 [`README.md`](https://github.com/6LAILAI/resume/blob/main/README.md)（英文版 [`README.en.md`](https://github.com/6LAILAI/resume/blob/main/README.en.md)）。
