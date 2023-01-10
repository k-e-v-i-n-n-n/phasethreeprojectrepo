import React from 'react'
import {Link} from 'react-router-dom'
import Season from '../Components/Season'

function Header({currentDesigner, seasons, showSeason}){

    const seasonMap = seasons.map((s) => {
        return <Season id={s.id} season={s.season} seasons={seasons} key={s.id} showSeason={showSeason} />
    })

    return(

        <div className='nav'>
            <Link to="/" style={{ textDecoration:'none', color:'black' }}> 
            <h1>échelle</h1>
            </Link>
        <div className="seasons">
          {seasonMap}
          </div>    
            <h5>{currentDesigner.name}</h5>
        
        </div>
    )
}

export default Header