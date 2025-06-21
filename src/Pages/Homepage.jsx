import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import './Homepage.css';


const Homepage = () => {
  return (
    <>
      <div className="homepage">
     
        <section className="intro-section">
          <div className="intro-left">
            <div className="image-wrapper">
              <img
                src="https://i.pinimg.com/736x/d0/71/20/d071204d492ebcc79c2c47913102ca67.jpg"
                alt="Profile"
                className="profile-image"
              />
              <div className="maple">
                <img src="/maple.svg" alt="maple" className="maple" />
              </div>
            </div>
          </div>

          <div className="intro-arrow">
            <img src="/arrow.svg" alt="arrow" className="arrow-img" />
          </div>

          <div className="intro-right">
            <div className="hello-text">
              Hello! I am <span className="highlight-name">Minh-Tam Le</span>~
            </div>
            <p className="subtitle">A random soul somewhere out there that</p>
            <h1 className="intro-heading">
              loves to play around with <span className="highlight-pixels">pixels</span>...
            </h1>
            <p className="description">
              Whether it’s creating visually stunning art, developing games, or exploring the
              technical aspects of image manipulation, there’s a lot you can do with pixels!
            </p>
          </div>
        </section>

        <section className="work-section">
          <h2 className="work-title">Still in school, already in the game industry (sort of).</h2>
          <p className="work-text">
            Currently, I'm a third-year student at{' '}
            <img src="/uet.svg" alt="uet" className="university-icon"/>
            <span style={{ color: '#FF4D56'}}> UET-VNU</span>
            , <br/> and a game designer intern at 
            <span style={{ color: '#FF4D56'}}> Falcon Game Studio </span>.
          </p>
        </section>

        <section className="closing-text">
          This is supposed to be where I share a little detail about myself, but I couldn’t think
          of anything cool. So, maybe let me send you warm wishes for a wonderful day instead!
        </section>

        <h3 className="recent-posts">Recent Posts</h3>
      </div>
    </>
  );
};

export default Homepage;
