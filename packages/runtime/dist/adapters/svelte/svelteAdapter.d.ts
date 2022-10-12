import { Source } from "@locator/shared";
import { TreeNodeComponent } from "../../types/TreeNode";
import { AdapterObject, FullElementInfo } from "../adapterApi";
import { HtmlElementTreeNode } from "../HtmlElementTreeNode";
declare type SvelteLoc = {
    char: number;
    column: number;
    file: string;
    line: number;
};
declare type SvelteElement = HTMLElement & {
    __svelte_meta?: {
        loc: SvelteLoc;
    };
};
export declare function getElementInfo(found: SvelteElement): FullElementInfo | null;
export declare class SvelteTreeNodeElement extends HtmlElementTreeNode {
    getSource(): Source | null;
    getComponent(): TreeNodeComponent | null;
}
declare const svelteAdapter: AdapterObject;
export default svelteAdapter;
