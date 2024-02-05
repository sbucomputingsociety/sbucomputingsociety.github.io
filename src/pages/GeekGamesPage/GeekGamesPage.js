import "./GeekGamesPage.css";
import NavBar from "./GeekNavBar";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Timer from "./CountDown";
import Form from "./Form";
import React, { useEffect } from "react";


function GeekGames() {
  useEffect(() => {
    document.body.classList.add("geek-games-active");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("geek-games-active");
    };
  }, []);

  useEffect(() => {
    Aos.init({duration: 750});
  }, []);

  const sponsList = [
    "../logos/Stickermule-Logo.jpg"
  ];

  return (
    <div className="geek-games-page">
      <div className="wrapper">
        {/* need the header */}
        <NavBar></NavBar>

        {/*Geek Games Title*/}

        <div className="geek-image">
          <img src="gg-title.png" alt="Geek Games Title"></img>
        </div>

        <hr></hr>

        {/*Event info, Timer and Venue*/}

        <div className="text-section">
          <p className="geek-games-info">
            Geek Games, Stony Brook Computing Society's annual event, features a
            mix of coding and non-coding competitions. Participants can compete
            for a prize pool of $2500, showcasing their computing and
            problem-solving skills in a dynamic and rewarding environment.
          </p>
          <Timer></Timer>
          <p className="geek-games-venue">
            Friday, March 22, 2024 @ SAC Ballroom B, 3PM
          </p>
        </div>

        <div className="geek-games-form">
          <Form></Form>
        </div>
        {/* need the footer */}
        <div className="connect-code-compete">
          <img src="connect-code-compete.png"></img>
        </div>
        <hr className="footer-line"></hr>

        {/** Sponser list */}
        
        <h3 className="text-center text-white text-[4rem]">Huge thanks to our sponsers! &lt;3</h3>
        <div className="each-sponsor">
            {sponsList.map(s => (
                  <div className="geek-games-logo-container" data-aos="fade-up">
                      <img src={s} alt='logo'></img>
                  </div>
            ))}
          </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default GeekGames;
