import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Link} from "react-router-dom";

 import { useContext } from 'react';
 import { AuthContext } from '../../context/AuthContext';

const Navbar =()=>{

 const { user } = useContext(AuthContext);


    return(
        
            <div className='navbar'>
                <div className='navcontainer'>
                    <Link to="/" className='logoLink'>
                        <FontAwesomeIcon icon={faPlane} className='icon'/>
                        <span className='logo'>   Fly-it</span>
                    </Link>
                    
                      {user ? "abc" :(<div className='navItems'>   
                      <Link to="/register">
                            <button className='navButton'>Resgister</button>
                        </Link>                                        
                        <Link to="/login">
                            <button className='navButton'>Login</button>
                        </Link>                                            
                    </div>)}
                </div>
            </div>
        
    )
}

export default Navbar;