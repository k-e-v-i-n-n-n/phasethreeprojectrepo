import React from 'react'
import {Link} from 'react-router-dom'
import Season from '../Components/Season'

function Header({currentDesigner, setCurrentDesigner, seasons, showSeason, setIsDesigner}){

const seasonMap = seasons.map((s) => { return <Season id={s.id} season={s.season} 
                                                          seasons={seasons} key={s.id} 
                                                          showSeason={showSeason}/>
    })

return(
        <div>
            <div className='nav'>
                <Link to="/" style={{ textDecoration:'none', color:'black' }}> 
                    <h1 onClick={()=> {setIsDesigner(false); setCurrentDesigner({id:"", name:""})}}>échelle</h1>
                </Link>
            </div>
            <div className="seasons">
                {seasonMap}
            </div>    
            <h5 className="currentDesigner" >{currentDesigner.name}</h5>
        </div>
    )
}

export default Header