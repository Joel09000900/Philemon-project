import React from 'react';
import '../Inscription/Inscription.css'
import Header from '../Header/Header';

const Inscription = () => {


    return (

<>

<div className="Background">
          <Header/>
         
    
        <div className="Container d-flex justify-content-center align-items-center flex-col ">

        <input type="text" className="Nom  form-control  px-3  justify-content-start" placeholder="Nom "/>
        <input type="text" className="Prenom  form-control  px-3 " placeholder="Numero"  />
        <input type="password" className="MotDePasse  form-control  px-3 " placeholder="Mot de passe"  />
        <input type="Submit" className="Submit  form-control  px-3  mt-4" value="S'incrire"  />
        <input type="Submit" className="CompteGoogle  form-control  px-3  mt-4" value="Compte Google "  />

        </div>

</div>
   
</>        

        


        
    );
}

export default Inscription;
