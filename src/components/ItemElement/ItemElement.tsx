import React from 'react';

import { Element } from '../../App';
import { Item } from '../Calculator/Item/Item';

interface ItemElementProps {
    item: Element
    mode: string
}

export const ItemElement: React.FC<ItemElementProps> = ({
    item,
    mode,
}) => {

    return (
        <div>
        <Item item={item} mode={mode}/>
        </div>
    )
}

