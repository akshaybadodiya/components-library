import React from "react";
import "./App.css";
import { TemplateComponent } from "./components/template/template";
import { FlipCardComponent } from "./components/flip-card/flip-card";
import { CardComponent } from "./components/card/card";
import { CardStackComponent } from "./components/card-stack/card-stack";
import { cardListDummy } from "./data/static-data";
import LabelBottomNavigation from "./components/bottom-navigation/bottom-navigation";

const App: React.FC = () => {
  return (
    <div className="App">
      <LabelBottomNavigation />
      <FlipCardComponent
        imgSrc="/common/img/landscape.jpg"
        description="To keep moving forward againt the friction, we overcome the ______ friction."
      />
      <CardStackComponent cardList={cardListDummy}></CardStackComponent>
      <TemplateComponent />
      <CardComponent />
    </div>
  );
};

export default App;
