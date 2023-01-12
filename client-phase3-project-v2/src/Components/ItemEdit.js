import React, {useState} from "react";


const ItemEdit = ({seasons, setSeasons, clickedItems, setClickedItems, item, setEditMode, deleteItem, editedItem}) => {
    const [editItem, setEditItem] = useState(item)

    function saveEdit(){

  //  e.preventDefault()

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
            season_id: editItem.season_id,
            designer_id: editItem.designer_id
        
          }),

        })
        .then((r) => r.json())
        .then((update) => { console.log("fetch update", update)
          editedItem(update)
          updatePatch(update)
          updateSeasonItem(update)})
          .catch((err) => console.log("fetch error:", err))

  
    }

    // console.log("fetch item", editItem)

    function updateSeasonItem(updatedItem){

     const season = seasons.find((s) => s.id == updatedItem.season_id)

     const seasonItems = season.items.filter((i) => i.id !== updatedItem.id)

     const newItemAdd = {...season, items: [...seasonItems, updatedItem]}

     const seasonsMap = seasons.map((s) => s.id === season.id? newItemAdd : s)

     setSeasons(seasonsMap)
    //  setClickedItems(newItemAdd.items)

      console.log("test!!", season)
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
        
            <form className="item"  >
            <input name={"name"} value={editItem.name} onChange={updateInput}></input>  
            <input name={"color"} value={editItem.color} onChange={updateInput}></input>
            <input name={"size"} value={editItem.size} onChange={updateInput}></input>
            <input name={"price"} value={editItem.price} onChange={updateInput}></input>
            <input name={"stock_quantity"} value={editItem.stock_quantity} onChange={updateInput}></input>
            <div className={"editButtons"} >
            <button type="button" onClick={() => {saveEdit(); setEditMode(false);}}>SAVE</button>
            <button onClick={() => setEditMode(false)}>CANCEL</button>
            <button onClick={() => {setEditMode(false); fetchDelete();}}>DELETE</button>
            </div>
            
            </form>
       

          
    </div>
    )



}

export default ItemEdit