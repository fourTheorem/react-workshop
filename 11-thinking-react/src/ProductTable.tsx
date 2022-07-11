import React, { ReactElement } from 'react'
import ProductCategoryRow, { ProductCategoryRowProps } from './ProductCategoryRow'
import ProductRow, { ProducRowProps } from './ProductRow'
import { Product } from './types'

interface ProductTableProps {
  products: Product[]
}

type TableRow = ReactElement<ProductCategoryRowProps> | ReactElement<ProducRowProps>

export default function ProductTable ({ products }: ProductTableProps) {
  const rows: TableRow[] = []
  let lastCategory: string | null = null

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    )
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
