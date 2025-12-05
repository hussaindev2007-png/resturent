// // import { priceRange } from "../data/prodect";
// import Sortproduct from "./Sortproduct";
// import Search from "./search";


// function filterby({
//   selectedCategories ,
//   selectedRating ,
//   initPriceRange,
//   setSelectedRating,
//   setSelectedCategories,
//   setInitPriceRange,
//   setSortOption,
//   filteredProducts,
//   sortOption,
//   setShowSearch,
//   search,
//   showSearch,
//   setSearch,


// }) {
   
//     const clearFilter = () => {
//       setSelectedCategories([]);
//       setSelectedRating(0);
//       setInitPriceRange({ min: priceRange.min, max: priceRange.max });
//       setSortOption("none");
//       setSearch("")
//     };
  
 
//     const removeCategory = (cat) => {
//       setSelectedCategories((prev) => prev.filter((c) => c !== cat));
//     };
//     const removeRating = () => setSelectedRating(0);
//     const removePrice = () =>
//       setInitPriceRange({ min: priceRange.min, max: priceRange.max });
  
  
  
  
  
//     return (
//      <div className="flex flex-wrap items-center justify-between bg-gray-900 text-white p-3 rounded-xl mb-6 shadow-md">
//             <div className="flex items-center gap-2 flex-wrap">
//               <span className="font-semibold">Filtered By:</span>
    
             
//               {selectedCategories.map((cat) => (
//                 <span
//                   key={cat}
//                   className="bg-zinc-700 px-3 py-1 rounded-full flex items-center gap-2"
//                 >
//                   {cat}
//                   <button
//                     onClick={() => removeCategory(cat)}
//                     className="ml-1 text-white hover:text-red-600"
//                   >
//                     ✕
//                   </button>
//                 </span>
//               ))}
    
              
//               {selectedRating > 0 && (
//                 <span className="bg-slate-600 px-3 py-1 rounded-full flex items-center gap-2">
//                   Rating: {selectedRating}
//                   <button
//                     onClick={removeRating}
//                     className="ml-1 text-violet hover:text-red-300"
//                   >
//                     ✕
//                   </button>
//                 </span>
//               )}
    
         
//               {initPriceRange.max !== priceRange.max && (
//                 <span className="bg-cyan-600 px-3 py-1 rounded-full flex items-center gap-2">
//                   Up to ${initPriceRange.max}
//                   <button
//                     onClick={removePrice}
//                     className="ml-1 text-white hover:text-red-300"
//                   >
//                     ✕
//                   </button>
//                 </span>
//               )}
    
             
//               {(selectedCategories.length > 0 ||
//                 selectedRating > 0 ||
//                 initPriceRange.max !== priceRange.max) && (
//                 <button
//                   onClick={clearFilter}
//                   className="ml-2 bg-red-900 text-white px-3 py-1 rounded-full hover:bg-red-800"
//                 >
//                   Clear All
//                 </button>

              
//               )}
//                 <Sortproduct
                  
//                sort={sortOption} 
//                setSort ={setSortOption}
//                filtered= {filteredProducts}
//                />
//    <Search 
//   search = {search}       
//   showSearch ={showSearch}
  
//   setSearch ={setSearch}
//   setShowSearch ={setShowSearch}
//  />
//             </div>
//           </div>
    
//   )
// }

// export default filterby














// import Sortproduct from "./Sortproduct";
// import Search from "./search";

// function FilterBy({
//   // selectedCategories,
//   // selectedRating,
//   // initPriceRange,
//   // setSelectedRating,
//   // setSelectedCategories,
//   // setInitPriceRange,
//   // setSortOption,
//   // filteredProducts,
//   // sortOption,
//   // setShowSearch,
//   // search,
//   // showSearch,
//   // setSearch,


//   selectedCategories,
//   selectedRating,
//   initPriceRange,
//   priceRange,         // ✅ original API range for price slider
//   setSelectedRating,
//   setSelectedCategories,
//   setInitPriceRange,
//   setSortOption,
//   filteredProducts,
//   sortOption,
//   setShowSearch,
//   search,
//   showSearch,
//   setSearch,
// }) {
//   // Clear All Filters
//   const clearFilter = () => {
//     setSelectedCategories([]);
//     setSelectedRating(0);

//     // Reset price using current API range
//     setInitPriceRange((prev) => ({
//       min: prev.min,
//       max: prev.max,
//     }));

//     setSortOption("none");
//     setSearch("");
//   };

//   // Remove specific category
//   const removeCategory = (cat) => {
//     setSelectedCategories((prev) => prev.filter((c) => c !== cat));
//   };

//   // Remove rating
//   const removeRating = () => setSelectedRating(0);

//   // Reset price filter
//   const removePrice = () =>
//     setInitPriceRange((prev) => ({
//       min: prev.min, // keep API min
//       max: prev.max, // reset max to API max
//     }));

//   return (
//     <div className="flex flex-wrap items-center justify-between bg-gray-900 text-white p-3 rounded-xl mb-6 shadow-md">
//       <div className="flex items-center gap-2 flex-wrap">
//         <span className="font-semibold">Filtered By:</span>

//         {/* Selected Categories */}
//         {selectedCategories.map((cat) => (
//           <span
//             key={cat}
//             className="bg-zinc-700 px-3 py-1 rounded-full flex items-center gap-2"
//           >
//             {cat}
//             <button
//               onClick={() => removeCategory(cat)}
//               className="ml-1 text-white hover:text-red-600"
//             >
//               ✕
//             </button>
//           </span>
//         ))}

//         {/* Selected Rating */}
//         {selectedRating > 0 && (
//           <span className="bg-slate-600 px-3 py-1 rounded-full flex items-center gap-2">
//             Rating: {selectedRating}
//             <button
//               onClick={removeRating}
//               className="ml-1 text-white hover:text-red-300"
//             >
//               ✕
//             </button>
//           </span>
//         )}

//         {/* Price Filter */}
//         {initPriceRange.changed && (
//           <span className="bg-cyan-600 px-3 py-1 rounded-full flex items-center gap-2">
//             Up to ${initPriceRange.max}
//             <button
//               onClick={removePrice}
//               className="ml-1 text-white hover:text-red-300"
//             >
//               ✕
//             </button>
//           </span>
//         )}

//         {/* Clear All */}
//         {(selectedCategories.length > 0 ||
//           selectedRating > 0 ||
//           initPriceRange.changed) && (
//           <button
//             onClick={clearFilter}
//             className="ml-2 bg-red-900 text-white px-3 py-1 rounded-full hover:bg-red-800"
//           >
//             Clear All
//           </button>
//         )}

//         {/* Sorting */}
//         <Sortproduct
//           sort={sortOption}
//           setSort={setSortOption}
//           filtered={filteredProducts}
//         />

//         {/* Search */}
//         <Search
//           search={search}
//           showSearch={showSearch}
//           setSearch={setSearch}
//           setShowSearch={setShowSearch}
//         />
//       </div>
//     </div>
//   );
// }

// export default FilterBy;

























import Sortproduct from "./Sortproduct";
import Search from "./search";

function FilterBy({
  selectedCategories,
  selectedRating,
  initPriceRange,
  priceRange,        
  setSelectedRating,
  setSelectedCategories,
  setInitPriceRange,
  setSortOption,
  filteredProducts,
  sortOption,
  setShowSearch,
  search,
  showSearch,
  setSearch,
}) {
 
  const clearFilter = () => {
    setSelectedCategories([]);
    setSelectedRating(0);

    
    setInitPriceRange({ min: priceRange.min, max: priceRange.max });

    setSortOption("none");
    setSearch("");
  };

 
  const removeCategory = (cat) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== cat));
  };


  const removeRating = () => setSelectedRating(0);

  const removePrice = () =>
    setInitPriceRange({ min: priceRange.min, max: priceRange.max });

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-900 text-white p-3 rounded-xl mb-6 shadow-md">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold">Filtered By:</span>

    
        {selectedCategories.map((cat) => (
          <span
            key={cat}
            className="bg-zinc-700 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {cat}
            <button
              onClick={() => removeCategory(cat)}
              className="ml-1 text-white hover:text-red-600"
            >
              ✕
            </button>
          </span>
        ))}

        
        {selectedRating > 0 && (
          <span className="bg-slate-600 px-3 py-1 rounded-full flex items-center gap-2">
            Rating: {selectedRating}
            <button
              onClick={removeRating}
              className="ml-1 text-white hover:text-red-300"
            >
              ✕
            </button>
          </span>
        )}

       
        {initPriceRange.max !== priceRange.max && (
          <span className="bg-cyan-600 px-3 py-1 rounded-full flex items-center gap-2">
            Up to ${initPriceRange.max}
            <button
              onClick={removePrice}
              className="ml-1 text-white hover:text-red-300"
            >
              ✕
            </button>
          </span>
        )}

        
        {(selectedCategories.length > 0 ||
          selectedRating > 0 ||
          initPriceRange.max !== priceRange.max) && (
          <button
            onClick={clearFilter}
            className="ml-2 bg-red-900 text-white px-3 py-1 rounded-full hover:bg-red-800"
          >
            Clear All
          </button>
        )}

       
        <Sortproduct
          sort={sortOption}
          setSort={setSortOption}
          filtered={filteredProducts}
        />


        <Search
          search={search}
          showSearch={showSearch}
          setSearch={setSearch}
          setShowSearch={setShowSearch}
        />
      </div>
    </div>
  );
}

export default FilterBy;

