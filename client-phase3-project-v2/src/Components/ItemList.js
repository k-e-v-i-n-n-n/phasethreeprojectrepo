import React from "react"
import Item from "./Item"


const ItemList = ({clickedItems, setClickedItems, deleteItem, editedItem}) =>{

    let clickMap = clickedItems?.map((item) => 

        ( <Item key={item.id} 
         item={item} 
         stock={item.stock_quantity}
         deleteItem={deleteItem} 
         clickedItems={clickedItems} 
         setClickedItems={setClickedItems}
         editedItem={editedItem}/> )
     )
    

return (

// Map the component Item here, and send the map Item to Item Edit
<div className="itemContainer">
<div className={"designerItemsDisplay"}> {clickMap} </div>
</div>


)

}

export default ItemList