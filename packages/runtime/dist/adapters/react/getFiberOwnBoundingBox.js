export function getFiberOwnBoundingBox(fiber) {
  if (fiber.stateNode && fiber.stateNode.getBoundingClientRect) {
    return fiber.stateNode.getBoundingClientRect();
  }
  return null;
}