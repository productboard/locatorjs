import { Fiber, Target } from "@locator/shared";
export declare type Source = {
    fileName: string;
    lineNumber: number;
    columnNumber?: number;
    projectPath?: string;
};
declare type SimpleElement = {
    type: "element";
    name: string;
    uniqueId: string;
    fiber: Fiber;
    box: SimpleDOMRect | null;
    element: Element | Text;
    children: (SimpleElement | SimpleComponent)[];
    source: Source | null;
};
declare type SimpleComponent = {
    type: "component";
    uniqueId: string;
    name: string;
    fiber: Fiber;
    box: SimpleDOMRect | null;
    children: (SimpleElement | SimpleComponent)[];
    source: Source | null;
    definitionSourceFile: string | null;
};
export declare type SimpleNode = SimpleElement | SimpleComponent;
export declare type HighlightedNode = {
    getNode: () => SimpleNode | null;
    setNode: (node: SimpleNode | null) => void;
};
export declare type SimpleDOMRect = {
    height: number;
    width: number;
    x: number;
    y: number;
};
export declare type Targets = {
    [k: string]: Target | string;
};
export declare type LinkProps = {
    filePath: string;
    projectPath: string;
    line: number;
    column: number;
};
export {};