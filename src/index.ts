/**
 * Remove the original footer links row from the HydroOJ default UI.
 * This plugin waits for the document to be ready and then removes any
 * element that matches the `.footer__links` selector.
 */
const removeFooterLinks = () => {
  document.querySelectorAll<HTMLElement>('.footer__links').forEach((node) => {
    node.remove();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeFooterLinks);
} else {
  removeFooterLinks();
}

export {}; // Keep this file as a module.
