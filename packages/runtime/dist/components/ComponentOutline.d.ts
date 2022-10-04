import { LabelData } from "../types/LabelData";
import { SimpleDOMRect } from "../types/types";
import { Targets } from "@locator/shared";
export declare function ComponentOutline(props: {
    bbox: SimpleDOMRect;
    labels: LabelData[];
    element: HTMLElement;
    showTreeFromElement: (element: HTMLElement) => void;
    targets: Targets;
}): import("solid-js").JSX.Element;
