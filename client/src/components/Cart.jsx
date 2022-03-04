import React,{ useContext,useEffect,useState } from 'react';
import { ItemContext } from '../contexts/ItemContext'
import Item from './Item';


const Cart = () => {

    const { items,getAllItems } = useContext(ItemContext);

    useEffect(() => {
        getAllItems();
    },[])


    return (
        items.map((item) => {
            return <Item key={item._id} item={item} />
        })
    )
}

export default Cart;