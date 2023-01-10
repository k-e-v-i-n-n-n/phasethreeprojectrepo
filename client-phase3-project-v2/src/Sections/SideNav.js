import React from "react"
import Designer from "../Components/Designer"
import ItemAdd from "../Components/ItemAdd"

const SideNav = ({designers, setClicked, clickedItems, setClickedItems,
    designerResponse, setDesignerResponse, currentDesigner, setCurrentDesigner, addDesignerItem
    }) => {

let designerNames = designers.map((designer) =>
    { return  (<Designer currentDesigner={currentDesigner} setClicked={setClicked} id={designer.id} name={designer.name} key={designer.id} />)
    }
    )

    return(

        <div>
        <div className={'designerColumn'}>
            <h3 >DESIGNERS</h3>
        {designerNames}
        </div>
 


      <div>

      <ItemAdd addDesignerItem={addDesignerItem} clickedItems={clickedItems} setClickedItems={setClickedItems} 
      designerResponse={designerResponse} setDesignerResponse={setDesignerResponse} currentDesigner={currentDesigner}
      setCurrentDesigner={setCurrentDesigner} setClicked={setClicked} />
      </div>
  
        

       

        </div>
    )





}

export default SideNav