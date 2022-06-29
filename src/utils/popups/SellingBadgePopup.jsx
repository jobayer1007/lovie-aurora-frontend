import { Dialog, IconButton } from '@material-ui/core'
import { Close, DragHandle, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Button from "../inputs/Button";

const SellingBadgePopup = ({ type }) => {
    const [open, setOpen] = useState(false);
    const [score, setScore] = useState()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const data = [
        {
            heading: 'Handmade',
            type: 'handmade',
            description: `Lovie Aurora hand-picked this product and
calculate HS (Handmade Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get Handmade badge when the HS is among top 1%-5% of all handmade related products.`
        },
        {
            heading: 'Original',
            type: 'original',
            description: `Lovie Aurora hand-picked this product and
calculate OS (Original Design Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get OS badge when the OS is among top 1%-5% of all original design related products. `
        },
        {
            heading: 'Custom',
            type: 'custom',
            description: `Lovie Aurora hand-picked this product and
calculate CS (Custom Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get CS badge when the CS is among top 1%-5% of all custom related products. `
        },
        {
            heading: 'Flash Sale',
            type: 'flashSale',
            description: `Lovie Aurora picks our products for a certain period of promotion. Normally, the promotion (Flash Sale) would last for 24-48 hours. `
        },
        {
            heading: 'Only Sell at LA',
            type: 'onlyForLA',
            description: `Lovie Aurora has solo contract with many stores that the store promises to sell their items only at Lovie Aurora.`
        },

    ]

    useEffect(() => {
        setScore(data.find(dataItem => (dataItem.type === type)))

    }, [type])


    return (
        <>
            <button variant="outlined" onClick={handleClickOpen}>
                {type}
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {score != undefined ? (
                    <div className="flex flex-col p-4 max-w-[500px]">
                        <div className="flex w-full items-center justify-space">
                            <h1 className='flex-1 text-xl font-semibold '>{score.heading}</h1>
                            <IconButton onClick={handleClose}>
                                <Close />
                            </IconButton>
                        </div>
                        <p className='text-md font-md text-coolBlack'>{score.description}</p>
                    </div>
                ) : ''}
            </Dialog>
        </>
    )
}

export default SellingBadgePopup