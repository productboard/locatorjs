import { AdapterObject, FullElementInfo } from "../adapterApi";
import { TreeNodeComponent } from "../../types/TreeNode";
import { Source } from "../../types/types";
import { HtmlElementTreeNode } from "../HtmlElementTreeNode";
export declare function getElementInfo(target: HTMLElement): FullElementInfo | null;
export declare class JSXTreeNodeElement extends HtmlElementTreeNode {
    getSource(): Source | null;
    getComponent(): TreeNodeComponent | null;
}
declare const jsxAdapter: AdapterObject;
export default jsxAdapter;
