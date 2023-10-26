import React, { useState } from "react";

const NewBoxForm = () => {
    const initialState = {
        width: "",
        height: "",
        color: "",
      }
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <form>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="text"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="text"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="color">Color</label>
      <input
        id="color"
        name="color"
        type="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add New Box</button>
    </form>
  );
};

export default NewBoxForm;
