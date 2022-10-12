import { findDebugSource } from "./findDebugSource";
export function findFiberByHtmlElement(target, shouldHaveDebugSource) {
  const renderers = window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers;
  // console.log("RENDERERS: ", renderers);
  const renderersValues = renderers?.values();
  if (renderersValues) {
    for (const renderer of Array.from(renderersValues)) {
      if (renderer.findFiberByHostInstance) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const found = renderer.findFiberByHostInstance(target);
        if (found) {
          if (shouldHaveDebugSource) {
            return findDebugSource(found)?.fiber || null;
          } else {
            return found;
          }
        }
      }
    }
  }
  return null;
}