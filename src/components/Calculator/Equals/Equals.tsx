import cn from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../itemTypes/itemTypes";

import styles from "./Equals.module.scss";

export const Equals: React.FC = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: ItemTypes.EQUALS,
    item: {
      type: ItemTypes.EQUALS
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <>
      <div
        ref={drag}
        className={cn(
          "flex flex-col m-[6px] h-[72px] w-[240px] bg-white rounded font-sans text-sm font-medium",
          styles.equalsWrapper,
          isDragging ? 'opacity-50' : 'opacity-100'
        )}
      >
          <div
            className={cn(
              "h-[64px] w-[232px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            =
          </div>
      </div>
    </>
  );
};
