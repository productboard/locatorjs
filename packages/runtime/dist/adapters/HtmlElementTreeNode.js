/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getReferenceId } from "../functions/getReferenceId";
import nonNullable from "../functions/nonNullable";
export class HtmlElementTreeNode {
  type = "element";
  constructor(element) {
    this.element = element;
    this.name = element.nodeName.toLowerCase();
    this.uniqueId = String(getReferenceId(element));
  }
  getBox() {
    return this.element.getBoundingClientRect();
  }
  getElement() {
    return this.element;
  }
  getChildren() {
    const children = Array.from(this.element.children);
    return children.map(child => {
      if (child instanceof HTMLElement) {
        // @ts-ignore
        return new this.constructor(child);
      } else {
        return null;
      }
    }).filter(nonNullable);
  }
  getParent() {
    if (this.element.parentElement) {
      // @ts-ignore
      return new this.constructor(this.element.parentElement);
    } else {
      return null;
    }
  }
  getSource() {
    throw new Error("Method not implemented.");
  }
  getComponent() {
    throw new Error("Method not implemented.");
  }
}