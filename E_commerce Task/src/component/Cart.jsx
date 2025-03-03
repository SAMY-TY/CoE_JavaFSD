import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Your Shopping Cart</h2>
                
                {cart.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div key={item.id} className="bg-gray-50 border p-4 my-3 flex justify-between items-center rounded-md shadow-sm">
                                <p className="text-lg font-semibold text-gray-700">{item.name} - <span className="text-green-600">${item.price}</span></p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <h3 className="text-xl font-bold mt-4 text-gray-800 text-center">
                            Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                        </h3>
                        <Link to="/checkout">
                            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300 w-full mt-4">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
