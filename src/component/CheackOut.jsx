import { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../contextcart/context";
import { BorderBeam } from "@/components/ui/border-beam";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/confic";

export default function Checkout() {
  const { cartItems, totalCartPrice, clearCart } = useCart();
const today = new Date().toLocaleDateString();


const time = new Date().toLocaleTimeString("en-PK", {
    timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  
  hour12: true,
});

console.log(time);
// console.log(dateTime);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone :"",
    People:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    const cleanCartItems = cartItems.map(item => ({
 
  CardGifts : item.CardGifts, 
  id : item.id,
  image : item.image,
  quantity: item.quantity,
  title: item.title



}));




    try {
      await addDoc(collection(db, "Orders"), {
        name: formData.name,
        email: formData.email,
        Item: cleanCartItems ,
        Statusone: "pending",
        Statustwo: "pending",
        phone: formData.Phone,
        today: today,
        time: time ,
        People: formData.People
        
      });
    

 
      toast.success("Order placed successfully!");
      clearCart();


      setFormData({
        name: "",
        email: "",
        People: "",
        Phone: "",
         
      });
    } catch (error) {
      console.error(error);
      toast.error("Order place nahi ho saka");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="relative overflow-hidden rounded-2xl border p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Order Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="font-bold text-blue-600">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right font-bold text-xl border-t pt-4">
            Total: ${totalCartPrice}
          </div>

          <BorderBeam size={260} duration={10} />
        </div>

        
        <div className="relative overflow-hidden rounded-2xl border p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-6">Shipping Details</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

           
            <input
              type="text"
              name="Phone"
              placeholder="Phone Number "
              value={formData.Phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />
            <input
  type="text"
  name="People"
  placeholder="Enter number of people for eat"
  value={formData.People}
  onChange={handleChange}
  required
  min="1"
  className="w-full border p-3 rounded-lg"
/>


            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Place Order
            </button>
          </form>

          <BorderBeam size={250} duration={10} />
        </div>
      </div>
    </div>
  );
}
