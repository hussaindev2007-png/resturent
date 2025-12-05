


// // import { priceRange } from "../data/prodect";

// function HandlePrice({ initPriceRange, onPriceChange }) {
//   return (
//     <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
//       <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
//         Filter by Price
//       </h3>

//       {/* Gradient Range Slider */}
//       <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
//         <div
//           className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
//           style={{
//             width: `${
//               ((initPriceRange.max - priceRange.min) /
//                 (priceRange.max - priceRange.min)) *
//               100
//             }%`,
//           }}
//         ></div>

//         <input
//           type="range"
//           min={priceRange.min}
//           max={priceRange.max}
//           step="10"
//           value={initPriceRange.max}
//           onChange={onPriceChange}
//           className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
//         />

//         {/* Custom thumb (circle) */}
//         <style jsx>{`
//           input[type='range']::-webkit-slider-thumb {
//             appearance: none;
//             height: 18px;
//             width: 18px;
//             border-radius: 50%;
//             background: linear-gradient(135deg, #0ea5e9, #000000);
//             border: 2px solid #fff;
//             box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
//             transition: all 0.2s ease;
//           }
//           input[type='range']::-webkit-slider-thumb:hover {
//             transform: scale(1.1);
//             box-shadow: 0 0 12px rgba(14, 165, 233, 0.8);
//           }
//         `}</style>
//       </div>

//       <div className="flex justify-between mt-3 text-gray-300 font-medium">
//         <span>${initPriceRange.min}</span>
//         <span>${initPriceRange.max}</span>
//       </div>
//     </div>
//   );
// }

// export default HandlePrice;


















// function HandlePrice({ initPriceRange, onPriceChange }) {
//   if (!initPriceRange) return null; // safety check

//   const min = initPriceRange.min;
//   const max = initPriceRange.max;

//   return (
//     <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
//       <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
//         Filter by Price
//       </h3>

//       {/* Gradient Range Slider */}
//       <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
//         <div
//           className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
//           style={{
//             width: `100%`, // simple full width gradient
//           }}
//         ></div>

//         <input
//           type="range"
//           min={min}
//           max={max}
//           step="10"
//           value={max}
//           onChange={(e) =>
//             onPriceChange({ ...initPriceRange, max: Number(e.target.value) })
//           }
//           className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
//         />

//         {/* Custom thumb */}
//         <style jsx>{`
//           input[type='range']::-webkit-slider-thumb {
//             appearance: none;
//             height: 18px;
//             width: 18px;
//             border-radius: 50%;
//             background: linear-gradient(135deg, #0ea5e9, #000000);
//             border: 2px solid #fff;
//             box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
//             transition: all 0.2s ease;
//           }
//           input[type='range']::-webkit-slider-thumb:hover {
//             transform: scale(1.1);
//             box-shadow: 0 0 12px rgba(14, 165, 233, 0.8);
//           }
//         `}</style>
//       </div>

//       <div className="flex justify-between mt-3 text-gray-300 font-medium">
//         <span>${min}</span>
//         <span>${initPriceRange.max}</span>
//       </div>
//     </div>
//   );
// }

// export default HandlePrice;




























// import { useState, useEffect } from "react";

// function PriceFilter({ priceRange, initPriceRange, onPriceChange }) {
//   const [minVal, setMinVal] = useState(initPriceRange.min);
//   const [maxVal, setMaxVal] = useState(initPriceRange.max);

//   useEffect(() => {
//     onPriceChange({ min: minVal, max: maxVal });
//   }, [minVal, maxVal]);

//   if (!priceRange) return null; // safety check

//   // Calculate gradient for slider background
//   const getTrackBackground = () => {
//     const minPercent = ((minVal - priceRange.min) / (priceRange.max - priceRange.min)) * 100;
//     const maxPercent = ((maxVal - priceRange.min) / (priceRange.max - priceRange.min)) * 100;
//     return `linear-gradient(to right, #0ea5e9 ${minPercent}%, #14b8a6 ${minPercent}%, #14b8a6 ${maxPercent}%, #0ea5e9 ${maxPercent}%)`;
//   };

//   return (
//     <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
//       <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
//         Filter by Price
//       </h3>

//       <div className="relative w-full h-2 rounded-full overflow-hidden mb-4" style={{ background: getTrackBackground() }}></div>

//       {/* Min Slider */}
//       <input
//         type="range"
//         min={priceRange.min}
//         max={priceRange.max}
//         step="10"
//         value={minVal}
//         onChange={(e) => {
//           const val = Math.min(Number(e.target.value), maxVal - 10); // min cannot exceed max
//           setMinVal(val);
//         }}
//         className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
//       />

//       {/* Max Slider */}
//       <input
//         type="range"
//         min={priceRange.min}
//         max={priceRange.max}
//         step="10"
//         value={maxVal}
//         onChange={(e) => {
//           const val = Math.max(Number(e.target.value), minVal + 10); // max cannot go below min
//           setMaxVal(val);
//         }}
//         className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
//       />

//       <div className="flex justify-between mt-3 text-gray-300 font-medium">
//         <span>${minVal}</span>
//         <span>${maxVal}</span>
//       </div>

//       {/* Custom slider thumb styling */}
//       <style jsx>{`
//         input[type='range']::-webkit-slider-thumb {
//           -webkit-appearance: none;
//           height: 18px;
//           width: 18px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #0ea5e9, #14b8a6);
//           border: 2px solid #fff;
//           box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
//           transition: all 0.2s ease;
//         }
//         input[type='range']::-webkit-slider-thumb:hover {
//           transform: scale(1.1);
//           box-shadow: 0 0 12px rgba(14, 165, 233, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default PriceFilter;






















































































// function HandlePrice({ initPriceRange, priceRange, onPriceChangeHandler }) {
//   if (!priceRange) return null; // safety check

//   const percentage =
//     ((initPriceRange.max - priceRange.min) / (priceRange.max - priceRange.min)) *
//     100;

//   return (
//     <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
//       <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
//         Filter by Price
//       </h3>

//       {/* Gradient Range Slider */}
//       <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
//         <div
//           className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
//           style={{ width: `${percentage}%` }}
//         ></div>

//         <input
//           type="range"
//           min={priceRange.min}
//           max={priceRange.max}
//           step="10"
//           value={initPriceRange.max}
//           onChange={onPriceChangeHandler}
//           className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
//         />

//         {/* Custom thumb */}
//         <style jsx>{`
//           input[type="range"]::-webkit-slider-thumb {
//             appearance: none;
//             height: 18px;
//             width: 18px;
//             border-radius: 50%;
//             background: linear-gradient(135deg, #0ea5e9, #000000);
//             border: 2px solid #fff;
//             box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
//             transition: all 0.2s ease;
//           }
//           input[type="range"]::-webkit-slider-thumb:hover {
//             transform: scale(1.1);
//             box-shadow: 0 0 12px rgba(14, 165, 233, 0.8);
//           }
//         `}</style>
//       </div>

//       <div className="flex justify-between mt-3 text-gray-300 font-medium">
//         <span>${priceRange.min}</span>
//         <span>${initPriceRange.max}</span>
//       </div>
//     </div>
//   );
// }

// export default HandlePrice;



























































function HandlePrice({ initPriceRange, priceRange, onPriceChange }) {
  if (!priceRange || priceRange.min === undefined) return null;

  const percentage =
    ((initPriceRange.max - priceRange.min) / (priceRange.max - priceRange.min)) *
    100;

  return (
    <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
        Filter by Price
      </h3>

      <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
          style={{ width: `${percentage}%` }}
        ></div>

        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={initPriceRange.max}
          onChange={onPriceChange}
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
        />
      </div>

      <div className="flex justify-between mt-3 text-gray-300 font-medium">
        <span>${priceRange.min}</span>
        <span>${initPriceRange.max}</span>
      </div>
    </div>
  );
}

export default HandlePrice;
