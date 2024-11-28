import React from 'react';
import { Link } from 'react-router-dom';
import '../Connexion/Connexion.css'
import Header from '../Header/Header';


const Connexion = () => {
    return (
         <>
<div className="Background">         
        <Header/>
        
        <div className="Container d-flex justify-content-center align-items-center flex-col ">
        <input type="text" className="Nom  form-control  px-3 " placeholder="Nom "/>
        <input type="text" className="Prenom  form-control  px-3 " placeholder="Prenom"  />
        <input type="Submit" className="Submit  form-control  px-3  mt-4" value='Connexion'  />
        </div>
</div>        
         </>
    );
}

export default Connexion;
