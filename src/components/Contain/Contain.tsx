import React from "react";
import { useDrop } from "react-dnd";
import cn from "classnames";

import { ItemTypes } from "../../itemTypes/itemTypes";
import { Item } from "../Calculator/Item/Item";
import { Element } from "../../App";

import styles from "./Contain.module.scss";

interface ContainProps {
  markAsContain: (item: any) => void;
  contain: Element[];
  mode: string;
}

export const Contain: React.FC<ContainProps> = ({
  markAsContain,
  contain,
  mode,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: [
      ItemTypes.DISPLAY,
      ItemTypes.EQUALS,
      ItemTypes.NUMBERS,
      ItemTypes.OPERATORS,
    ],
    drop: (item, monitor) => {
      markAsContain(item)
    },
    canDrop: () =>  mode === 'Runtime' ? false : true,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }),[mode]); 
   
  return (
    <>
      <div
        ref={drop}
        className={cn(
          "m-[6px] flex flex-col w-[243px] h-[448px] border-[2px] border-dashed border-[#C4C4C4] rounded-md",
          isOver && canDrop ? "bg-[#F0F9FF]" : "",
        )}
      >
        {contain.map((el) => (
          <Item
            id={el.id}
            mode={mode}
            type={el.type}
            value={el.type}
            key={el.id}
            contain={contain}
            canDraging={el.canDrag} 
            inConstructor={el.inConstructor}/>
            
        ))}
      </div>
    </>
  );
};
