import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./Components/Sections/Main";
import ClothesData from "./Components/Data/ClothesData";
import Navbar1 from "./Components/Navigation/Navbar1";
import Footer from "./Components/Sections/Footer";
import Cart from "./Components/Pages/Cart";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); //the code is to make sure user start from the begining of he page anytime they visit it
  }, []);
  const [data, setData] = useState(ClothesData);
  const [listItems, setListItems] = useState(data.slice(0, 12));

  const [searchTerm, setSearchTerm] = useState("");
  const [messageIfTheSearchHasNoResult, setMessageIfTheSearchHasNoResult] =
    useState("");

  const [message, setMessage] = useState("");

  const [cart, setCart] = useState([]);
  const clear = () => {
    setCart([]);
  };
  let length = cart.length;
  const handleAddToCart = (item) => {
    setCart((currentCart) => {
      const itemExists = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (itemExists) {
        return currentCart;
      }

      setMessage("Product has been added to cart");

      let timeoutId = setTimeout(() => {
        setMessage("");
      }, 2000);

      setTimeout(() => {
        clearTimeout(timeoutId);
      }, 2000);

      return [...currentCart, item];
    });
  };

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };


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
      matchingItems = data.slice(0, 12);
    }

    if (matchingItems.length === 0 && e.target.value !== "") {
      setMessageIfTheSearchHasNoResult(
        `No results found for "${e.target.value}"`
      );
    } else {
      setMessageIfTheSearchHasNoResult("");
    }

    setListItems(matchingItems);
    window.scrollTo(matchingItems);
  };

  const firstPage = () => {
    setListItems(data.slice(0, 12));
    window.scrollTo(0, 0);
  };

  const secondPage = () => {
    setListItems(data.slice(12, 24));
    window.scrollTo(0, 0);
  };
  const thirdPage = () => {
    setListItems(data.slice(24, 36));
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 length={length} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleAddToCart={handleAddToCart}
                listItems={listItems}
                firstPage={firstPage}
                secondPage={secondPage}
                thirdPage={thirdPage}
                handleSearchChange={handleSearchChange}
                messageIfTheSearchHasNoResult={messageIfTheSearchHasNoResult}
                message={message}
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} clear={clear}/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
