
const AddCourse = () => {

    const handleAddCourse = (e) => {
        e.preventDefault()
        const fromData = e.target;
        const title = fromData.title.value;
        const price = parseFloat(fromData.price.value);
        const duration = fromData.duration.value;
        const instructorName = fromData.instructorName.value;
        const description = fromData.description.value;
        console.log({ title, price, duration, instructorName, description })
    }
    return (
        <div className="max-w-4xl mx-auto mt-10 py-20 px-10 bg-base-200 rounded-lg shadow-lg">
            <form onSubmit={handleAddCourse} className="space-y-6">
                {/* Row 1: Title, Price, Duration */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Title */}
                    <div className="md:col-span-2">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="input w-full border border-[#84CC16] focus:border-black focus:outline-none text-lg py-3"
                            placeholder="Course Title"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div className="md:col-span-1">
                        <label className="label">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="input w-full border border-[#84CC16] focus:border-black focus:outline-none"
                            placeholder="৳"
                            required
                        />
                    </div>

                    {/* Duration */}
                    <div className="md:col-span-1">
                        <label className="label">Duration</label>
                        <input
                            type="text"
                            name="duration"
                            className="input w-full border border-[#84CC16] focus:border-black focus:outline-none"
                            placeholder="e.g. 4 weeks"
                            required
                        />
                    </div>
                </div>


                {/* Row 2: Instructor Name, Image Upload */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <label className="label">Instructor Name</label>
                        <input
                            type="text"
                            name="instructorName"
                            className="input w-full border border-[#84CC16] focus:outline-none"
                            placeholder="Instructor"
                            required
                        />
                    </div>
                    <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>

                                        Upload Image
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3: Description + Submit Button */}
                <div className="flex flex-col md:flex-row gap-8 items-end">
                    {/* Textarea */}
                    <div className="w-full md:flex-1">
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            rows="6"
                            className="textarea w-full border border-[#84CC16] focus:border-black focus:outline-none"
                            placeholder="Enter course description"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:mb-[15px]">
                        <button
                            type="submit"
                            className="bg-[#84CC16] hover:bg-[#84CC18] text-white px-16 py-4 text-xl font-semibold rounded transition-all"
                        >
                            Save & Continue
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddCourse
