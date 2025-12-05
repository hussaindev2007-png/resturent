
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products from JSON Server
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" });
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      const updatedItem = { ...menuItems.find(item => item.id === id), title: newTitle };
      try {
        await fetch(`http://localhost:3001/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedItem),
        });
        setMenuItems(menuItems.map(item => item.id === id ? updatedItem : item));
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <h1 className="text-2xl font-bold mb-6">Menu Items</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                  <div className="flex gap-2 w-full justify-center">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

