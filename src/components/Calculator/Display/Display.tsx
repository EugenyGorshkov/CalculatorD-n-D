import React, { useState } from "react";
import { useDrag } from "react-dnd";
import cn from "classnames";

import { ItemTypes } from "../../../itemTypes/itemTypes";

import styles from "./Display.module.scss";

interface DisplayProps {
  isDragging: boolean;
  canDragging: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  isDragging,
  canDragging,
}) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div
        className={cn(
          "flex m-[6px] h-[60px] w-[240px] bg-white rounded",
          styles.displayWrapper,
          isDragging ? "opacity-50" : "opacity-100"
        )}
      >
        <div className="flex items-center justify-end flex-1 m-1 bg-[#F3F4F6] rounded-md font-sans font-extrabold text-4xl pr-2">
          {value}
        </div>
      </div>
    </>
  );
};
