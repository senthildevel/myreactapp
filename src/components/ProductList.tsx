import React, { useEffect, useState } from "react";

// interface Props {
//   category: string;
// }

const ProductList = ({ prodcategory }: { prodcategory: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Data ", prodcategory);
    setProducts(["Electronics", "Mobile"]);
  }, [prodcategory]);

  return <div>ProductList</div>;
};

export default ProductList;
