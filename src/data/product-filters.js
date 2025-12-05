
  
  //         import { product as DBProducts } from "./prodect";
  
  //       export const getVisibleProducts = (
  //           selectedCategories = [],
  //           selectedRating = 0,
  //           initPriceRange
  //         ) => {
  //             let products = [...DBProducts];
    
         
  //             if (selectedCategories.length > 0) {
  //           products = products.filter((product) =>
  //               selectedCategories.includes(product.category)
  //         );
  //       }
  //   if (selectedRating) {
  //           products = products.filter((product) => product.rating >= selectedRating);
  //         }
  
  //         if (initPriceRange && initPriceRange.min !== undefined && initPriceRange.max !== undefined) {
  //         products = products.filter(
  //             (product) =>
  //           product.price >= initPriceRange.min &&
  //       product.price <= initPriceRange.max
  //     );
  //   }
  
  //   return products;
  // };
  























//   export const getVisibleProducts = async (
//   selectedCategories = [],
//   selectedRating = 0,
//   initPriceRange
// ) => {

//   // 1) Fetch products from API
//   const res = await fetch("http://localhost:3001/products");
//   const products = await res.json();

//   let filtered = [...products];

//   // 2) Category filter
//   if (selectedCategories.length > 0) {
//     filtered = filtered.filter((product) =>
//       selectedCategories.includes(product.category)
//     );
//   }

//   // 3) Rating filter
//   if (selectedRating > 0) {
//     filtered = filtered.filter((product) => product.rating >= selectedRating);
//   }

//   // 4) Price filter
//   if (initPriceRange?.min !== undefined && initPriceRange?.max !== undefined) {
//     filtered = filtered.filter(
//       (product) =>
//         product.price >= initPriceRange.min &&
//         product.price <= initPriceRange.max
//     );
//   }

//   return filtered;
// };















// export const getVisibleProducts = async (
//   selectedCategories = [],
//   selectedRating = 0,
//   initPriceRange
// ) => {
//   // 1) Fetch products
//   const res = await fetch("http://localhost:3001/products");
//   const products = await res.json();

//   let filtered = [...products];

//   // 2) Category filter
//   if (selectedCategories.length > 0) {
//     filtered = filtered.filter((products) =>
//       selectedCategories.includes(products.category)
//     );
//   }

//   // 3) Rating filter
//   if (selectedRating > 0) {
//     filtered = filtered.filter((product) => product.rating >= selectedRating);
//   }

//   // 4) Price filter
//   if (initPriceRange?.min !== undefined && initPriceRange?.max !== undefined) {
//     filtered = filtered.filter(
//       (product) =>
//         product.price >= initPriceRange.min &&
//         product.price <= initPriceRange.max
//     );
//   }

//   return filtered;
// };


































export const getVisibleProducts = (
  selectedCategories = [],
  selectedRating = 0,
  initPriceRange
) => {
  // 1) Fetch products
  return fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((products) => {
      let filtered = [...products];

      // 2) Category filter
      if (selectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }

      // 3) Rating filter
      if (selectedRating > 0) {
        filtered = filtered.filter((product) => product.rating >= selectedRating);
      }

      // 4) Price filter
      if (
        initPriceRange?.min !== undefined &&
        initPriceRange?.max !== undefined
      ) {
        filtered = filtered.filter(
          (product) =>
            product.price >= initPriceRange.min &&
            product.price <= initPriceRange.max
        );
      }

      return filtered;
    })
    .catch((err) => {
      console.error("Failed to fetch products:", err);
      return []; // error aane par empty array return kare
    });
};
