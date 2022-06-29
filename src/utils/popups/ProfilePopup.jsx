import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { createProfilePopup } from '../../atoms/popup';
import Button from "../inputs/Button";
import { ModalHeading } from './utils';

const CreateProfile = () => {
    const [open, setOpen] = useRecoilState(createProfilePopup);

    const handleClose = () => {
        setOpen({ ...open, show: false });
    };

    const [profileImage, setProfileImage] = useState(null)

    const handleSelectImage = (e) => {
        if (e.target.files[0] != undefined) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfileImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const data = {
        name: 'Aman pandey',
        date: '18',
        month: '07',
        year: '2005'
    }
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const year = new Date().getFullYear()
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='flex flex-col text-coolBlack pb-3 pt-4 pl-4 pr-4 md:pr-1 relative w-full lg:min-w-[700px] max-w-[700px] '>
                    <div className="flex flex-col md:flex-row flex-[0.9]">
                        <div className="image flex-[0.47]  h-inherit justify-center flex flex-col relative overflow-hidden w-full md:w-[40vw] ">
                            <div className="mb-2">
                                <ModalHeading
                                    color='coolDarkerGreen'
                                    text={`${open.type === 'create' ? 'Create' : 'Edit'} Your Profile`}
                                />
                            </div>
                            <img src={profileImage || '/imagefirst.png'} className='max-h-[300px] w-full md:max-h-[440px] object-cover h-full my-auto' />
                            <div className="flex-1 bg-gray-100 animate-pulse max-h-[300px] md:max-h-[440px]" ></div>
                            <form className='flex flex md:hidden flex-[0.5] items-center'>
                                <label htmlFor="file">
                                    <div className="py-2 w-fit my-3 px-8 rounded-[4px] text-sm bg-coolDarkerGreen hover:opacity-60 cursor-pointer text-white mr-4">
                                        {open.type === 'create' ? 'Choose' : 'Change'} profile image</div>
                                    <input accept='image/*' id='file' type='file' hidden onChange={handleSelectImage} />
                                </label>

                            </form>
                        </div>
                        <div className="flex-[0.63] relative space-y-4 flex flex-col w-full">
                            <div className="hidden absolute right-2 top-1 md:flex ml-auto">
                                <IconButton onClick={handleClose} variant='outlined' className='absolute top-[-10px] right-[0px] self-end w-fit'>
                                    <Close />
                                </IconButton>
                            </div>
                            <form className='flex md:pt-4 space-y-5 flex-col md:pl-4 md:pr-4 pb-0'>
                                {/* <ModalHeading text={/> */}

                                <div className="flex flex-col ">
                                    <label htmlFor="username" className='my-2 font-semibold text-coolDarkerGreen'>{open.type === 'create' ? 'Username' : `Username: ${data.name}`}</label>
                                    <div className="flex text-coolBlack  border rounded-[4px] border-coolBlack overflow-hidden  items-center w-full">
                                        <input type='text' required placeholder={open.type === 'create' ? 'Enter Username' : `Enter New Username`} id='username' className='text-coolBlack w-full p-2' />
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <label htmlFor="birthday" className='my-2 font-semibold text-coolDarkerGreen'>Birthday Date</label>
                                    <div className="flex items-center flex-1 space-x-2 w-full">
                                        <div className="flex text-coolBlack flex-1 border rounded-[4px] border-coolBlack overflow-hidden items-center w-full ">
                                            <select required className='px-2 py-2 w-full' name="London" id="birthday">
                                                {monthNames.map(monthName => (<option key={monthName} value="Los Angeles">{monthName}</option>))}
                                            </select>
                                        </div>
                                        <div className="flex text-coolBlack border rounded-[4px] overflow-hidden  border-coolBlack  items-center w-full flex-1">
                                            <input type='number' max={31} min={1} required className='px-4 py-2 w-full' placeholder={`${open.type === 'create' ? 'Day' : `${data.date}`}`} />
                                        </div>
                                        <div className="flex text-coolBlack border rounded-[4px] overflow-hidden border-coolBlack  items-center w-full flex-1">
                                            <input type='number' max={year} min={1900} required className='px-4 py-2 w-full' placeholder={`${open.type === 'create' ? 'Year' : `${data.year}`}`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <label htmlFor="country" className='my-2 font-semibold text-coolDarkerGreen'>Country</label>
                                    <div className="flex text-coolBlack  border rounded-[4px] overflow-hidden border-coolBlack  items-center w-full ">
                                        <select required className='px-4 py-2 w-full' name="United Kingdom" id="country">
                                            <option value="India">India</option>
                                            <option value="China">China</option>
                                            <option value="United States">United States</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-[0.1]">
                        <form className='flex hidden md:flex flex-[0.5] justify-center flex-col items-center justify-center'>
                            <label htmlFor="file">
                                <div className="py-3 w-fit  hover:opacity-60 cursor-pointer  my-3 px-8 rounded-[4px] text-sm bg-coolDarkerGreen text-white mr-4">
                                    {open.type === 'create' ? 'Choose' : 'Change'} profile image</div>
                                <input accept='image/*' id='file' type='file' hidden onChange={handleSelectImage} />
                            </label>

                        </form>
                        <div className="mt-4 md:mt-0 flex flex-[0.55] justify-start items-center">
                            <button className="hover:opacity-60 cursor-pointer py-3 px-6 md:px-6 rounded-[4px] bg-coolDarkerGreen text-sm text-white mr-2 lg:mr-4">
                                Save
                            </button>
                            <div onClick={handleClose} className="hover:opacity-60 cursor-pointer cursor-pointer py-3 px-6 rounded-[4px] text-sm  bg-coolDarkerGreen text-white mr-4">
                                Cancel
                            </div>

                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default CreateProfile