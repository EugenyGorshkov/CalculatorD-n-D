import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Display } from "./components/Calculator/Display";
import { Equals } from "./components/Calculator/Equals";
import { Numbers } from "./components/Calculator/Numbers";
import { Operators } from "./components/Calculator/Operators";
import { Contain } from "./components/Contain";
import { Mode } from "./components/Mode";

import { ItemTypes } from "./itemTypes/itemTypes";

import "./index.css";

export interface Element {
    name: string,
    type: string,
    component: React.FC
}

function App() {
  const [mode, setMode] = useState<"Constructor" | "Runtime">("Constructor");

  const [contain, setContain] = useState<Element[] | null[]>([null])

  const [elements] = useState<Element[]>([
    {name: 'display', type: ItemTypes.DISPLAY, component: Display},
    {name: 'operators', type: ItemTypes.OPERATORS, component: Operators},
    {name: 'numbers', type: ItemTypes.NUMBERS, component: Numbers},
    {name: 'Equals', type: ItemTypes.EQUALS, component: Equals},
  ])

  const markAsContain = () => {
    
  }

  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="flex flex-col items-end gap-[24px]">
          <Mode setMode={setMode} mode={mode} />
          <div className="flex gap-[44px]">
            {/* тут подключение либы DnD react*/}
            <DndProvider backend={HTML5Backend}>
              <div className="flex flex-col">
                <Display/>
                <Operators/>
                <Numbers/>
                <Equals/>
              </div>
              <div className="flex flex-col">
                <Contain/>
              </div>
            </DndProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
