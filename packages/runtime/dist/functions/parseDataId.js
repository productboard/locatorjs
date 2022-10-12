export function parseDataId(dataId) {
  const [fileFullPath, id] = dataId.split("::");
  if (!fileFullPath || !id) {
    throw new Error("locatorjsId is malformed");
  }
  return [fileFullPath, id];
}