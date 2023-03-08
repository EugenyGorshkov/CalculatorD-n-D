import React, { useState } from 'react';
import { useDrag } from 'react-dnd'
import cn from 'classnames';

import { ItemTypes } from '../../../itemTypes/itemTypes';

import styles from './Display.module.scss'

export const Display: React.FC = () => {
    const [value, setValue] = useState(0)

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: ItemTypes.DISPLAY,
    item: {
      type: ItemTypes.DISPLAY
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

    return (
        <>
            <div ref={drag} className={cn('flex m-[6px] h-[60px] w-[240px] bg-white rounded', styles.displayWrapper,isDragging ? 'opacity-50' : 'opacity-100')}>
                <div className='flex items-center justify-end flex-1 m-1 bg-[#F3F4F6] rounded-md font-sans font-extrabold text-4xl pr-2'>{value}</div>
            </div>
        </>
    )
}



