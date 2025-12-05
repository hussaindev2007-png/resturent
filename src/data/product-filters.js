

export const getVisibleProducts = (
  selectedCategories = [],
  selectedRating = 0,
  initPriceRange
) => {
 
  return fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((products) => {
      let filtered = [...products];

      if (selectedCategories.length > 0) {
        filtered = filtered.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }

      
      if (selectedRating > 0) {
        filtered = filtered.filter((product) => product.rating >= selectedRating);
      }

      
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
      return []; 
    });
};

