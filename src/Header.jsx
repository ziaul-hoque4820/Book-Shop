import React, { useContext, useState } from 'react'
import ring from './assets/ring.svg'
import moon from './assets/icons/moon.svg'
import shoppingCart from './assets/shopping-cart.svg'
import BookCartDetails from './books/BookCartDetails';
import { BookContext } from './context';

function Header() {
    const {cartData} = useContext(BookContext);

    const [showCart, setShowCart] = useState(false);
    const handleCart = () => {
        setShowCart(true);
    }

    return (
        <header>
            {
                showCart && <BookCartDetails onClose={() => setShowCart(false)} />
            }
            <nav className="container flex items-center justify-between mx-auto py-6 text-center">
                <a className='text-sky-500 text-3xl font-bold'>
                    BookShop
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <div
                        onClick={handleCart}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] cursor-pointer p-1 inline-block" href="#">
                            <img src={shoppingCart} width="24" height="24" alt="" />
                            { cartData.length > 0 &&
                                (
                                    <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px] '>{cartData.length}</span>
                                )
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header