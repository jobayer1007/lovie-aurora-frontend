import React, { useState } from 'react';
import Image from 'next/image'
import sellerImage from "../../../public/sellerstore.png";
import Button from '../inputs/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/popup';
import { TextareaAutosize } from '@material-ui/core';
import { ModalHeading } from './utils';
import { BsChevronDown } from 'react-icons/bs'
const style = {
  // position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

const OrderPopup = () => {

  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = useRecoilState(modalState)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [orderData, setOrderData] = useState({})

  const products = [
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
  ]
  const colors = [
    'red', 'blue', 'green', 'white', 'black'
  ]
  const sizes = [
    'small', 'medium', 'large', 'X large', 'XX large'
  ]
  const styles = [
    'Cotton', 'Silk', 'Denim'
  ]
  const quantities = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
    console.log(orderData)
  }

  const handleCreateOrder = (e) => {
    e.preventDefault()
    console.log(orderData)
  }
  return (
    <div>
      <Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ width: 'calc(100% - 20px)' }} sx={style} className='overflow-y-scroll  noscrollbar fixed max-w-[500px] max-h-[90vh] w-full overflow-y-scroll lg:max-w-[800px] '>
          <div className='mb-4'>
            <ModalHeading text='Create an Order' color='coolDarkerGreen' />
          </div>
          <form className='space-y-4' onSubmit={handleCreateOrder}>
            <div className="flex  flex-col ">
              <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Select Product</label>
              <div className='flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md'>
                <select
                  required name='productName' onChange={handleChange} className=' px-4 rounded-md py-2 outline-none w-full' id="birthday">
                  {products.map((productName, index) => (<option key={index} value={`${productName.productName}`}>{productName.productName}</option>))}
                </select>
              </div>
            </div>
            <div className="grid  md:space-x-3 grid-cols-1 md:grid-cols-3">
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Select Size</label>
                <input
                  name='size'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full `}
                />
              </div>
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Select Color</label>
                <input
                  name='color'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full`}
                />
              </div>
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Select Style</label>
                <input
                  name='style'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full`}
                />
              </div>
            </div>

            <div className="grid md:space-x-3 grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col ">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Select Quantity</label>
                <div className='flex items-center border-coolDarkerGreen pr-2 border flex-1 outline-coolDarkerGreen rounded-md'>
                  <select
                    required name='qty' onChange={handleChange} className='flex-1 outline-none rounded-md py-2 w-full' id="birthday">
                    {quantities.map(qty => (<option key={qty} value={`${qty}`}>{qty}</option>))}
                  </select>
                </div>
              </div>
              <div className="flex  flex-col ">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Recipent Name</label>
                <input
                  required name='recipent' onChange={handleChange} type='text' className='border outline-coolDarkerGreen px-4 rounded-md py-2 border-coolDarkerGreen outline-coolDarkerGreen w-full' />
              </div>
              <div className="flex  flex-col ">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Mobile Number</label>
                <input
                  required
                  onChange={handleChange}
                  name='mobile'
                  type='number' className='border outline-coolDarkerGreen px-4 rounded-md py-2 border-coolDarkerGreen outline-coolDarkerGreen w-full' />
              </div>
            </div>

            <div className="grid  md:space-x-3 grid-cols-1 md:grid-cols-3">
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Customer ID</label>
                <input
                  name='customer'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full `}
                />
              </div>
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Order Number</label>
                <input
                  name='orderNum'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full`}
                />
              </div>
              <div className="flex  flex-col  my-3">
                <label className='text-coolDarkerGreen mb-1 font-semibold  ' htmlFor="product">Case Number</label>
                <input
                  name='case'
                  onChange={handleChange}
                  className={`rounded-md border border-coolDarkerGreen outline-coolDarkerGreen py-2 px-4 text-coolBlack tracking-tight w-full`}
                />
              </div>
            </div>
            <div className="pt-2">
              <label className='text-coolDarkerGreen mb-1 font-semibold ' htmlFor='textarea'>Shipping Address</label>
              <div className='mt-2'>
                <TextareaAutosize
                  required
                  onChange={handleChange}
                  name='shippingAddress'
                  className='outline-coolDarkerGreen transition duration-300 border rounded-md border-coolDarkerGreen outline-coolDarkerGreen min-h-[140px] p-2'
                  aria-label="empty textarea"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className='flex items-center my-4 space-x-2 md:spacex-x-4'>
              <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
              <div onClick={handleClose} >
                <Button text="Cancel" color="bg-coolDarkerGreen max-w-[28rem]" />
              </div></div>

          </form>

        </Box>
      </Modal>
    </div>
  );
}

export default OrderPopup;
