const Filters = ({ setCategory, selectedCategory }) => {
    const categories = [
      { name: "All", value: "all" },
      { name: "Electronics", value: "electronics" },
      { name: "Fashion", value: "fashion" },
      { name: "Books", value: "books" },
      { name: "Sports", value: "sports" },
      { name: "Daily Utilities", value: "daily-utilities" },
    ];
  
    return (
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100 shadow-md rounded-lg">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setCategory(category.value)}
            className={`px-4 py-2 rounded-lg transition duration-300 font-semibold shadow-md
              ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  };
  
  export default Filters;
  