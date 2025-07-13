import { useEffect, useState } from 'react';
import { Link } from 'react-router'; // 🔁 Make sure you're using `react-router-dom`

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // 📦 Load course data from public folder (courses.json)
  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Failed to fetch courses:", err));
  }, []);

  return (
    <div className="container mx-auto max-w-7xl mt-16 px-4">

      {/* 🔖 Section Header */}
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

      {/* 📚 Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <article
            key={course?.id}
            className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
          >
            {/* 📸 Course Image */}
            <img
              src={course?.image}
              alt={course?.title}
              className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* 📄 Course Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course?.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {course?.description}
              </p>

              {/* 🔗 Course Details Link */}
              <Link
                to={`/courseDetails/${course?.id}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
