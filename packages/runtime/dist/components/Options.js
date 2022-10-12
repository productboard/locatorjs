import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div><div class="flex justify-between items-center"></div><button class="text-slate-500 hover:text-slate-600 text-xs underline cursor-pointer">Reset all settings</button></div>`, 6);
import { detectSvelte } from "@locator/shared";
import { createSignal } from "solid-js";
import { bannerClasses } from "../functions/bannerClasses";
import { cleanLocalStorageProjectPath, getSavedProjectPath, setLocalStorageProjectPath } from "../functions/buildLink";
import { EditorLinkForm } from "./EditorLinkForm";
import { isExtension } from "../functions/isExtension";
import { cleanLocalStorageLinkTemplate, getLinkTypeOrTemplate, setLocalStorageLinkTemplate } from "../functions/linkTemplateUrl";
import LogoIcon from "./LogoIcon";
import { OptionsCloseButton } from "./OptionsCloseButton";
import { ProjectLinkForm } from "./ProjectLinkForm";
export function Options(props) {
  const [selectedTarget, setSelectedTarget] = createSignal(
  // eslint-disable-next-line solid/reactivity
  getLinkTypeOrTemplate(props.targets));
  function selectTarget(val) {
    setSelectedTarget(val);
    setLocalStorageLinkTemplate(val);
  }
  const [projectPath, setProjectPath] = createSignal(
  // eslint-disable-next-line solid/reactivity
  getSavedProjectPath() || "");
  function saveProjectPath(newPath) {
    setProjectPath(newPath);
    setLocalStorageProjectPath(newPath);
  }
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling;
    _$insert(_el$2, _$createComponent(LogoIcon, {}), null);
    _$insert(_el$2, _$createComponent(OptionsCloseButton, {
      onClick: () => props.onClose()
    }), null);
    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!detectSvelte(), true);
      return () => _c$() ? _$createComponent(ProjectLinkForm, {
        get value() {
          return projectPath();
        },
        onChange: function (newValue) {
          saveProjectPath(newValue);
        }
      }) : null;
    })(), _el$3);
    _$insert(_el$, (() => {
      const _c$2 = _$memo(() => !!!isExtension(), true);
      return () => _c$2() ? _$createComponent(EditorLinkForm, {
        get targets() {
          return props.targets;
        },
        get selectedTarget() {
          return selectedTarget();
        },
        selectTarget: selectTarget
      }) : null;
    })(), _el$3);
    _el$3.$$click = () => {
      cleanLocalStorageLinkTemplate();
      cleanLocalStorageProjectPath();
      props.onClose();
    };
    _$effect(() => _$className(_el$, bannerClasses() + " w-96"));
    return _el$;
  })();
}
_$delegateEvents(["click"]);