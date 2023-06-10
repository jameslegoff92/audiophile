import React from 'react';

//Components
import Header from "./organisms/Header";
import CategoryList from "./organisms/CategoryList";
import Card from "./molecules/Card";
import Typography from "./atoms/Typography";

//SCSS Files
import "./App.scss";
import cardStyles from "./molecules/Card.module.scss";


function App() {
  let zx9CardStyles = cardStyles["card-zx9-bg"];

  return (
    <div>
      <Header />
      <div className="container">
        <CategoryList />
      </div>
      <div className="container-xl" >
        <Card style={{ backgroundColor: "#d87d4a", borderRadius: "8px"}} className={zx9CardStyles}>
          <Typography type="h1">zx9 speaker</Typography>
        </Card>
      </div>
    </div>
  );
}

export default App;
