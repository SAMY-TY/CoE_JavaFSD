const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 font-semibold mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="btn-primary w-full mt-4"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
