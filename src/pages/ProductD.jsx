

import { useParams } from "react-router-dom";
import { useCart } from "../contextcart/context";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [singleProduct, setSingleProduct] = useState(null);

  const gifts = [
    { id: 1, name: "Coca-Cola (Tin Pack)" },
    { id: 2, name: "Pepsi (Tin Pack)" },
    { id: 3, name: "Sprite (Tin Pack)" },
    { id: 4, name: "Fanta (Tin Pack)" },
    { id: 5, name: "Cola Next (Tin Pack)" },
    { id: 6, name: "Rango Next (Tin Pack)" },
    { id: 7, name: "Fizup Next (Tin Pack)" },
  ];

  const [selectedGift, setSelectedGift] = useState(gifts[0].name);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!singleProduct) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={singleProduct.image} className="w-full h-72 object-cover rounded-xl" />
      <h1 className="text-3xl font-bold mt-4">{singleProduct.title}</h1>
      <p className="text-gray-700 mt-2">{singleProduct.description}</p>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Select Free Gift:</label>
        <select
          value={selectedGift}
          onChange={(e) => setSelectedGift(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg"
        >
          {gifts.map((gift) => (
            <option key={gift.id} value={gift.name}>{gift.name}</option>
          ))}
        </select>
      </div>

      <p className="text-xl mt-2 font-bold">Price : ${singleProduct.price}</p>
      <h3 className="text-2xl font-semibold mb-6">Total: ${qty * singleProduct.price}</h3>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => setQty(qty - 1)}
          className={`px-3 py-1 rounded ${qty === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed opacity-50" : "bg-gray-200 text-black cursor-pointer opacity-100"}`}
          disabled={qty === 1}
        >
          -
        </button>

        <span>{qty}</span>

        <button
          onClick={() => setQty(qty + 1)}
          className={`px-3 py-1 rounded ${qty === 5 ? "bg-gray-200 text-gray-500 cursor-not-allowed opacity-50" : "bg-gray-200 text-black cursor-pointer opacity-100"}`}
          disabled={qty === 5}
        >
          +
        </button>

        <button
          onClick={() => {
            addToCart(singleProduct, qty, selectedGift);
            toast.success(`Added ${qty} item + Gift (${selectedGift})`);
          }}
          className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
