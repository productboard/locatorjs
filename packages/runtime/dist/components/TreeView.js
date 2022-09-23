import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div><div><div class="m-2 bg-white rounded-md p-4 shadow-xl text-xs overflow-auto"></div></div></div>`, 6),
      _tmpl$2 = /*#__PURE__*/_$template(`<div></div>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="mb-2"><button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ">...</button></div>`, 4);

import { TreeNodeElementView } from "./TreeNodeElementView";
import { createEffect, createSignal } from "solid-js";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";
export function TreeView(props) {
  let contentRef;
  const [pos, setPos] = createSignal();
  createEffect(() => {
    if (contentRef) {
      const originalBox = props.treeState.originalNode.getBox();
      computePosition({
        getBoundingClientRect: () => {
          return {
            top: originalBox?.y || 0,
            left: originalBox?.x || 0,
            width: 16,
            height: 16
          };
        }
      }, contentRef, {
        placement: "left-start",
        middleware: [offset(10), shift(), flip()]
      }).then(({
        x,
        y
      }) => {
        setPos({
          x,
          y
        });
      });
    }
  });
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild;

    _el$.$$click = e => {
      if (e.currentTarget === e.target) {
        props.close();
      }
    };

    _el$.style.setProperty("position", "fixed");

    _el$.style.setProperty("top", "0");

    _el$.style.setProperty("left", "0");

    _el$.style.setProperty("width", "100vw");

    _el$.style.setProperty("height", "100vh");

    _el$.style.setProperty("pointer-events", "auto");

    _el$.style.setProperty("background-color", "rgba(0,0,0,0.1)");

    _el$.style.setProperty("z-index", "1001");

    const _ref$ = contentRef;
    typeof _ref$ === "function" ? _ref$(_el$2) : contentRef = _el$2;

    _el$2.style.setProperty("position", "absolute");

    _el$3.style.setProperty("max-height", "calc(100vh - 16px)");

    _$insert(_el$3, (() => {
      const _c$ = _$memo(() => !!props.treeState, true);

      return () => _c$() ? (() => {
        const _el$4 = _tmpl$2.cloneNode(true);

        _$insert(_el$4, (() => {
          const _c$2 = _$memo(() => !!props.treeState?.root.getParent(), true);

          return () => _c$2() ? (() => {
            const _el$5 = _tmpl$3.cloneNode(true),
                  _el$6 = _el$5.firstChild;

            _el$6.$$click = () => {
              const state = props.treeState;
              const parent = state.root.getParent();

              if (parent) {
                state.expandedIds.add(parent.uniqueId);
                props.setTreeState({ ...state,
                  root: parent
                });
              }
            };

            return _el$5;
          })() : null;
        })(), null);

        _$insert(_el$4, _$createComponent(TreeNodeElementView, {
          get node() {
            return props.treeState.root;
          },

          get expandedIds() {
            return props.treeState.expandedIds;
          },

          get highlightedId() {
            return props.treeState.highlightedId;
          },

          expandId: id => {
            const state = props.treeState;
            state.expandedIds.add(id);
            props.setTreeState(state);
          },

          get targets() {
            return props.targets;
          },

          get setHighlightedBoundingBox() {
            return props.setHighlightedNode;
          },

          parentComponent: null
        }), null);

        return _el$4;
      })() : "no tree";
    })());

    _$effect(_p$ => {
      const _v$ = `${pos()?.y || 0}px`,
            _v$2 = `${pos()?.x || 0}px`;
      _v$ !== _p$._v$ && _el$2.style.setProperty("top", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$2.style.setProperty("left", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });

    return _el$;
  })();
}

_$delegateEvents(["click"]);