import React from 'react'

export const ModalHeading = ({ center, color, text, font }) => {
    return (
        <h2 className={`text-lg md:text-xl text-coolBlack font-bold lg:text-2xl ${center && 'text-center'} ${color && `text-${color}`}`}>{text}</h2>
    )
}

