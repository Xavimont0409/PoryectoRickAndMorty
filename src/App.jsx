import "./App.css";
import Cards from "./componentes/Cards";
import Nav from "./componentes/Nav";
import About from "./componentes/About";
import Detail from "./componentes/Detail";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import From from "./componentes/From";

function App() {
  const navigate = useNavigate();

  const location = useLocation()
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const username = 'xavier@henry.com';
  const password = '123456';

  useEffect (()=>{
    !access && navigate('/');
  }, [access])

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }else{
      alert('Contraseña o Username incorrectos')
      
    }

  }
    const logout = () =>{
      setAccess(false);
      navigate('/');
    }

  const onSearch = (id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api"
    const KEY = "6f4ee369837f.a61f890756f88c233753"

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  /* !(location.pathname === "/") ? <Nav onSearch={onSearch} />: navigate("/") */

  return <div className="App">
    {
      location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />
    }
    
    <Routes>
        <Route 
          path="/"
          element={<From login={login}/>}
        />
        <Route  
          path="/home" 
          element={<Cards characters={characters} onClose={onClose} /> }
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path='/detail/:id'
          element={ <Detail />}
        />
      </Routes>

  </div>;
};

export default App;
