




// function Sortproduct({ sort,setSort ,filtered}) {

//          if (sort === "priceLowToHigh") {
//     filtered.sort((a, b) => a.price - b.price);
//   } else if (sort === "priceHighToLow") {
//     filtered.sort((a, b) => b.price - a.price);
//   }
//   const handleSortChange = (e) => {
//     setSort(e.target.value);
//   };

//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-gray-300">Sort:</span>
//       <select
//         value={sort}
//         onChange={handleSortChange}
//         className="bg-gray-800 text-white px-3 py-1 rounded-lg cursor-pointer"
//       >
//         <option value="none">Default</option>
//         <option value="priceLowToHigh">Price: Low to High</option>
//         <option value="priceHighToLow">Price: High to Low</option>
//       </select>
//     </div>
//   )
// }

// export default Sortproduct
















function Sortproduct({ sort, setSort }) {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-300">Sort:</span>
      <select
        value={sort}
        onChange={handleSortChange}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        <option value="none">Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Sortproduct;
