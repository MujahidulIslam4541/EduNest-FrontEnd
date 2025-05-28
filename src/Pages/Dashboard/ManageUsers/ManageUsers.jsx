import UseAxiosSecure from "../../../components/hooks/UseAxiosSecuire/UseAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useQuery,
} from '@tanstack/react-query'

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })

  // delete user form database
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/users/${user?._id}`).then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user?.name || "The user"} has been removed successfully.`,
              icon: "success"
            });
            refetch()
          }
        })
      }
    });
  }



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
              const hasRequested = user.isInstructorRequest;

              return (
                <tr key={user?._id} className="border-t">

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
                    <div className="flex justify-center items-center gap-2 flex-wrap">
                      {isInstructor ? (
                        <span className="text-green-600 font-medium text-sm">
                          Already Instructor
                        </span>
                      ) : hasRequested ? (
                        <button
                          className="px-4 py-2 bg-[#84CC16] hover:bg-[#84CC18] text-white text-sm font-semibold rounded-lg shadow-md transition duration-300"
                        >
                          Make Instructor
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}

                      {/* user delete button */}
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-600 border border-red-300 hover:bg-red-200 hover:text-red-700 text-sm font-medium rounded-md transition duration-200"
                      >
                        <FaTrashAlt className="text-base" />
                        Delete
                      </button>
                    </div>
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
