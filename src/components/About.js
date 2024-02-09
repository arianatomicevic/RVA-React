import React from "react";
import "./About.css";

const About = () => {
  const data = [
    {
      cover: "./images/img2.jpg",
      catgeory: "O NAMA",
      title: "Najveća parfimerija u Evropi",
      desc: "U Notinu vjerujemo da bi ljepota trebala biti dostupna svima jer ona pridonosi samopouzdanju i mijenja na bolje. Kada se ljudi osjećaju dobro, lakše postižu svoje ciljeve, a zauzvrat čine ljepšim svijet oko sebe. ",
    },
  ];
  return (
    <>
      <section className="about" id="about">
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="left row">
                  <img src={value.cover} alt="" />
                </div>
                <div className="right row">
                  <span className="baget">{value.catgeory}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
