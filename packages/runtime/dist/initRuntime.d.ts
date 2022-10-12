import { Target } from "@locator/shared";
import { AdapterId } from "./consts";
export declare function initRuntime({ adapter, targets, projectPath, usageQueryString, }?: {
    adapter?: AdapterId;
    targets?: {
        [k: string]: Target | string;
    };
    projectPath?: string;
    usageQueryString?: string;
}): void;
