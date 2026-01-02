import Sidebar from "@/component/sidebar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { db } from "@/firebase/confic";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs
} from "firebase/firestore";

import { useCategories } from "@/data/category";

export default function Menu() {
  const { addCategory } = useCategories(); // category add function

  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);


  

  useEffect(() => {
  const fetchProducts = async () => {
    
    try {
      const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          docId: d.id,
          ...d.data(),
        }));
        setMenuItems(data);
        setLoading(false);
      });
      return () => unsub();
    } catch (err) {
      console.error(err);
      toast.error("Products load failed");
      
    }
  };

  fetchProducts();
}, []);


  const handleDelete = async (docId, productCategory) => {
    try {
      
      await deleteDoc(doc(db, "products", docId));
      toast.success("Item deleted");

   
      const colRef = collection(db, "products");
      const q = query(colRef, where("category", "==", productCategory));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        const categoryCol = collection(db, "category");
        const catQuery = query(categoryCol, where("title", "==", productCategory));
        const catSnapshot = await getDocs(catQuery);

        catSnapshot.forEach(async (catDoc) => {
          await deleteDoc(doc(db, "category", catDoc.id));
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  const handleAdd = () => {
    setEditId(null);
    setTitle("");
    setCategory("");
    setImage("");
    setPrice("");
    setRating("");
    setId("");
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditId(item.docId);
    setTitle(item.title);
    setCategory(item.category);
    setImage(item.image);
    setPrice(item.price);
    setRating(item.rating);
    setId(item.id);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!title || !image || !price || !rating || !id || !category) {
      toast.error("All fields required");
      return;
    }

    const numericPrice = Number(price);
    const numericRating = Number(rating);
    const numericId = Number(id);

    if (isNaN(numericPrice) || isNaN(numericRating) || isNaN(numericId)) {
      toast.error("Price, Rating, and ID must be numbers");
      return;
    }

    try {
     
      const colRef = collection(db, "category");
      const q = query(colRef, where("name", "==", category.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addCategory(category.trim());
      }

      if (editId) {
        await updateDoc(doc(db, "products", editId), {
          title,
          category,
          image,
          price: numericPrice,
          rating: numericRating,
          id: numericId,
        });
        toast.success("Item updated");
      } else {
        await addDoc(collection(db, "products"), {
          title,
          category,
          image,
          price: numericPrice,
          rating: numericRating,
          id: numericId,
        });
        toast.success("Item added");
      }

      setShowModal(false);
    } catch (err) {
      console.error(err);
      toast.error("Action failed");
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }
  
  return (
    <div className="flex h-screen transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Menu Items</h1>
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add New Item
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.docId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className=" rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2 text-center">
                    {item.name || item.title}
                  </h3>

                  <div className="flex gap-2 w-full justify-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.docId, item.category)}
                      className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
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

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-black p-5 rounded-lg w-80 space-y-3 text-amber-200">
            <h2 className="text-lg font-bold">
              {editId ? "Edit Item" : "Add Item"}
            </h2>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="border p-2 w-full rounded"
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="border p-2 w-full rounded"
            />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="border p-2 w-full rounded"
            />

            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Set Price"
              className="border p-2 w-full rounded"
              type="number"
            />

            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Set Rating"
              className="border p-2 w-full rounded"
            />

            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Set ID"
              className="border p-2 w-full rounded"
            />

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 rounded cursor-pointer hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-400 text-white py-2 rounded cursor-pointer hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
