import React from 'react'

export interface ProductCategoryRowProps {
  category: string
}

export default function ProductCategoryRow ({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}
