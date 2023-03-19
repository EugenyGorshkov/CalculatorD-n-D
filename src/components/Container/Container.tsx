import React from "react";
import { useDrag, useDrop } from "react-dnd";
import cn from "classnames";

import { ItemConstructor } from "../ItemConstructor/ItemConstructor";
import { Element } from "../../App";

import img01 from "../../assets/img01.png";

import styles from "./Container.module.scss";

interface ContainerProps {
  contain: Element[];
  mode: string;
  deleteFromContainDblClick: (item: Element) => void;
  sortFunc: (prevIndex:number ,index:number) => void
}

export const Container: React.FC<ContainerProps> = ({
  contain,
  mode,
  deleteFromContainDblClick,
  sortFunc
}) => {
  
  return (
    <div

      className={cn(
        "m-[6px] flex flex-col w-[243px] h-[448px] border-[2px] border-dashed border-[#C4C4C4] rounded-md",
        // isOver && canDrop
        //   ? "bg-[#F0F9FF] border-[2px] border-dashed border-[#C4C4C4] rounded-md"
        //   : "",
        contain.length > 0
          ? "m-[0px] w-auto border-none ml-[2px]"
          : "justify-center items-center"
      )}
    >
      {contain.length > 0 ? (
        contain.map((item, index) => (
          <ItemConstructor
            index={index}
            key={item.id}
            item={item}
            mode={mode}
            sortFunc={sortFunc}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={img01} alt="" className="mb-[12px]" />
          <h3 className="font-sans font-medium text-sm text-[#5D5FEF] mb-[4px]">
            Перетащите сюда
          </h3>
          <p className="font-sans font-normal text-xs text-[#6B7280]">
            любой элемент
            <br /> из левой панели
          </p>
        </div>
      )}
    </div>
  );
};
