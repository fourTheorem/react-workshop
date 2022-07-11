import React from 'react'
import ReactDOM from 'react-dom/client'

interface Transaction {
  id: string,
  description: string,
  amount: number
}

interface TransactionProps {
  data: Transaction[]
}

const money = 220
const latestTransactions: Transaction[] = [
  { id: 'a6853689-59d0-451e-a920-f029ed91520b', description: 'Restaurant', amount: 50 },
  { id: 'e2a7eb34-4317-42b1-b937-bd7e0dc6d731', description: 'Coffee', amount: 2 }
]

const Transactions = ({ data }: TransactionProps) => {
  if (!data.length) {
    return (<div>No transaction available</div>)
  }

  return (
    <div>
      <h3>Latest transactions</h3>
      <ul>
        { data.map((transaction) => (
          <li key={transaction.id}>{transaction.amount} ({transaction.description})</li>
        )) }
      </ul>
    </div>
  )
}

const App = () => (
  <div>
    <h2>You have { money > 0 ? 'some' : 'no' } Money!</h2>
    <p>Current Balance: {money}</p>
    <Transactions data={latestTransactions}/>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
