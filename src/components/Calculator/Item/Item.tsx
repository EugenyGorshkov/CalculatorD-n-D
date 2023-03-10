import cn from "classnames";
import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { Element } from "../../../App";
import { Display } from "../Display";
import { Equals } from "../Equals";
import { Numbers } from "../Numbers";
import { Operators } from "../Operators";

interface ItemProps {
  index: number,
  value: string,
  mode: string,
  id: number,
  type: string,
  contain: Element[],
  canDraging: boolean,
  inConstructor: boolean,
  deleteFromContainDblClick: (item: Element) => void,
}

export const Item: React.FC<ItemProps> = ({
  index,
  value,
  mode,
  id,
  type,
  contain,
  canDraging,
  inConstructor,
  deleteFromContainDblClick
}) => {
  // const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: type,
      item: {
        index: index,
        id: id,
        type: type,
        canDrag: type === "display" ? false : true,
        inConstructor: false,
      },
      canDrag: () => (mode === "Runtime" ? false : true && canDraging),
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
        deleteFromContainDblClick({
          id: id,
          type: type,
          canDrag: type === "display" ? false : true,
          inConstructor: false,
        })
      }}
      className={cn(
        inConstructor ? "opacity-50" : "opacity-100",
        type === "display"
          ? !canDraging
            ? inConstructor
              ? ""
              : "hover:cursor-no-drop"
            : ""
          : "",
        mode === "Runtime" ? "hover:cursor-default" : ""
      )}
    >
      {value === "display" ? (
        <Display isDragging={isDragging} canDragging={canDraging} />
      ) : (
        ""
      )}
      {value === "operators" ? (
        <Operators isDragging={isDragging} canDragging={canDraging} mode={mode}/>
      ) : (
        ""
      )}
      {value === "numbers" ? (
        <Numbers isDragging={isDragging} canDragging={canDraging} mode={mode}/>
      ) : (
        ""
      )}
      {value === "equals" ? (
        <Equals isDragging={isDragging} canDragging={canDraging} mode={mode}/>
      ) : (
        ""
      )}
    </div>
  );
};
