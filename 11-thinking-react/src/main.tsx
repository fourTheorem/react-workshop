import React from 'react'
import ReactDOM from 'react-dom/client'

import PRODUCTS from './data'
import FilterableProductsTable from './FilterableProductsTable'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <FilterableProductsTable products={PRODUCTS} />
  </React.StrictMode>
)
