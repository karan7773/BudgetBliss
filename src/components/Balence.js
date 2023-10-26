import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';


const Balence = () => {
  const {transactions}=useContext(GlobalContext);
  
  const amount=transactions.map(transaction => transaction.amount);
  const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);

  return (
    <>
      <h4>Your Balence</h4>
      <h1 >${total}</h1>
    </>
  )
}

export default Balence
