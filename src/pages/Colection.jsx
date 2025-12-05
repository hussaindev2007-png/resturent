
import { useState, useEffect } from "react";
import CategoryFilter from "../component/CategoryFilter";
import Products from "../component/Products";
import RatingFilter from "../component/RatingFilter";
import HandlePrice from "../component/HandlePrice";
import FilterBy from "../component/FilterBy";
import { getVisibleProducts } from "../data/product-filters";

function Collection() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 }); // API min/max
  const [initPriceRange, setInitPriceRange] = useState({ min: 0, max: 0 }); // current slider value
  const [sortOption, setSortOption] = useState("none");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // 🔹 Fetch products from API using async/await
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setAllProducts(data);
        setFilteredProducts(data);

        const minPrice = Math.min(...data.map((p) => p.price));
        const maxPrice = Math.max(...data.map((p) => p.price));
        setPriceRange({ min: minPrice, max: maxPrice });
        setInitPriceRange({ min: minPrice, max: maxPrice });
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  // 🔹 Filter products dynamically whenever filters/sort/search change
  useEffect(() => {
    const filterProducts = async () => {
      const visible = await getVisibleProducts(
        allProducts,
        selectedCategories,
        selectedRating,
        initPriceRange,
        sortOption,
        search
      );
      setFilteredProducts(visible);
    };

    filterProducts();
  }, [allProducts, selectedCategories, selectedRating, initPriceRange, sortOption, search]);

  // 🔹 Event handlers
  const onPriceChange = (e) => {
    setInitPriceRange((prev) => ({
      ...prev,
      max: Number(e.target.value),
    }));
  };

  const onChangeCategoryHandler = (category, isChecked) => {
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const onChangeRatingHandler = (rating) => setSelectedRating(Number(rating));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <FilterBy
        selectedCategories={selectedCategories}
        selectedRating={selectedRating}
        initPriceRange={initPriceRange}
        priceRange={priceRange}
        setSelectedCategories={setSelectedCategories}
        setSelectedRating={setSelectedRating}
        setInitPriceRange={setInitPriceRange}
        setSortOption={setSortOption}
        filteredProducts={filteredProducts}
        sortOption={sortOption}
        search={search}
        setSearch={setSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <div className="grid grid-cols-12 gap-3 my-2 mx-2">
        <div className="col-span-2 space-y-4">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onChangeCategory={onChangeCategoryHandler}
          />
          <HandlePrice
            initPriceRange={initPriceRange}
            priceRange={priceRange}
            onPriceChange={onPriceChange}
          />
          <RatingFilter
            onChangeRatingHandler={onChangeRatingHandler}
            selectedRating={selectedRating}
          />
        </div>

        <div className="col-span-10">
          <Products products={filteredProducts} search={search} />
        </div>
      </div>
    </div>
  );
}

export default Collection;
