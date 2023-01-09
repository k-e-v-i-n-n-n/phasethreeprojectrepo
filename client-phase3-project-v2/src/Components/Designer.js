import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"


const Designer = ({id, name, setClicked, currentDesigner}) => {

const style = { textDecoration:'none', color:'black' }

    return (

    <div className={"designerName"} >

<Link to={`designers/${id}`} style={style} >
            <h3 id={id} name={name} onClick={setClicked}  className={"designer"} > 


            {name}
            
             </h3>
            {/* <button className={"designerDelete"}>x</button> */}

            </Link>

            </div>

    )
}

export default Designer