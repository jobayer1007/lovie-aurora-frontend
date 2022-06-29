import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Paypaldraw, sellership } from '../../atoms/popup';
import paypalImg from '../../../public/PayPal-Logo.png'
import Image from 'next/image'
import Button from '../inputs/Button';
import { ModalHeading } from './utils';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '',
  transition: "",

  boxShadow: 24,
  p: 4,
};

const SellerShip = () => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [open, setOpen] = useRecoilState(sellership)

  return (
    <div>
      <Modal
        className='transition-all ease-in-out duration-100'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ width: 'calc(100% - 20px)' }} sx={style} className='rounded-lg shadow-lg max-w-[500px]  ' >
          <div className='flex items-center flex-col w-full  space-y-8  py-4'>
            <ModalHeading text='Tracking Number' color='coolDarkerGreen' />
            <div className='w-full overflow-hidden border focus:border-2 rounded-md  border-coolBlack text-coolBlack tracking-tight w-full '>
              <input type='number' required id='username' className='text-coolBlack outline-none p-2' />

            </div>
            <div className=' flex items-center justify-between space-x-5'>
              <Button text='Shipped' color='bg-coolDarkerGreen' />
              <Button onClick={() => setOpen(false)} text='Cancel' color='bg-coolDarkerGreen' />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SellerShip;
