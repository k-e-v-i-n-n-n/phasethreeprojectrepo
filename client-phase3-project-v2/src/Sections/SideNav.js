import React, {useState} from "react"
import Designer from "../Components/Designer"
import ItemAdd from "../Components/ItemAdd"

const SideNav = ({addSeasonItem, seasons, isDesigner, setIsDesigner, designers, setDesigners, setClicked, clickedItems, setClickedItems,
    designerResponse, setDesignerResponse, currentDesigner, setCurrentDesigner, addDesignerItem
    }) => {

        const [designerEdit, setDesignerEdit] = useState(false)

let designerNames = designers.map((designer) =>
    { return  (<Designer designers={designers} setDesigners={setDesigners} designerEdit={designerEdit} setDesignerEdit={setDesignerEdit} currentDesigner={currentDesigner} setClicked={setClicked} id={designer.id} name={designer.name} key={designer.id} />)
    }
    )

    return(

        <div className="sideNav">
        <div className="designerColumn">
            <h3 >DESIGNERS</h3>
            <button className="editButtons" onClick={() => {setDesignerEdit(!designerEdit);}}>EDIT</button>
            {designerNames}
        </div>
     <ItemAdd designers={designers} setDesigners={setDesigners} addSeasonItem={addSeasonItem} seasons={seasons} isDesigner={isDesigner} setIsDesigner={setIsDesigner} addDesignerItem={addDesignerItem} clickedItems={clickedItems} setClickedItems={setClickedItems} 
      designerResponse={designerResponse} setDesignerResponse={setDesignerResponse} currentDesigner={currentDesigner}
      setCurrentDesigner={setCurrentDesigner} setClicked={setClicked} />
        </div>
    )

}

export default SideNav