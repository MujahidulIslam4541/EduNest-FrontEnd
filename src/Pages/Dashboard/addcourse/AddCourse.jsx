
const AddCourse = () => {

    const handleAddCourse = (e) => {
        e.preventDefault()
        const fromData = e.target;
        const title = fromData.title.value;
        const price = fromData.price.value;
        const duration = fromData.duration.value;
        const instructorName = fromData.instructorName.value;
        const description = fromData.description.value;
        console.table({ title, price, duration, instructorName, description })
    }
    return (
        <div>
            <form action="" onSubmit={handleAddCourse}>
                {/* Course Title */}
                <div>
                    <label className="label "> Title</label>
                    <input type="text" name="title" placeholder="Enter Course Title" className="input input-border" />
                </div>
                {/* course Price */}
                <div>
                    <label className="label "> price</label>
                    <input type="number" name="price" placeholder="Enter Course price" className="input input-border" />
                </div>
                {/* Course Duration */}
                <div>
                    <label className="label "> Duration:</label>
                    <input type="text" name="duration" placeholder="Enter Course Title" className="input input-border" />
                </div>
                {/* Instructor Name */}
                <div>
                    <label className="label "> Instructor Name :</label>
                    <input type="text" name="instructorName" placeholder="Enter Course Title" className="input input-border" />
                </div>
                {/* Thumbnail Image */}
                <div>
                    <input type="file" className="border bg-blue-200" />
                </div>

                {/* Course Descriptions */}
                <div>
                    <label className="label">Description</label>
                    <textarea name="description" id="" rows={6} className="textarea textarea-border" placeholder="Enter Course Description"></textarea>
                </div>

                {/* submit Button */}
                <div>
                    <button type="submit" className="btn">Save & Continue</button>
                </div>
            </form>
        </div>
    )
}

export default AddCourse
