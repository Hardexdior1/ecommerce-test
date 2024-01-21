import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./Components/Sections/Main";
import ClothesData from "./Components/Data/ClothesData";
import Navbar1 from "./Components/Navigation/Navbar1";
import Data1 from "./Components/Pages/Data1";
import Footer from "./Components/Sections/Footer";

import img from "./Components/Images/adidas10.jpg";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); //the code is to make sure user start from the begining of he page anytime they visit it
  }, []);
  const [data, setData] = useState(ClothesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // const nextPage = () => {
  //   setCurrentPage(data.slice(12, 24));
  // };

  // const prevPage = () => {
  //   setCurrentPage((old) => Math.max(old - 1, 1));
  // };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [currentItems, setCurrentItems] = useState(
    data.slice(startIndex, endIndex)
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [messageIfTheSearchHasNoResult, setMessageIfTheSearchHasNoResult] =
    useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    let matchingItems = [];
    if (e.target.value !== "") {
      matchingItems = ClothesData.filter(
        (item) =>
          item.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          String(item.price).includes(e.target.value)
      );
    } else {
      matchingItems = data.slice(startIndex, endIndex);
    }

    if (matchingItems.length === 0 && e.target.value !== "") {
      setMessageIfTheSearchHasNoResult(
        `No results found for "${e.target.value}"`
      );
    } else {
      setMessageIfTheSearchHasNoResult("");
    }

    setCurrentItems(matchingItems);
    window.scrollTo(matchingItems);
  };

  const firstPage = () => {
    setCurrentItems(data.slice(0, 12));
    window.scrollTo(0, 0);
  };

  const secondPage = () => {
    setCurrentItems(data.slice(12, 24));
    window.scrollTo(0, 0);
  };
  const thirdPage = () => {
    setCurrentItems(data.slice(24, 36));
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
     

      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                firstPage={firstPage}
                secondPage={secondPage}
                thirdPage={thirdPage}
                threeOfSixProducts={currentItems}
                handleSearchChange={handleSearchChange}
                messageIfTheSearchHasNoResult={messageIfTheSearchHasNoResult}
              />
            }
          />
          <Route path="/Data1" element={<Data1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <a href="">REFRESH</a>
    </div>
  );
}

export default App;
