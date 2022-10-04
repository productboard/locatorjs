import { Targets } from "@locator/shared";
export declare function setLocalStorageLinkTemplate(linkOrTemplate: string): void;
export declare function cleanLocalStorageLinkTemplate(): void;
export declare function getLocalStorageLinkTemplate(): string | null;
export declare const getLinkTypeOrTemplate: (targets: Targets, localLinkTypeOrTemplate?: string) => string;
export declare function linkTemplateUrl(targets: Targets, localLinkTypeOrTemplate?: string): string;
