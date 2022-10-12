import { Fiber } from "@locator/shared";
import { SimpleDOMRect } from "../../types/types";
import { ElementInfo } from "../adapterApi";
export declare function getAllParentsElementsAndRootComponent(fiber: Fiber): {
    component: Fiber;
    componentBox: SimpleDOMRect;
    parentElements: ElementInfo[];
};
