import React from 'react'
import Image1 from '../assets/book-img/1.jpg'
import RightSidebar from './RightSidebar'
import Favourite from './Favourite'

function BooksList() {
    return (
        <div className="content flex">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                    <img className="w-full object-cover" src={Image1} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">Iron Man</h3>
                        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <img src="./assets/star.svg" width="14" height="14" alt="" />
                            <img src="./assets/star.svg" width="14" height="14" alt="" />
                            <img src="./assets/star.svg" width="14" height="14" alt="" />
                            <img src="./assets/star.svg" width="14" height="14" alt="" />
                            <img src="./assets/star.svg" width="14" height="14" alt="" />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-10 text-[#171923] font-semibold text-sm"
                            href="#">
                            <span>$100 | Add to Cart</span>
                            <Favourite />
                        </a>
                    </figcaption>
                </figure>
            </div>

            <RightSidebar />
        </div>
    )
}

export default BooksList