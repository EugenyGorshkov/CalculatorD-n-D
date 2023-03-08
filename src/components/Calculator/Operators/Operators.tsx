import React from "react";
import cn from "classnames";

import styles from "./Operators.module.scss";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../itemTypes/itemTypes";

export const Operators: React.FC = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: ItemTypes.OPERATORS,
    item: {
      type: ItemTypes.OPERATORS
    },
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        ref={drag}
        className={cn(
          "flex m-[6px] h-[56px] w-[240px] bg-white rounded font-sans font-medium text-sm",
          styles.operatorWrapper,
          isDragging ? "opacity-50" : "opacity-100"
        )}
      >
        <div
          className={cn(
            "h-[48px] w-[52px] m-1 flex items-center justify-center",
            styles.button
          )}
        >
          /
        </div>
        <div
          className={cn(
            "h-[48px] w-[52px] m-1 flex items-center justify-center",
            styles.button
          )}
        >
          х
        </div>
        <div
          className={cn(
            "h-[48px] w-[52px] m-1 flex items-center justify-center",
            styles.button
          )}
        >
          -
        </div>
        <div
          className={cn(
            "h-[48px] w-[52px] m-1 flex items-center justify-center",
            styles.button
          )}
        >
          +
        </div>
      </div>
    </>
  );
};
