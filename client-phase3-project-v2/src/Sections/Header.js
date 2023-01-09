import React from 'react'
import {Link} from 'react-router-dom'



function Header({currentDesigner, setCurrentDesigner}){


    return(

        <div className='nav'>
            <Link to="/" style={{ textDecoration:'none', color:'black' }}> 
            <h1  >échelle</h1>
            </Link>
            <h4>{currentDesigner.name}</h4>
        
        </div>
    )
}

export default Header