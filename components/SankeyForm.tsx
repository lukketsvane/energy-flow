import { InputProps } from './types';

export function SankeyForm({ input, options, handleChange, handleSubmit, handleOptionsChange }: InputProps) {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4">Add Data</h2>
      <div className="mb-4">
        <label htmlFor="from">From</label>
        <input type="text" id="from" name="from" value={input.from} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="to">To</label>
        <input type="text" id="to" name="to" value={input.to} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" name="weight" value={input.weight} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
      </div>
      <h2 className="text-xl mb-4 mt-8">Edit Options</h2>
      <div className="mb-4">
        <label htmlFor="fontName">Font Name</label>
        <select id="fontName" name="fontName" value={options.sankey.node.label.fontName} onChange={handleOptionsChange} className="ml-2 rounded border border-gray-400 p-2">
          <option value="Arial">Arial</option>
          <option value="Times-Roman">Times-Roman</option>
          <option value="Helvetica">Helvetica</option>
        </select>
      </div>
      <button type="submit" className="py-2 px-4 rounded bg-blue-500 text-white">Add</button>
    </form>
  );
}
