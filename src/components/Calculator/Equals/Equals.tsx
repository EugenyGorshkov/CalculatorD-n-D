import cn from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../itemTypes/itemTypes";

import styles from "./Equals.module.scss";

interface EqualsProps {
  isDragging: boolean,
  canDragging: boolean
}

export const Equals: React.FC<EqualsProps> = ({
  isDragging
}) => {

  return (
    <>
      <div
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
