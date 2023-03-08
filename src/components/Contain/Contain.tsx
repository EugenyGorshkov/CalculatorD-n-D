import React from "react";
import { useDrop } from "react-dnd";
import cn from 'classnames'

import { ItemTypes } from "../../itemTypes/itemTypes";

import styles from "./Contain.module.scss";

interface ContainProps {

}

export const Contain: React.FC<ContainProps> = ({

}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: [ItemTypes.DISPLAY, ItemTypes.EQUALS, ItemTypes.NUMBERS, ItemTypes.OPERATORS],
        // Props to collect
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        })
      }))

  return (
    <>
      <div ref={drop} className={cn("m-[6px] flex flex-col w-[243px] h-[448px] border-[2px] border-dashed border-[#C4C4C4] rounded-md", isOver ? 'bg-[#F0F9FF]' : '')}>{}</div>
    </>
  );
};
