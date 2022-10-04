export function setLocalStorageLinkTemplate(linkOrTemplate) {
  localStorage.setItem("LOCATOR_CUSTOM_LINK", linkOrTemplate);
}
export function cleanLocalStorageLinkTemplate() {
  localStorage.removeItem("LOCATOR_CUSTOM_LINK");
}
export function getLocalStorageLinkTemplate() {
  return localStorage.getItem("LOCATOR_CUSTOM_LINK");
}
export const getLinkTypeOrTemplate = (targets, localLinkTypeOrTemplate) => localLinkTypeOrTemplate || document.documentElement.dataset.locatorTarget || getLocalStorageLinkTemplate() || Object.entries(targets)[0][0];
export function linkTemplateUrl(targets, localLinkTypeOrTemplate) {
  const templateOrType = getLinkTypeOrTemplate(targets, localLinkTypeOrTemplate);
  const target = targets[templateOrType];

  if (target) {
    return target.url;
  }

  return templateOrType;
}