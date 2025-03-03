const SearchBar = ({ setSearchQuery }) => {
    return (
      <div className="w-full flex justify-center mt-16">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          className="relative -top-12 w-full max-w-lg p-4 text-lg border-2 border-purple-500 rounded-full shadow-md
                     focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-100 placeholder-gray-500 text-gray-800 transition"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchBar;