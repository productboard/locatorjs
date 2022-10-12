import { Source } from "@locator/shared";
import { TreeNode, TreeNodeComponent } from "../types/TreeNode";
import { SimpleDOMRect } from "../types/types";
export declare class HtmlElementTreeNode implements TreeNode {
    type: "element";
    element: HTMLElement;
    name: string;
    uniqueId: string;
    constructor(element: HTMLElement);
    getBox(): SimpleDOMRect | null;
    getElement(): Element | Text;
    getChildren(): TreeNode[];
    getParent(): TreeNode | null;
    getSource(): Source | null;
    getComponent(): TreeNodeComponent | null;
}
