import React from 'react'
import Header from './Header'
import LeftSideBar from './books/LeftSideBar'
import BooksList from './books/BooksList'
import RightSidebar from './books/RightSidebar'
import BookDetailsModal from './books/BookDetailsModal'
import BookCart from './books/BookCartDetails'

function App() {
    return (
        <>
            <Header />
            <main>
                <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto'>
                    <LeftSideBar />
                    <BooksList />
                </div>
            </main>
        </>
    )
}

export default App