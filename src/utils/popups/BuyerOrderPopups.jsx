import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useState } from 'react'
import Button from "../inputs/Button";
import Chip from '@mui/material/Chip';
import { useRecoilState } from 'recoil';
import { OrderPopup } from '../../atoms/popup';
import { ModalHeading } from './utils'
const BuyerOrderPopups = () => {
    const [open, setOpen] = useRecoilState(OrderPopup);

    const handleClose = () => {
        setOpen(false); 
    };
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {open.type === 'BuyerCancelOrder' ? <div className="p-4 lg:p-8"><CancelOrder handleClose={handleClose} /> </div> : ''}
                {open.type === 'confirmOrder' ? <div className="p-4 lg:p-8 max-w-[34rem]"><ConfirmOrder handleClose={handleClose} /> </div> : ''}

            </Dialog>
        </>
    )
}

function CancelOrder({ handleClose }) {
    const size = "90"
    const orderId = '#FAFG4MRGH56788'
    return (
        <div className='!text-coolDarkerGreen flex flex-col items-center'>

            <div className="space-y-6 my-2 md:my-6  flex flex-col items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"80"}
                    height={"80"}
                    viewBox="0 0 73.5 60.75"
                >
                    <g
                        id="Group_490"
                        data-name="Group 490"
                        transform="translate(-521.263 -39.906)"
                    >
                        <g
                            id="Group_228"
                            data-name="Group 228"
                            transform="translate(521.263 39.906)"
                        >
                            <g
                                id="Artwork_5"
                                data-name="Artwork 5"
                                transform="translate(36.75 30.375)"
                            >
                                <path
                                    id="Path_220"
                                    data-name="Path 220"
                                    d="M64.33,24.751l-7.789,7.791L55.411,33.67H18.094l-1.132-1.132L9.174,24.751A11.015,11.015,0,0,1,24.751,9.174l7.787,7.789,4.212,4.212,4.212-4.212,7.787-7.789A11.016,11.016,0,0,1,64.33,24.751M36.75,52.33l-12.7-12.707H49.457ZM68.537,4.962a16.989,16.989,0,0,0-24,0L36.75,12.751,28.963,4.962a16.971,16.971,0,0,0-24,24L9.671,33.67H5.07v5.953H15.625L36.75,60.75,57.875,39.623H68.434V33.67h-4.6l4.707-4.708a16.988,16.988,0,0,0,0-24"
                                    transform="translate(-36.75 -30.375)"
                                    fill={"#337357"}
                                />
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="my-2">
                    <ModalHeading color='coolDarkerGreen' text=' Do you want to cancel the order?' />

                </div>
                <div className="flex items-center space-x-3">
                    <Button text="Yes" color="bg-coolDarkerGreen w-[5rem]" />
                    <div onClick={handleClose} >
                        <Button text="No" color="bg-coolDarkerGreen w-[5rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ConfirmOrder({ handleClose }) {

    const [phase, setPhase] = useState('confirm')
    const handleChangePhase = (e) => {
        e.preventDefault()
        setPhase('reviewTheProduct')
        setSize('65')
    }
    return (
        <div className='!text-coolDarkerGreen flex flex-col items-center'>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"80"}
                height={"80"}
                viewBox="0 0 73.5 60.75"
            >
                <g
                    id="Group_490"
                    data-name="Group 490"
                    transform="translate(-521.263 -39.906)"
                >
                    <g
                        id="Group_228"
                        data-name="Group 228"
                        transform="translate(521.263 39.906)"
                    >
                        <g
                            id="Artwork_5"
                            data-name="Artwork 5"
                            transform="translate(36.75 30.375)"
                        >
                            <path
                                id="Path_220"
                                data-name="Path 220"
                                d="M64.33,24.751l-7.789,7.791L55.411,33.67H18.094l-1.132-1.132L9.174,24.751A11.015,11.015,0,0,1,24.751,9.174l7.787,7.789,4.212,4.212,4.212-4.212,7.787-7.789A11.016,11.016,0,0,1,64.33,24.751M36.75,52.33l-12.7-12.707H49.457ZM68.537,4.962a16.989,16.989,0,0,0-24,0L36.75,12.751,28.963,4.962a16.971,16.971,0,0,0-24,24L9.671,33.67H5.07v5.953H15.625L36.75,60.75,57.875,39.623H68.434V33.67h-4.6l4.707-4.708a16.988,16.988,0,0,0,0-24"
                                transform="translate(-36.75 -30.375)"
                                fill={"#337357"}
                            />
                        </g>
                    </g>
                </g>
            </svg>
            {phase === 'confirm' ? <><div className="my-6"><ModalHeading color='coolDarkerGreen' center={true} text='Do you want to confirm your delivery and purchase?' /></div>
                <div className="flex items-center space-x-3">
                    <Button text="Yes" color="bg-coolDarkerGreen w-[5rem]" />
                    <div onClick={handleClose} >
                        <Button text="No" color="bg-coolDarkerGreen w-[5rem]" />
                    </div>
                </div></> : <div className='my-8'>
                <Button text="Please giva a review to the product" color="bg-coolDarkerGreen max-w-[28rem]" onClick={handleChangePhase} /></div>
            }
        </div>
    )
}

export default BuyerOrderPopups