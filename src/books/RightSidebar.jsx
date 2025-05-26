import React from 'react'

function RightSidebar() {
    return (
        <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Filter On Page</h3>

            <button className="flex items-center justify-between w-full border border-gray-300 rounded-md px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                <span className='text-start'>By name</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <button className="flex items-center justify-between w-full border border-gray-300 rounded-md px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                <span className='text-start'>By ratting</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <button className="flex items-center justify-between w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                <span className='text-start'>By price</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>


    )
}

export default RightSidebar