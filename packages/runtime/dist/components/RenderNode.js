import { template as _$template } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div></div>`, 2);

import { createSignal, For } from "solid-js";
export function RenderNode(props) {
  const [isHovered, setIsHovered] = createSignal(false);

  const offset = () => props.node.type === "component" ? 2 : 0;

  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!props.node.box, true);

      return () => _c$() ? (() => {
        const _el$2 = _tmpl$.cloneNode(true);

        _$addEventListener(_el$2, "mouseleave", props.node.type === "component" ? () => setIsHovered(false) : undefined);

        _$addEventListener(_el$2, "mouseenter", props.node.type === "component" ? () => setIsHovered(true) : undefined);

        _el$2.style.setProperty("position", "absolute");

        _$insert(_el$2, (() => {
          const _c$2 = _$memo(() => !!(props.node.type === "component" || props.parentIsHovered), true);

          return () => _c$2() ? (() => {
            const _el$3 = _tmpl$.cloneNode(true);

            _el$3.style.setProperty("padding", "1px 4px");

            _el$3.style.setProperty("position", "absolute");

            _el$3.style.setProperty("font-size", "12px");

            _el$3.style.setProperty("border-radius", "0px 0px 4px 4px");

            _el$3.style.setProperty("height", "20px");

            _el$3.style.setProperty("white-space", "nowrap");

            _$insert(_el$3, () => props.node.name);

            _$effect(_p$ => {
              const _v$8 = props.node.type === "component" ? "rgba(0,200,0,0.2)" : "",
                    _v$9 = props.node.type === "component" ? "rgba(50,150,50,1)" : "rgba(150,50,50,1)";

              _v$8 !== _p$._v$8 && _el$3.style.setProperty("background", _p$._v$8 = _v$8);
              _v$9 !== _p$._v$9 && _el$3.style.setProperty("color", _p$._v$9 = _v$9);
              return _p$;
            }, {
              _v$8: undefined,
              _v$9: undefined
            });

            return _el$3;
          })() : null;
        })());

        _$effect(_p$ => {
          const _v$ = props.node.box.x - offset() + "px",
                _v$2 = props.node.box.y - offset() + "px",
                _v$3 = props.node.box.width + offset() * 2 + "px",
                _v$4 = props.node.box.height + offset() * 2 + "px",
                _v$5 = isHovered() || props.parentIsHovered ? props.node.type === "component" ? "2px solid rgba(100,0,0,1)" : "1px solid rgba(200,0,0,0.6)" : props.node.type === "component" ? "1px solid rgba(200,0,0,1)" : "1px solid rgba(200,0,0,0.1)",
                _v$6 = props.node.type === "component" ? "5px" : "3px",
                _v$7 = props.node.type === "component" ? 1000 : 10;

          _v$ !== _p$._v$ && _el$2.style.setProperty("left", _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && _el$2.style.setProperty("top", _p$._v$2 = _v$2);
          _v$3 !== _p$._v$3 && _el$2.style.setProperty("width", _p$._v$3 = _v$3);
          _v$4 !== _p$._v$4 && _el$2.style.setProperty("height", _p$._v$4 = _v$4);
          _v$5 !== _p$._v$5 && _el$2.style.setProperty("border", _p$._v$5 = _v$5);
          _v$6 !== _p$._v$6 && _el$2.style.setProperty("border-radius", _p$._v$6 = _v$6);
          _v$7 !== _p$._v$7 && _el$2.style.setProperty("z-index", _p$._v$7 = _v$7);
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined
        });

        return _el$2;
      })() : null;
    })(), null);

    _$insert(_el$, _$createComponent(For, {
      get each() {
        return props.node.children;
      },

      children: childNode => {
        return _$createComponent(RenderNode, {
          node: childNode,

          get parentIsHovered() {
            return isHovered() || props.node.type === "element" && props.parentIsHovered;
          }

        });
      }
    }), null);

    return _el$;
  })();
}