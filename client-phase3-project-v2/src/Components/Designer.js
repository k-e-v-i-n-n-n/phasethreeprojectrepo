import React from "react";
import {Link} from "react-router-dom"

const Designer = ({isDesigner, designerEdit, setDesignerEdit, id, name, setClicked, designers, setDesigners, setClickedItems, setCurrentDesigner, deleteDesignerAndSeasonItems}) => {

    const style = {textDecoration:'none', color:'black'}
    const visible = designerEdit? "initial" : "none"

function deleteDesigner(e){

    setDesignerEdit(false)
    fetch(`http://localhost:3000/designers/${e.target.id}`,{
        method: "DELETE"
        })
        .then((r) => r.json())
        .then((des) => {deleteFromDesigners(des)
        deleteDesignerAndSeasonItems(des)
 
    }

        )

}

function deleteFromDesigners(des){

    const designerFilter = designers.filter((d) => d.id !== des.id)

    setDesigners(designerFilter)

    if (isDesigner === true) {setCurrentDesigner({id:"", name:""})}

}


    return (

        <div className="designerName" >
            <Link to={`designers/${id}`} style={style} >
                <h3 id={id} name={name} onClick={setClicked} className="designer">{name}</h3>
            </Link>
                <button id={id} style={{display: visible}} onClick={deleteDesigner} className="designerDelete">x</button>
        </div>
    )
}

export default Designer