import "./components/css/react-datepicker.css";

import "./App.css";

import React from "react";
import welcome from "./assets/full_large.png";

import ChatBot from "./components/Bot";
import LoginComponent from "./components/boters/login";
import { datasteps } from "./Ressources/data/data";
import AgreementComponent from "./components/boters/agreement";
import DateComponent from "./components/boters/date";

function App() {
  return (
    <div className="App">
      <div className="tototo"></div>

      <ChatBot />
      <div style={{ width: 350, marginBottom: 50 }}>
        <LoginComponent
          steps={{
            ...datasteps,
            password: { value: "ddz" },
            user_mail: { value: "ezef" },
          }}
        />

        <AgreementComponent
          steps={{
            ...datasteps,
            password: { value: "ddz" },
            user_mail: { value: "ezef" },
          }}
        />
        <DateComponent
          meta="avalability_date"
          steps={{
            ...datasteps,
            password: { value: "ddz" },
            user_mail: { value: "ezef" },
          }}
        />
      </div>

      <img className="welcome" src={welcome} alt="uluil" />
    </div>
  );
}

export default App;
