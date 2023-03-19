import cn from "classnames";
import React from "react";

import styles from "./Equals.module.scss";

interface EqualsProps {
  canDragging: boolean
  mode: string
}

export const Equals: React.FC<EqualsProps> = ({
  canDragging,
  mode,
}) => {

  return (
    <>
      <div
        className={cn(
          "flex flex-col m-[6px] h-[72px] w-[240px] bg-white rounded font-sans text-sm font-medium",
          styles.equalsWrapper,
          // isDragging ? 'opacity-50' : 'opacity-100'
        )}
      >
          <div
            className={cn(
              "h-[64px] w-[232px] flex items-center justify-center m-1",
              styles.button,
              mode === 'Runtime' ? 'hover:cursor-pointer' : ''
            )}
          >
            =
          </div>
      </div>
    </>
  );
};
