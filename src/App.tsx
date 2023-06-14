import React from 'react';

//Components
import Header from "./organisms/Header";
import CategoryList from "./organisms/CategoryList";
import SpeakerCta from './molecules/SpeakerCta';

//SCSS Files
import "./App.scss";


function App() {

  return (
    <div>
      <Header />
      <div className="container-xl" >
        <CategoryList />
        <SpeakerCta />
      </div>
    </div>
  );
}

export default App;
