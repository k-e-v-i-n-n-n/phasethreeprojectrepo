import React, {useState, useEffect} from "react";


const ItemEdit = ({clickedItems, setClickedItems, item, setEditMode, deleteItem, editedItem}) => {
    const [editItem, setEditItem] = useState(item)

    function saveEdit(){

   

        fetch(`http://localhost:3000/items/${editItem.id}`, {

        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editItem.name,
            color: editItem.color,
            size: editItem.size,
            price: editItem.price,
            stock_quantity: editItem.stock_quantity,
            designer_id: editItem.designer_id
        
          }),

        })
        .then((r) => r.json())
        .then((update) => {
          editedItem(update)
          updatePatch(update)})

    }

    function updateInput(e){ 
        
        setEditItem({...editItem, [e.target.name]: e.target.value})

    }

    function updatePatch(updatedItem){

   let itemFilter = clickedItems.filter((filt) => filt.id !== updatedItem.id)

   setClickedItems([...itemFilter, updatedItem])

    }

    function fetchDelete(){
      fetch(`http://localhost:3000/items/${editItem.id}`,{
      method: "DELETE",})
      .then((r) => r.json())
      .then((data) => deleteItem(data))
    }

    return(

<div className="item">
        
            <form className="item" onSubmit={() => {saveEdit(); setEditMode(false);}} >
            <input name={"name"} value={editItem.name} onChange={updateInput}></input>  
            <input name={"color"} value={editItem.color} onChange={updateInput}></input>
            <input name={"size"} value={editItem.size} onChange={updateInput}></input>
            <input name={"price"} value={editItem.price} onChange={updateInput}></input>
            <input name={"stock_quantity"} value={editItem.stock_quantity} onChange={updateInput}></input>
            <div className={"editButtons"} >
            <button type="submit">SAVE</button>
            <button onClick={() => setEditMode(false)}>CANCEL</button>
            <button onClick={() => {setEditMode(false); fetchDelete();}}>DELETE</button>
            </div>
            
            </form>
       

          
    </div>
    )



}

export default ItemEdit