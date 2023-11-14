import React, { useState } from "react";

function NewTaskForm({ categories, taskFormSubmit }) {
  // Creating State to manage the form data
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  // Creating a function to handle the submit event
  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData);
  }


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {/* render <option> elements for each category here */}
          {/* Creating categories for this component */}
          {categories.map((category) => (
            <option key={category} value={category}>{category} </option>
          ))}

        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={taskFormSubmit} />
    </form>
  );
}

export default NewTaskForm;
