import React from "react";
import "./App.css";
import { TemplateComponent } from "./components/template/template";
import { FlipCardComponent } from "./components/flip-card/flip-card";
import { CardStackComponent } from "./components/card-stack/card-stack";

const App: React.FC = () => {
  return (
    <div className="App">
      <FlipCardComponent
        imgSrc="/common/img/landscape.jpg"
        description="To keep moving forward againt the friction, we overcome the ______ friction."
      />
      <CardStackComponent
        imgSrc="https://picsum.photos/id/237/500"
        heading="Heading"
        description="To keep moving forward againt the friction, we overcome the ______ friction."
      ></CardStackComponent>
      <TemplateComponent />
    </div>
  );
};

export default App;
