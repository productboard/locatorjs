import { Target } from "@locator/shared";
import { AdapterId } from "./consts";
export declare function initRuntime({ adapter, targets, projectPath, mode, }?: {
    adapter?: AdapterId;
    targets?: {
        [k: string]: Target | string;
    };
    projectPath?: string;
    mode?: 'locate' | 'legacy-icons' | 'nucleus';
}): void;
