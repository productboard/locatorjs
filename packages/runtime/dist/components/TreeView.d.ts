import { Targets } from "@locator/shared";
import { AdapterId } from "../consts";
import { TreeNode } from "../types/TreeNode";
import { TreeState } from "../adapters/adapterApi";
export declare function TreeView(props: {
    treeState: TreeState;
    setTreeState: (state: TreeState) => void;
    close: () => void;
    adapterId?: AdapterId | undefined;
    targets: Targets;
    setHighlightedNode: (node: null | TreeNode) => void;
}): import("solid-js").JSX.Element;
