import { Targets } from "@locator/shared";
import { AdapterId } from "../consts";
export declare function MaybeOutline(props: {
    currentElement: HTMLElement;
    showTreeFromElement: (element: HTMLElement) => void;
    adapterId?: AdapterId;
    targets: Targets;
}): import("solid-js").JSX.Element;
