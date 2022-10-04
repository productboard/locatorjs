import { Targets } from "@locator/shared";
import { TreeNodeComponent, TreeNodeElement } from "../types/TreeNode";
export declare function TreeNodeElementView(props: {
    node: TreeNodeElement;
    expandedIds: Set<string>;
    highlightedId: string;
    expandId: (id: string) => void;
    parentFilePath?: string;
    parentComponent: TreeNodeComponent | null;
    targets: Targets;
    setHighlightedBoundingBox: (node: TreeNodeElement | null) => void;
}): import("solid-js").JSX.Element;
