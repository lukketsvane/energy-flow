// pages/Sankey.tsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Chart } from 'react-google-charts';

export default function Sankey() {
  const [data, setData] = useState([['A', 'X', '5', 'A to X'], ['A', 'Y', '7', 'A to Y'], ['A', 'Z', '6', 'A to Z'], ['B', 'X', '2', 'B to X'], ['B', 'Y', '9', 'B to Y'], ['B', 'Z', '4', 'B to Z']]);
  const [input, setInput] = useState({ from: '', to: '', weight: '', label: '' });
  const [options, setOptions] = useState({
    height: 400,
    sankey: {
      node: {
        colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
        label: {
          fontName: 'Times-Roman',
          fontSize: 14,
          color: '#871b47',
          bold: true,
          italic: true
        },
        nodePadding: 80,
        width: 2
      },
      link: {
        colorMode: 'gradient',
        colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c']
      }
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData([...data, [input.from, input.to, input.weight, input.label]]);
    setInput({ from: '', to: '', weight: '', label: '' });
  };

  const handleEdit = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newData = [...data];
    newData[index][event.target.name] = event.target.value;
    setData(newData);
  };

  const handleOptionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      sankey: {
        ...options.sankey,
        node: {
          ...options.sankey.node,
          [event.target.name]: event.target.value
        }
      }
    });
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-6 border-r-2 border-gray-300">
        <form className="mb-4" onSubmit={handleSubmit}>
          <input className="border p-2 rounded mr-2" name="from" value={input.from} onChange={handleChange} placeholder="From" required />
          <input className="border p-2 rounded mr-2" name="to" value={input.to} onChange={handleChange} placeholder="To" required />
          <input className="border p-2 rounded mr-2" name="weight" value={input.weight} onChange={handleChange} placeholder="Weight" required />
          <input className="border p-2 rounded mr-2" name="label" value={input.label} onChange={handleChange} placeholder="Label" required />
          <button className="border p-2 rounded bg-blue-500 text-white" type="submit">Add</button>
        </form>
        <form className="mb-4">
          <label className="mr-2">Font Name:</label>
          <input className="border p-2 rounded mr-2" name="fontName" value={options.sankey.node.label.fontName} onChange={handleOptionsChange} placeholder="Font Name" required />
          <label className="mr-2">Font Size:</label>
          <input className="border p-2 rounded mr-2" name="fontSize" type="number" value={options.sankey.node.label.fontSize} onChange={handleOptionsChange} placeholder="Font Size" required />
        </form>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">From</th>
              <th className="border p-2">To</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Label</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td><input className="border p-2 rounded" name="0" value={row[0]} onChange={(event) => handleEdit(index, event)} /></td>
                <td><input className="border p-2 rounded" name="1" value={row[1]} onChange={(event) => handleEdit(index, event)} /></td>
                <td><input className="border p-2 rounded" name="2" type="number" value={row[2]} onChange={(event) => handleEdit(index, event)} /></td>
                <td><input className="border p-2 rounded" name="3" value={row[3]} onChange={(event) => handleEdit(index, event)} /></td>
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
            ['From', 'To', 'Weight', { role: 'tooltip' }],
            ...data.map((row) => [row[0], row[1], parseInt(row[2]), row[3]])
          ]}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}
