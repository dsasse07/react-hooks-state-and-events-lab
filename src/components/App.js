import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function toggleDarkMode(){
    setDarkMode(!darkMode)
  }

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
