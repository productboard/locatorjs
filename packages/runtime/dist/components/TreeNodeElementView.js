import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="font-bold cursor-pointer text-black hover:bg-gray-100 rounded"></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="font-bold"></div>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div><div><div><div class="font-mono flex gap-1">&lt;<!>></div><div class="whitespace-nowrap text-ellipsis overflow-hidden"></div></div><div></div></div></div>`, 13),
      _tmpl$4 = /*#__PURE__*/_$template(`<div class="flex gap-2 justify-between pb-1"><div class="whitespace-nowrap text-ellipsis overflow-hidden"></div></div>`, 4),
      _tmpl$5 = /*#__PURE__*/_$template(`<button class="inline-flex cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200 py-0 px-2 ml-2">...</button>`, 2);

import { For } from "solid-js";
import cropPath from "../functions/cropPath";
import { goToSource } from "../functions/goTo";
export function TreeNodeElementView(props) {
  function renderChildren() {
    return _$createComponent(For, {
      get each() {
        return props.node.getChildren();
      },

      children: child => _$createComponent(TreeNodeElementView, {
        node: child,

        get expandedIds() {
          return props.expandedIds;
        },

        get highlightedId() {
          return props.highlightedId;
        },

        get expandId() {
          return props.expandId;
        },

        get parentFilePath() {
          return props.node.getSource()?.fileName;
        },

        get targets() {
          return props.targets;
        },

        get setHighlightedBoundingBox() {
          return props.setHighlightedBoundingBox;
        },

        get parentComponent() {
          return props.node.getComponent();
        }

      })
    });
  }

  function isDifferentFilePath() {
    return props.node.getSource()?.fileName !== props.parentFilePath;
  }

  function isDifferentComponent() {
    return props.node.getComponent && JSON.stringify(props.node.getComponent()) !== JSON.stringify(props.parentComponent);
  } // Assume that library components does not have a source, so show them inlined


  const preferInlineComponent = () => !props.node.getSource();

  function showComponentWrapper() {
    return isDifferentComponent() && !preferInlineComponent();
  }

  function showBorder() {
    return showComponentWrapper();
  }

  function componentLink() {
    return props.node.getComponent()?.callLink ? (() => {
      const _el$ = _tmpl$.cloneNode(true);

      _el$.$$click = () => {
        const callLink = props.node.getComponent()?.callLink;

        if (callLink) {
          goToSource(callLink, props.targets);
        }
      };

      _$insert(_el$, () => props.node.getComponent()?.label);

      return _el$;
    })() : (() => {
      const _el$2 = _tmpl$2.cloneNode(true);

      _$insert(_el$2, () => props.node.getComponent()?.label);

      return _el$2;
    })();
  }

  return (() => {
    const _el$3 = _tmpl$3.cloneNode(true),
          _el$4 = _el$3.firstChild,
          _el$5 = _el$4.firstChild,
          _el$6 = _el$5.firstChild,
          _el$7 = _el$6.firstChild,
          _el$9 = _el$7.nextSibling,
          _el$8 = _el$9.nextSibling,
          _el$10 = _el$6.nextSibling,
          _el$11 = _el$5.nextSibling;

    _el$3.addEventListener("mouseleave", () => {
      props.setHighlightedBoundingBox(null);
    });

    _el$3.addEventListener("mouseenter", () => {
      props.setHighlightedBoundingBox(props.node);
    });

    _$insert(_el$3, (() => {
      const _c$ = _$memo(() => !!showComponentWrapper(), true);

      return () => _c$() && (() => {
        const _el$12 = _tmpl$4.cloneNode(true),
              _el$13 = _el$12.firstChild;

        _$insert(_el$12, componentLink, _el$13);

        _$insert(_el$13, () => cropPath(props.node.getComponent()?.definitionLink?.fileName || ""));

        return _el$12;
      })();
    })(), _el$4);

    _el$5.$$click = () => {
      const source = props.node.getSource();

      if (source) {
        goToSource(source, props.targets);
      }
    };

    _$insert(_el$6, () => props.node.name, _el$9);

    _$insert(_el$6, (() => {
      const _c$2 = _$memo(() => !!preferInlineComponent(), true);

      return () => _c$2() && componentLink();
    })(), null);

    _$insert(_el$10, (() => {
      const _c$3 = _$memo(() => !!(isDifferentFilePath() && !showComponentWrapper()), true);

      return () => _c$3() ? cropPath(props.node.getSource()?.fileName || "") : null;
    })());

    _$insert(_el$11, (() => {
      const _c$4 = _$memo(() => !!props.expandedIds.has(props.node.uniqueId), true);

      return () => _c$4() ? renderChildren() : (() => {
        const _c$5 = _$memo(() => !!props.node.getChildren().length, true);

        return () => _c$5() ? (() => {
          const _el$14 = _tmpl$5.cloneNode(true);

          _el$14.$$click = () => {
            props.expandId(props.node.uniqueId);
          };

          return _el$14;
        })() : "";
      })();
    })());

    _$effect(_p$ => {
      const _v$ = "text-xs pl-2 " + (props.highlightedId === props.node.uniqueId ? "bg-yellow-100 " : " ") + (showBorder() ? "border border-gray-300 py-2 pr-2 " : " ") + (props.node.getSource() ? "text-black " : "text-gray-500 "),
            _v$2 = showComponentWrapper() ? "pl-2" : "",
            _v$3 = "flex justify-between items-center gap-4 " + (props.node.getSource() ? " cursor-pointer hover:bg-sky-100" : "");

      _v$ !== _p$._v$ && _$className(_el$3, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$className(_el$4, _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _$className(_el$5, _p$._v$3 = _v$3);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });

    return _el$3;
  })();
}

_$delegateEvents(["click"]);