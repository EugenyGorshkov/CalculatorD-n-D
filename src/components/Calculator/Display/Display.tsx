import React, { useState } from "react";
import cn from "classnames";

import styles from "./Display.module.scss";

interface DisplayProps {
  canDragging: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  canDragging,
}) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div
        className={cn(
          "flex m-[6px] h-[60px] w-[240px] bg-white rounded",
          styles.displayWrapper,
          // isDragging ? "opacity-50" : "opacity-100"
        )}
      >
        <div className="flex items-center justify-end flex-1 m-1 bg-[#F3F4F6] rounded-md font-sans font-extrabold text-4xl pr-2">
          {value}
        </div>
      </div>
    </>
  );
};
