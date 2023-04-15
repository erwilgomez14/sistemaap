import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Registrate, Login } from './components';
//import SystemList from './components/SystemList';

function App() {  
  return (
    <div className="App">
      <Navbar />

        <main>
          <Routes>
            <Route path="/registrar" element={<Registrate />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
    </div>
  );
}

export default App;
