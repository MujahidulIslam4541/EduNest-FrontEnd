
import { FaEnvelope, FaGraduationCap, FaUserEdit, FaUserShield } from 'react-icons/fa';

const UserProfile = () => {
    // Example user data (you should replace this with dynamic user data from context, Firebase, or backend)
    const user = {
        name: 'Mujahidul Islam Rifat',
        email: 'mirifat4541@gmail.com',
        role: 'Student', // Can be 'Student', 'Instructor', or 'Admin'
        degree: 'Diploma in CST', // Can be empty or undefined for some users
        photo: 'https://i.ibb.co/mTF26tH/Whats-App-Image-2024-12-27-at-19-00-48-bb8ba3ee.jpg',
    };

    return (
        <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl mt-12 transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-700 tracking-tight">
                My Profile
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Profile Picture */}
                <div className="relative w-44 h-44 rounded-full border-[6px] border-blue-500 shadow-lg overflow-hidden">
                    <img
                        src={user.photo}
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Profile Details */}
                <div className="flex-1 space-y-6 text-center sm:text-left">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Full Name</p>
                        <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-md text-gray-700 flex justify-center sm:justify-start items-center gap-2">
                            <FaEnvelope className="text-blue-600" /> {user.email}
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 bg-blue-100 px-4 py-1 rounded-full shadow-sm">
                            <FaUserShield /> {user.role}
                        </p>
                    </div>

                    {user.degree && (
                        <div className="space-y-1">
                            <p className="text-sm text-gray-500">Degree</p>
                            <p className="text-md text-gray-700 flex justify-center sm:justify-start items-center gap-2">
                                <FaGraduationCap className="text-purple-600" /> {user.degree}
                            </p>
                        </div>
                    )}

                    <div className="pt-4">
                        <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg transition-all duration-300">
                            <FaUserEdit />
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
