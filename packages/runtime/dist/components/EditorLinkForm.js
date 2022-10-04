import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="mt-2"><label for="email" class="block text-sm  text-slate-700 font-bold">Editor link:</label><div class="flex flex-col gap-1 py-1"><div class="flex items-center"><input id="custom" type="radio" class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label for="custom" class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800">Custom</label></div></div></div>`, 11),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="flex items-center"><input type="radio" class="focus:ring-indigo-200 h-4 w-4 text-indigo-600 border-slate-300 hover:border-slate-400"><label class="ml-2 block text-sm font-medium text-slate-700 hover:text-slate-800"></label></div>`, 5),
      _tmpl$3 = /*#__PURE__*/_$template(`<div class="mt-1"><input type="text" name="text"></div>`, 3);

import { For } from "solid-js";
export function EditorLinkForm(props) {
  function selectCustom() {
    props.selectTarget((props.targets[props.selectedTarget] ? props.targets[props.selectedTarget]?.url : props.selectedTarget) || "");
  }

  const isCustom = () => !props.targets[props.selectedTarget];

  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling,
          _el$4 = _el$3.firstChild,
          _el$5 = _el$4.firstChild;

    _$insert(_el$3, _$createComponent(For, {
      get each() {
        return Object.entries(props.targets);
      },

      children: ([key, target]) => (() => {
        const _el$6 = _tmpl$2.cloneNode(true),
              _el$7 = _el$6.firstChild,
              _el$8 = _el$7.nextSibling;

        _el$7.$$click = () => {
          props.selectTarget(key);
        };

        _$setAttribute(_el$7, "id", key);

        _$setAttribute(_el$8, "for", key);

        _$insert(_el$8, () => target.label);

        _$effect(() => _el$7.checked = key === props.selectedTarget);

        return _el$6;
      })()
    }), _el$4);

    _el$5.$$click = () => {
      selectCustom();
    };

    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!isCustom(), true);

      return () => _c$() && (() => {
        const _el$9 = _tmpl$3.cloneNode(true),
              _el$10 = _el$9.firstChild;

        _el$10.$$input = e => {
          props.selectTarget(e.currentTarget.value);
        };

        _el$10.$$click = () => {
          if (props.targets[props.selectedTarget]) {
            selectCustom();
          }
        };

        _$effect(() => _$className(_el$10, "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md " + (props.targets[props.selectedTarget] ? "text-slate-400" : "text-slate-800")));

        _$effect(() => _el$10.value = props.targets[props.selectedTarget] ? props.targets[props.selectedTarget]?.url : props.selectedTarget);

        return _el$9;
      })();
    })(), null);

    _$effect(() => _el$5.checked = isCustom());

    return _el$;
  })();
}

_$delegateEvents(["click", "input"]);