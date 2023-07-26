import React from "react";

// Import du scss
import './Home.scss'

// Import des composant
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img className="home-img" src="" alt="" />
        <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur quo sunt delectus, laudantium vero voluptas veniam amet similique, assumenda aut odio corrupti debitis reprehenderit, ex et eos possimus asperiores tenetur commodi quae mollitia esse? Quibusdam perferendis vel similique adipisci nihil quisquam perspiciatis fuga reprehenderit a, ut impedit, tempora esse?</p>
        <img className="home-img" src="" alt="" />
      </div>
      <Footer />
    </>
  )
};

export default Home;