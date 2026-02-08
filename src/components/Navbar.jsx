import React from 'react'
import { NavLink } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom';
function Navbar() {
     const navigate = useNavigate(); 
  return (
     <div className="navbar">
         
        <li>
         
            <div className="genre-button" onClick={() => navigate('/Adventrous')}>
  Adventurous
</div>

            
        </li>
        <li>
             <NavLink to="/Romance">ROMANCE</NavLink>
        </li>
        <li>
            <NavLink to="/Thriller">THRILLER</NavLink>
        </li>
        <li>
             <NavLink to="/Mystery">MYSTERY</NavLink>
        </li>
        <li>
             <NavLink to="/Horror">HORROR</NavLink>
        </li>
          
          
     </div>
  )
}

export default Navbar