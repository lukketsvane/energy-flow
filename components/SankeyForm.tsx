import { InputProps } from './types';

export function SankeyForm({ input, handleChange, handleSubmit }: InputProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input type="text" name="from" placeholder="From" value={input.from} onChange={handleChange} className="rounded border border-gray-400 p-2" />
        <input type="text" name="to" placeholder="To" value={input.to} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
        <input type="text" name="weight" placeholder="Weight" value={input.weight} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
        <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleChange} className="ml-2 rounded border border-gray-400 p-2" />
        <button type="submit" className="ml-2 rounded bg-blue-500 text-white px-4 py-2">Add</button>
      </div>
    </form>
  );
}
