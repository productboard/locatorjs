import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { className as _$className } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/70 pointer-events-auto"></div>`, 2);

import { detectSvelte } from "@locator/shared";
import { batch, createEffect, createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";
import { isCombinationModifiersPressed } from "../functions/isCombinationModifiersPressed";
import { trackClickStats } from "../functions/trackClickStats";
import { MaybeOutline } from "./MaybeOutline";
import { UsageOutline } from "./UsageOutline";
import { SimpleNodeOutline } from "./SimpleNodeOutline";
import { IntroInfo } from "./IntroInfo";
import { Options } from "./Options";
import { bannerClasses } from "../functions/bannerClasses";
import BannerHeader from "./BannerHeader";
import { isExtension } from "../functions/isExtension";
import { getLocalStorageLinkTemplate } from "../functions/linkTemplateUrl";
import { NoLinkDialog } from "./NoLinkDialog";
import { ChooseEditorDialog } from "./ChooseEditorDialog";
import { isLocatorsOwnElement } from "../functions/isLocatorsOwnElement";
import { goToLinkProps } from "../functions/goTo";
import { getSavedProjectPath } from "../functions/buildLink";
import { getElementInfo } from "../adapters/getElementInfo";
import { getTree } from "../adapters/getTree";
import { TreeView } from "./TreeView";

function Runtime(props) {
  const [uiMode, setUiMode] = createSignal(["off"]);
  const [holdingModKey, setHoldingModKey] = createSignal(false);
  const [currentElement, setCurrentElement] = createSignal(null);
  const [icons, setIcons] = createSignal([]);
  const [dialog, setDialog] = createSignal(null);
  const [highlightedNode, setHighlightedNode] = createSignal(null);
  createEffect(() => {
    if (holdingModKey() && currentElement()) {
      document.body.classList.add("locatorjs-active-pointer");
    } else {
      document.body.classList.remove("locatorjs-active-pointer");
    }
  });

  function keyUpListener(e) {
    // if (e.code === "KeyO" && isCombinationModifiersPressed(e)) {
    //   if (uiMode()[0] === "tree") {
    //     setUiMode(["off"]);
    //   } else {
    //     setUiMode(["tree"]);
    //   }
    // }
    setHoldingModKey(isCombinationModifiersPressed(e));
  }

  function keyDownListener(e) {
    if (props.mode === 'legacy-icons') {
      setIcons(Array.from(document.querySelectorAll('.pb-icon')));
    }

    if (props.mode === 'nucleus') {
      setIcons(Array.from(document.querySelectorAll('[data-nc]')));
    }

    setHoldingModKey(isCombinationModifiersPressed(e));
  }

  function mouseOverListener(e) {
    setHoldingModKey(isCombinationModifiersPressed(e));
    const target = e.target;

    if (target && target instanceof HTMLElement) {
      // Ignore LocatorJS elements
      if (isLocatorsOwnElement(target)) {
        return;
      }

      batch(() => {
        setCurrentElement(target); // TODO: this is for highlighting elements in the tree, but need to move it to the adapter
        // if (solidMode()[0] === "tree" || solidMode()[0] === "treeFromElement") {
        //   const fiber = findFiberByHtmlElement(target, false);
        //   if (fiber) {
        //     const id = fiberToSimple(fiber, []);
        //     setHighlightedNode(id);
        //   }
        // }
      }); // const found =
      //   target.closest("[data-locatorjs-id]") ||
      //   searchDevtoolsRenderersForClosestTarget(target);
      // if (found && found instanceof HTMLElement) {
      //   setCurrentElement(found);
      // }
    }
  }

  function clickListener(e) {
    if (props.mode === 'legacy-icons') {
      setIcons(Array.from(document.querySelectorAll('.pb-icon')));
    }

    if (props.mode === 'nucleus') {
      setIcons(Array.from(document.querySelectorAll('[data-nc]')));
    }

    if (!isCombinationModifiersPressed(e)) {
      return;
    }

    const target = e.target;

    if (props.mode === 'legacy-icons') {
      return;
    }

    if (target && target instanceof HTMLElement) {
      if (isLocatorsOwnElement(target)) {
        return;
      }

      const elInfo = getElementInfo(target, props.adapterId);

      if (elInfo) {
        const linkProps = elInfo.thisElement.link;

        if (linkProps) {
          e.preventDefault();
          e.stopPropagation();
          trackClickStats();

          if (!isExtension() && !getLocalStorageLinkTemplate() || detectSvelte() && !linkProps.projectPath && !getSavedProjectPath()) {
            setDialog(["choose-editor", linkProps]);
          } else {
            // const link = buidLink(linkProps, props.targets);
            goToLinkProps(linkProps, props.targets);
          }
        } else {
          console.error("[LocatorJS]: Could not find link: Element info: ", elInfo);
          setDialog(["no-link"]);
        }
      } else {
        console.error("[LocatorJS]: Could not find element info. Element: ", target);
        setDialog(["no-link"]);
      }
    }
  }

  function scrollListener() {
    setCurrentElement(null);
  }

  document.addEventListener("mouseover", mouseOverListener, {
    capture: true
  });
  document.addEventListener("keydown", keyDownListener);
  document.addEventListener("keyup", keyUpListener);
  document.addEventListener("click", clickListener, {
    capture: true
  });
  document.addEventListener("scroll", scrollListener);
  onCleanup(() => {
    document.removeEventListener("keyup", keyUpListener);
    document.removeEventListener("keydown", keyDownListener);
    document.removeEventListener("mouseover", mouseOverListener, {
      capture: true
    });
    document.removeEventListener("click", clickListener, {
      capture: true
    });
    document.removeEventListener("scroll", scrollListener);
  });

  function showTreeFromElement(element) {
    const newState = getTree(element);

    if (newState) {
      setUiMode(["tree", newState]);
    }
  }

  function openOptions() {
    setUiMode(["options"]);
  }

  return [_$memo((() => {
    const _c$ = _$memo(() => uiMode()[0] === "tree", true);

    return () => _c$() ? _$createComponent(TreeView, {
      get treeState() {
        return uiMode()[1];
      },

      close: () => setUiMode(["off"]),
      setTreeState: newState => setUiMode(["tree", newState]),

      get adapterId() {
        return props.adapterId;
      },

      get targets() {
        return props.targets;
      },

      setHighlightedNode: setHighlightedNode
    }) : null;
  })()), _$memo((() => {
    const _c$2 = _$memo(() => !!(props.mode === 'locate' && holdingModKey() && currentElement()), true);

    return () => _c$2() ? _$createComponent(MaybeOutline, {
      get currentElement() {
        return currentElement();
      },

      showTreeFromElement: showTreeFromElement,

      get adapterId() {
        return props.adapterId;
      },

      get targets() {
        return props.targets;
      }

    }) : null;
  })()), _$memo((() => {
    const _c$3 = _$memo(() => !!((props.mode === 'legacy-icons' || props.mode === 'nucleus') && holdingModKey() && icons().length), true);

    return () => _c$3() && icons().map(el => _$createComponent(UsageOutline, {
      currentElement: el,
      showTreeFromElement: showTreeFromElement,

      get adapterId() {
        return props.adapterId;
      },

      get targets() {
        return props.targets;
      }

    }));
  })()), _$memo((() => {
    const _c$4 = _$memo(() => !!holdingModKey(), true);

    return () => _c$4() ? (() => {
      const _el$ = _tmpl$.cloneNode(true);

      _$insert(_el$, _$createComponent(BannerHeader, {
        openOptions: openOptions,

        get adapter() {
          return props.adapterId;
        }

      }));

      _$effect(() => _$className(_el$, bannerClasses()));

      return _el$;
    })() : null;
  })()), _$memo((() => {
    const _c$5 = _$memo(() => !!highlightedNode(), true);

    return () => _c$5() ? _$createComponent(SimpleNodeOutline, {
      get node() {
        return highlightedNode();
      }

    }) : null;
  })()), _$memo((() => {
    const _c$6 = _$memo(() => !!!isExtension(), true);

    return () => _c$6() ? _$createComponent(IntroInfo, {
      openOptions: openOptions,

      get hide() {
        return !!holdingModKey() || uiMode()[0] !== "off";
      },

      get adapter() {
        return props.adapterId;
      }

    }) : null;
  })()), _$memo((() => {
    const _c$7 = _$memo(() => uiMode()[0] === "options", true);

    return () => _c$7() ? _$createComponent(Options, {
      get adapterId() {
        return props.adapterId;
      },

      get targets() {
        return props.targets;
      },

      onClose: () => {
        setUiMode(["off"]);
      }
    }) : null;
  })()), _$memo((() => {
    const _c$8 = _$memo(() => !!dialog(), true);

    return () => _c$8() && (() => {
      const _el$2 = _tmpl$2.cloneNode(true);

      _el$2.$$click = e => {
        if (e.currentTarget === e.target) {
          setDialog(null);
        }
      };

      _$insert(_el$2, (() => {
        const _c$9 = _$memo(() => dialog()[0] === "no-link", true);

        return () => _c$9() && _$createComponent(NoLinkDialog, {});
      })(), null);

      _$insert(_el$2, (() => {
        const _c$10 = _$memo(() => dialog()[0] === "choose-editor", true);

        return () => _c$10() && _$createComponent(ChooseEditorDialog, {
          get targets() {
            return props.targets;
          },

          get originalLinkProps() {
            return dialog()[1];
          },

          onClose: () => {
            setDialog(null);
          }
        });
      })(), null);

      return _el$2;
    })();
  })())];
}

export function initRender(solidLayer, adapter, targets, mode) {
  render(() => _$createComponent(Runtime, {
    get targets() {
      return Object.fromEntries(Object.entries(targets).map(([key, t]) => {
        return [key, typeof t == "string" ? {
          url: t,
          label: key
        } : t];
      }));
    },

    adapterId: adapter,
    mode: mode
  }), solidLayer);
}

_$delegateEvents(["click"]);