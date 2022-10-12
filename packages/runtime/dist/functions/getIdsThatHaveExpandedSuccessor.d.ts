import { SimpleNode } from "../types/types";
import { IdsMap } from "../components/RootTreeNode";
export declare function getIdsThatHaveExpandedSuccessor(node: SimpleNode, idsToShow: IdsMap): {
    [id: string]: true;
};
