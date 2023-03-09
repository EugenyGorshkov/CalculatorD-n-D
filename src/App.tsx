import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { store } from "./Redux/store";
import { Provider } from "react-redux";
import cn from "classnames";

import { Mode } from "./components/Mode";
import { Contain } from "./components/Contain";

import { ItemTypes } from "./itemTypes/itemTypes";

import "./index.css";
import { Item } from "./components/Calculator/Item/Item";

export interface Element {
  id: number;
  type: string;
  canDrag: boolean;
  inConstructor: boolean
}

function App() {
  const [mode, setMode] = useState<"Constructor" | "Runtime">("Constructor");

  const [contain, setContain] = useState<Element[] | []>([]);

  const [elements, setElements] = useState<Element[]>([
    { id: 0, type: ItemTypes.DISPLAY, canDrag: true, inConstructor: false },
    { id: 1, type: ItemTypes.OPERATORS, canDrag: true, inConstructor: false },
    { id: 2, type: ItemTypes.NUMBERS, canDrag: true, inConstructor: false },
    { id: 3, type: ItemTypes.EQUALS, canDrag: true, inConstructor: false },
  ]);

  const markAsContain = (item: Element) => {
    console.log(item);
    setContain((contain) => [...contain, item]);
    setElements(elements => {
      return (
        elements.map(el => el.id === item.id ? {...el, canDrag: !el.canDrag, inConstructor: !el.inConstructor } : el)
      )
    })
    // console.log(res)
  };

  useEffect(() => {
    console.log(contain.length > 0);
    console.log(elements);
  }, [contain]);

  return (
    <>
      {/* <Provider store={store}> */}
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="flex flex-col items-end gap-[24px]">
            <Mode setMode={setMode} mode={mode} />
            <div className="flex gap-[44px]">
              {/* тут подключение либы DnD react*/}
              <DndProvider backend={HTML5Backend}>
                <div
                  className={cn(
                    "flex flex-col",
                    mode === "Runtime" ? "opacity-0" : ""
                  )}
                >
                  {/* <Display/>
                <Operators/>
                <Numbers/>
                <Equals/> */}
                  {elements.map((el) => (
                    <Item
                      key={el.id}
                      value={el.type}
                      mode={mode}
                      id={el.id}
                      type={el.type}
                      contain={contain}
                      canDraging={el.canDrag}
                      inConstructor={el.inConstructor}
                    />
                  ))}
                  {/* {elements.map(el => (
                  <div key={el.id}>{el.component}</div>
                ))} */}
                </div>
                <div className="flex flex-col">
                  <Contain
                    markAsContain={markAsContain}
                    contain={contain}
                    mode={mode}
                  />
                </div>
              </DndProvider>
            </div>
          </div>
        </div>
      {/* </Provider> */}
    </>
  );
}

export default App;
