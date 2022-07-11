import React from 'react'
import { Product } from './types'

export interface ProducRowProps {
  product: Product
}

export default function ProductRow ({ product }: ProducRowProps) {
  const name = product.stocked
    ? product.name
    : <span style={{ color: 'red' }}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
