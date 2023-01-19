import React, {useState, useEffect} from "react";

const ItemAdd = ({setNewClicked, designers, setDesigners, addSeasonItem, seasons, isDesigner, clickedItems, setClickedItems, 
    currentDesigner, addDesignerItem}) => {
    const [itemForm, setItemForm] = useState({name: "", color: "", size: "", price: "", stock_quantity: "", designer_id: "", season_id: 1 })
    const [designerForm, setDesignerForm] = useState("")

function addItem(e) {

    e.preventDefault();

    if (itemForm.name.length == 0){alert("Please enter item name.")}

    else {
        fetch(`http://localhost:3000/items`,{

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: itemForm.name,
                color: itemForm.color,
                size: itemForm.size,
                price: itemForm.price,
                stock_quantity: itemForm.stock_quantity,
                designer_id: currentDesigner.id,
                season_id: itemForm.season_id}),})
            .then((r)=> r.json())
            .then((data)=> {
                clearForm()
                addDesignerItem(data)
                addSeasonItem(data)
                setClickedItems([...clickedItems, data])             
})}
}

function addDesigner(e){
    e.preventDefault()

        if (designerForm.length === 0){alert("Please enter a designer name.")}
        else {
            fetch(`http://localhost:3000/designers`,
            
                { method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: designerForm,
                }),})
                .then((r) => r.json())
                .then((data) => {clearForm() 
                    setDesigners([...designers, data])
                    setNewClicked(data) })
}}

function popForm(e){
     formAlert();
     setItemForm({...itemForm, [e.target.name]: e.target.value})
}

function clearForm() {
    setDesignerForm("")
    setItemForm({
    name: "", color: "", size: "", price: "",stock_quantity: "", designer_id: "", season_id: 1 })
}

function formAlert(){
    if(isDesigner == false){alert("Please select a designer from the left, before adding an item")}
}

return(
    <div className="formDiv">
        
        <h3 className="addTitle">ADD ITEM</h3>
        <p className="adding" style={{display: isDesigner? 'initial' : 'none'}}>adding to {currentDesigner.name}</p>
        
        <form className="form" onSubmit={addItem}>
            
            <label>Item Name</label>
            <input name="name" value={itemForm.name} onChange={popForm}></input>
            
            <label>Season</label>
            <select name="season_id" value={itemForm.season_id} onChange={popForm}>
                {seasons.map((s) => {return <option  value={s.id} >{s.season}</option>})}
            </select>

            <label>Color</label>
            <input name="color" value={itemForm.color} onChange={popForm} ></input>
        
            <label>Size</label>
            <input name="size" value={itemForm.size} onChange={popForm}></input>

            <label>Price</label>
            <input name="price" value={itemForm.price} onChange={popForm}></input>

            <label>Stock</label>
            <input name="stock_quantity" value={itemForm.stock_quantity} onChange={popForm}></input>
            
            <button type="submit">SUBMIT</button>
            <button onClick={clearForm} >CANCEL</button>

       </form>

      {/* ADD DESIGNER */}

       <h3 style={{paddingTop: "30px"}} className="addTitle">ADD DESIGNER</h3>
       <form className="form">
            <label>Designer Name</label>
                <input name="name" value={designerForm} onChange={(e) => setDesignerForm(e.target.value)}></input>
            <button type="button" onClick={addDesigner} >SUBMIT</button>
            <button type="button" onClick={clearForm} >CANCEL</button>
       </form>

    </div>

    )
}


export default ItemAdd