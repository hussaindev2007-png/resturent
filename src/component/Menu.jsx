// import Navbar from "./Navbar";
// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// const menuItems = [
//   { id: 1, name: "Burger", image: "https://www.shutterstock.com/shutterstock/photos/2253091785/display_1500/stock-photo-double-decker-crispy-chicken-or-doppler-burger-double-decker-crispy-zinger-burger-with-cheese-2253091785.jpg" },
//   { id: 2, name: "Tikha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWg6nQZHhMp5ATH7b_Wr7yZcYi8FEkEA9Og&s" },
//   { id: 3, name: "Pizza", image: "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg" },
//   { id: 4, name: "Biryani", image: "https://static.vecteezy.com/system/resources/previews/067/291/900/large_2x/restaurant-biryani-with-fried-chicken-and-colorful-toppings-free-photo.jpg" },
//   { id: 5, name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOERDZhYn8Jy7EW39dG6nwHzLojMA9c2qVoA&s" },
//   { id: 6, name: "Rasmalai", image: "https://propakistani.pk/foodnama/wp-content/uploads/2021/03/Untitled-design-15.png" },
//   { id: 7, name: "Ice Cream", image: "https://static.vecteezy.com/system/resources/previews/029/860/483/large_2x/of-ice-cream-sundae-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg" },
// ];

// export default function Menu() {

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar/>
//       <div className="flex-1 flex flex-col">
//         <Navbar/>

//         <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <h1 className="text-2xl font-bold mb-6">Menu Items</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {menuItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-32 object-cover rounded-md mb-2"
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
//                 />
//                 <h3 className="font-semibold text-lg text-center">{item.name}</h3>

//                 {item.description && (
//                   <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 text-center">
//                     {item.description}
//                   </p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

















// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const initialMenuItems = [
//   { id: 1, name: "Burger", image: "https://www.shutterstock.com/shutterstock/photos/2253091785/display_1500/stock-photo-double-decker-crispy-chicken-or-doppler-burger-double-decker-crispy-zinger-burger-with-cheese-2253091785.jpg" },
//   { id: 2, name: "Tikha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWg6nQZHhMp5ATH7b_Wr7yZcYi8FEkEA9Og&s" },
//   { id: 3, name: "Pizza", image: "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg" },
//   { id: 4, name: "Biryani", image: "https://static.vecteezy.com/system/resources/previews/067/291/900/large_2x/restaurant-biryani-with-fried-chicken-and-colorful-toppings-free-photo.jpg" },
//   { id: 5, name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOERDZhYn8Jy7EW39dG6nwHzLojMA9c2qVoA&s" },
//   { id: 6, name: "Rasmalai", image: "https://propakistani.pk/foodnama/wp-content/uploads/2021/03/Untitled-design-15.png" },
//   { id: 7, name: "Ice Cream", image: "https://static.vecteezy.com/system/resources/previews/029/860/483/large_2x/of-ice-cream-sundae-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg" },
// ];

// export default function Menu() {
//   const [menuItems, setMenuItems] = useState(initialMenuItems);

//   const handleDelete = (id) => setMenuItems(menuItems.filter(item => item.id !== id));

//   const handleEdit = (id) => {
//     const newName = prompt("Enter new name:");
//     if(newName) setMenuItems(menuItems.map(item => item.id === id ? { ...item, name: newName } : item));
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         {/* <Navbar /> */}

//         <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">Menu Items</h1>
//             <button
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//               onClick={() => {
//                 const newName = prompt("Enter new menu item name:");
//                 const newImage = prompt("Enter image URL:");
//                 if(newName && newImage){
//                   setMenuItems([...menuItems, { id: Date.now(), name: newName, image: newImage }]);
//                 }
//               }}
//             >
//               Add New Item
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {menuItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-36 object-cover"
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>
//                   <div className="flex gap-2 w-full justify-center">
//                     <button
//                       onClick={() => handleEdit(item.id)}
//                       className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>







//         </main>
//       </div>
//     </div>
//   );
// }


























// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const initialMenuItems = [
//   { id: 1, name: "Burger", image: "https://www.shutterstock.com/shutterstock/photos/2253091785/display_1500/stock-photo-double-decker-crispy-chicken-or-doppler-burger-double-decker-crispy-zinger-burger-with-cheese-2253091785.jpg" },
//   { id: 2, name: "Tikha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWg6nQZHhMp5ATH7b_Wr7yZcYi8FEkEA9Og&s" },
//   { id: 3, name: "Pizza", image: "https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg" },
//   { id: 4, name: "Biryani", image: "https://static.vecteezy.com/system/resources/previews/067/291/900/large_2x/restaurant-biryani-with-fried-chicken-and-colorful-toppings-free-photo.jpg" },
//   { id: 5, name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOERDZhYn8Jy7EW39dG6nwHzLojMA9c2qVoA&s" },
//   { id: 6, name: "Rasmalai", image: "https://propakistani.pk/foodnama/wp-content/uploads/2021/03/Untitled-design-15.png" },
//   { id: 7, name: "Ice Cream", image: "https://static.vecteezy.com/system/resources/previews/029/860/483/large_2x/of-ice-cream-sundae-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg" },
// ];

// export default function Menu() {
//   const [menuItems, setMenuItems] = useState(initialMenuItems);

//   const handleDelete = (id) => setMenuItems(menuItems.filter(item => item.id !== id));

//   const handleEdit = (id) => {
//     const newName = prompt("Enter new name:");
//     if(newName) setMenuItems(menuItems.map(item => item.id === id ? { ...item, name: newName } : item));
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         {/* Navbar if needed */}
        
//         <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">Menu Items</h1>
//            <button
//   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//   onClick={() => {
//     const newName = prompt("Enter new menu item name:");
//     const newImage = prompt("Enter image URL:");

//     if(newName && newImage){
//       // temporary image object to test URL
//       const img = new Image();
//       img.onload = () => {
//         // valid URL → add card
//         setMenuItems([...menuItems, { id: Date.now(), name: newName, image: newImage }]);
//       };
//       img.onerror = () => {
//         // invalid URL → alert
//         alert("Wrong image URL! Please enter a correct URL.");
//       };
//       img.src = newImage;
//     }
//   }}
// >
//   Add New Item
// </button>

//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
//             {menuItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-36 object-cover"
//                  onError={(e) => {
//     if (!e.target.dataset.error) {   // check if error already happened
//       e.target.dataset.error = "true"; // mark it handled
//       alert("Wrong image URL! Please enter a correct URL.");
//       e.target.src = 'https://via.placeholder.com/150'; // fallback image
//     }
//   }}
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>
//                   <div className="flex gap-2 w-full justify-center">
//                     <button
//                       onClick={() => handleEdit(item.id)}
//                       className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


























// import Sidebar from "./sidebar";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Menu() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all products from JSON Server
//   useEffect(() => {
//     fetch("http://localhost:3001/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch products");
//         return res.json();
//       })
//       .then((data) => {
//         setMenuItems(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" });
//       setMenuItems(menuItems.filter(item => item.id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = async (id) => {
//     const newName = prompt("Enter new name:");
//     if (newName) {
//       const updatedItem = { ...menuItems.find(item => item.id === id), name: newName };
//       try {
//         await fetch(`http://localhost:3001/products/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(updatedItem),
//         });
//         setMenuItems(menuItems.map(item => item.id === id ? updatedItem : item));
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   if (loading) return <div className="p-6 text-center">Loading...</div>;

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <h1 className="text-2xl font-bold mb-6">Menu Items</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
//             {menuItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-36 object-cover"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/150";
//                   }}
//                 />
//                 <div className="p-4 flex flex-col items-center">
//                   <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>
//                   <div className="flex gap-2 w-full justify-center">
//                     <button
//                       onClick={() => handleEdit(item.id)}
//                       className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }



















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
