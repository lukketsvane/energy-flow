// SankeyForm.tsx

import { InputProps } from './types';

export function SankeyForm({ input, options, handleChange, handleSubmit, handleOptionsChange }: InputProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input type="text" name="from" placeholder="From" value={input.from} onChange={handleChange} className="rounded border border-gray-400 p-2" />
        <input type="text" name="to" placeholder="To" value={input.to} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
        <input type="text" name="weight" placeholder="Weight" value={input.weight} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
        <button type="submit" className="ml-2 rounded bg-blue-500 text-white px-4 py-2">Add</button>
      </div>
      <div className="mb-4">
        <label htmlFor="fontName">Font Name</label>
        <select id="fontName" name="fontName" value={options.sankey.node.label.fontName} onChange={e => handleOptionsChange(e as unknown as React.ChangeEvent<HTMLInputElement>)} className="ml-2 rounded border border-gray-400 p-2">
          <option value="Arial">Arial</option>
          <option value="Times-Roman">Times-Roman</option>
          <option value="Helvetica">Helvetica</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="fontSize">Font Size</label>
        <input type="text" id="fontSize" name="fontSize" value={options.sankey.node.label.fontSize} onChange={handleOptionsChange} className="ml-2 rounded border border-gray-400 p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="fontColor">Font Color</label>
        <input type="text" id="fontColor" name="color" value={options.sankey.node.label.color} onChange={handleOptionsChange} className="ml-2 rounded border border-gray-400 p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="bold">Bold</label>
        <input type="checkbox" id="bold" name="bold" checked={options.sankey.node.label.bold} onChange={e => handleOptionsChange({ ...e, target: { ...e.target, value: e.target.checked } } as unknown as React.ChangeEvent<HTMLInputElement>)} className="ml-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="italic">Italic</label>
        <input type="checkbox" id="italic" name="italic" checked={options.sankey.node.label.italic} onChange={e => handleOptionsChange({ ...e, target: { ...e.target, value: e.target.checked } } as unknown as React.ChangeEvent<HTMLInputElement>)} className="ml-2" />
      </div>
    </form>
  );
}
