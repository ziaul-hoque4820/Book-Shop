import React from 'react'
import ring from './assets/ring.svg'
import moon from './assets/icons/moon.svg'
import shoppingCart from './assets/shopping-cart.svg'

function Header() {
    return (
        <header>
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
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={shoppingCart} width="24" height="24" alt="" />
                            {
                                (
                                    <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px] '></span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header