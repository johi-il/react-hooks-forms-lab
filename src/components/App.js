import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
    function handleSearchChange(newSearch) {
      setSearch(newSearch);
    }

    function handleAddItem(newItem) {
      setItems([...items, newItem]); // add new item to array
    }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} 
      onSearchChange={handleSearchChange}
      onItemFormSubmit={handleAddItem}
      search={search}/>
    </div>
  );
}

export default App;
