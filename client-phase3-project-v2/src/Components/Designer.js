import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"


const Designer = ({id, name, setClicked, currentDesigner}) => {

const style = { textDecoration:'none', color:'black' }

    return (

    <div className="designerName" >

<Link to={`designers/${id}`} style={style} >
            <h3 id={id} name={name} onClick={setClicked} className="designer"   > 


            {name}
            
             </h3>
           

            </Link>
            <button className="designerDelete">x</button>
            </div>

    )
}

export default Designer