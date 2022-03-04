import React,{ useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'

const Item = ({ item }) => {

    const { deleteItem } = useContext(ItemContext);

    const itemStyle = {
        width: '400px',
        backgroundColor: '#ecf0f1',
        margin: '5px auto',
        padding: '10px 25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px'
    }

    return (
        <>
            <div className="item" style={itemStyle}>
                <h5>{item.name}</h5>
                <i
                    className="fa-solid fa-trash-can"
                    onClick={() => deleteItem(item._id)}
                    style={{ color: 'red',cursor: 'pointer' }}>
                </i>
            </div>
        </>
    )
}

export default Item