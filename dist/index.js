"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicDirPath = exports.locales = exports.frontend = exports.templates = exports.apply = void 0;
const node_path_1 = __importDefault(require("node:path"));
const templateDir = node_path_1.default.resolve(__dirname, '..', 'templates');
const frontendDir = node_path_1.default.resolve(__dirname, '..', 'frontend');
const publicDir = node_path_1.default.resolve(__dirname, '..', 'public');
const localesDir = node_path_1.default.resolve(__dirname, '..', 'locales');
const publicDir = node_path_1.default.resolve(__dirname, '..', 'public');
exports.templates = exports.apply = void 0;
const node_path_1 = __importDefault(require("node:path"));
const templateDir = node_path_1.default.resolve(__dirname, '..', 'templates');
/**
 * Register the template override directory so Hydro can pick up
 * SolveAC-specific UI tweaks before falling back to the defaults.
 */
const apply = (ctx) => {
    var _a;
    // Hydro exposes different ways to extend the template lookup list depending
    // on the runtime version. Try the common variants defensively so the plugin
    // works across releases.
    if (Array.isArray((_a = ctx === null || ctx === void 0 ? void 0 : ctx.template) === null || _a === void 0 ? void 0 : _a.paths)) {
        if (!ctx.template.paths.includes(templateDir))
            ctx.template.paths.unshift(templateDir);
        return;
    }
    if (Array.isArray(ctx === null || ctx === void 0 ? void 0 : ctx.templates)) {
        if (!ctx.templates.includes(templateDir))
            ctx.templates.unshift(templateDir);
        return;
    }
    if (typeof (ctx === null || ctx === void 0 ? void 0 : ctx.addTemplateDir) === 'function') {
        ctx.addTemplateDir(templateDir);
        return;
    }
    if (typeof (ctx === null || ctx === void 0 ? void 0 : ctx.extendTemplate) === 'function') {
        ctx.extendTemplate(templateDir);
    }
};
exports.apply = apply;
exports.templates = templateDir;
exports.frontend = frontendDir;
// Locales directory is exposed for Hydro's loader. Keep at least one valid
// locale file in place (e.g., locales/en.yaml) to avoid runtime load errors.
exports.locales = node_path_1.default.resolve(__dirname, '..', 'locales');
exports.locales = localesDir;
exports.publicDirPath = publicDir;
exports.default = exports.apply;
