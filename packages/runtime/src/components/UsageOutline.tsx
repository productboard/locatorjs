import { Targets } from "@locator/shared";
import { createMemo } from "solid-js";
import { AdapterId } from "../consts";
import { getElementInfo } from "../adapters/getElementInfo";
import { ComponentOutline } from "./ComponentOutline";

export function UsageOutline(props: {
  currentElement: HTMLElement;
  showTreeFromElement: (element: HTMLElement) => void;
  adapterId?: AdapterId;
  targets: Targets;
}) {
  const elInfo = createMemo(() =>
    getElementInfo(props.currentElement, props.adapterId)
  );
  const box = () => props.currentElement.getBoundingClientRect();
  const element = elInfo()!
  return (
    <>
      {elInfo() ? (
        <>
          <ComponentOutline
            labels={element.componentsLabels}
            bbox={element.componentBox}
            element={element.htmlElement}
            showTreeFromElement={props.showTreeFromElement}
            targets={props.targets}
          />
        </>
      ) : (
        <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div
            class="flex items-center justify-center"
            style={{
              position: "absolute",
              left: box().x + "px",
              top: box().y + "px",
              width: box().width + "px",
              height: box().height + "px",
              "background-color": "rgba(222, 0, 0, 0.3)",
              border: "1px solid rgba(222, 0, 0, 0.5)",
              "border-radius": "2px",
              "font-size": "12px",
              "font-weight": "bold",
              "text-shadow":
                "-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff",
              "text-overflow": "ellipsis",
            }}
          >
            No source found
          </div>
        </div>
      )}
    </>
  );
}
