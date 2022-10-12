import { findFiberByHtmlElement } from "./findFiberByHtmlElement";
export function searchDevtoolsRenderersForClosestTarget(target) {
  let closest = target;
  while (closest) {
    if (findFiberByHtmlElement(closest, false)) {
      return closest;
    }
    closest = closest.parentElement;
  }
  return null;
}