import cn from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../itemTypes/itemTypes";

import styles from "./Numbers.module.scss";

interface NumbersProps {
  isDragging: boolean,
  canDragging: boolean
}

export const Numbers: React.FC<NumbersProps> = ({
  isDragging
}) => {


  return (
    <>
      <div
        className={cn(
          "flex flex-col m-[6px] h-[224px] w-[240px] bg-white rounded font-sans text-sm font-medium",
          styles.numbersWrapper,
          isDragging ? 'opacity-50' : 'opacity-100'
        )}
      >
        <div className="flex flex-wrap">
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            7
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            8
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            9
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            4
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            5
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            6
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            1
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            2
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            3
          </div>
        </div>
        <div className="flex">
          <div
            className={cn(
              "h-[48px] w-[152px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            0
          </div>
          <div
            className={cn(
              "h-[48px] w-[72px] flex items-center justify-center m-1",
              styles.button
            )}
          >
            ,
          </div>
        </div>
      </div>
    </>
  );
};
