import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container flexSB">
          <div className="left row">
            <h1>
              <span>NOTINO</span>
            </h1>
            <h3>PARFIMERIJA</h3>
          </div>
          <div className="right row">
            <div className="img">
              <img src="./images/img1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
