import React from 'react'

const HowItWork = () => {
    return (
        <div className='mt-16 container mx-auto'>
            {/* How it works heading */}
            <div className='text-center mb-10 space-y-3'>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
                <p className="text-gray-600 mb-10">Get started with EduNest in just a few simple steps.</p>
            </div>

            {/* Hoe it work main section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {/* Browse Courses */}
                <div className='shadow hover:shadow-md transition rounded-2xl px-2 py-4'>
                    <div className='text-4xl mb-4'>📚</div>
                    <h1 className='text-lg font-semibold mb-2'>Browse Courses</h1>
                    <p className='text-gray-500 text-sm'>Explore our curated list of courses and find what fits you best.</p>
                    <p></p>
                </div>
                {/* Enroll  Easy*/}
                <div className='shadow hover:shadow-md transition rounded-2xl px-2 py-4'>
                    <div className='text-4xl mb-4'>📝</div>
                    <h1 className='text-lg font-semibold mb-2'>Enroll Easily</h1>
                    <p className='text-gray-500 text-sm'>Sign up and enroll in your chosen course with a few clicks.</p>
                    <p></p>
                </div>
                {/* start Learning*/}
                <div className='shadow hover:shadow-md transition rounded-2xl px-2 py-4'>
                    <div className='text-4xl mb-4'>🎥</div>
                    <h1 className='text-lg font-semibold mb-2'>Start Learning</h1>
                    <p className='text-gray-500 text-sm'>Watch video lessons and complete modules at your own pace.</p>
                    <p></p>
                </div>
                {/* Archive Certificate */}
                <div className='rounded-2xl px-2 py-4 shadow hover:shadow-md transition'>
                    <div className='text-4xl mb-4'>  🎓</div>
                    <h1 className='text-lg font-semibold mb-2'>Achieve certificate</h1>
                    <p className='text-gray-500 text-sm'>Complete the course and receive a certificate of achievement.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork
