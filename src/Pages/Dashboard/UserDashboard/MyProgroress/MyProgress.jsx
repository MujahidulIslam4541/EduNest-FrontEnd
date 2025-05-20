// MyProgress.jsx
import React from "react";

const MyProgress = () => {
    const courses = [
        {
            id: 1,
            title: "Modern JavaScript from Scratch",
            progress: 75,
            thumbnail: "https://i.ibb.co/vLFTkWq/js-course.jpg",
        },
        {
            id: 2,
            title: "React for Beginners",
            progress: 40,
            thumbnail: "https://i.ibb.co/SvW9qz7/react-course.jpg",
        },
        {
            id: 3,
            title: "Node.js Masterclass",
            progress: 90,
            thumbnail: "https://i.ibb.co/YW5hLJ0/node-course.jpg",
        },
    ];

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">📈 My Course Progress</h2>

            <div className="grid gap-8 md:grid-cols-2">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="md:flex">
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="h-44 w-full md:w-52 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                            />

                            <div className="p-5 flex flex-col justify-between w-full">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                        {course.title}
                                        {course.progress === 100 && (
                                            <span className="text-green-600 text-sm bg-green-100 px-2 py-0.5 rounded-full font-medium">
                                                ✅ Completed
                                            </span>
                                        )}
                                    </h3>

                                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-700"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-1">
                                        Progress: <span className="font-semibold text-gray-800">{course.progress}%</span>
                                    </p>
                                </div>

                                <button
                                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 group relative"
                                >
                                    Continue Learning
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Go to course
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MyProgress;
