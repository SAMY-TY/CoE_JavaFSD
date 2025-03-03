import React, { useState } from "react";
import ProductCard from "../components/productCard";

const products = [
  // 📌 Gaming & Accessories
  { id: 1, name: "PlayStation 5", category: "gaming", price: 499 },
  { id: 2, name: "Gaming Keyboard", category: "gaming", price: 120 },
  { id: 3, name: "Wireless Gaming Mouse", category: "gaming", price: 80 },
  { id: 4, name: "Xbox Controller", category: "gaming", price: 60 },
  { id: 5, name: "Gaming Headset", category: "gaming", price: 150 },

  // 📌 Home Appliances
  { id: 6, name: "Air Fryer", category: "home-appliances", price: 99 },
  { id: 7, name: "Smart Coffee Maker", category: "home-appliances", price: 129 },
  { id: 8, name: "Robot Vacuum Cleaner", category: "home-appliances", price: 250 },
  { id: 9, name: "Instant Water Heater", category: "home-appliances", price: 180 },
  { id: 10, name: "Smart Air Purifier", category: "home-appliances", price: 300 },

  // 📌 Men's Fashion
  { id: 11, name: "Slim Fit Blazer", category: "mens-fashion", price: 110 },
  { id: 12, name: "Polo Shirt", category: "mens-fashion", price: 45 },
  { id: 13, name: "Cargo Pants", category: "mens-fashion", price: 60 },
  { id: 14, name: "Leather Wallet", category: "mens-fashion", price: 35 },
  { id: 15, name: "Stylish Sunglasses", category: "mens-fashion", price: 80 },

  // 📌 Outdoor & Adventure
  { id: 16, name: "Camping Tent", category: "outdoor", price: 200 },
  { id: 17, name: "Hiking Backpack", category: "outdoor", price: 90 },
  { id: 18, name: "Portable Water Bottle", category: "outdoor", price: 30 },
  { id: 19, name: "Trekking Shoes", category: "outdoor", price: 120 },
  { id: 20, name: "Survival Kit", category: "outdoor", price: 70 },

  // 📌 Fitness & Wellness
  { id: 21, name: "Smart Treadmill", category: "fitness", price: 500 },
  { id: 22, name: "Adjustable Dumbbells", category: "fitness", price: 180 },
  { id: 23, name: "Resistance Bands Set", category: "fitness", price: 40 },
  { id: 24, name: "Smart Body Scale", category: "fitness", price: 90 },
  { id: 25, name: "Yoga Mat", category: "fitness", price: 40 },
];

const Home = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter products based on category selection
  const categoryFilteredProducts =
    selectedCategory === "all"
      ? filteredProducts
      : filteredProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search for products..."
        className="relative w-full max-w-lg p-4 text-lg border-2 border-red-500 rounded-full shadow-md
        focus:outline-none focus:ring-2 focus:ring-red-600 bg-white placeholder-gray-500 text-gray-800 transition mb-4"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100 shadow-md rounded-lg mb-4">
        {["all", "gaming", "home-appliances", "mens-fashion", "outdoor", "fitness"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition duration-300 font-semibold shadow-md
            ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryFilteredProducts.length > 0 ? (
          categoryFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
