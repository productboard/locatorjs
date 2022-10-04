import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div class="py-2"><label for="project-path" class="block text-sm text-slate-700 pb-0.5 font-bold">Absolute project path on your computer:</label><input id="project-path" placeholder="e.g. /Users/MyName/MyProject" type="text" name="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"><div class="text-xs text-slate-700 pt-2">You can try <code class="bg-slate-100 rounded py-1 px-2">pwd</code> or <code class="bg-slate-100 rounded py-1 px-2">echo %cd%</code> command to get the current path</div></div>`, 11);

const exampleProjectPath = `/Users/MyName/MyProject`; //`C://my-projects/my-project`;

export function ProjectLinkForm(props) {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    _el$3.$$input = e => {
      props.onChange(e.currentTarget.value);
    };

    _$effect(() => _el$3.value = props.value);

    return _el$;
  })();
}

_$delegateEvents(["input"]);