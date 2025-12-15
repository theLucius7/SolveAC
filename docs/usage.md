# SolveAC 插件使用说明

本文档介绍如何在已部署好的 HydroOJ 上启用、更新或关闭 SolveAC 前端插件。插件通过覆盖 HydroUI 模板移除默认页脚中的 `footer__links` 行，使页脚更简洁，并保留 SolveAC 的品牌信息。

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

## 工作方式
- 插件会在加载时向 HydroUI 注入 `templates/` 目录，使运行时优先使用 SolveAC 提供的模板。
- `templates/components/footer.html` 覆盖了默认页脚模板，从根源上移除了 `.footer__links` 行，无需额外的前端脚本清理。
