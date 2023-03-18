import { useState } from "react";

function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </>
  );
}

export default SearchBar;
