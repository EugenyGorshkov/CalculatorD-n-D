import React from "react";
import { useDrag, useDrop } from "react-dnd";
import cn from "classnames";

import { ItemTypes } from "../../itemTypes/itemTypes";
import { Item } from "../Calculator/Item/Item";
import { Element } from "../../App";

import img01 from '../../assets/img01.png'

import styles from "./Contain.module.scss";

interface ContainProps {
  markAsContain: (item: any) => void;
  contain: Element[];
  mode: string;
  deleteFromContainDblClick: (item: Element) => void
}

export const Contain: React.FC<ContainProps> = ({
  markAsContain,
  contain,
  mode,
  deleteFromContainDblClick,
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
    hover(item: any, monitor) {
      console.log(item)
      // if (!ref.current) {
      //   return
      // }
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
          isOver && canDrop ? "bg-[#F0F9FF] border-[2px] border-dashed border-[#C4C4C4] rounded-md" : "",
          contain.length > 0 ? 'm-0 w-auto border-none ml-[2px]' : 'justify-center items-center',
        )}
      > 
        { contain.length > 0 ? (
            contain.map((el, index) => (
              <Item
                index={index}
                id={el.id}
                mode={mode}
                type={el.type}
                value={el.type}
                key={el.id}
                contain={contain}
                canDraging={el.canDrag} 
                inConstructor={el.inConstructor}
                deleteFromContainDblClick={deleteFromContainDblClick}
                />
                
            ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img src={img01} alt="" className="mb-[12px]"/>
            <h3 className="font-sans font-medium text-sm text-[#5D5FEF] mb-[4px]">Перетащите сюда</h3>
            <p className="font-sans font-normal text-xs text-[#6B7280]">любой элемент<br/> из левой панели</p>
          </div>
        )
        }   
      </div>
    </>
  );
};
