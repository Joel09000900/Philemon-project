import React from 'react';
import '../Acceuil/Acceuil.css'
import Header from '../Header/Header';
import BackImage from '../Asset/Backimage.jpg'



const Acceuil = () => {
    return (
        <>
<div className="Background">      
        
        <Header />


    

        <div  className=' Class  d-flex justify-content-center align-items-center flex-row '   >
            
             
             <div className="Body  text-center">
                
               
                 <h1 className='Nom text-light mb-12 '> BADZA </h1>




                  <div className=' Noo d-flex'>
                  <input type="text" className="Search form-control   " placeholder="(Nom de l'etablissement) "  /> 
                  <button  className="Button btn btn-secondary  px-3  " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                  </div>




             </div>

             
        </div>
        
        
        
        
</div>        
        </>
    );
}

export default Acceuil;


