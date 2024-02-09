import React, { useState } from "react";
import data from "./Data";
import "./Parfumes.css";

const Parfumes = () => {
  const [item, setItem] = useState(data);

  const filterItem = (cateItem) => {
    const updatedItme = data.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItem(updatedItme);
  };
  return (
    <>
      <section className="portfolio mtop" id="parfumes">
        <div className="container">
          <div className="head flexSB">
            <div className="left">
              <span className="baget">PARFEMI</span>
              <h1>Najpopularniji parfemi</h1>
            </div>
            <div className="links">
              <ul className="flexSB">
                <li className="active" onClick={() => setItem(data)}>
                  Svi
                </li>
                <li onClick={() => filterItem("Muski")}>Muski </li>
                <li onClick={() => filterItem("Zenski")}>Zenski</li>
                <li onClick={() => filterItem("Unisex")}>Unisex</li>
              </ul>
            </div>
          </div>

          <div className="content grid mtop">
            {item.map((elem) => {
              const { cover, title, category } = elem;

              return (
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="overlay">
                    <h1>{title}</h1>
                    <p>{category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Parfumes;
