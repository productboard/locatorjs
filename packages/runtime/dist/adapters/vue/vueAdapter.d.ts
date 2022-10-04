import { Source } from "@locator/shared";
import type { ComponentInternalInstance } from "vue";
import { TreeNodeComponent } from "../../types/TreeNode";
import { AdapterObject, FullElementInfo } from "../adapterApi";
import { HtmlElementTreeNode } from "../HtmlElementTreeNode";
declare type VueElement = HTMLElement & {
    __vueParentComponent?: ComponentInternalInstance;
};
export declare function getElementInfo(found: VueElement): FullElementInfo | null;
export declare class VueTreeNodeElement extends HtmlElementTreeNode {
    getSource(): Source | null;
    getComponent(): TreeNodeComponent | null;
}
declare const vueAdapter: AdapterObject;
export default vueAdapter;
