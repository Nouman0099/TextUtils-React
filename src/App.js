import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textinfo from './components/Textinfo';

function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#020334";
      showAlerts(`Dark mode has been enabled`, "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlerts(`Light mode has been enabled`, "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
  
    <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
      />
     <Alerts alert={alert} />
    <Textinfo
          showAlerts={showAlerts}
          heading="Enter the text to analyze below"
          mode={mode}
      />
    </>
  );
}

export default App;
