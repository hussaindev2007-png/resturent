
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({ selectedRating, search }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  
  const searchedProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-10">
        No products available
      </div>
    );
  }

  if (searchedProducts.length === 0 && search.trim() !== "") {
    return (
      <p
        style={{
          color: "#04d7f3ff",
          marginTop: "15px",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        No products found for "<strong>{search}</strong>"
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {searchedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedRating={selectedRating}
        />
      ))}
    </div>
  );
}

export default Products;

