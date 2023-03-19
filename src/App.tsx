import { useCallback, useEffect, useState } from "react";
import update from 'immutability-helper'
import cn from "classnames";

import { Mode } from "./components/Mode";
import { Container } from "./components/Container";
import { ItemElement } from "./components/ItemElement/ItemElement";

import "./index.css";

export interface Element {
  index?: number;
  id: number;
  type: string;
  canDrag: boolean;
  inConstructor: boolean;
}

function App() {
  // mode state
  const [mode, setMode] = useState<"Constructor" | "Runtime">("Constructor");

  // state items in right container
  const [contain, setContain] = useState<Element[] | []>([]);

  // state items in left container
  const [elements, setElements] = useState<Element[]>([
    { id: 0, type:'display', canDrag: true, inConstructor: false },
    { id: 1, type:'operators', canDrag: true, inConstructor: false },
    { id: 2, type:'numbers', canDrag: true, inConstructor: false },
    { id: 3, type:'equals', canDrag: true, inConstructor: false },
  ]);

  const deleteFromContainDblClick = (item: Element) => {
    if (mode === "Runtime") {
      return;
    } else {
      setContain(contain.filter((el) => el.id !== item.id));
      setElements((elements) => {
        return elements.map((el) =>
          el.id === item.id
            ? { ...el, canDrag: !el.canDrag, inConstructor: !el.inConstructor }
            : el
        );
      });
    }
  };

  const sortFunc = (prevIndex:number ,index:number) => {
    console.log('prevIndex',prevIndex)
    console.log('index',index)
    if(!index || !prevIndex) return
    setContain((contain) => 
      update(contain, {
        $splice: [
          [prevIndex, 1],
          [index, 0, contain[prevIndex] as Element],
        ],
      })


      // {const newContain = [...contain]
      // const itemCurrent = newContain[prevIndex]
      // newContain[prevIndex] = newContain[index]
      // newContain[index] = itemCurrent
      // console.log(newContain)
      // return newContain}
    )
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-full">
      <div className="flex flex-col items-end gap-[24px]">
        <Mode setMode={setMode} mode={mode} />
        <div className="flex gap-[44px]">          
            <div
              className={cn(
                "flex flex-col",
                mode === "Runtime" ? "opacity-0" : ""
              )}
            >
              {elements.map((item) => (
                <ItemElement item={item} key={item.id} mode={mode} />
              ))}
            </div>
            <div className="flex flex-col">
              <Container
                deleteFromContainDblClick={deleteFromContainDblClick}
                contain={contain}
                mode={mode}
                sortFunc={sortFunc}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
