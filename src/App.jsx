

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import NotFound from "./pages/not";
import Collection from "./pages/Colection";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductD";  
import Footer from "./component/Footer";

import AddCard from "./component/Add";
import CheackOut from "./component/CheackOut";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./component/sidebar";
import Profile from "./component/profile";
import Orders from "./component/Orders";
import Menu from "./component/Menu";
import Reservations from "./component/Reservations";
import Customers from "./component/Customers";
import Setting from "./component/Settings";
import Notification from "./Tab/Notifications";

const App = () => {
  return (
    <div>
 <Header />

 

<Routes>
<Route index element={<Home />} />
<Route path="/products" element={<Collection />} />
<Route path="/Add" element={<AddCard/>} />
<Route path="/CheackOut" element={<CheackOut/>} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route path="/dashboard" element={<Dashboard/>} />
 <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/Notification" element={<Notification />} />

        


        
         <Route path="*" element={<NotFound />} />
      </Routes>
 <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
 <Footer /> 
   </div>
  );
};

 export default App;
















