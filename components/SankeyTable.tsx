import { TableProps } from './types';

export function SankeyTable({ data, handleEdit, handleRemove }: TableProps) {
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Weight</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <input type="text" name={cellIndex.toString()} value={cell} onChange={(e) => handleEdit(index, e)} className="rounded border border-gray-400 p-2" />
              </td>
            ))}
            <td>
              <button onClick={() => handleRemove(index)} className="rounded bg-red-500 text-white px-4 py-2">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
