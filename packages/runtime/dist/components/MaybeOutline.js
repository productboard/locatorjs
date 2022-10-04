import { template as _$template } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"><div class="flex items-center justify-center">No source found</div></div>`, 4);

import { createMemo } from "solid-js";
import { getElementInfo } from "../adapters/getElementInfo";
import { Outline } from "./Outline";
export function MaybeOutline(props) {
  const elInfo = createMemo(() => getElementInfo(props.currentElement, props.adapterId));

  const box = () => props.currentElement.getBoundingClientRect();

  return _$memo((() => {
    const _c$ = _$memo(() => !!elInfo(), true);

    return () => _c$() ? _$createComponent(Outline, {
      get element() {
        return elInfo();
      },

      get showTreeFromElement() {
        return props.showTreeFromElement;
      },

      get targets() {
        return props.targets;
      }

    }) : (() => {
      const _el$ = _tmpl$.cloneNode(true),
            _el$2 = _el$.firstChild;

      _el$2.style.setProperty("position", "absolute");

      _el$2.style.setProperty("background-color", "rgba(222, 0, 0, 0.3)");

      _el$2.style.setProperty("border", "1px solid rgba(222, 0, 0, 0.5)");

      _el$2.style.setProperty("border-radius", "2px");

      _el$2.style.setProperty("font-size", "12px");

      _el$2.style.setProperty("font-weight", "bold");

      _el$2.style.setProperty("text-shadow", "-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff");

      _el$2.style.setProperty("text-overflow", "ellipsis");

      _$effect(_p$ => {
        const _v$ = box().x + "px",
              _v$2 = box().y + "px",
              _v$3 = box().width + "px",
              _v$4 = box().height + "px";

        _v$ !== _p$._v$ && _el$2.style.setProperty("left", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && _el$2.style.setProperty("top", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && _el$2.style.setProperty("width", _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && _el$2.style.setProperty("height", _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined
      });

      return _el$;
    })();
  })());
}