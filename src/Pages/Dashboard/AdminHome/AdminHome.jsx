import Chart from "../../../components/hooks/chart/chart"

const AdminHome = () => {
  return (
    <div>
      {/* Admin home header */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-12">

        {/* total student */}
        <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-4 py-8 h-28 transition duration-300">

        </div>
        <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-4 py-8 h-28 transition duration-300">

        </div>
        <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-4 py-8 h-28 transition duration-300">

        </div>
        <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-4 py-8 h-28 transition duration-300">

        </div>

      </div>

      {/* chart section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Chart></Chart>
      </section>
    </div>
  )
}

export default AdminHome
