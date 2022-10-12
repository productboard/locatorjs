import { LinkProps, Source } from "../types/types";
import { Targets } from "@locator/shared";
export declare function setInternalProjectPath(projectPath: string): void;
export declare function setLocalStorageProjectPath(projectPath: string): void;
export declare function cleanLocalStorageProjectPath(): void;
export declare function getSavedProjectPath(): string | null;
export declare function buildLink(linkProps: LinkProps, targets: Targets, localLinkTypeOrTemplate?: string): string;
export declare function buildLinkFromSource(source: Source, targets: Targets): string;
