import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Produce");

//   function handleNewIOtemChange(event){
//      setName(event.target.value);
//   }
//   function handleNewCategoryChange(event){
//     setCategory(event.target.value);
//  }

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

 function handleSubmit(event) {
  event.preventDefault();

  if(formData.name != ""){
    onItemFormSubmit({
      id: uuid(),
      ...formData
    });
    window.alert(formData.name + " added to the List");

  }else{
    window.alert("Kindly fill the name");
  }

}
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
