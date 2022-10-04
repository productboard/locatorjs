import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10 max-w-2xl"><div class="mt-2"><label for="email" class="block text-sm  text-slate-700 font-bold">Link preview:</label><code class="flex first-letter:text-sm mt-1 bg-green-100 text-green-600 py-1 px-2 rounded whitespace-pre-wrap break-all"></code></div><div class="mt-4 flex gap-2 justify-between items-center"><div class="text-sm text-gray-600">Locator will remember your choice, you can change it later in settings.</div><div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to code</button></div></div></div>`, 16),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="text-red-500 text-sm">Project path is required</div>`, 2);

import { buildLink, getSavedProjectPath, setLocalStorageProjectPath } from "../functions/buildLink";
import { EditorLinkForm } from "./EditorLinkForm";
import { createSignal } from "solid-js";
import { detectSvelte } from "@locator/shared";
import { goToLinkProps } from "../functions/goTo";
import { setLocalStorageLinkTemplate } from "../functions/linkTemplateUrl";
import { ProjectLinkForm } from "./ProjectLinkForm";
export function ChooseEditorDialog(props) {
  const [selectedTarget, setSelectedTarget] = createSignal( // eslint-disable-next-line solid/reactivity
  Object.entries(props.targets)[0][0]);
  const [projectPath, setProjectPath] = createSignal( // eslint-disable-next-line solid/reactivity
  getSavedProjectPath() || props.originalLinkProps.projectPath);

  const correctedProjectPath = () => {
    let pp = projectPath();

    if (pp.at(-1) !== "/" && pp.at(-1) !== "\\") {
      pp += "/";
    }

    return pp;
  };

  const [needToFillLinkError, setNeedToFillLinkError] = createSignal(false);

  const currentLinkProps = () => ({ ...props.originalLinkProps,
    projectPath: correctedProjectPath()
  });

  const currentLink = () => buildLink(currentLinkProps(), props.targets, selectedTarget());

  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$2.nextSibling,
          _el$6 = _el$5.firstChild,
          _el$7 = _el$6.nextSibling,
          _el$8 = _el$7.firstChild;

    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!detectSvelte(), true);

      return () => _c$() ? _$createComponent(ProjectLinkForm, {
        get value() {
          return projectPath();
        },

        onChange: val => {
          setNeedToFillLinkError(false);
          setProjectPath(val);
        }
      }) : null;
    })(), _el$2);

    _$insert(_el$, (() => {
      const _c$2 = _$memo(() => !!needToFillLinkError(), true);

      return () => _c$2() ? _tmpl$2.cloneNode(true) : "";
    })(), _el$2);

    _$insert(_el$, _$createComponent(EditorLinkForm, {
      get targets() {
        return props.targets;
      },

      get selectedTarget() {
        return selectedTarget();
      },

      selectTarget: setSelectedTarget
    }), _el$2);

    _$insert(_el$4, currentLink);

    _el$8.$$click = () => {
      if (!projectPath() && detectSvelte()) {
        setNeedToFillLinkError(true);
        return;
      }

      setLocalStorageLinkTemplate(selectedTarget());
      const newProjectPath = correctedProjectPath();

      if (newProjectPath) {
        setLocalStorageProjectPath(newProjectPath);
      }

      goToLinkProps(currentLinkProps(), props.targets);
      props.onClose();
    };

    return _el$;
  })();
}

_$delegateEvents(["click"]);