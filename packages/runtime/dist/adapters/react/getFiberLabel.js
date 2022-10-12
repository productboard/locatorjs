import { getUsableName } from "../../functions/getUsableName";
export function getFiberLabel(fiber, source) {
  const name = getUsableName(fiber);
  const label = {
    label: name,
    link: source ? {
      filePath: source.fileName,
      projectPath: "",
      line: source.lineNumber,
      column: source.columnNumber || 0
    } : null
  };
  return label;
}