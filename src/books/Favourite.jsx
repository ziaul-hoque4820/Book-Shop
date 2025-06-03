import React, { useContext } from 'react';
import { BookContext } from '../context/context';

function Favourite({ book }) {
    const { favourites, setFavourites } = useContext(BookContext);
    const isFavourite = favourites.includes(book.id);

    const toggleFavourite = (e) => {
        e.stopPropagation();
        if (isFavourite) {
            setFavourites(favourites.filter(id => id !== book.id));
        } else {
            setFavourites([...favourites, book.id]);
        }
    };

    return (
        <div onClick={toggleFavourite}>
            <svg 
                className="border border-main-Color rounded-md max-[550px]:w-10 sm:w-12 md:w-9 lg:w-9 xl:w-11"
                viewBox="0 0 24 24"
                style={{ cursor: "pointer" }}
            >
                <path
                    fill={isFavourite ? "#16a34a" : "#bbf7d0"}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
            </svg>
        </div>
    );
}

export default Favourite;