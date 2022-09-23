import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div><div class="fixed flex text-xs font-bold items-center justify-center text-red-500 rounded border-red-500"><button class="absolute top-1 left-1 bg-red-500 text-white font-bold p-0.5 rounded hover:bg-red-800"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"></path></svg></button></div></div>`, 10);

import { ComponentOutline } from "./ComponentOutline";
export function Outline(props) {
  const box = () => props.element.thisElement.box;

  return [(() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.firstChild;

    _el$2.style.setProperty("background-color", "rgba(222, 0, 0, 0.3)");

    _el$2.style.setProperty("text-shadow", "-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff");

    _el$2.style.setProperty("text-overflow", "ellipsis");

    _el$3.$$click = () => {
      props.showTreeFromElement(props.element.htmlElement);
    };

    _el$3.style.setProperty("text-shadow", "none");

    _el$3.style.setProperty("pointer-events", "auto");

    _el$3.style.setProperty("cursor", "pointer");

    _el$4.style.setProperty("width", "16px");

    _el$4.style.setProperty("height", "16\xE9x");

    _$insert(_el$2, () => props.element.thisElement.label, null);

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
  })(), _$createComponent(ComponentOutline, {
    get labels() {
      return props.element.componentsLabels;
    },

    get bbox() {
      return props.element.componentBox;
    },

    get element() {
      return props.element.htmlElement;
    },

    get showTreeFromElement() {
      return props.showTreeFromElement;
    },

    get targets() {
      return props.targets;
    }

  })];
}

_$delegateEvents(["click"]);