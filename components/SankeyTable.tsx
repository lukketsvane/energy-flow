import { TableProps } from '../types';

export function SankeyTable({ data, handleEdit, handleRemove }: TableProps) {
  return (
    <table className="w-full mt-8">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Weight</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, i) => (
              <td key={i}>
                <input type="text" name={i.toString()} value={cell} onChange={(e) => handleEdit(index, e)} className="rounded border border-gray-400 p-2 w-full" />
              </td>
            ))}
            <td>
              <button onClick={() => handleRemove(index)} className="py-2 px-4 rounded bg-red-500 text-white">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
