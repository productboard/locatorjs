import { mergeRects } from "./mergeRects";
export function getComposedBoundingBox(children) {
  let composedRect = null;
  children.forEach(child => {
    const box = child.box;
    if (!box) {
      return;
    }
    if (box.width <= 0 || box.height <= 0) {
      // ignore zero-sized rects
      return;
    }
    if (composedRect) {
      composedRect = mergeRects(composedRect, box);
    } else {
      composedRect = box;
    }
  });
  return composedRect;
}