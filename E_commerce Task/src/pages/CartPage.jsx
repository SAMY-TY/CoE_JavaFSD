const CartPage = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="p-4 border rounded flex justify-between">
                <span>{item.name} - ${item.price}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <h3 className="font-bold mt-4">Total: ${total}</h3>
          </div>
        )}
      </div>
    );
  };
  
  export default CartPage;