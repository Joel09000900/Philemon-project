
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Connexion from './Components/Connexion/Connexion';
import Inscription from './Components/Inscription/Inscription';




function App() {
  return (
   <>
      
      
      <div className="App">
        
        <Routes>
        
        <Route path="/" element={<Acceuil />} /> 
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        
        </Routes>

      </div>


    


       
   </>
  );
}

export default App;
