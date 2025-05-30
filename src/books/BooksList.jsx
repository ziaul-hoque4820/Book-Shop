import React from 'react'
import { getAllBook } from '../data/bookData'
import BookCart from './BookCart'

function BooksList() {
    const books = getAllBook();
    return (
        <div className="content flex">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                books.map(book => (
                    <BookCart key={book.id} book={book} />
                ))
            }
            </div>
        </div>
    )
}

export default BooksList