import React from "react";
import cn from "classnames";

import styles from "./Operators.module.scss";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../itemTypes/itemTypes";

interface OperatorsProps {
  isDragging: boolean,
  canDragging: boolean
}

export const Operators: React.FC<OperatorsProps> = ({
  isDragging,
}) => {


  return (
    <>
      <div
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
