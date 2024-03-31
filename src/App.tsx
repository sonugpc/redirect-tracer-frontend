import React, { useEffect } from "react";
import MyRouter from "routers/index";
import ReactGA from "react-ga4";
import Config from "../config";
import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  useEffect(() => {
    const startGA = async () => {
      await ReactGA.initialize(Config.GATag);
    };

    startGA();
  }, []);

  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
