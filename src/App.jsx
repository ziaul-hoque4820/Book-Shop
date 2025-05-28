import React, { useState } from 'react'
import Header from './Header'
import LeftSideBar from './books/LeftSideBar'
import BooksList from './books/BooksList'
import { BookContext } from './context'

function App() {
    const [cartData, setCartData] = useState([]);
    return (
        <>
            <BookContext.Provider value={{cartData, setCartData}}>
                <Header />
                <main>
                    <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto'>
                        <LeftSideBar />
                        <BooksList />
                    </div>
                </main>
            </BookContext.Provider>
        </>
    )
}

export default App