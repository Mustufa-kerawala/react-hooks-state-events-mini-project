import React from "react";

function CategoryFilter({categories, onCategoryClick}) {

  

  function handleFilterClick(category) {
    console.log("Filter button is clicked!");
    onCategoryClick(category);
  }

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {/* Creating categories for this component */}
      {categories.map((category) => (
        <button key={category} onClick={() => handleFilterClick(category)} >{category} </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
