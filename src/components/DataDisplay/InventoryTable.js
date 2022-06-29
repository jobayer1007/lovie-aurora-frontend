import React from "react";

const InventoryTable = () => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-sm my-2">
          <th className="pb-1 font-semibold">Item</th>
          <th className="pb-1 font-semibold">Date</th>
          <th className="pb-1 font-semibold">Price</th>
          <th className="pb-1 font-semibold">Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-sm text-textColor pt-4">Ribbed Vest</td>
          <td className="text-sm text-textColor pt-4">04/03/2022</td>
          <td className="text-sm text-textColor pt-4">$60</td>
          <td className="text-sm text-textColor pt-4">356</td>
        </tr>
        <tr>
          <td className="text-sm text-textColor pt-4">Ribbed Vest</td>
          <td className="text-sm text-textColor pt-4">04/03/2022</td>
          <td className="text-sm text-textColor pt-4">$60</td>
          <td className="text-sm text-textColor pt-4">356</td>
        </tr>
        <tr>
          <td className="text-sm text-textColor pt-4">Ribbed Vest</td>
          <td className="text-sm text-textColor pt-4">04/03/2022</td>
          <td className="text-sm text-textColor pt-4">$60</td>
          <td className="text-sm text-textColor pt-4">356</td>
        </tr>
        <tr>
          <td className="text-sm text-textColor pt-4">Ribbed Vest</td>
          <td className="text-sm text-textColor pt-4">04/03/2022</td>
          <td className="text-sm text-textColor pt-4">$60</td>
          <td className="text-sm text-textColor pt-4">356</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InventoryTable;
