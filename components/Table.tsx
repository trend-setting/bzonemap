import React from 'react';

const ProductTable = () => {
  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead className="uppercase bg-gray-600 text-gray-200">
          <tr>
            <th className="py-1 border text-center font-bold p-4" contentEditable>
              
            </th>
            <th className="py-1 border text-center font-bold p-4" contentEditable>

            </th>
            <th className="py-1 border text-center font-bold p-4" contentEditable>

            </th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-600">
          <tr className="py-2">
            <td className="py-2 border text-center p-4" contentEditable>

            </td>
            <td className="py-2 border text-center p-4" contentEditable>

            </td>
            <td className="py-2 border text-center p-4" contentEditable>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
