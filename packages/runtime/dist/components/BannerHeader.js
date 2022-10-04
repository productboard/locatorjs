import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="flex justify-between gap-2"></div>`, 2);

import LogoIcon from "./LogoIcon";
import { isExtension } from "../functions/isExtension";
import { OpenSettingsButton } from "./OpenSettingsButton";
import { detectSvelte } from "@locator/shared";
export default function BannerHeader(props) {
  const isProjectSettings = () => isExtension() && detectSvelte();

  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$insert(_el$, _$createComponent(LogoIcon, {}), null);

    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!((!isExtension() || isProjectSettings()) && props.openOptions), true);

      return () => _c$() ? _$createComponent(OpenSettingsButton, {
        onClick: () => {
          props.openOptions();
        },

        get title() {
          return isProjectSettings() ? "Project settings" : "Settings";
        }

      }) : null;
    })(), null);

    return _el$;
  })();
}