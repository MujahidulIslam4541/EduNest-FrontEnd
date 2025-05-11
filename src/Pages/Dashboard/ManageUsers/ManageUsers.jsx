import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Dummy user data (replace with real data from backend)
  useEffect(() => {
    setUsers([
      {
        _id: "1",
        name: "Mujahidul Islam",
        email: "mujahid@example.com",
        role: "student",
      },
      {
        _id: "2",
        name: "Arif Hasan",
        email: "arif@example.com",
        role: "student",
      },
      {
        _id: "3",
        name: "Fahim Rahman",
        email: "fahim@example.com",
        role: "student",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">
        Manage Users &nbsp;
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
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-t">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 capitalize">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
