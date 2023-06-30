import React, { useState, ChangeEvent, FormEvent } from "react";
import { Chart } from "react-google-charts";
import { SankeyForm } from '@/components/SankeyForm';
import { SankeyTable } from '@/components/SankeyTable';

type LabelOptions = {
  fontName: string;
  fontSize: number;
  color: string;
  bold: boolean;
  italic: boolean;
  [key: string]: string | number | boolean;
}

export default function Sankey() {
  const [data, setData] = useState([['A', 'X', 5], ['A', 'Y', 7], ['A', 'Z', 6], ['B', 'X', 2], ['B', 'Y', 9], ['B', 'Z', 4]]);
  const [input, setInput] = useState({ from: '', to: '', weight: '', label: '' });
  const [options, setOptions] = useState({
    height: 400,
    sankey: {
      node: {
        colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
        width: 30,
        nodePadding: 80,
        label: { fontName: 'Times-Roman', fontSize: 14, color: '#871b47', bold: true, italic: true }
      },
      link: {
        colorMode: 'gradient',
        colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'],
        color: { fill: '#d799ae', strokeWidth: 0 }
      }
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData([...data, [input.from, input.to, parseInt(input.weight)]]);
    setInput({ from: '', to: '', weight: '' });
  };


  const handleOptionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions(prev => {
      const newOptions = { ...prev };
      (newOptions.sankey.node.label as LabelOptions)[event.target.name] = event.target.value;
      return newOptions;
    });
  };


  const handleEdit = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newData = [...data];
    newData[index][Number(event.target.name)] = event.target.value;
    setData(newData);
  };

  const handleRemove = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="flex min-h-screen p-4">
      <div className="w-1/2 p-6 overflow-auto">
        <SankeyForm input={input} options={options} handleChange={handleChange} handleSubmit={handleSubmit} handleOptionsChange={handleOptionsChange} />
        <SankeyTable data={data} handleEdit={handleEdit} handleRemove={handleRemove} />
      </div>
      <div className="w-1/2 p-6">
        <Chart
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Weight'],
            ...data
          ]}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}