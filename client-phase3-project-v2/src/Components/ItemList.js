import React from "react"
import Item from "./Item"


const ItemList = ({clickedItems, setClickedItems, deleteItem}) =>{

    // console.log("clicked items in ItemList", clickedItems[0].name)

 
    
    let clickMap = clickedItems.map((item) => 

        ( <Item key={item.id} 
         item={item} 
         stock={item.stock_quantity}
         deleteItem={deleteItem} 
         clickedItems={clickedItems} 
         setClickedItems={setClickedItems}/> )
     )
    

return (

// Map the component Item here, and send the map Item to Item Edit

<div className={"designerItemsDisplay"} >


    {clickMap}


</div>


)

}

export default ItemList