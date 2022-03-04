import React,{ createContext,useState } from 'react'

export const ItemContext = createContext();

export const ItemProvider = (props) => {

    const HOST = 'http://localhost:5000';

    const initialItems = [];
    const [items,setItems] = useState(initialItems);

    const getAllItems = async () => {

        const response = await fetch(`${HOST}/api/items/useritems`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        setItems(json);
    }

    const addItem = async (itemName) => {

        const response = await fetch(`${HOST}/api/items/additem`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: itemName })
        });

        const item = await response.json();

        // Update Items on Frontend
        setItems(items.concat(item));
    }

    const deleteItem = async (itemId) => {

        const response = await fetch(`${HOST}/api/items/deleteItem/${itemId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        console.log(json);
    }

    return (
        <ItemContext.Provider value={{ items,addItem,deleteItem,getAllItems }}>
            {props.children}
        </ItemContext.Provider>
    )
}