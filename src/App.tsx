import React from 'react';
import './App.css';
import { TemplateComponent } from './components/template/template';
import { FlipCardComponent } from './components/flip-card/flip-card';

const App: React.FC = () => {
  return (
    <div className="App">
      <FlipCardComponent
        imgSrc="/common/img/landscape.jpg"
        description="To keep moving forward againt the friction, we overcome the ______ friction."
      />
      <TemplateComponent />
    </div>
  );
}

export default App;
