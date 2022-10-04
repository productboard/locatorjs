export function isStyledElement(fiber) {
  return !!fiber._debugOwner?.elementType?.styledComponentId;
}