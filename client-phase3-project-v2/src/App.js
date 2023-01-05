import React, { useEffect, useState} from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

import Designers from './Sections/Designers';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';


function App() {

  const [designers, setDesigners] = useState([])
  const [currentDesigner, setCurrentDesigner] = useState({id:"", name:""})
  const [clickedItems, setClickedItems] = useState([])    
  const [designerResponse, setDesignerResponse] = useState({id:"", name: ""})


  useEffect (() => {fetch("http://localhost:3000/designers")
    .then((res) => res.json())
    .then((des) => setDesigners(des))},[designerResponse]
  )

function setClicked (e){

  setCurrentDesigner({id: e.target.id, name: e.target.innerHTML})

  let id = e.target.id

  // retrieveItems(id)

  fetch(`http://localhost:3000/items/${id}`)
      .then((r) => r.json())
      .catch((err) => console.log("error:", err))
      .then((res)=> setClickedItems(res))

}

console.log("app clicked items", clickedItems)


function deleteItem(id){

  let updated = clickedItems.filter((item) => item.id !== id) 
  setClickedItems(updated)

}


  return (

    <HashRouter>
    <Nav currentDesigner={currentDesigner} />
    <Routes>
    <Route exact path="/" element={
    <>
    <ItemList  clickedItems={clickedItems} setClickedItems={setClickedItems} currentDesigner={currentDesigner} deleteItem={deleteItem} /> 
      <Designers designers={designers} setClicked={setClicked} 
      clickedItems={clickedItems} setClickedItems={setClickedItems} 
      designerResponse={designerResponse} setDesignerResponse={setDesignerResponse} 
      setCurrentDesigner={setCurrentDesigner} currentDesigner={currentDesigner} /> 
      
    </>} />
  
    </Routes>
    
    </HashRouter>
    

  );
}

export default App;
