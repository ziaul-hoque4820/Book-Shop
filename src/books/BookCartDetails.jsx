import { useContext } from "react";
import { BookContext } from "../context";
import { getImageUrl } from "../utils/bookImage";

const BookCartDetails = ({ onClose }) => {
    const { cartData, setCartData } = useContext(BookContext);

    const handleDeleteBook = (event, itemId) => {
        event.preventDefault();
        const filteredItem = cartData.filter(item => item.id !== itemId);
        setCartData([...filteredItem]);
    };

    const handleIncreaseQuantity = (id) => {
        const updatedCart = cartData.map(item => {
            if (item.id === id) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });
        setCartData(updatedCart);
    };

    const handleDecreaseQuantity = (id) => {
        const updatedCart = cartData.map(item => {
            if (item.id === id) {
                const newQuantity = (item.quantity || 1) - 1;
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => (item.quantity || 1) > 0); // Quantity 0 হলে রিমুভ

        setCartData(updatedCart);
    };

    const calculateSubtotal = () => {
        return cartData.reduce((acc, item) => {
            const quantity = item.quantity || 1;
            return acc + item.price * quantity;
        }, 0);
    };

    const subtotal = calculateSubtotal();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-75 bg-black/10 px-4">
            <div className="bg-gray-500 text-white p-6 rounded-xl w-full max-w-5xl mx-auto relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
                >
                    ×
                </button>

                <h2 className="text-center text-xl font-semibold mb-6">Your Carts</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3 space-y-4">
                        {cartData.length === 0
                            ? (<p className="text-center text-3xl font-bold">Your Cart Is empty</p>)
                            : (cartData.map(item => (
                                <div key={item.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <img src={getImageUrl(item.image)} alt={item.name} className="w-16 h-20 rounded" />
                                        <div>
                                            <h3 className="font-medium text-base">{item.name}</h3>
                                            <p className="text-sm text-gray-400">{item.author}</p>
                                        </div>
                                    </div>
                                    <div className="text-sm">${item.price}</div>
                                    <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                                        <button className="px-2 text-lg" onClick={() => handleDecreaseQuantity(item.id)}>−</button>
                                        <span>{item.quantity || 1}</span>
                                        <button className="px-2 text-lg" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                    </div>
                                    <div className="text-sm">
                                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                                    </div>
                                    <button onClick={(e) => handleDeleteBook(e, item.id)} className="text-red-400 hover:text-red-600">
                                        🗑️
                                    </button>
                                </div>
                            )))}
                    </div>

                    <div className="bg-[#333] rounded-lg p-4 space-y-4 h-fit">
                        <h4 className="text-lg font-semibold">Order summary</h4>
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span className="text-green-400">Free</span>
                        </div>
                        <div className="border-t border-gray-600 pt-2 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCartDetails;
