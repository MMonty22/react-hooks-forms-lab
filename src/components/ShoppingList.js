import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
//this should hold the functions while ItemForm handles the display of JSX

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearchBar, setFilterSearchBar] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")
  const [newItemName, setNewItemName] = useState("")

  function handleNewItemName(event) {
    setNewItemName(event.target.value)
  }

  function handleNewItemCategory(event) {
    setNewItemCategory(event.target.value)
  }

  function handleNewItemAdd() {
    
  }

  function handleFilterSearchBar(event) {
    //console.log('handleFilterSearchValue', event.target.value)
    setFilterSearchBar(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
  
    return item.category === selectedCategory;
  })
    .filter((item) => {
      if (filterSearchBar === "") return true
      return item.name.toLowerCase() === filterSearchBar.toLocaleLowerCase()
  })

  return (
    <div className="ShoppingList">
      <ItemForm
      newItemName={newItemName}
      newItemCategory={newItemCategory}
      handleNewItemCategory={handleNewItemCategory}
      handleNewItemName={handleNewItemName}
      onItemFormSubmit={handleNewItemAdd}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleFilterSearchBar} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} /> 
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
