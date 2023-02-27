import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [darkLightSwitchProps, setDarkLightSwitchProps] = useState(false);
  return (
    <div className="App">
      <Header
        darkLightSwitch={darkLightSwitchProps}
        setDarkLightSwitch={setDarkLightSwitchProps}
      />
      <Home
        darkLightSwitch={darkLightSwitchProps}
        setDarkLightSwitch={setDarkLightSwitchProps}
      />      
    </div>
  );
}

export default App;
