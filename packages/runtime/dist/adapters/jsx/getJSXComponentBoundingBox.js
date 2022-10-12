import { parseDataId } from "../../functions/parseDataId";
import { mergeRects } from "../../functions/mergeRects";
import { getExpressionData } from "./getExpressionData";
export function getJSXComponentBoundingBox(found, locatorData, componentFolder, componentId) {
  let composedBox = found.getBoundingClientRect();
  // Currently it works well only for components with one root element, but for components with multiple root elements we would need to track instance ids.
  function goParent(current) {
    const parent = current.parentNode;
    if (!parent) {
      return;
    }
    if (parent instanceof HTMLElement) {
      if (parent.dataset.locatorjsId) {
        const [fileFullPath] = parseDataId(parent.dataset.locatorjsId);
        const fileData = locatorData[fileFullPath];
        if (fileData) {
          const expData = getExpressionData(parent, fileData);
          if (expData) {
            if (expData.wrappingComponentId === componentId && componentFolder === fileFullPath) {
              composedBox = mergeRects(composedBox, parent.getBoundingClientRect());
              goParent(parent);
            }
            expData.wrappingComponentId;
          }
        }
      } else {
        // If there is no locatorjs-id, we should go to the parent, because it can be some library element
        goParent(parent);
      }
    }
  }
  goParent(found);
  return composedBox;
}