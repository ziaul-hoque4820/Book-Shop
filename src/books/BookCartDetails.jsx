
const BookCartDetails = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-75 bg-black/10 px-4">
            <div className="bg-gray-500 text-white p-6 rounded-xl w-full max-w-5xl mx-auto relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
                >
                    ×
                </button>

                <h2 className="text-center text-xl font-semibold mb-6">Your Carts</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Cart List Section */}
                    <div className="md:col-span-3 space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <img src="https://i.ibb.co/Fh2zB6B/book.jpg" alt="book" className="w-16 h-20 rounded" />
                                    <div>
                                        <h3 className="font-medium text-base">Once Upon a Time...</h3>
                                        <p className="text-sm text-gray-400">Comedy/Drama</p>
                                    </div>
                                </div>
                                <div className="text-sm">$50</div>
                                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                                    <button className="px-2 text-lg">−</button>
                                    <span>2</span>
                                    <button className="px-2 text-lg">+</button>
                                </div>
                                <div className="text-sm">$100</div>
                                <button className="text-red-400 hover:text-red-600">
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[#333] rounded-lg p-4 space-y-4 h-fit">
                        <h4 className="text-lg font-semibold">Order summary</h4>
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span>$300</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span className="text-green-400">Free</span>
                        </div>
                        <div className="border-t border-gray-600 pt-2 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$300</span>
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
