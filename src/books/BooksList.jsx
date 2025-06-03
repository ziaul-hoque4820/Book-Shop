import React, { useContext } from 'react';
import { getAllBook } from '../data/bookData';
import BookCart from './BookCart';
import { BookContext } from '../context/context';

function BooksList({ filter }) {
    const books = getAllBook();
    const { favourites } = useContext(BookContext);

    const filteredBooks = books.filter(book => {
        if (filter === 'all') return true;
        if (filter === 'trending') return book.status === 'trending';
        if (filter === 'new_releases') return book.status === 'new_releases';
        if (filter === 'coming_soon') return book.status === 'coming_soon';
        if (filter === 'favourite') return favourites.includes(book.id);
        return true;
    });

    return (
        <div className="content flex">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                    <BookCart key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BooksList;