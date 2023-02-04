import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroEdit from './pages/HeroEdit'
import HeroIndex from './pages/HeroIndex';
import HeroNew from './pages/HeroNew';
import HeroShow from './pages/HeroShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import mockHeros from './mockHeros'
import { Routes, Route } from "react-router-dom"

const App = () => {

  const [heros, setHeros] = useState(mockHeros)

  const createNewHero = (newHeroObject) => {
    console.log(newHeroObject)
  }

  const updateHero = (hero, id) => {
    console.log("hero:", hero)
    console.log("id:", id)
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
