import React, { useState } from 'react'

import { Product } from './types'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export interface FilterableProductsTableProps {
  products: Product[]
}

export default function FilterableProductTable ({ products }: FilterableProductsTableProps) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value)
  }

  const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInStockOnly(event.target.checked)
  }

  const filteredProducts = products.filter((product) => {
    if (product.name.toLowerCase().includes(filterText.toLowerCase())) {
      if (inStockOnly) {
        return product.stocked
      }
      return true
    }

    return false
  })

  return (
    <div>
      <SearchBar
        {...{ filterText, inStockOnly, handleFilterTextChange, handleInStockChange }}
      />

      <ProductTable products={filteredProducts} />
    </div>
  )
}
