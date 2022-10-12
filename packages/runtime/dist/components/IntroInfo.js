import { template as _$template } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div><div class="text-xs mt-2 mb-1">Go to component code with <!> + <div class="inline-block px-1 py-0.5 border border-slate-200 rounded">click</div> </div></div>`, 7),
  _tmpl$2 = /*#__PURE__*/_$template(`<div class="inline-block px-1 py-0.5 border border-slate-200 rounded"></div>`, 2);
import { modifiersTitles } from "@locator/shared";
import { createEffect, createSignal, For } from "solid-js";
import { bannerClasses } from "../functions/bannerClasses";
import BannerHeader from "./BannerHeader";
import { getMouseModifiers } from "../functions/isCombinationModifiersPressed";
export function IntroInfo(props) {
  const [showIntro, setShowIntro] = createSignal(true);
  setTimeout(() => {
    setShowIntro(false);
  }, 5000);
  createEffect(() => {
    if (props.hide && showIntro()) {
      setShowIntro(false);
    }
  });
  const modifiers = () => getMouseModifiers();
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$6 = _el$3.nextSibling,
      _el$5 = _el$6.nextSibling;
    _$insert(_el$, _$createComponent(BannerHeader, {
      get openOptions() {
        return props.openOptions;
      },
      get adapter() {
        return props.adapter;
      }
    }), _el$2);
    _$insert(_el$2, _$createComponent(For, {
      get each() {
        return Object.keys(modifiers());
      },
      children: (key, i) => {
        return [_$memo(() => i() === 0 ? "" : " + "), (() => {
          const _el$7 = _tmpl$2.cloneNode(true);
          _$insert(_el$7, () => modifiersTitles[key]);
          return _el$7;
        })()];
      }
    }), _el$6);
    _$effect(_p$ => {
      const _v$ = bannerClasses(),
        _v$2 = showIntro() ? "12px" : "-90px";
      _v$ !== _p$._v$ && _$className(_el$, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$.style.setProperty("bottom", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$;
  })();
}