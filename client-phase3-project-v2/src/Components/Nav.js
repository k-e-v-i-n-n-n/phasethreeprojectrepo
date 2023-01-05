import React from 'react'
import {NavLink} from 'react-router-dom'


function Nav({currentDesigner}){


    return(

        <div className='nav'>
            <h1>échelle</h1>
            <h4>{currentDesigner.name}</h4>
        
        </div>
    )
}

export default Nav