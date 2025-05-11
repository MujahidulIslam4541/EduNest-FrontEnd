import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        _id: "1",
        name: "Rifat Islam",
        email: "rifat@example.com",
        role: "student",
        degree: "BSc in CSE",
        instructorRequest: true,
      },
      {
        _id: "2",
        name: "Nahid Hasan",
        email: "nahid@example.com",
        role: "student",
        instructorRequest: false,
      },
      {
        _id: "3",
        name: "Arif Khan",
        email: "arif@example.com",
        role: "instructor",
        degree: "MSc in CS",
      },
    ]);
  }, []);

 

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 mt-12">
        Manage Users & Instructor Requests &nbsp;
        <span className="text-base text-gray-500">
          (Total Users: {users.length})
        </span>
      </h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-left border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Degree / Info</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const isInstructor = user.role === "instructor";
              const hasRequested = user.instructorRequest;

              return (
                <tr key={user._id} className="border-t">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4">
                    {user.degree ? (
                      `🎓 ${user.degree}`
                    ) : (
                      <span className="text-red-500 font-medium">Unavailable</span>
                    )}
                  </td>


                  <td className="px-6 py-4 text-center">
                    {isInstructor ? (
                      <span className="text-green-600 font-medium text-sm">
                        Already Instructor
                      </span>
                    ) : hasRequested ? (
                      <button
                        className="px-4 py-2 bg-[#84CC16] hover:bg-[#84CC18] text-white text-sm font-semibold rounded-lg shadow-md  transition duration-300"
                      >
                        Make Instructor
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
