import path from 'node:path';

const templateDir = path.resolve(__dirname, '..', 'templates');
const frontendDir = path.resolve(__dirname, '..', 'frontend');
const localesDir = path.resolve(__dirname, '..', 'locales');
const publicDir = path.resolve(__dirname, '..', 'public');
import { fileURLToPath } from 'node:url';

const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'templates');

/**
 * Register the template override directory so Hydro can pick up
 * SolveAC-specific UI tweaks before falling back to the defaults.
 */
export const apply = (ctx: any): void => {
  // Hydro exposes different ways to extend the template lookup list depending
  // on the runtime version. Try the common variants defensively so the plugin
  // works across releases.
  if (Array.isArray(ctx?.template?.paths)) {
    if (!ctx.template.paths.includes(templateDir)) ctx.template.paths.unshift(templateDir);
    return;
  }

  if (Array.isArray(ctx?.templates)) {
    if (!ctx.templates.includes(templateDir)) ctx.templates.unshift(templateDir);
    return;
  }

  if (typeof ctx?.addTemplateDir === 'function') {
    ctx.addTemplateDir(templateDir);
    return;
  }

  if (typeof ctx?.extendTemplate === 'function') {
    ctx.extendTemplate(templateDir);
  }
};

export const templates = templateDir;
export const frontend = frontendDir;
export const locales = localesDir;
export const publicDirPath = publicDir;
export default apply;
