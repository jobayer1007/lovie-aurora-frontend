import React from 'react'

const ListData = ({ listData,price }) => {
    console.log(listData)
    return (
        <tr className='flex border-b items-center justify-between'>
            <td
                scope="col"
                className="py-3.5 pr-3 w-[95%] flex-[0.4] text-left text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.item}
                </div>
            </td>
            <td
                scope="col"
                className="py-3.5 pr-3 flex-[0.15] text-center text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.style}
                </div>
            </td>
            <td
                scope="col"
                className="py-3.5 pr-3 flex-[0.15] text-center text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.color}
                </div>
            </td>
            <td
                scope="col"
                className="py-3.5 pl-3 flex-[0.15] text-center text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.size}
                </div>
            </td>
            <td
                scope="col"
                className="py-3.5 pl-3 flex-[0.15] text-center text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.quantity}
                </div>
            </td>
            {price &&  <td
                scope="col"
                className="py-3.5 pl-3 flex-[0.15] text-center text-xs text-coolBlack flex items-center gap-2"
            >
                <div className="flex items-center gap-3">
                    {listData.price}
                </div>
            </td>}
           
        </tr>
    )
}

export default ListData