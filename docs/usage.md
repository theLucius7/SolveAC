# SolveAC 插件使用说明

本文档介绍如何在 HydroOJ 的默认 UI 中使用 SolveAC 前端插件，以移除默认页脚中的 `footer__links` 行。

## 环境准备
- Node.js 18 或以上
- npm 9 或以上

## 安装依赖
在项目根目录执行：

```bash
npm install
```

## 构建插件
构建会在 `dist/` 目录下生成可供 HydroOJ 加载的 `index.js`：

```bash
npm run build
```

## 部署到 HydroOJ
1. 将仓库根目录下的 `dist/index.js` 复制到 HydroOJ 默认 UI 的插件目录，例如：
   ```bash
   cp dist/index.js /path/to/Hydro/packages/ui-default/plugins/solveac-theme/index.js
   ```
2. 重启 HydroOJ 服务后，插件会自动加载，默认页脚中的 `.footer__links` 行将被移除。

## 开发调试
- 修改源代码后再次执行 `npm run build` 生成最新产物。
- 若需要调试，可以在浏览器控制台确认页脚 `.footer__links` 元素已被移除。
