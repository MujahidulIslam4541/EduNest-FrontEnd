import  { useEffect, useState } from 'react';

const HowItWork = () => {
    const [itWork, setItWork] = useState([])

    useEffect(() => {
        fetch("/work.json")
            .then(res => res.json())
            .then(data => setItWork(data))
    }, [])
    return (
        <div className="mt-20 container mx-auto max-w-7xl px-4">

            {/* Heading Section */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
                <p className="text-gray-600 mt-2">Get started with EduNest in just a few simple steps.</p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {itWork.map((step, index) => (
                    <div
                        key={index}
                        className="text-center bg-white shadow hover:shadow-lg transition duration-300 rounded-2xl p-6 hover:-translate-y-1 hover:border-indigo-500 border border-transparent"
                    >
                        {/* Icon with background circle */}
                        <div className="w-16 h-16 mx-auto mb-4 text-3xl flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full transition-transform duration-300 hover:scale-110">
                            {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
