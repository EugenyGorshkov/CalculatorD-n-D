import React from 'react';;
import { Element } from '../../App';
import { Item } from '../Calculator/Item/Item';

interface ItemConstructorProps {
    index: number
    mode: string
    item: Element
    sortFunc: (prevIndex:number ,index:number) => void
}

export const ItemConstructor: React.FC<ItemConstructorProps> = ({
    index,
    mode,
    item,
    sortFunc
}) => {
  
    return (
        <div >
        <Item item={item} mode={mode}/>
        </div>
    )
}