import React, { useState } from 'react';
import Header from './Header';
import LeftSideBar from './books/LeftSidebar';
import BooksList from './books/BooksList';
import { BookContext } from './context/context';
import Footer from './Footer';

function App() {
    const [cartData, setCartData] = useState([]);
    const [filter, setFilter] = useState('all');
    const [favourites, setFavourites] = useState([]);

    return (
        <BookContext.Provider value={{ 
            cartData, 
            setCartData, 
            favourites, 
            setFavourites 
        }}>
            <Header />
            <main>
                <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto'>
                    <LeftSideBar setFilter={setFilter} />
                    <BooksList filter={filter} />
                </div>
            </main>
            <Footer />
        </BookContext.Provider>
    );
}

export default App;