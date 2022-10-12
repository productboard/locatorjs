import { parseDataId } from "../../functions/parseDataId";
export function getExpressionData(target, fileData) {
  if (target.dataset.locatorjsId) {
    const [, id] = parseDataId(target.dataset.locatorjsId);
    const expData = fileData.expressions[Number(id)];
    if (expData) {
      return expData;
    }
  }
  return null;
}