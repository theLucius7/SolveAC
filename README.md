# SolveAC

HydroOJ 的前端主题插件，主要用于 bool.solve.ac。

仓库布局与 Hydro UI 默认包保持一致：

- `frontend/`：在页面上注入 SolveAC 的自定义样式。
- `locales/`：为后续本地化扩展预留的目录（提供了空的 `en.yaml` 以避免 Hydro 在加载插件时提示 Locale 失败）。
- `locales/`：为后续本地化扩展预留的目录。
- `public/`：静态资源目录。
- `templates/`：从 Hydro 默认 UI 拷贝的模板及 SolveAC 的页脚覆盖。

插件通过覆盖 HydroUI 的模板移除默认页脚中的 `footer__links` 行，并在保持布局的同时优化 SolveAC 的品牌信息。

## 文档

- [使用说明](docs/usage.md)：介绍在已部署的 HydroOJ 上注册、更新或关闭插件的完整流程。
