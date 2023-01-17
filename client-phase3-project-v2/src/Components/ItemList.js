import React from "react"
import Item from "./Item"

const ItemList = ({seasons, setSeasons, clickedItems, setClickedItems, deleteItem, editedItem, isDesigner}) =>{

    let clickMap = clickedItems?.map((item) => 

                (<Item seasons={seasons} setSeasons={setSeasons} key={item.id} 
                item={item} 
                stock={item.stock_quantity}
                deleteItem={deleteItem} 
                clickedItems={clickedItems} 
                setClickedItems={setClickedItems}
                editedItem={editedItem} isDesigner={isDesigner}/> ))
    
return (

    <div className="itemContainer">
        <div className={"designerItemsDisplay"}> {clickMap} </div>
    </div>

)}

export default ItemList