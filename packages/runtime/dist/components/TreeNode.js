import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="locatorjs-tree-node"><button>&lt;<!>></button></div>`, 5),
      _tmpl$2 = /*#__PURE__*/_$template(`<div><div><div>:</div> <div></div></div></div>`, 8),
      _tmpl$3 = /*#__PURE__*/_$template(`<button>...</button>`, 2);

import { createSignal, For } from "solid-js";
import { goToSource } from "../functions/goTo";
export function TreeNode(props) {
  const [manuallyExpanded, setManuallyExpanded] = createSignal(false);

  function isExpanded() {
    return manuallyExpanded() || props.idsThatHaveExpandedSuccessor[props.node.uniqueId];
  }

  function renderChildren() {
    return _$createComponent(For, {
      get each() {
        return props.node.children;
      },

      children: child => _$createComponent(TreeNode, {
        node: child,

        get idsToShow() {
          return props.idsToShow;
        },

        get idsThatHaveExpandedSuccessor() {
          return props.idsThatHaveExpandedSuccessor;
        },

        get highlightedNode() {
          return props.highlightedNode;
        },

        get targets() {
          return props.targets;
        }

      })
    });
  }

  const isHighlighted = () => props.highlightedNode.getNode()?.uniqueId === props.node.uniqueId;

  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$5 = _el$3.nextSibling,
          _el$4 = _el$5.nextSibling;

    _el$.style.setProperty("padding-left", "1em");

    _el$.style.setProperty("font-size", "14px");

    _el$.style.setProperty("font-family", "monospace");

    _el$.style.setProperty("min-width", "300px");

    _el$.style.setProperty("pointer-events", "auto");

    _el$.style.setProperty("cursor", "pointer");

    _el$2.$$click = () => {
      if (props.node.source) {
        goToSource(props.node.source, props.targets);
      }
    };

    _el$2.style.setProperty("pointer-events", "auto");

    _el$2.addEventListener("mouseover", e => {
      e.stopPropagation();
      props.highlightedNode.setNode(props.node);
    });

    _$insert(_el$2, () => props.node.name, _el$5);

    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!isExpanded(), true);

      return () => _c$() ? _$memo((() => {
        const _c$3 = _$memo(() => !!(props.node.type === "component" && props.node.source?.fileName), true);

        return () => _c$3() ? (() => {
          const _el$6 = _tmpl$2.cloneNode(true),
                _el$7 = _el$6.firstChild,
                _el$8 = _el$7.firstChild,
                _el$9 = _el$8.firstChild,
                _el$10 = _el$8.nextSibling,
                _el$11 = _el$10.nextSibling;

          _el$6.style.setProperty("border", "1px solid #ccc");

          _el$6.style.setProperty("padding", "0.5em");

          _el$6.style.setProperty("min-width", "300px");

          _el$6.addEventListener("mouseover", e => {
            e.stopPropagation();
            props.highlightedNode.setNode(props.node);
          });

          _el$7.style.setProperty("font-size", "12px");

          _el$7.style.setProperty("display", "flex");

          _el$7.style.setProperty("justify-content", "space-between");

          _el$7.style.setProperty("font-family", "Helvitica, sans-serif");

          _el$8.style.setProperty("font-weight", "bold");

          _$insert(_el$8, () => props.node.name, _el$9);

          _el$11.style.setProperty("color", "#888");

          _$insert(_el$11, () => props.node.definitionSourceFile);

          _$insert(_el$6, renderChildren, null);

          _$effect(() => _el$6.style.setProperty("background", isHighlighted() ? "rgba(0,0,0,0.1)" : "transparent"));

          return _el$6;
        })() : renderChildren();
      })()) : (() => {
        const _c$2 = _$memo(() => !!props.node.children.length, true);

        return () => _c$2() ? (() => {
          const _el$12 = _tmpl$3.cloneNode(true);

          _el$12.$$click = () => {
            setManuallyExpanded(true);
          };

          return _el$12;
        })() : null;
      })();
    })(), null);

    _$effect(_p$ => {
      const _v$ = isHighlighted() ? "rgba(0,0,0,0.1)" : "white",
            _v$2 = props.idsToShow[props.node.uniqueId] ? "red" : "",
            _v$3 = props.idsThatHaveExpandedSuccessor[props.node.uniqueId] ? "1px solid red" : "1px solid black",
            _v$4 = props.node.source ? "underline" : "";

      _v$ !== _p$._v$ && _el$2.style.setProperty("background-color", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$2.style.setProperty("color", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _el$2.style.setProperty("border", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && _el$2.style.setProperty("text-decoration", _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });

    return _el$;
  })();
}

_$delegateEvents(["click"]);