# Templates

此目录应包含 Hydro UI 默认主题的完整模板副本（`packages/ui-default/templates`），以便插件运行时可以在本地覆盖 Hydro 的页面渲染。

当前仓库保留了 SolveAC 的页脚覆盖（`components/footer.html`）。如需同步其余模板，可从 Hydro 官方仓库下载对应版本并覆盖到此目录：

```bash
# 示例：在有网络的环境下获取官方模板
# git clone --depth=1 https://github.com/hydro-dev/Hydro.git /tmp/Hydro
# cp -r /tmp/Hydro/packages/ui-default/templates/* ./templates/
```

同步后请确认模板结构包含 `components/`、`partials/` 以及各页面 HTML 文件。
