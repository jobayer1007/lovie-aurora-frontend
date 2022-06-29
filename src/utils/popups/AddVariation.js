import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { variation } from '../../atoms/popup';
import {BsPlus} from 'react-icons/bs'
import Button from '../../components/inputs/Button';
import SmallTable from '../../components/utils/SmallTable';

const AddVariation = ({inventory}) => {

    const [mainImage, setMainImage] = useState(null)

    const [productData, setProductData] = useState({
        mainImage: mainImage,

    })

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
        console.log(productData)
    }
 
    const [adminState,setAdminState]=useRecoilState(variation)
  return (

    <div className='p-5 flex flex-col justify-center '>
      <h1 className='font-bold text-center text-coolDarkGreen text-[24px] lg:text-[32px]'>Add a Variation</h1>
      <div className='p-4 lg:p-10 flex flex-col items-start py-6 max-w-[60rem]' >


{ !inventory ?  <div className='p-3 space-y-2 max-w-screen-lg'>
    <h3 className='text-coolDarkGreen font-semibold text-sm md:text-[18px]'>Style</h3>
    <input className="flex text-coolBlack  pr-2 border-2 rounded-[4px] border-[#337357] overflow-hidden py-1.5 items-center w-[17rem]"/>
</div> : <div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold text-[18px]'>Select Product</h3>
    <div className="flex text-coolBlack  pr-2 border-2 rounded-[4px] border-[#337357] overflow-hidden  items-center w-[40rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-2 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha">Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div> }
     



{ !inventory  &&  <div className='p-3 space-y-3 cursor-pointer'>
    {/* img  */}
    <p className="text-coolDarkGreen text-sm">Upload an image for this style , if you have one</p>
    <label htmlFor="mainImage" className='cursor-pointer'>
     <div className="grid grid-cols-7 gap-2 ">
    <div className='rounded-[5px] text-coolBlack p-[37px] flex text-lg md:text-xl items-center justify-center border-2 border-dashed border-gray-400 w-full h-[140px]'>
    <input accept='image/*' onChange={(e) => handleReadImage(e.target.files[0])} name='mainImage' type='file' hidden id='mainImage' />

                    +
                </div>


               
            </div> 
    </label>
</div> }


<div className='flex'>
 {inventory  && <div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold text-sm md:text-[18px]'>Style</h3>
    <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-1.5 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Style1">Style1</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div> }

<div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold text-sm md:text-[18px]'>Color</h3>
    <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-1.5 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Style1">Style1</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div>

<div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold text-sm md:text-[18px]'>Size</h3>
    <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-1.5 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Style1">Style1</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div>
<div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold  text-sm md:text-[18px]'>Quantity</h3>
    <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-1.5 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Style1">Style1</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div>

{!inventory   &&   <div className='p-3 space-y-2'>
    <h3 className='text-coolDarkGreen font-semibold text-sm md:text-[18px]'>Price USD</h3>
    <div className="flex text-coolBlack pr-2 border-2 rounded-[4px] overflow-hidden border-[#337357]  items-center  w-[7rem] md:w-[10rem]">
                            <select
                                defaultValue="Boboboom 3D Printed Gun Necklace Gift For Friends Family Pendant Cha"
                                required className='px-4 py-1.5 w-full outline-none' name="United Kingdom" id="country">
                                <option value="Style1">Style1</option>
                                <option value="China">China</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
</div> }


</div>

<div className='p-3'>

<Button color='bg-coolDarkGreen' text='Add' />
</div>

<div className='p-3'>
    <SmallTable rows={2} price={true} />
</div>

<div className='p-3 flex space-x-7'>

<Button color='bg-coolDarkGreen' text='Save' />
<Button color='bg-coolDarkGreen' text='Cancel' onClick={()=>setAdminState({...adminState,type:"addVariation",open:false})}  />
</div>

      </div>


    </div>
  );
}

export default AddVariation;
