import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { financePopup } from '../../atoms/popup';
import Button from "../inputs/Button";
import { ModalHeading } from './utils';

const FinancePopups = () => {
    const [open, setOpen] = useRecoilState(financePopup);

    const handleClose = () => {
        setOpen({ ...open, show: false });
    };
    const { type } = open

    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="p-4 md:py-8 max-w-[600px] lg:min-w-[600px] w-full">
                    {type === 'GoToPaypal' ? <ConnectToPaypal /> : type === 'withdrawToPaypal' ? <WithdrawToPaypal /> : type === 'bankWithDraw' ? <WithdrawToBank /> : <AddCard />}
                </div>
            </Dialog>
        </>
    )
}

function ConnectToPaypal() {
    const [open, setOpen] = useRecoilState(financePopup);

    const handleOpenWithdrawToPayPal = () => {
        setOpen({ ...open, show: true, type: 'withdrawToPaypal' })
    }
    return (
        <div className='flex flex-col items-center space-y-6'>
            <Logo />
            <ModalHeading text='Connect your paypal account to receive payment from Lovie Aurora' center={true} color='coolDarkerGreen' />
            <Button onClick={handleOpenWithdrawToPayPal} color="bg-coolDarkerGreen" text='Connect to PayPal Account' />
        </div>
    )
}
function WithdrawToPaypal() {
    return (
        <>
            <div className='flex flex-col items-center space-y-6'>
                <Logo />
                <ModalHeading text='Withdraw $9,834 to your paypal' center={true} color='coolDarkerGreen' />
                <Button color="bg-coolDarkerGreen" text='Withdraw' />
                <p className='text-coolDarkerGreen font-semibold text-md'>Note: this process may take up to 48 hours to complete.</p>
            </div>
        </>
    )
}
function WithdrawToBank() {
    return (
        <>
            <div className='flex flex-col items-center space-y-6'>
                <Logo />
                <ModalHeading text='Withdraw $9,834 to your bank account' center={true} color='coolDarkerGreen' />
                <Button color="bg-coolDarkerGreen" text='Withdraw' />
                <p className='text-coolDarkerGreen font-semibold text-md'>Note: this process may take up to 48 hours to complete.</p>
            </div>
        </>
    )
}
function AddCard() {

    const [accountData, setAccountData] = useState({
        billingAddress: null, shippingAddress: null
    })
    const account = {
        accountNumber: '67**********1234', name: 'urban Leung'
    }



    const handleChangeAddress = (e) => {
        e.preventDefault()
        if (account.accountNumber && account.name) {
            console.log(account)
            //proceed
        }
    }

    const handleChange = (e) => {
        setAccountData({ ...accountData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='flex flex-col w-full md:w-[94%] mx-auto items-center space-y-6'>
                <Logo />
                <div className="flex flex-col w-full space-y-4">
                    <div className="mr-auto">
                        <ModalHeading text='Current Card' color='coolDarkerGreen' />
                    </div>
                    <form onSubmit={handleChangeAddress} className='w-full'>
                        <div className=" mx-auto w-full flex flex-col">
                            <div className="mb-5 w-full">
                                <label htmlFor="houseOrAptNo" className='text-coolDarkerGreen font-semibold'>Account Number</label>
                                <input
                                    required
                                    type='number'
                                    minLength={16}
                                    maxLength={16}
                                    placeholder={account.accountNumber}
                                    id='houseOrAptNo'
                                    className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='accountNumber'
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="mb-5 w-full">
                                <label htmlFor="houseOrAptNo" className='text-coolDarkerGreen font-semibold'>Name</label>
                                <input
                                    required
                                    type='number'
                                    minLength={16}
                                    maxLength={16}
                                    placeholder={account.name}
                                    id='houseOrAptNo'
                                    className=" mt-2 rounded-md border border-coolBlack py-2 px-4 text-coolBlack tracking-tight w-full"
                                    name='name'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button text='Edit' color='bg-coolDarkerGreen w-[5rem]' />
                    </form>
                </div>
                <div className="flex flex-col w-full space-y-4">
                    <div className="mr-auto">
                        <ModalHeading text='Add Card' center={false} color='coolDarkerGreen' />
                    </div>
                    <form onSubmit={handleChangeAddress} className='w-full'>
                        <div className=" mx-auto w-full flex flex-col">
                            <div className="mb-5 w-full">
                                <label htmlFor="houseOrAptNo" className='text-coolDarkerGreen font-semibold'>Account Number</label>
                                <input
                                    required
                                    type='number'
                                    minLength={16}
                                    maxLength={16}
                                    id='houseOrAptNo'
                                    className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='accountNumber'
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="mb-5 w-full">
                                <label htmlFor="houseOrAptNo" className='text-coolDarkerGreen font-semibold'>Name</label>
                                <input
                                    required
                                    type='number'
                                    minLength={16}
                                    maxLength={16}
                                    id='houseOrAptNo'
                                    className=" mt-2 rounded-md border border-coolBlack py-2 px-4 text-coolBlack tracking-tight w-full"
                                    name='name'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <Button text='Add' color='bg-coolDarkerGreen w-[5rem]' />
                    </form>
                </div>
            </div>
        </>
    )
}

function Logo() {
    return (
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
    )
}

export default FinancePopups