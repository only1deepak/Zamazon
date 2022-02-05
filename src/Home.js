import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            id="12345"
            title="Sapiens A Graphic History, Volume 1: The Birth of Humankind"
            price={299.0}
            image="https://m.media-amazon.com/images/P/B08FR41GS8.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
          <Product
            id="92423"
            title="Mamaearth Anti Hair Fall Spa Range"
            price={856.0}
            image="https://m.media-amazon.com/images/I/61mNnwQnmbL._SL1200_.jpg"
            rating={4}
          />
          <Product
            id="87563"
            title="GIVA 925 Sterling Silver Zircon Cubic Zirconia Vintage Adjustable Ring"
            price={5550.0}
            image="https://m.media-amazon.com/images/I/71FTGCh6gnL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="12356"
            title="pTron Bassbuds Jade Gaming True Wireless Headphone with 40Hrs Total Playtime"
            price={1499.0}
            image="https://m.media-amazon.com/images/I/51tBu12hIFL._SL1100_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="35849"
            title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
            price={29999.0}
            image="https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="92485"
            title="BAGHADBILLO Unisex Stylish Latest Printed Pullover Cotton Hoodies Sweatshirt for Men and Women"
            price={701.0}
            image="https://m.media-amazon.com/images/I/51ZIqCyzpbL._UL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="98565"
            title="MSI GF75 Intel i7-10750H 17.3 inches FHD IPS-Level 144Hz Panel Thin Gaming Laptop (16GB/512GB NVMe SSD/Windows 10 Home/Nvidia RTX3050 Ti 4GB GDDR6/Black/2.2Kg), 10UD-086IN"
            price={91990.0}
            image="https://m.media-amazon.com/images/I/71j3-8OXvYL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
