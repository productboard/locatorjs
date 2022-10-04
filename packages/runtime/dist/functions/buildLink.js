/* eslint-disable solid/reactivity */
import { linkTemplateUrl } from "./linkTemplateUrl";
import { evalTemplate } from "./evalTemplate";
let internalProjectPath = null;
export function setInternalProjectPath(projectPath) {
  internalProjectPath = projectPath;
}
export function setLocalStorageProjectPath(projectPath) {
  localStorage.setItem("LOCATOR_PROJECT_PATH", projectPath);
}
export function cleanLocalStorageProjectPath() {
  localStorage.removeItem("LOCATOR_PROJECT_PATH");
}
export function getSavedProjectPath() {
  return localStorage.getItem("LOCATOR_PROJECT_PATH") || internalProjectPath;
}
export function buildLink(linkProps, targets, localLinkTypeOrTemplate) {
  const params = {
    filePath: linkProps.filePath,
    projectPath: getSavedProjectPath() || linkProps.projectPath,
    line: String(linkProps.line),
    column: String(linkProps.column)
  };
  return evalTemplate(linkTemplateUrl(targets, localLinkTypeOrTemplate), params);
}
export function buildLinkFromSource(source, targets) {
  return buildLink({
    filePath: source.fileName,
    projectPath: source.projectPath || "",
    line: source.lineNumber,
    column: source.columnNumber || 0
  }, targets);
}