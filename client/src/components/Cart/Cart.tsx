import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { updateQuantity, removeFromCart } from '../../redux/slices/cartSlice';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');

   useEffect(() => {
      window.scrollTo(0, 0); // Scroll ko top par le aana
    }, []);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-gray-700">Home</a>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">Cart</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-t">
              <th className="py-4 text-left font-medium text-gray-800">Product</th>
              <th className="py-4 text-center font-medium text-gray-800">Price</th>
              <th className="py-4 text-center font-medium text-gray-800">Quantity</th>
              <th className="py-4 text-right font-medium text-gray-800">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <CartItem
                key={item.id}
                {...item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-3 h-min border border-gray-300 rounded"
          />
          <button 
            type="submit" 
            className="px-4 py-3 h-min bg-red-500 text-white rounded hover:bg-red-600 md:w-auto"
          >
            Apply Coupon
          </button>
        </form>

        <div className="border rounded p-6">
          <h2 className="text-xl font-semibold mb-6">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span>Subtotal:</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span>Shipping:</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between py-3">
              <span>Total:</span>
              <span className="font-medium">${subtotal}</span>
            </div>
          </div>
          <button 
            className="w-full mt-6 px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => alert('Proceeding to checkout')}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
