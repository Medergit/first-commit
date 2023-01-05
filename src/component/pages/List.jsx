import React from "react";
import "./List.css";
import { Link } from "react-router-dom";


const List = function(){
    return(
        <div>
            <ul className="names">
                <li><Link to='/InfoMessi'>Messi</Link></li>
                <li><Link to='/InfoRonaldo'>Ronaldo</Link></li>
                <li><Link to='/InfoMbappe'>Mbappe</Link></li>
                <li><Link to='/InfoNeymar'>Neymar</Link></li>
            </ul>

                    
        </div>

        
    )
}

export default List;