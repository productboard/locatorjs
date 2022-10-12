export function goUpByTheTree(originalNode) {
  let root = originalNode;
  const expandedIds = new Set();
  let current = root;
  const highlightedId = root.uniqueId;
  expandedIds.add(current.uniqueId);
  let limit = 2;
  while (current && limit > 0) {
    limit--;
    current = current.getParent();
    if (current) {
      expandedIds.add(current.uniqueId);
      root = current;
    }
  }
  return {
    expandedIds,
    highlightedId,
    root,
    originalNode
  };
}