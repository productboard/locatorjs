import { HighlightedNode, SimpleNode } from "../types/types";
import { Targets } from "@locator/shared";
export declare type IdsMap = {
    [id: string]: true;
};
export declare function RootTreeNode(props: {
    node: SimpleNode;
    idsToShow: IdsMap;
    highlightedNode: HighlightedNode;
    targets: Targets;
}): import("solid-js").JSX.Element;
