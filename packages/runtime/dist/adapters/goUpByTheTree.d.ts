import { TreeNode } from "../types/TreeNode";
export declare function goUpByTheTree(originalNode: TreeNode): {
    expandedIds: Set<string>;
    highlightedId: string;
    root: TreeNode;
    originalNode: TreeNode;
};
