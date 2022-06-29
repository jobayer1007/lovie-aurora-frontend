import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Button from "../inputs/Button";
import Chip from '@mui/material/Chip';
import { useRecoilState } from 'recoil';
import { sellerPopup } from '../../atoms/popup';
import { ModalHeading } from './utils'
import { Checkmark } from 'react-ionicons';
const SellerPopup = () => {
    const [sellerState, setSellerState] = useRecoilState(sellerPopup);
    const handleClose = () => {
        setSellerState({ ...sellerState, type: null, open: false });
    };
    return (
        <>
            <Dialog
                open={sellerState.open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {sellerState.type === 'ApplyForMoreUnits' ? <div className="p-4 lg:p-8"><ApplyMore handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'confirmOrder' ? <div className="p-4 lg:p-8 max-w-[34rem]"><ConfirmOrder handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'changePass' ? <div className="p-4 lg:p-8 max-w-[34rem]"><ChangePass handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'editAddress' ? <div className="p-4 lg:p-8 max-w-[34rem]"><EditAddress handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'uploadImage' ? <div className="p-4 lg:p-8 max-w-[34rem]"><UploadImage handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'storeDisplay' ? <div className="p-4 lg:p-8 w-full max-w-[34rem]"><StoreDisplay handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'addCard' ? <div className="p-4 lg:p-8 w-full max-w-[34rem]"><AddCard handleClose={handleClose} /> </div> : ''}
                {sellerState.type === 'editCard' ? <div className="p-4 lg:p-8 w-full max-w-[34rem]"><EditCard handleClose={handleClose} /> </div> : ''}


            </Dialog>
        </>
    )
}

function ApplyMore({ handleClose }) {
    const size = "90"
    const orderId = '#FAFG4MRGH56788'
    return (
        <div className='text-center !text-coolDarkerGreen flex flex-col items-center'>
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
                    <ModalHeading color='coolDarkerGreen' text='Do you want to increase your store inventory units?' />
                </div>
                <div className="flex items-center space-x-3">
                    <Button text="Yes" color="bg-coolDarkerGreen w-[5rem]" />
                    <div onClick={handleClose} >
                        <Button text="No" color="bg-coolDarkerGreen w-[5rem]" />
                    </div>
                </div>
                <p className='text-coolDarkerGreen font-semibold text-md'>Note: you can only apply once within a month.</p>

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


function ChangePass({ oldPassword, handleClose, setOldPassword, newPassword, setNewPassword, confirmPassword, setConfirmPassword }) {

    const handleChangePassword = (e) => {
        e.preventDefault()
        if (newPassword === confirmPassword) {
        }
    }
    return (
        <div className='w-full'>
            <div className="mb-4">
                <ModalHeading color='coolDarkerGreen' text='Change Your Password' />

            </div>
            <form onSubmit={handleChangePassword}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5 space-y-2">
                        <label htmlFor="oldPass" className=' text-coolDarkerGreen font-semibold'>Current password</label>
                        <input
                            required
                            min={6}
                            id='oldPass'
                            className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4  uppercase text-coolBlack tracking-tight w-full"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />

                    </div>
                    <div className="mb-5  space-y-2">

                        <label htmlFor="newPass" className=' text-coolDarkerGreen font-semibold'>New password</label>
                        <input
                            required
                            min={6}
                            id='newPass'
                            className={`${newPassword === confirmPassword ? 'border-coolDarkerGreen outline-coolDarkerGreen' : 'border-[red] border-2 outline-[red]'} rounded-md border py-2 px-4  uppercase text-coolBlack tracking-tight w-full`}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {newPassword != confirmPassword && <p className="text-[red] font-md text-sm py-1">
                            Passwords do not match.
                        </p>}
                    </div>
                    <div className="mb-5  space-y-2">
                        <label htmlFor="confirmPass" className=' text-coolDarkerGreen font-semibold'>Confirm password</label>
                        <input
                            required
                            min={6}
                            id='confirmPass'
                            className={`${newPassword === confirmPassword ? 'border-coolDarkerGreen outline-coolDarkerGreen' : 'border-[red] border-2 outline-[red]'} rounded-md border  py-2 px-4  uppercase text-coolBlack tracking-tight w-full `}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {newPassword != confirmPassword && <p className="text-[red] font-md text-sm py-1">
                            Passwords do not match.
                        </p>}
                    </div>

                </div>
                <div className="flex items-center space-x-4 ">
                    <Button text="Save" color="bg-coolDarkerGreen w-fit px-6" />
                    <Button text="Cancel" onClick={handleClose} color="bg-coolDarkerGreen w-fit px-6" />
                </div>
            </form></div>)
}

function EditAddress({ handleClose }) {

    const [addresses, setAddresses] = useState({
        billingAddress: null, shippingAddress: null
    })
    const addressData = {
        billingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7', shippingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7'
    }



    const handleChangeAddress = (e) => {
        e.preventDefault()
        if (addresses.billingAddress && addresses.shippingAddress) {
            console.log(addresses)

            //proceed
        }
    }

    const handleChange = (e) => {
        setAddresses({ ...addresses, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setAddresses({
            billingAddress: addressData?.billingAddress, shippingAddress: addressData?.shippingAddress
        })
    }, [])
    const [selected, setSelected] = useState(false);

    return (
        <div className='w-full '>
            <div className="mb-4">
                <ModalHeading color='coolDarkerGreen' text=' Edit  Address' />
            </div>
            <form onSubmit={handleChangeAddress}>
                <div className="mx-auto flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="shippingAddress" className='text-coolDarkerGreen font-semibold'>Store Address</label>
                        <div className="flex items-center mt-4">
                            {/* <button
                                onClick={() => setSelected(!selected)}
                                type="button"
                                className={`${selected
                                    ? "bg-coolDarkGreen border border-white"
                                    : "border border-coolDarkGreen"
                                    } rounded h-8 px-1 mr-2`}
                            >
                                <Checkmark color="white" />
                            </button> */}
                            <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                                {addressData.shippingAddress}
                            </p>
                        </div>

                        {/* <div className="flex items-center mt-4">
                            <button
                                onClick={() => setSelected(!selected)}
                                type="button"
                                className={`${selected
                                    ? "bg-coolDarkGreen border border-white"
                                    : "border border-coolDarkGreen"
                                    } rounded h-8 px-1 mr-2`}
                            >
                                <Checkmark color="white" />
                            </button>
                            <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                                {addressData.shippingAddress}
                            </p>
                        </div> */}

                        <div className="flex items-left mt-4">
                            <LinkTypeBtn text="Change" color="text-coolDarkerGreen " />
                            
                        </div>
                    </div>
                    <div >
                        <label htmlFor="shippingAddress" className='text-coolDarkerGreen font-semibold'>Ship-in from Address</label>
                        <div className="flex items-center mt-4">
                            <button
                                onClick={() => setSelected(!selected)}
                                type="button"
                                className={`${selected
                                    ? "bg-coolDarkGreen border border-white"
                                    : "border border-coolDarkGreen"
                                    } rounded h-8 px-1 mr-2`}
                            >
                                <Checkmark color="white" />
                            </button>
                            <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                                {addressData.shippingAddress}
                            </p>
                        </div>
                        <div className="flex items-center mt-4">
                            <button
                                onClick={() => setSelected(!selected)}
                                type="button"
                                className={`${selected
                                    ? "bg-coolDarkGreen border border-white"
                                    : "border border-coolDarkGreen"
                                    } rounded h-8 px-1 mr-2`}
                            >
                                <Checkmark color="white" />
                            </button>
                            <p className="text-coolBlack ml-2 text-sm md:text-[15px]">
                                {addressData.shippingAddress}
                            </p>
                        </div>
                        <div className="flex items-left mt-4">
                            <LinkTypeBtn text="Delete" color="text-coolDarkerGreen " />
                            <div className="ml-auto">
                                <LinkTypeBtn text="Add Ship-in from Address" color="text-coolDarkerGreen " />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-4 items-center">
                        <Button text='Save' color='bg-coolDarkerGreen' />
                        <Button onClick={handleClose} text='Cancel' color='bg-coolDarkerGreen' />
                    </div>
                </div>


            </form></div>)
}

function UploadImage({ handleClose }) {
    return (
        <div className='flex flex-col'>
            <div className="my-2">
                <ModalHeading color='coolDarkerGreen' text='Uppload a New Image' />
            </div>
            <div className="flex min-h-[350px] min-w-[400px] items-center justify-center  border-2 border-gray-300 border-dashed rounded-md bg-gray-50">
                <h1 className='text-3xl'>+</h1>
            </div>
        </div>
    )
}


function StoreDisplay({ handleClose }) {

    const StoreData = {
        name: 'MOMOSTALK', country: 'China',
        introduction: `Clients Meeting \nSaturday, May 7 \nGoogle Meet joining info \nVideo call link: https://meet.google.com/snu-ycoc-dnj`
    }
    const handleChange = (e) => {
        setAddresses({ ...addresses, [e.target.name]: e.target.value })
    }
 
    return (
        <div className='w-full md:min-w-[400px]'>
            <div className="mb-4">
                <ModalHeading color='coolDarkerGreen' text='Change Store Display' />
            </div>
            <form >
                <div className="flex flex-col">
                    <div className="mb-5 space-y-2">
                        <label htmlFor="storeName" className=' text-coolDarkerGreen font-semibold'>Store Name</label>
                        <input
                            required
                            min={6}
                            id='storeName'
                            className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4  uppercase text-coolBlack tracking-tight w-full"
                            type="text"
                            defaultValue={StoreData.name}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-5 space-y-2">
                        <label htmlFor="Country" className=' text-coolDarkerGreen font-semibold'>Country</label>
                        <div className="flex text-coolBlack pr-2 border rounded-[4px] overflow-hidden border-coolBlack  items-center w-full ">
                            <select
                                defaultValue={StoreData.country}
                                required className='px-4 py-2 w-full outline-none' name="United Kingdom" id="country">
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5 space-y-2">
                        <label htmlFor="Country" className=' text-coolDarkerGreen font-semibold'>Country</label>
                        <textarea defaultValue={StoreData.introduction} className='h-[140px] p-2 bg-white outline-coolDarkerGreen text-coolBlack w-full border border-coolDarkerGreen rounded-lg'></textarea>
                        <div className="w-full flex">
                            <div className="text-xs ml-auto">
                                max 65 words
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 ">
                        <Button text="Save" color="bg-coolDarkerGreen w-fit px-6" />
                        <Button text="Cancel" onClick={handleClose} color="bg-coolDarkerGreen w-fit px-6" />
                    </div>
                </div>
            </form>
        </div>)
}

function AddCard({ handleClose }) {

    const [cardData, setCardData] = useState({
        cardNumber: null, cardName: null, expiry: null, CVC: null
    })

    const handleAddCardNumber = (e) => {
        e.preventDefault()
        if (cardData.cardNumber && cardData.cardName && cardData.expiry && cardData.CVC) {
            console.log(cardData)

        }
    }

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }


    return (
        <>

            <div className="flex flex-col space-y-6">
                <div className='border-b border-coolBlack pb-6 w-full'>
                    <div className="mb-4">
                        <ModalHeading color='coolDarkerGreen' text='Add Card' />
                    </div>
                    <form onSubmit={handleAddCardNumber}>
                        <h1 className='text-lg md:text-lg mb-4 text-coolDarkerGreen font-bold '>Credit Card (Pay)</h1>
                        <div className=" mx-auto  flex flex-col">
                            <div className="mb-5 space-y-2">
                                <label htmlFor="cardNum" className='text-coolDarkerGreen font-semibold'>Add Card Number</label>
                                <input
                                    required
                                    minLength={16}
                                    maxLength={16}
                                    id='cardNum'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="number"
                                    name='cardNumber'
                                    defaultValue={cardData.cardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="nameOncard" className='text-coolDarkerGreen font-semibold'>Name on Card</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='First Name'
                                        onChange={handleChange}
                                    />
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>CVC Number</label>
                                <input
                                    required
                                    minLength={3}
                                    maxLength={3}
                                    id='CVC'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='CVC'
                                    type="number"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="date" className='text-coolDarkerGreen font-semibold'>Expiry Date</label>
                                <input
                                    required
                                    id='date'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='expiry'
                                    type="date"
                                    defaultValue={cardData.expiry}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-left">
                            <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
                            <div onClick={handleClose} >
                                <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem] ml-4" />
                            </div>
                        </div>
                    </form></div>
                <div className='w-full'>
                    <div className="mb-4">
                        <h1 className='text-lg md:text-lg mb-4 text-coolDarkerGreen font-bold '>Bank Account (Receive)</h1>
                    </div>
                    <form onSubmit={handleAddCardNumber}>
                        <div className=" mx-auto  flex flex-col">
                            <div className="mb-5 space-y-2">
                                <label htmlFor="cardNum" className='text-coolDarkerGreen font-semibold'>Account Number</label>
                                <input
                                    required
                                    minLength={16}
                                    maxLength={16}
                                    id='cardNum'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="number"
                                    name='cardNumber'
                                    defaultValue={cardData.cardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="nameOncard" className='text-coolDarkerGreen font-semibold'>Name on Card</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='First Name'
                                        onChange={handleChange}
                                    />
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>Bank Name</label>
                                <input
                                    required
                                    id='CVC'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='CVC'
                                    type="text"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>Your Email</label>
                                <input
                                    required
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="text"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-left">
                            <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
                            <div onClick={handleClose} >
                                <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem] ml-4" />
                            </div>
                        </div>
                    </form></div>
            </div>
        </>
    )
}

function EditCard({ handleClose }) {

    const [cardData, setCardData] = useState({
        cardNumber: null, cardName: null, expiry: null, CVC: null
    })

    const handleAddCardNumber = (e) => {
        e.preventDefault()
        if (cardData.cardNumber && cardData.cardName && cardData.expiry && cardData.CVC) {
            console.log(cardData)

        }
    }

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }
    const [sellerData, setSellerData] = useRecoilState(sellerPopup)
    const { cardData: card, accountData } = sellerData
    useEffect(() => {
        setCardData(card)
    }, [sellerData])

    return (
        <>
            <div className="flex flex-col space-y-6">
                <div className='border-b border-coolBlack pb-6 w-full'>
                    <div className="mb-4">
                        <ModalHeading color='coolDarkerGreen' text='Edit Card' />
                    </div>
                    <form onSubmit={handleAddCardNumber}>
                        <h1 className='text-lg md:text-lg mb-4 text-coolDarkerGreen font-bold '>Credit Card (Pay)</h1>
                        <div className=" mx-auto  flex flex-col">
                            <div className="mb-5 space-y-2">
                                <label htmlFor="cardNum" className='text-coolDarkerGreen font-semibold'>Add Card Number</label>
                                <input
                                    required
                                    minLength={16}
                                    maxLength={16}
                                    id='cardNum'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="number"
                                    name='cardNumber'
                                    defaultValue={cardData.cardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="nameOncard" className='text-coolDarkerGreen font-semibold'>Name on Card</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='First Name'
                                        onChange={handleChange}
                                    />
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>CVC Number</label>
                                <input
                                    required
                                    minLength={3}
                                    maxLength={3}
                                    id='CVC'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='CVC'
                                    type="number"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="date" className='text-coolDarkerGreen font-semibold'>Expiry Date</label>
                                <input
                                    required
                                    id='date'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='expiry'
                                    type="date"
                                    defaultValue={cardData.expiry}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-left">
                            <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
                            <div onClick={handleClose} >
                                <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem] ml-4" />
                            </div>
                        </div>
                    </form></div>
                <div className='w-full'>
                    <div className="mb-4">
                        <h1 className='text-lg md:text-lg mb-4 text-coolDarkerGreen font-bold '>Bank Account (Receive)</h1>
                    </div>
                    <form onSubmit={handleAddCardNumber}>
                        <div className=" mx-auto  flex flex-col">
                            <div className="mb-5 space-y-2">
                                <label htmlFor="cardNum" className='text-coolDarkerGreen font-semibold'>Account Number</label>
                                <input
                                    required
                                    minLength={16}
                                    maxLength={16}
                                    id='cardNum'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="number"
                                    name='cardNumber'
                                    defaultValue={cardData.cardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="nameOncard" className='text-coolDarkerGreen font-semibold'>Name on Card</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='First Name'
                                        onChange={handleChange}
                                    />
                                    <input
                                        required
                                        id='nameOncard'
                                        className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4   text-coolBlack tracking-tight w-full"
                                        type="text"
                                        name='cardName'
                                        placeholder='Last Name'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>Bank Name</label>
                                <input
                                    required
                                    id='CVC'
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    name='CVC'
                                    type="text"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 space-y-2">
                                <label htmlFor="CVC" className='text-coolDarkerGreen font-semibold'>Your Email</label>
                                <input
                                    required
                                    className="rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 uppercase text-coolBlack tracking-tight w-full"
                                    type="text"
                                    defaultValue={cardData.CVC}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-left">
                            <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
                            <div onClick={handleClose} >
                                <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem] ml-4" />
                            </div>
                        </div>
                    </form></div>
            </div>
        </>
    )
}

const LinkTypeBtn = ({ color, text }) => {
    return (
        <p className={`${color} text-sm hover:underline`}>{text}</p>
    )
}
export default SellerPopup