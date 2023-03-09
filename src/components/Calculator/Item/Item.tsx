import cn from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import { Element } from "../../../App";
import { Display } from "../Display";
import { Equals } from "../Equals";
import { Numbers } from "../Numbers";
import { Operators } from "../Operators";

interface ItemProps {
  value: string;
  mode: string;
  id: number;
  type: string;
  contain: Element[];
  canDraging: boolean;
  inConstructor: boolean;
}

export const Item: React.FC<ItemProps> = ({
  value,
  mode,
  id,
  type,
  contain,
  canDraging,
  inConstructor,
}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      // "type" is required. It is used by the "accept" specification of drop targets.
      type: type,
      item: {
        id: id,
        type: type,
        canDrag: type === "display" ? false : true,
        inConstructor: false,
      },
      // The collect function utilizes a "monitor" instance (see the Overview for what this is)
      // to pull important pieces of state from the DnD system.

      canDrag: () => (mode === "Runtime" ? false : true && canDraging),
      // &&
      // contain.length > 0 ? (contain.filter(el => {return el.type === type}) ? false : true) : true
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        canDrag: monitor.canDrag(),
      }),
    }),
    [contain, mode]
  );

  return (
    <div
      ref={drag}
      onDoubleClick={() => {
        console.log("dbl click");
      }}
      className={cn(inConstructor ? "opacity-50" : "opacity-100")}
    >
      {value === "display" ? (
        <Display isDragging={isDragging} canDragging={canDraging} />
      ) : (
        ""
      )}
      {value === "operators" ? (
        <Operators isDragging={isDragging} canDragging={canDraging} />
      ) : (
        ""
      )}
      {value === "numbers" ? (
        <Numbers isDragging={isDragging} canDragging={canDraging} />
      ) : (
        ""
      )}
      {value === "equals" ? (
        <Equals isDragging={isDragging} canDragging={canDraging} />
      ) : (
        ""
      )}
    </div>
  );
};
