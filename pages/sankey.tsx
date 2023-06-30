// pages/Sankey.tsx
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

export default function Sankey() {
  const [data, setData] = useState([['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]]);
  const [input, setInput] = useState({ from: '', to: '', weight: 0 });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, [input.from, input.to, parseInt(input.weight)]]);
    setInput({ from: '', to: '', weight: 0 });
  };

  const handleEdit = (index, event) => {
    const newData = [...data];
    newData[index][event.target.name] = event.target.value;
    setData(newData);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-6 border-r-2 border-gray-300">
        <form className="mb-4" onSubmit={handleSubmit}>
          <input className="border p-2 rounded mr-2" name="from" value={input.from} onChange={handleChange} placeholder="From" required />
          <input className="border p-2 rounded mr-2" name="to" value={input.to} onChange={handleChange} placeholder="To" required />
          <input className="border p-2 rounded mr-2" name="weight" type="number" value={input.weight} onChange={handleChange} placeholder="Weight" required />
          <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add</button>
        </form>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">From</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Weight</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td><input className="border p-2 rounded" name="0" value={row[0]} onChange={(event) => handleEdit(index, event)} /></td>
                <td><input className="border p-2 rounded" name="1" value={row[1]} onChange={(event) => handleEdit(index, event)} /></td>
                <td><input className="border p-2 rounded" name="2" type="number" value={row[2]} onChange={(event) => handleEdit(index, event)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 p-6">
        <Chart
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Weight'],
            ...data
          ]}
          options={{ width: 600 }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}
