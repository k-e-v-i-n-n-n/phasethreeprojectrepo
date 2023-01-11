import React, {useState} from "react";
import ItemEdit from "./ItemEdit";

const Item = ({item, clickedItems, setClickedItems, deleteItem, editedItem}) => {

const [editMode, setEditMode] = useState(false)
const [selectedItem, setSelectedItem] = useState(item)

const {color, size, price, name, stock_quantity } = item


    
    return (


<div >
        {editMode ? (<ItemEdit editedItem={editedItem} item={item} setEditMode={setEditMode} clickedItems={clickedItems} selectedItem={selectedItem} deleteItem={deleteItem} setClickedItems={setClickedItems}  /> )
        
        : 
        (<div className="item">

        <h5 className="itemText" >{name}</h5>
        <h6 className="itemText">{color}</h6>
        <h6 className="itemText">{size}</h6>
        <h6 className="itemText">{price}</h6>
        <h6 className="itemText"> Stock {stock_quantity}</h6>
        <button className="editButtons" onClick={() => setEditMode(true)}>EDIT</button>
        </div>)
}
  
</div>
        



    
)
    
}


export default Item