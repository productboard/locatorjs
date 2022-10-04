import { AdapterObject, FullElementInfo } from "../adapterApi";
import { Source } from "@locator/shared";
import { TreeNodeComponent } from "../../types/TreeNode";
import { HtmlElementTreeNode } from "../HtmlElementTreeNode";
export declare function getElementInfo(found: HTMLElement): FullElementInfo | null;
export declare class ReactTreeNodeElement extends HtmlElementTreeNode {
    getSource(): Source | null;
    getComponent(): TreeNodeComponent | null;
}
declare const reactAdapter: AdapterObject;
export default reactAdapter;
