import React,{useEffect, useState} from "react";


const Designer = ({id, name, setClicked}) => {

    return (

    <div className={"designerName"} >

    
            <h3 id={id} name={name} onClick={setClicked}  className={"designer"}>{name}</h3>
            {/* <button className={"designerDelete"}>x</button> */}

            </div>

    )
}

export default Designer