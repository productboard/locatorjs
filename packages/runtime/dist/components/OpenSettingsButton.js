import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<button class="bg-slate-100 py-1 px-2 rounded hover:bg-slate-300 active:bg-slate-200 cursor-pointer text-xs"></button>`, 2);

export function OpenSettingsButton(props) {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _el$.addEventListener("click", () => {
      props.onClick();
    });

    _$insert(_el$, () => props.title || "Settings");

    return _el$;
  })();
}