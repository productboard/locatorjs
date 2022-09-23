import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<a target="_blank" class="underline"></a>`, 2);

export function LinkThatWorksWithOption(props) {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _el$.$$click = e => {
      e.preventDefault();
      window.open(props.href, "_blank");
    };

    _$insert(_el$, () => props.children);

    _$effect(() => _$setAttribute(_el$, "href", props.href));

    return _el$;
  })();
}

_$delegateEvents(["click"]);