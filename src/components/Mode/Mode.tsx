import React from "react";
import cn from "classnames";

import eye from '../../assets/view.png'
import selector from '../../assets/selector.png'
import eyeActive from '../../assets/view-active.png'
import selectorActive from '../../assets/selector-active.png'

import styles from "./Mode.module.scss";

interface ModeProps {
  setMode: React.Dispatch<React.SetStateAction<"Constructor" | "Runtime">>;
  mode: string;
}

export const Mode: React.FC<ModeProps> = ({ setMode, mode }) => {
  const onClickButtonHandlerChangeMod = () => {
    mode === "Runtime" ? setMode("Constructor") : setMode("Runtime");
  };

  return (
    <>
      <div className="m-[6px] h-[38px] w-[243px] flex bg-[#F3F4F6] rounded-md">
        <button
          onClick={() => {onClickButtonHandlerChangeMod()}}
          className={cn("flex items-center p-[12px] gap-[8px] h-[36px] m-[1px] text-sm rounded-md font-sans font-medium", mode === "Runtime" ? "bg-[#FFFFFF] border border-[#E2E3E5]" : "bg-transparent")}
        >
            <img src={mode === "Constructor" ? eye : eyeActive} alt="" className="max-h-5"/>
          Runtime
        </button>
        <button
          onClick={() => {onClickButtonHandlerChangeMod()}}
          className={cn("flex flex-1 items-center p-[12px] gap-[8px] h-[36px] m-[1px] text-sm rounded-md font-sans font-medium", mode === "Constructor" ? "bg-[#FFFFFF] border border-[#E2E3E5]" : "bg-transparent")}
        >
            <img src={mode === "Runtime" ? selector : selectorActive} alt="" className="max-h-5"/>
          Constructor
        </button>
      </div>
    </>
  );
};
