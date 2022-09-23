import { Targets } from "@locator/shared";
import { HighlightedNode, SimpleNode } from "../types/types";
export declare function TreeNode(props: {
    node: SimpleNode;
    idsToShow: {
        [id: string]: true;
    };
    idsThatHaveExpandedSuccessor: {
        [id: string]: true;
    };
    highlightedNode: HighlightedNode;
    targets: Targets;
}): import("solid-js").JSX.Element;
