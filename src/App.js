import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroEdit from './pages/HeroEdit'
import HeroIndex from './pages/HeroIndex';
import HeroNew from './pages/HeroNew';
import HeroShow from './pages/HeroShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom"

const App = () => {

  const [heros, setHeros] = useState([])

  useEffect(() => {
    readHero()
  }, [])

  const readHero = () => {
    fetch("http://localhost:3000/heros")
      .then((response) => response.json())
      .then((payload) => {
        setHeros(payload)
      })
      .catch((error) => console.log(error))
  }

  const createNewHero = (hero) => {
    fetch("http://localhost:3000/heros", {
      body: JSON.stringify(hero),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readHero())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateHero = (hero, id) => {
    fetch(`http://localhost:3000/heros/${id}`, {
      body: JSON.stringify(hero),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readHero())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroindex" element={<HeroIndex heros={heros} />} />
          <Route path="/heroshow/:id" element={<HeroShow heros={heros} />} />
          <Route path="/heronew" element={<HeroNew createNewHero={createNewHero} />} />
          <Route path="/heroedit/:id" element={<HeroEdit heros={heros} updateHero={updateHero} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
