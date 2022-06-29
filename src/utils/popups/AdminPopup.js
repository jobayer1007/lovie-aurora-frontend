import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Button from "../inputs/Button";
import Chip from '@mui/material/Chip';
import { useRecoilState } from 'recoil';
import { sellerPopup, variation } from '../../atoms/popup';
import { ModalHeading } from './utils'
import { Checkmark } from 'react-ionicons';
import AddVariation from './AddVariation';
const AdminPopup= () => {
    const [adminState, setAdminState] = useRecoilState(variation);

    const handleClose = () => {
        setAdminState({ ...adminState, type: null, open: false });
    };

    console.log(adminState.open)
    return (
        <>
            <Dialog
                open={adminState.open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {adminState.type === 'addVariation' ? <div className="p-4 lg:p-8"><AddVariation handleClose={handleClose} /> </div> : ''}
                {adminState.type === 'addVariation1' ? <div className="p-4 lg:p-8"><AddVariation inventory={true}  handleClose={handleClose} /> </div> : ''}
                {adminState.type === 'addVariation2' ? <div className="p-4 lg:p-8"><AddVariation  inventory={true} handleClose={handleClose} /> </div> : ''}
             


            </Dialog>
        </>
    )
}




export default AdminPopup