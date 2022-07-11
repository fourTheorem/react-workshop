import React from 'react'

export interface SearchBarProps {
  filterText: string,
  inStockOnly: boolean,
  handleFilterTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleInStockChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar ({ filterText, inStockOnly, handleFilterTextChange, handleInStockChange }: SearchBarProps) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
      <label>
        <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}
