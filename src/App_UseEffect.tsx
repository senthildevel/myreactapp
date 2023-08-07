import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const iref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (iref.current) iref.current.focus();
  });

  useEffect(() => {
    document.title = "My React App";
  });

  const [category, setCategory] = useState("");

  return (
    <div>
      <input ref={iref} type="text" />
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Please select</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ProductList prodcategory={category} />
    </div>
  );
};

export default App;
