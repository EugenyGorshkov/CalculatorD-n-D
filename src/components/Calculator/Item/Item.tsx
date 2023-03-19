import cn from "classnames";
import React from "react";
import { Element } from "../../../App";
import { Display } from "../Display";
import { Equals } from "../Equals";
import { Numbers } from "../Numbers";
import { Operators } from "../Operators";

interface ItemProps {
  item: Element;
  mode: string;
}

export const Item: React.FC<ItemProps> = ({
  item:{ id, type, canDrag, inConstructor },
  mode,
}) => {
  
  

  return (
    <div
      className={cn(
        inConstructor ? "opacity-50" : "opacity-100",
        type === "display" &&
          !canDrag &&
          !inConstructor &&
          "hover:cursor-no-drop",
        mode === "Runtime" ? "hover:cursor-default" : ""
      )}
    >
      {type === "display" && (
        <Display canDragging={canDrag} />
      )}
      {type === "operators" && (
        <Operators canDragging={canDrag} mode={mode} />
      )}
      {type === "numbers" && (
        <Numbers canDragging={canDrag} mode={mode} />
      )}
      {type === "equals" && (
        <Equals canDragging={canDrag} mode={mode} />
      )}
    </div>
  );
};
