import React from "react";

function CategoryFilter({data}) {

  function handleFilterClick() {
    console.log("Filter button is clicked!");
  }

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {/* Creating categories for this component */}
      {data.map((category) => (
        <button key={category} onClick={handleFilterClick} >{category} </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
