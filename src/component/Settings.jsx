// // src/components/Settings.jsx

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import { motion } from "framer-motion";

// export default function Settings() {
//   const [activeTab, setActiveTab] = useState("restaurant");
//   const [restaurantInfo, setRestaurantInfo] = useState({
//     name: "My Restaurant",
//     address: "123 Main Street",
//     contact: "0300-1234567",
//   });
//   const [profileInfo, setProfileInfo] = useState({
//     name: "Admin Name",
//     email: "admin@example.com",
//     password: "",
//   });
//   const [theme, setTheme] = useState("light");
//   const [notifications, setNotifications] = useState({
//     newOrders: true,
//     reservations: true,
//     lowStock: false,
//   });
//   const [payment, setPayment] = useState({
//     taxRate: 5,
//     serviceCharge: 10,
//   });

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <h1 className="text-2xl font-bold mb-6">Settings</h1>

//           {/* Tabs */}
//           <div className="flex space-x-2 mb-6">
//             {[
//               { id: "restaurant", label: "Restaurant Info" },
//               { id: "profile", label: "Profile" },
//               { id: "theme", label: "Theme" },
//               { id: "notifications", label: "Notifications" },
//               { id: "payment", label: "Payment" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-lg font-semibold duration-200 ${
//                   activeTab === tab.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
//           >
//             {/* Restaurant Info */}
//             {activeTab === "restaurant" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Restaurant Name</span>
//                   <input
//                     type="text"
//                     value={restaurantInfo.name}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, name: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Address</span>
//                   <input
//                     type="text"
//                     value={restaurantInfo.address}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, address: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Contact</span>
//                   <input
//                     type="text"
//                     value={restaurantInfo.contact}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, contact: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200">
//                   Save
//                 </button>
//               </div>
//             )}

//             {/* Profile */}
//             {activeTab === "profile" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Name</span>
//                   <input
//                     type="text"
//                     value={profileInfo.name}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, name: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Email</span>
//                   <input
//                     type="email"
//                     value={profileInfo.email}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, email: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Password</span>
//                   <input
//                     type="password"
//                     value={profileInfo.password}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, password: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200">
//                   Save
//                 </button>
//               </div>
//             )}

//             {/* Theme */}
//             {activeTab === "theme" && (
//               <div className="space-y-4">
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     checked={theme === "light"}
//                     onChange={() => setTheme("light")}
//                   />
//                   <span>Light Mode</span>
//                 </label>
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     checked={theme === "dark"}
//                     onChange={() => setTheme("dark")}
//                   />
//                   <span>Dark Mode</span>
//                 </label>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200">
//                   Save
//                 </button>
//               </div>
//             )}

//             {/* Notifications */}
//             {activeTab === "notifications" && (
//               <div className="space-y-4">
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     checked={notifications.newOrders}
//                     onChange={() =>
//                       setNotifications({ ...notifications, newOrders: !notifications.newOrders })
//                     }
//                   />
//                   <span>New Orders</span>
//                 </label>
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     checked={notifications.reservations}
//                     onChange={() =>
//                       setNotifications({
//                         ...notifications,
//                         reservations: !notifications.reservations,
//                       })
//                     }
//                   />
//                   <span>Reservations</span>
//                 </label>
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     checked={notifications.lowStock}
//                     onChange={() =>
//                       setNotifications({ ...notifications, lowStock: !notifications.lowStock })
//                     }
//                   />
//                   <span>Low Stock Alerts</span>
//                 </label>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200">
//                   Save
//                 </button>
//               </div>
//             )}

//             {/* Payment */}
//             {activeTab === "payment" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Tax Rate (%)</span>
//                   <input
//                     type="number"
//                     value={payment.taxRate}
//                     onChange={(e) =>
//                       setPayment({ ...payment, taxRate: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Service Charge (%)</span>
//                   <input
//                     type="number"
//                     value={payment.serviceCharge}
//                     onChange={(e) =>
//                       setPayment({ ...payment, serviceCharge: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200">
//                   Save
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }











// import { useState } from "react";
// import Sidebar from "./sidebar";
// import Navbar from "./Navbar";
// import { motion } from "framer-motion";

// export default function Settings() {
//   const [activeTab, setActiveTab] = useState("restaurant");

//   const [restaurantInfo, setRestaurantInfo] = useState({
//     name: "My Restaurant",
//     address: "123 Main Street",
//     contact: "0300-1234567",
//   });

//   const [profileInfo, setProfileInfo] = useState({
//     name: "Admin Name",
//     email: "admin@example.com",
//     password: "",
//   });



//   const [notifications, setNotifications] = useState({
//     newOrders: true,
//     reservations: true,
//     lowStock: false,
//   });

//   const [payment, setPayment] = useState({
//     taxRate: 5,
//     serviceCharge: 10,
//   });

//   const [editing, setEditing] = useState(false);


//   const handleSave = () => {
//     console.log("Restaurant Info:", restaurantInfo);
//     console.log("Profile Info:", profileInfo);
  
//     console.log("Notifications:", notifications);
//     console.log("Payment:", payment);
//     setEditing(false);
//     alert("Changes saved successfully!");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           <h1 className="text-2xl font-bold mb-6">Settings</h1>

          
//           <div className="flex space-x-2 mb-6">
//             {[
//               { id: "restaurant", label: "Restaurant Info" },
//               { id: "profile", label: "Profile" },
           
//               { id: "notifications", label: "Notifications" },
//               { id: "payment", label: "Payment" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => { setActiveTab(tab.id); setEditing(false); }}
//                 className={`px-4 py-2 rounded-lg font-semibold duration-200 ${
//                   activeTab === tab.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

        
//           <div className="mb-4">
//             <button
//               onClick={() => setEditing(true)}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 duration-200 " 
              
               
//             >
//               Edit
//             </button>
//           </div>

//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
//           >
    
//             {activeTab === "restaurant" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Restaurant Name</span>
//                   <input
//                     type="text"
//                     disabled={!editing}
//                     value={restaurantInfo.name}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, name: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Address</span>
//                   <input
//                     type="text"
//                     disabled={!editing}
//                     value={restaurantInfo.address}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, address: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Contact</span>
//                   <input
//                     type="text"
//                     disabled={!editing}
//                     value={restaurantInfo.contact}
//                     onChange={(e) =>
//                       setRestaurantInfo({ ...restaurantInfo, contact: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//               </div>
//             )}

        
//             {activeTab === "profile" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Name</span>
//                   <input
//                     type="text"
//                     disabled={!editing}
//                     value={profileInfo.name}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, name: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Email</span>
//                   <input
//                     type="email"
//                     disabled={!editing}
//                     value={profileInfo.email}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, email: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Password</span>
//                   <input
//                     type="password"
//                     disabled={!editing}
//                     value={profileInfo.password}
//                     onChange={(e) =>
//                       setProfileInfo({ ...profileInfo, password: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//               </div>
//             )}


            
//             {activeTab === "notifications" && (
//               <div className="space-y-4">
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     disabled={!editing}
//                     checked={notifications.newOrders}
//                     onChange={() =>
//                       setNotifications({ ...notifications, newOrders: !notifications.newOrders })
//                     }
//                   />
//                   <span>New Orders</span>
//                 </label>
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     disabled={!editing}
//                     checked={notifications.reservations}
//                     onChange={() =>
//                       setNotifications({
//                         ...notifications,
//                         reservations: !notifications.reservations,
//                       })
//                     }
//                   />
//                   <span>Reservations</span>
//                 </label>
//                 <label className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     disabled={!editing}
//                     checked={notifications.lowStock}
//                     onChange={() =>
//                       setNotifications({ ...notifications, lowStock: !notifications.lowStock })
//                     }
//                   />
//                   <span>Low Stock Alerts</span>
//                 </label>
//               </div>
//             )}

            
//             {activeTab === "payment" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <span className="font-semibold">Tax Rate (%)</span>
//                   <input
//                     type="number"
//                     disabled={!editing}
//                     value={payment.taxRate}
//                     onChange={(e) =>
//                       setPayment({ ...payment, taxRate: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="font-semibold">Service Charge (%)</span>
//                   <input
//                     type="number"
//                     disabled={!editing}
//                     value={payment.serviceCharge}
//                     onChange={(e) =>
//                       setPayment({ ...payment, serviceCharge: e.target.value })
//                     }
//                     className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </label>
//               </div>
//             )}

            
//             {editing && (
//               <div className="mt-4">
//                 <button
//                   onClick={handleSave}
//                   className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200"
//                 >
//                   Save
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }












































import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RestaurantInfo from "../Tab/RestaurantInfo";
import ProfileInfo from "../Tab/Profile";
import NotificationsTab from "../Tab/Notifications";
import PaymentTab from "../Tab/Payment";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("restaurant");
  const [editing, setEditing] = useState(false);

  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "Hussain Restaurant",
    address: "house # M-73",
    contact: "0300-1234567",
  });

  const [profileInfo, setProfileInfo] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    reservations: false,
    lowStock: false,
  });

  const [payment, setPayment] = useState({
    taxRate: 5,
    serviceCharge: 10,
  });

  const handleSave = () => {
    setEditing(false);
    toast.success("Changes saved successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const tabs = [
    { id: "restaurant", label: "Restaurant Info" },
    { id: "profile", label: "Profile" },
    { id: "notifications", label: <FaBell className="text-gray-600 dark:text-gray-300 text-xl hover:text-red-600 transition-colors duration-200" /> },
    { id: "payment", label: "Payment" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="flex space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white cursor-pointer"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 duration-200"
            >
              Edit
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            {activeTab === "restaurant" && (
              <RestaurantInfo data={restaurantInfo} setData={setRestaurantInfo} editing={editing} />
            )}
            {activeTab === "profile" && (
              <ProfileInfo data={profileInfo} setData={setProfileInfo} editing={editing} />
            )}
            {activeTab === "notifications" && (
              <NotificationsTab data={notifications} setData={setNotifications} editing={editing} />
            )}
            {activeTab === "payment" && (
              <PaymentTab data={payment} setData={setPayment} editing={editing} />
            )}

            {editing && (
              <div className="mt-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200"
                >
                  Save
                </button>
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
