import React from 'react';

const ProductTable = () => {
  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead className="uppercase bg-gray-600 text-gray-200">
          <tr>
            <th className="py-1 border text-center font-bold p-4" contentEditable>
              Product-ID
            </th>
            <th className="py-1 border text-center font-bold p-4" contentEditable>
              Description
            </th>
            <th className="py-1 border text-center font-bold p-4" contentEditable>
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-600">
          <tr className="py-2">
            <td className="py-2 border text-center p-4" contentEditable>
              YY-853581
            </td>
            <td className="py-2 border text-center p-4" contentEditable>
              Notebook Basic
            </td>
            <td className="py-2 border text-center p-4" contentEditable>
              $ 299
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
