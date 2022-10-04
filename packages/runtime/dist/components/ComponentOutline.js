import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { style as _$style } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div><div id="locatorjs-labels-section"><div id="locatorjs-labels-wrapper"></div></div></div>`, 6),
      _tmpl$2 = /*#__PURE__*/_$template(`<a class="cursor-pointer bg-red-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-red-600"></a>`, 2),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="cursor-pointer bg-red-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-red-600"></div>`, 2);

import { For } from "solid-js";
import { baseColor, HREF_TARGET, PADDING } from "../consts";
import { trackClickStats } from "../functions/trackClickStats";
import { goTo } from "../functions/goTo";
import { buildLink } from "../functions/buildLink";
export function ComponentOutline(props) {
  const isInside = () => props.bbox.height >= window.innerHeight - 40;

  const isBelow = () => props.bbox.y < 30 && !isInside();

  const left = () => Math.max(props.bbox.x - PADDING, 0);

  const top = () => Math.max(props.bbox.y - PADDING, 0);

  const cutFromTop = () => props.bbox.y < 0 ? -(props.bbox.y - PADDING) : 0;

  const cutFromLeft = () => props.bbox.x < 0 ? -(props.bbox.x - PADDING) : 0;

  const width = () => Math.min(props.bbox.width - cutFromLeft() + PADDING * 2, window.innerWidth);

  const height = () => Math.min(props.bbox.height - cutFromTop() + PADDING * 2, window.innerHeight);

  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild;

    _el$.style.setProperty("position", "fixed");

    _el$.style.setProperty("border", "2px solid " + baseColor);

    _$insert(_el$3, _$createComponent(For, {
      get each() {
        return props.labels;
      },

      children: label => {
        const link = label.link ? buildLink(label.link, props.targets) : null;
        const labelClass = "cursor-pointer bg-red-500 block text-white text-xs font-bold text-center px-1 py-0.5 rounded whitespace-nowrap pointer-events-auto hover:bg-red-600";
        const labelStyles = {
          "line-height": "18px"
        };
        return link ? (() => {
          const _el$4 = _tmpl$2.cloneNode(true);

          _el$4.$$click = () => {
            trackClickStats();
            goTo(link);
          };

          _$style(_el$4, labelStyles);

          _$setAttribute(_el$4, "href", link);

          _$setAttribute(_el$4, "target", HREF_TARGET);

          _$insert(_el$4, () => label.label);

          return _el$4;
        })() : (() => {
          const _el$5 = _tmpl$3.cloneNode(true);

          _$style(_el$5, labelStyles);

          _$insert(_el$5, () => label.label);

          return _el$5;
        })();
      }
    }));

    _$effect(_p$ => {
      const _v$ = left() + "px",
            _v$2 = top() + "px",
            _v$3 = width() + "px",
            _v$4 = height() + "px",
            _v$5 = left() === 0 || top() === 0 ? "0" : "8px",
            _v$6 = left() + width() === window.innerWidth || top() === 0 ? "0" : "8px",
            _v$7 = left() === 0 || top() + height() === window.innerHeight ? "0" : "8px",
            _v$8 = left() + width() === window.innerWidth || top() + height() === window.innerHeight ? "0" : "8px",
            _v$9 = {
        position: "absolute",
        display: "flex",
        "justify-content": "center",
        bottom: isBelow() ? isInside() ? "2px" : "-28px" : undefined,
        top: isBelow() ? undefined : isInside() ? "2px" : "-28px",
        left: "0px",
        width: "100%",
        "pointer-events": "auto",
        cursor: "pointer",
        ...(isBelow() ? {
          "border-bottom-left-radius": "100%",
          "border-bottom-right-radius": "100%"
        } : {
          "border-top-left-radius": "100%",
          "border-top-right-radius": "100%"
        })
      },
            _v$10 = isBelow() ? "10px 10px 2px 10px" : "2px 10px 10px 10px";

      _v$ !== _p$._v$ && _el$.style.setProperty("left", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$.style.setProperty("top", _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && _el$.style.setProperty("width", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && _el$.style.setProperty("height", _p$._v$4 = _v$4);
      _v$5 !== _p$._v$5 && _el$.style.setProperty("border-top-left-radius", _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && _el$.style.setProperty("border-top-right-radius", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && _el$.style.setProperty("border-bottom-left-radius", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && _el$.style.setProperty("border-bottom-right-radius", _p$._v$8 = _v$8);
      _p$._v$9 = _$style(_el$2, _v$9, _p$._v$9);
      _v$10 !== _p$._v$10 && _el$3.style.setProperty("padding", _p$._v$10 = _v$10);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });

    return _el$;
  })();
}

_$delegateEvents(["click"]);