import React from 'react'
import Image1 from '../assets/book-img/1.jpg'
import RightSidebar from './RightSidebar'
import Favourite from './Favourite'
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
            <RightSidebar />
        </div>
    )
}

export default BooksList