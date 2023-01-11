import React, { useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import SideNav from './Sections/SideNav';
import Header from './Sections/Header';
import ItemList from './Components/ItemList';
import Home from './Sections/Home';


function App() {

  const [designers, setDesigners] = useState([])
  const [seasons, setSeasons] = useState([])
  const [currentSeason, setCurrentSeason] = useState([])
  const [isDesigner, setIsDesigner] = useState(false)
  const [currentDesigner, setCurrentDesigner] = useState({id:"", name:""})
  const [clickedItems, setClickedItems] = useState([])    
  const [designerResponse, setDesignerResponse] = useState({id:"", name: ""})

  const { desId, season } = useParams()

  console.log("seasons:", seasons)

  useEffect (() => {fetch("http://localhost:3000/designers")
    .then((res) => res.json())
    .then((des) => setDesigners(des))
  },[])

  useEffect(() => {
  fetch("http://localhost:3000/seasons")
    .then((r) => r.json())
    .then((data) => setSeasons(data))
  }, [])



  console.log("isDesigner", isDesigner)

function setClicked (e){
  let id = e.target.id
  
  const designerFind = designers.find(des => des.id == id)

  setCurrentDesigner({id: id, name: e.target.innerHTML})
  setClickedItems(designerFind.items)
  setIsDesigner(true)
}

console.log("designers main", designers)

function showSeason (e){

  const seasonMap = seasons.find((s) => s.id == e.target.id )

  setClickedItems(seasonMap.items)
  setCurrentDesigner({id: seasonMap.id, name: seasonMap.season})
  setCurrentSeason({id: seasonMap.id, name: seasonMap.season})
  setIsDesigner(false)

  console.log("seasonMap.items", seasonMap.items)
  console.log("clciked in season", clickedItems)

  

  // const items = []

  // const itemsMap = designers.map((d) => d.items)

  // const mapItems = designers.map((d) => {
  // for (const item of d.items){
  //   if (parseInt(e.target.id) === item.season_id ) {
  //                     items.push(item)
  //   }}})
  
  // setClickedItems(items)

}


// FETCH Related State Updates*******************

function addSeasonItem(item){

const season = seasons.find((s)=> s.id == item.season_id)

const itemsUpdate = {...season, items: [...season.items, item]}

const seasonUpdate = seasons.map((s) => s.id == season.id? itemsUpdate : s)

setSeasons(seasonUpdate)
setClickedItems(itemsUpdate.items)


}

function editedItem(item){

  const designer = designers.find((d) => d.id == item.designer_id)

  const filterItems = designer.items.filter((i) => i.id !== item.id)

  const itemsUpdate = {...designer, items: [...filterItems, item] }

  const itemMap = designers.map((i) => i.id == designer.id ? itemsUpdate : i)

  setDesigners(itemMap)

}

function addDesignerItem(item){

  const designer = designers.find((d) => d.id == item.designer_id) 

  const updatedDesigner = {...designer, items: [...designer.items, item] }

  const updateDesigners = designers.map((d) => designer.id == d.id ? updatedDesigner : d )

  setDesigners(updateDesigners)

}

function deleteItem(item){

  const designer = designers.find((d) => d.id == item.designer_id) 

  const updatedItems = designer.items.filter((i) => i.id !== item.id )

  const updatedDesigner = {...designer, items: updatedItems }

  const updateDesigners = designers.map((d) => designer.id == d.id ? updatedDesigner : d )

  setDesigners(updateDesigners)

  setClickedItems(updatedItems)

}


  return (

    
   <BrowserRouter>
   <Header setIsDesigner={setIsDesigner} seasons={seasons} currentSeason={currentSeason} showSeason={showSeason} currentDesigner={currentDesigner} setCurrentDesigner={setCurrentDesigner} />
   <SideNav addSeasonItem={addSeasonItem} seasons={seasons} isDesigner={isDesigner} setIsDesigner={setIsDesigner} currentSeason={currentSeason} addDesignerItem={addDesignerItem} designers={designers} setDesigners={setDesigners} setClicked={setClicked} 
      clickedItems={clickedItems} setClickedItems={setClickedItems} 
      designerResponse={designerResponse} setDesignerResponse={setDesignerResponse} 
      setCurrentDesigner={setCurrentDesigner} currentDesigner={currentDesigner} /> 
    <Routes>
      <Route path='/' element={<Home/>} />
    <Route path={`designers/:desId`} element={
    <ItemList editedItem={editedItem}  clickedItems={clickedItems} setClickedItems={setClickedItems} currentDesigner={currentDesigner} deleteItem={deleteItem} />
    }/>

    <Route path={`/seasons/:season`} element={
    <ItemList editedItem={editedItem}  clickedItems={clickedItems} setClickedItems={setClickedItems} currentDesigner={currentDesigner} deleteItem={deleteItem} />
    } />
    </Routes>

  </BrowserRouter>
    
  
    

  );
}

export default App;
