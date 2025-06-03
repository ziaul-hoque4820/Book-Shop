import React, { useContext, useState } from 'react';
import { BookContext } from '../context/context';
import BookDetailsModal from './BookDetailsModal';
import Favourite from './Favourite';
import { getImageUrl } from '../utils/bookImage';

function BookCart({ book }) {
    const [showModal, setShowModal] = useState(false);
    const { cartData, setCartData } = useContext(BookContext);

    const handleAddToCart = (event, book) => {
        event.stopPropagation();
        if (!cartData.find(item => item.id === book.id)) {
            setCartData([...cartData, book]);
        } else {
            console.log("This Book is already added");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleBookSelection = () => {
        setShowModal(true);
    };

    return (
        <>
            {showModal && (
                <BookDetailsModal
                    onClose={handleCloseModal}
                    book={book}
                    onAddToCart={handleAddToCart}
                />
            )}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                    className="w-full object-cover"
                    src={getImageUrl(book.image)}
                    alt={book.name}
                />
                <figcaption className="pt-4">
                    <div className="cursor-pointer" onClick={handleBookSelection}>
                        <h3 className="text-xl mb-1">{book.name}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{book.author}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < book.rating ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <div
                                onClick={(e) => handleAddToCart(e, book)}
                                className="bg-primary cursor-pointer rounded-lg py-2 px-16 flex items-center justify-center gap-10 text-[#171923] font-semibold text-sm"
                            >
                                <span>${book.price} | Add to Cart</span>
                            </div>
                            <Favourite book={book} />
                        </div>
                    </div>
                </figcaption>
            </figure>
        </>
    );
}

export default BookCart;
