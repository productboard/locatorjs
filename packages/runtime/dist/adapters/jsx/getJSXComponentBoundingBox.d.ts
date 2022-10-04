import { FileStorage } from "@locator/shared";
import { SimpleDOMRect } from "../../types/types";
export declare function getJSXComponentBoundingBox(found: HTMLElement, locatorData: {
    [filename: string]: FileStorage;
}, componentFolder: string, componentId: number): SimpleDOMRect;
