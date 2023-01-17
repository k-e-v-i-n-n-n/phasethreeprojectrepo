import React from "react"
import {Link} from "react-router-dom"

const Season = ({season, id, showSeason}) => {

    const style = { textDecoration:'none', color:'black' }
    
return(

    <div> 
        <Link to={`seasons/${season}`} style={style}>
            <h6 className="seasonInd" id={id} onClick={showSeason} >{season}</h6>
        </Link>
    </div>

    )
}

export default Season