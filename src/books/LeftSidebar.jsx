import React from 'react';
import trending from '../assets/icons/trending.svg';
import newRelease from '../assets/icons/newRelease.svg';
import commingSoon from '../assets/icons/commingSoon.svg';
import favourite from '../assets/icons/favourite.svg';
import allBook from '../assets/all.png'

function LeftSideBar({ setFilter }) {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <button 
                        onClick={() => setFilter('all')}
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary w-full text-left cursor-pointer"
                    >
                        <img src={allBook} width="24" height="24" alt="All Books" />
                        <span>All Books</span>
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => setFilter('trending')}
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary w-full text-left cursor-pointer"
                    >
                        <img src={trending} width="24" height="24" alt="Trending" />
                        <span>Trending</span>
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => setFilter('new_releases')}
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary w-full text-left cursor-pointer"
                    >
                        <img src={newRelease} width="24" height="24" alt="New Releases" />
                        <span>New Releases</span>
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => setFilter('coming_soon')} 
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary w-full text-left cursor-pointer"
                    >
                        <img src={commingSoon} width="24" height="24" alt="Coming Soon" />
                        <span>Coming Soon</span>
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => setFilter('favourite')} 
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary w-full text-left cursor-pointer"
                    >
                        <img src={favourite} width="24" height="24" alt="Favourites" />
                        <span>Favourites</span>
                    </button>
                </li>
            </ul>
        </aside>
    );
}

export default LeftSideBar;