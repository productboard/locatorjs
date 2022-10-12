import { buildLinkFromSource, buildLink } from "./buildLink";
import { HREF_TARGET } from "../consts";
export function goTo(link) {
  window.open(link, HREF_TARGET);
}
export function goToLinkProps(linkProps, targets) {
  const link = buildLink(linkProps, targets);
  window.open(link, HREF_TARGET);
}
export function goToSource(source, targets) {
  return goTo(buildLinkFromSource(source, targets));
}