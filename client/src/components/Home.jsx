import React,{ useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Cart from './Cart'

const Home = () => {

  const { addItem } = useContext(ItemContext);

  const handleAddItem = () => {
    let itemName = prompt('Enter Item Name : ');
    addItem(itemName);

  }

  return (
    <div className="container pt-3">
      <h2 className='text-center'>Shopping Cart</h2>
      <button className='btn btn-primary' onClick={handleAddItem}>Add Item</button>
      <Cart />
    </div>
  )
}

export default Home