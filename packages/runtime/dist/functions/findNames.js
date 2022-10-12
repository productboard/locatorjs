import { getUsableName } from "./getUsableName";
export function findNames(fiber) {
  // if (fiber._debugOwner?.elementType?.styledComponentId) {
  //   // This is special case for styled-components, we need to show one level up
  //   return {
  //     name: getUsableName(fiber._debugOwner),
  //     wrappingComponent: getUsableName(fiber._debugOwner?._debugOwner),
  //   };
  // } else {
  return {
    name: getUsableName(fiber),
    wrappingComponent: getUsableName(fiber._debugOwner)
  };
  // }
}