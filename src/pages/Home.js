import React from 'react';
import superheroHome from "../assets/superheroHome.jpeg"

const Home = () => {
  return (
    <>
    <div className="home-title">
    <h1 className="home-header">Welcome to <span className="home-span">Are You Super</span>, the exclusive dating app for <span className="home-span">SUPERHEROES</span>. If you're looking for <span className="home-span">SuperLove</span> this is the place for you! <span className="home-last-sentence">Find your match today!</span></h1>
    <img className="home-image" alt="homeImage" src={superheroHome}/>
    </div>
    </>
  );
}

export default Home;