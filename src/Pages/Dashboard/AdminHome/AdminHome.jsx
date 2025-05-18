import Chart from "../../../components/hooks/chart/chart"
import DashboardCalendar from "../../../components/hooks/DashboardCalendar/DashboardCalendar"
import { FaUsers, FaChalkboardTeacher, FaBookOpen, FaDollarSign } from 'react-icons/fa';

const AdminHome = () => {
  return (
    <div>
      {/* Admin home header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {/* Total Students */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 shadow-md hover:shadow-xl rounded-2xl px-6 py-6 transition duration-300 flex items-center gap-4">
          <div className="p-3 bg-blue-500 rounded-full shadow-md">
            <FaUsers className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500">Total Students</h4>
            <p className="text-xl font-bold text-blue-700">1,245</p>
          </div>
        </div>

        {/* Total Instructors */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 shadow-md hover:shadow-xl rounded-2xl px-6 py-6 transition duration-300 flex items-center gap-4">
          <div className="p-3 bg-green-500 rounded-full shadow-md">
            <FaChalkboardTeacher className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500">Total Instructors</h4>
            <p className="text-xl font-bold text-green-700">72</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-50 shadow-md hover:shadow-xl rounded-2xl px-6 py-6 transition duration-300 flex items-center gap-4">
          <div className="p-3 bg-purple-500 rounded-full shadow-md">
            <FaBookOpen className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500">Total Courses</h4>
            <p className="text-xl font-bold text-purple-700">310</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 shadow-md hover:shadow-xl rounded-2xl px-6 py-6 transition duration-300 flex items-center gap-4">
          <div className="p-3 bg-yellow-500 rounded-full shadow-md">
            <FaDollarSign className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-500">Total Revenue</h4>
            <p className="text-xl font-bold text-yellow-700">$12,850</p>
          </div>
        </div>
      </div>

      {/* chart section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Chart></Chart>
        <DashboardCalendar></DashboardCalendar>
      </section>
    </div>
  )
}

export default AdminHome
