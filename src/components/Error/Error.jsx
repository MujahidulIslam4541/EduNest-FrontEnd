import React from 'react'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router'

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
            <h2 className="text-8xl font-extrabold text-red-500 mb-4">
                4<MdError className="inline-block text-6xl" />4
            </h2>
            <p className="text-xl text-gray-700">
                Oops! The page you’re looking for can’t be found.
            </p>
            <Link to='/' className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                Go Back to Home
            </Link>
        </div>
    )
    
}

export default Error
