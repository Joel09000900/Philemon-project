import React from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
     <>
      
      
 
       

        <div className='Profile  d-flex align-items-center justify-content-around mr-4  ' style={{gap :"14cm"}} >

          <ul className='Navbar  d-flex'>
               <li><Link to="/" >Acceuil</Link></li>
               <li><Link to="/Propos" >A propos</Link></li>
               <li><Link to="/Contact" >Contact</Link></li>
          </ul>


          <div className="d-flex align-items-center " style={{ gap :"12px" }}>
            <div className="User"></div>
             
             <Link to="/Connexion" className='Button1 btn btn-secondary  px-5'>Connexion</Link>
             <Link to="/Inscription" className='Button2 btn btn-secondary  px-5'>Inscription</Link>
             </div>   
             

        </div>

        
    </>
    );
}

export default Header;

