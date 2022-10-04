import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10"><div class="mt-2 font-bold">No source info found for this element!</div><div class="text-gray-700"><p class="font-medium text-gray-900 mt-2 mb-1">You need one of these:</p><ul class="pl-4 list-disc"><li>Working React in development mode, with </li><li>React, SolidJS or Preact with Locator Babel plugin</li></ul><p class="font-medium text-gray-900 mt-2 mb-1">Setup babel plugin:</p><div><ul class="pl-4 list-disc"><li></li><li></li><li></li></ul></div></div></div>`, 26);

import { LinkThatWorksWithOption } from "./LinkThatWorksWithOption";
import LogoIcon from "./LogoIcon";
export function NoLinkDialog() {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling,
          _el$4 = _el$3.firstChild,
          _el$5 = _el$4.nextSibling,
          _el$6 = _el$5.firstChild,
          _el$7 = _el$6.firstChild,
          _el$9 = _el$5.nextSibling,
          _el$10 = _el$9.nextSibling,
          _el$11 = _el$10.firstChild,
          _el$12 = _el$11.firstChild,
          _el$13 = _el$12.nextSibling,
          _el$14 = _el$13.nextSibling;

    _$insert(_el$, _$createComponent(LogoIcon, {}), _el$2);

    _$insert(_el$6, _$createComponent(LinkThatWorksWithOption, {
      href: "https://babeljs.io/docs/en/babel-preset-react",
      children: "preset-react plugins"
    }), null);

    _$insert(_el$12, _$createComponent(LinkThatWorksWithOption, {
      href: "https://www.locatorjs.com/install/react-data-id",
      children: "React"
    }));

    _$insert(_el$13, _$createComponent(LinkThatWorksWithOption, {
      href: "https://www.locatorjs.com/install/preact",
      children: "Preact"
    }));

    _$insert(_el$14, _$createComponent(LinkThatWorksWithOption, {
      href: "https://www.locatorjs.com/install/solidjs",
      children: "SolidJS"
    }));

    return _el$;
  })();
}