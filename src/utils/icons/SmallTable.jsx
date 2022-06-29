import React, { useEffect, useState } from 'react'
import ListData from './ListData'

const SmallTable = ({ rows,price }) => {

   const data = [
          { item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`, style: 'Gun-Shape', color: 'Green', size: 'XL', quantity: 18,  },
       { item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`, style: 'Gun-Shape', color: 'Green', size: 'XL', quantity: 18,  },
       { item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`, style: 'Gun-Shape', color: 'Green', size: 'XL', quantity: 18,  },
       { item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`, style: 'Gun-Shape', color: 'Green', size: 'XL', quantity: 18, },
       { item: `Boboboom 3D Printed Gun Necklace Gift for Friends Family Pendant and Chain  Included 2.6 pounds`, style: 'Gun-Shape', color: 'Green', size: 'XL', quantity: 18 }, 
     
           
        ] 
   
    const [list, setList] = useState(data)
    useEffect(() => {
        if (rows) {
            setList(data.slice(0, rows))
        }
    }, [rows])
    const headings = ['Item', 'Style', 'Color', 'Size', 'Quantity',price && 'Price']
    return (
        <table className="min-w-full  divide-y divide-gray-300 ">
            <thead>
                <tr className='flex items-center justify-between'>
                    {headings.map((heading, i) => (
                        <th
                            scope="col"
                            className={`py-3.5 pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2 ${i === 0 ? 'flex-[0.4]' : 'flex-[0.15]'}`}
                        >
                            <div className="flex items-center gap-3">
                                {heading}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {list.map((listData, i) => (
                    <ListData listData={listData} price={price} />
                ))}

            </tbody>
        </table>
    )
}

export default SmallTable