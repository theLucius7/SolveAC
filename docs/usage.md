# SolveAC 插件使用说明

本文档介绍如何在已部署好的 HydroOJ 上启用、更新或关闭 SolveAC 前端插件。插件功能是移除默认 UI 页脚中的 `footer__links` 行，让页脚更简洁。

## 前置条件
- 已经安装并运行中的 HydroOJ（含默认前端）。
- 具备 HydroOJ CLI（`hydrooj`）的使用权限，用于管理插件。
- Node.js 18+ 与 npm 9+（仅当你需要从源码构建或更新插件时）。

## 获取插件代码
将本仓库克隆到 HydroOJ 服务器上，例如：

```bash
cd /path/to
git clone https://example.com/your/SolveAC.git
cd SolveAC
```

## （可选）从源码构建
如果需要自行构建最新版产物（或修改源代码），在仓库根目录执行：

```bash
npm install
npm run build
```

构建后会在 `dist/` 生成 `index.js`，HydroOJ 会优先加载该文件。

## 启用插件
1. 使用 HydroOJ CLI 注册插件（推荐使用仓库绝对路径）：
   ```bash
   hydrooj addon add /absolute/path/to/SolveAC
   ```
2. 重启 HydroOJ，使插件生效。
3. 可通过 `hydrooj addon list` 查看插件是否已经注册。

> 如果未来发布到 npm，也可以先全局安装再注册：
> ```bash
> yarn global add solveac-theme
> hydrooj addon add solveac-theme
> ```

## 更新插件
- 若从 git 拉取最新代码：
  ```bash
  cd /absolute/path/to/SolveAC
  git pull
  npm install
  npm run build
  ```
- 重启 HydroOJ 以加载新版本。

> 如果使用全局安装方式，可参考 HydroOJ 文档：
> ```bash
> yarn global upgrade-interactive --latest
> ```

## 关闭 / 卸载插件
1. 通过 HydroOJ CLI 取消注册：
   ```bash
   hydrooj addon remove /absolute/path/to/SolveAC
   ```
   如果是全局安装，则传入包名：
   ```bash
   hydrooj addon remove solveac-theme
   ```
2. 重启 HydroOJ，即可恢复默认页脚。
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
