import React from 'react'
import coursesImage1 from '../../../assets/coursesImage1.jpg'

const Courses = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-16 px-4">
      {/* Headline */}
      <div className="text-center mb-10">
        <p className="text-sm text-indigo-500 font-medium uppercase tracking-wide">
          Find a course
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1">
          Featured Courses
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore our most popular and career-ready courses
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, i) => (
          <article
            key={i}
            className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={coursesImage1}
              alt="Course"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Front End Development With React
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                Learn how to build modern and responsive web applications using
                React. This course will guide you from basic concepts to advanced
                techniques with hands-on projects.
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>

  )
}

export default Courses
