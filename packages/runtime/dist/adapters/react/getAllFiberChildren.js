export function getAllFiberChildren(fiber) {
  const allChildren = [];
  let child = fiber.child;
  while (child) {
    allChildren.push(child);
    child = child.sibling;
  }
  return allChildren;
}