let globalIdCounter = 0;
const globalIdMap = new WeakMap();
export function makeFiberId(fiber) {
  if (fiber._debugID) {
    return fiber._debugID.toString();
  }
  const found = globalIdMap.get(fiber);
  if (found) {
    return found;
  } else {
    globalIdCounter++;
    const id = `fiber:${globalIdCounter}`;
    globalIdMap.set(fiber, id);
    return id;
  }
}