import { initRuntime } from "./initRuntime";
import { isExtension } from "./functions/isExtension";
export * from "./adapters/jsx/runtimeStore"; // Init in case it is used from extension

if (typeof window !== "undefined" && isExtension()) {
  setTimeout(() => initRuntime({}), 0);
}

export const MAX_ZINDEX = 2147483647;
export function setup({
  adapter,
  targets,
  projectPath,
  mode
} = {}) {
  setTimeout(() => initRuntime({
    adapter,
    targets,
    projectPath,
    mode
  }), 0);
}
export default setup;