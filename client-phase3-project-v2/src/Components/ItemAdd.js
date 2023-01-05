import React, {useState, useEffect} from "react";

const ItemAdd = ({clickedItems, setClickedItems, 
    designerResponse, setDesignerResponse,
    setCurrentDesigner, setClicked, currentDesigner}) => {

    // const [designerResponse, setDesignerResponse] = useState({id:"", name: ""})
    const [itemForm, setItemForm] = useState({name: "", color: "", size: "", price: "", stock_quantity: "", designer_id: "" })
    const [designerForm, setDesignerForm] = useState("")


    // ADD ITEM Pseudo Code
    // Designer form checks if it exists already in the designer database
    // If it does, grab the ID
    // If it does not, create it, and then grab the ID
    // 
    // Next, add the item to the database
    // Pull in the designer ID and assign it to the foreign Key on the Item
    // Send post request

function addItem(e) {

    e.preventDefault();

    fetch(`http://localhost:3000/designers`, {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: designerForm
    
    }),
    })
    .then((res) => res.json())
    .then((r) => {setDesignerResponse({id: r.id, name: r.name}); 
                    setCurrentDesigner({id: r.id, name: r.name});})
     
    }


    // function secondFetch(){

    //     fetch(`http://localhost:3000/items`,{

    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: itemForm.name,
    //         color: itemForm.color,
    //         size: itemForm.size,
    //         price: itemForm.price,
    //         stock_quantity: itemForm.stock_quantity,
    //         designer_id: designerResponse.id
        
    //       }),
    
    
    //     })
    // .then(() => clearForm())
    // .then(() => {setClickedItems([...clickedItems, itemForm])})


    // }

    useEffect(()=> {
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
        designer_id: designerResponse.id
    
      }),


    })
    .then(() => clearForm())
    .then(() => {
        setClickedItems([...clickedItems, itemForm])}
)}, [designerResponse])


function popForm(e){

    setItemForm({...itemForm, [e.target.name]: e.target.value

    })
}



function clearForm() {
setDesignerForm("")
setItemForm({
    name: "", color: "", size: "", price: "",stock_quantity: "", designer_id: "" })
}



    return(
        <div className={"formDiv"}>
            <h3>ADD ITEM</h3>
       <form className={"form"} onSubmit={addItem}>
       
        <label>Designer</label>
        <input value={designerForm} onChange={(e) => setDesignerForm(e.target.value)}></input>
       
        <label>Item Name</label>
        <input name={"name"} value={itemForm.name} onChange={popForm}></input>

        <label>Color</label>
        <input name={"color"} value={itemForm.color} onChange={popForm} ></input>
    
        <label>Size</label>
        <input name={"size"} value={itemForm.size} onChange={popForm}></input>

        <label>Price</label>
        <input name={"price"} value={itemForm.price} onChange={popForm}></input>

        <label>Stock</label>
        <input name={"stock_quantity"} value={itemForm.stock_quantity} onChange={popForm}></input>
        
        <button type="submit" >SUBMIT</button>
       <button onClick={clearForm} >CANCEL</button>
       </form>

      
      
       </div>

    )
}


export default ItemAdd