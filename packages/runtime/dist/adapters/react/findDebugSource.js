export function findDebugSource(fiber) {
  let current = fiber;
  while (current) {
    if (current._debugSource) {
      return {
        fiber: current,
        source: current._debugSource
      };
    }
    current = current._debugOwner || null;
  }
  return null;
}