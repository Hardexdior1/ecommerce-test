import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar1.jsx";
import LandingPage from "./Pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

import GetStarted from "./Pages/GetStarted";
import Login from "./Pages/Login";
// import Section2 from "./Components/Section2";
import Welcome from "./Pages/Welcome";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sellbuy from "./Components/Sellbuy";

function App() {
  const [data, SetData] = useState({ rates: [] });
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let fetched = await response.json();
      console.log(fetched);
      SetData({ ...data, rates: fetched.data });
    };

    fetchData("https://api.coinlore.net/api/tickers/?start=0&limit=5");
  }, []);
  return (
    <div className="App">
      <div></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage    rate={data.rates}
              />
            }
          />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/BuySell" element={<Sellbuy />} />
        </Routes>
      </BrowserRouter>
      {/* <Section2 /> */}
    </div>
  );
}

export default App;
