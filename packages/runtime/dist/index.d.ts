import { Target } from "@locator/shared";
import { AdapterId } from "./consts";
export * from "./adapters/jsx/runtimeStore";
export declare const MAX_ZINDEX = 2147483647;
export declare function setup({ adapter, targets, projectPath, }?: {
    adapter?: AdapterId;
    targets?: {
        [k: string]: Target | string;
    };
    projectPath?: string;
}): void;
export default setup;
