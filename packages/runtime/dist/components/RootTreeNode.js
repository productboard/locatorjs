import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<button>...</button>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<button>&lt;&lt;&lt;</button>`, 2);

import { TreeNode } from "./TreeNode";
import { createMemo, createSignal } from "solid-js";
import { getIdsThatHaveExpandedSuccessor } from "../functions/getIdsThatHaveExpandedSuccessor";
export function RootTreeNode(props) {
  const idsThatHaveExpandedSuccessor = createMemo(() => {
    return getIdsThatHaveExpandedSuccessor(props.node, props.idsToShow);
  });
  const expandedNode = createMemo(() => {
    return findExpandedNode(props.node, props.idsToShow, idsThatHaveExpandedSuccessor());
  });
  const [expanded, setExpanded] = createSignal(false);
  return _$memo((() => {
    const _c$ = _$memo(() => !!(expandedNode() && expandedNode()?.uniqueId !== props.node.uniqueId && !expanded()), true);

    return () => _c$() ? [(() => {
      const _el$ = _tmpl$.cloneNode(true);

      _el$.$$click = () => {
        setExpanded(true);
      };

      return _el$;
    })(), _$createComponent(TreeNode, {
      get node() {
        return expandedNode();
      },

      get idsToShow() {
        return props.idsToShow;
      },

      get idsThatHaveExpandedSuccessor() {
        return idsThatHaveExpandedSuccessor();
      },

      get highlightedNode() {
        return props.highlightedNode;
      },

      get targets() {
        return props.targets;
      }

    })] : [(() => {
      const _el$2 = _tmpl$2.cloneNode(true);

      _el$2.$$click = () => {
        setExpanded(false);
      };

      return _el$2;
    })(), _$createComponent(TreeNode, {
      get node() {
        return props.node;
      },

      get idsToShow() {
        return props.idsToShow;
      },

      get idsThatHaveExpandedSuccessor() {
        return idsThatHaveExpandedSuccessor();
      },

      get highlightedNode() {
        return props.highlightedNode;
      },

      get targets() {
        return props.targets;
      }

    })];
  })());
} // walk the tree to find the closest node that is expanded

function findExpandedNode(node, idsToShow, idsThatHaveExpandedSuccessor) {
  if (idsToShow[node.uniqueId]) {
    return node;
  }

  let numOfChildrenWithExpandedSuccessor = 0;

  for (const child of node.children) {
    if (idsThatHaveExpandedSuccessor[child.uniqueId]) {
      numOfChildrenWithExpandedSuccessor++;
    }
  }

  if (numOfChildrenWithExpandedSuccessor >= 2) {
    return node;
  }

  for (const child of node.children) {
    const expandedNode = findExpandedNode(child, idsToShow, idsThatHaveExpandedSuccessor);

    if (expandedNode) {
      return expandedNode;
    }
  }

  return undefined;
}

_$delegateEvents(["click"]);