export function evalTemplate(str, params) {
  let newStr = str;
  Object.entries(params).forEach(([key, value]) => {
    newStr = newStr.replace("${" + key + "}", value);
  });
  return newStr;
}