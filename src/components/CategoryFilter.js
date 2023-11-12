import React from "react";

function CategoryFilter({data}) {

  console.log(data);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {/* Creating categories for this component */}
      <select>
        <option className="All" value="All">All</option> 
        <option className="Code" value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
