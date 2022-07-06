import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/home-page/Homepage';
import Basket from './pages/Basket/Basket'
import { Appcontext } from './Appcontext';
function App() {
  const [jso, setJso] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setJso(data)
    }
    fetchData()
  }, [])

  return (
    <BrowserRouter>
     <Appcontext.Provider value={{jso
    }}>
     <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>}  />
          <Route path='Basket/' element={<Basket />} />
        </Routes>
      </div>
     </Appcontext.Provider>
    </BrowserRouter>

  );
}

export default App;
