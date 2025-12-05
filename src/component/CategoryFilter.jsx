

// import Checkbox from "./Checkbox";
// import { categoryTitle } from "../data/category";

// function CategoryFilter({ selectedCategories, onChangeCategory }) {
//   return (
   
// <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
//   <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
//     Category Filter
//   </h3>

//   <div className="space-y-2 pt-1">
//     {categoryTitle.map((category, index) => (
//       <Checkbox
//         key={index}
//         text={category}
//         checked={selectedCategories.includes(category)}
//         onChange={(e) => onChangeCategory(category, e.target.checked)}
//         className="text-white hover:bg-white/10 p-1 rounded-md transition"
//       />
//     ))}
//   </div>
// </div>





//   );
// }

// export default CategoryFilter;




















// import Checkbox from "./Checkbox";
// import { useState, useEffect } from "react";

// function CategoryFilter({ selectedCategories, onChangeCategory }) {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3001/categories")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch categories");
//         return res.json();
//       })
//       .then((data) => {
//         setCategories(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="text-white p-3">Loading categories...</div>;

//   return (
//     <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
//       <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
//         Category Filter
//       </h3>
//       <div className="space-y-2 pt-1">
//         {categories.map((category, index) => (
//           <Checkbox
//             key={index}
//             text={category.title} // assuming your category object has `name` property
//             checked={selectedCategories.includes(category.title)}
//             onChange={(e) => onChangeCategory(category.title, e.target.checked)}
//             className="text-white hover:bg-white/10 p-1 rounded-md transition"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;








































// import Checkbox from "./Checkbox";
// import { useState, useEffect } from "react";

// function CategoryFilter({ selectedCategories, onChangeCategory }) {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3001/categories")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch categories");
//         return res.json();
//       })
//       .then((data) => {
//         setCategories(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="text-white p-3">Loading categories...</div>;

//   return (
//     <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
//       <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
//         Category Filter
//       </h3>

//       <div className="space-y-2 pt-1">
//         {categories.map((category) => (
//           <Checkbox
//             key={category.id}
//             text={category.title}                // ✅ Correct
//             checked={selectedCategories.includes(category.title)} // ✅ Correct
//             onChange={(e) =>
//               onChangeCategory(category.title, e.target.checked) // ✅ Correct
//             }
//             className="text-white hover:bg-white/10 p-1 rounded-md transition"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;



















// import { useState, useEffect } from "react";
// import Checkbox from "./Checkbox"; // assuming tumhara custom checkbox component hai

// function CategoryFilter({ selectedCategories, onChangeCategory }) {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔹 Fetch categories from API
//   useEffect(() => {
//     fetch("http://localhost:3001/categories")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch categories");
//         return res.json();
//       })
//       .then((data) => {
//         setCategories(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading)
//     return <div className="text-white p-3">Loading categories...</div>;

//   return (
//     <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
//       <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
//         Category Filter
//       </h3>

//       <div className="space-y-2 pt-1">
//         {categories.map((category) => (
//           <Checkbox
//             key={category.id}
//             text={category.title} // ✅ checkbox text
//             checked={selectedCategories.includes(category.title)} // ✅ selected
//             onChange={(e) =>
//               onChangeCategory(category.title, e.target.checked) // ✅ handle change
//             }
//             className="text-white hover:bg-white/10 p-1 rounded-md transition"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;






























import { useState, useEffect } from "react";
import Checkbox from "./Checkbox"; // Tumhara custom checkbox component

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log();
  
  // 🔹 Fetch categories from API
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Categories fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white p-3">Loading categories...</div>;

  return (
    <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
      <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
        Category Filter
      </h3>

      <div className="space-y-2 pt-1">
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            text={category.title} // ✅ checkbox text
            checked={selectedCategories.includes(category.title)} // ✅ selected state
            onChange={(e) =>
              onChangeCategory(category.title, e.target.checked) // ✅ handle change
            }
            className="text-white hover:bg-white/10 p-1 rounded-md transition"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
