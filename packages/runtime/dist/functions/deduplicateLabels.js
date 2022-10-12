import nonNullable from "./nonNullable";
export function deduplicateLabels(labels) {
  const labelsIds = {};
  return labels.map(label => {
    const id = JSON.stringify(label);
    if (labelsIds[id]) {
      return null;
    }
    labelsIds[id] = true;
    return label;
  }).filter(nonNullable);
}