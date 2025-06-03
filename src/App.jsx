import React, { useState } from 'react';
import Header from './Header';
import LeftSideBar from './books/LeftSideBar';
import BooksList from './books/BooksList';
import { BookContext } from './context/context';

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
        </BookContext.Provider>
    );
}

export default App;