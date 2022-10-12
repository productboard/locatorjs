import { mergeRects } from "../../functions/mergeRects";
export function getVueComponentBoundingBox(vcomponent) {
  let composedRect = null;
  if (vcomponent?.subTree?.children && vcomponent?.subTree?.children instanceof Array) {
    vcomponent?.subTree?.children.forEach(child => {
      const box = getVNodeBoundingBox(child);
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
  }
  return composedRect;
}
export function getVNodeBoundingBox(vnode) {
  if (vnode.el instanceof HTMLElement) {
    return vnode.el.getBoundingClientRect();
  }
  if (vnode.component) {
    return getVueComponentBoundingBox(vnode.component);
  }
  return null;
}