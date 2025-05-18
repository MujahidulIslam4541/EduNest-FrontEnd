import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles

const DashboardCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="w-full h-[400px] bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-center">📅 Realtime Calendar</h2>
            <div className="flex justify-center">
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="rounded-lg shadow-inner p-4 bg-gray-100"
                    tileClassName={({ date, view }) =>
                        view === 'month' && date.toDateString() === new Date().toDateString()
                            ? 'bg-blue-500 text-white rounded-md'
                            : undefined
                    }
                />
            </div>
            <p className="text-center text-gray-600 mt-2">
                Selected Date: <span className="font-medium text-blue-600">{date.toDateString()}</span>
            </p>
        </div>
    );
};

export default DashboardCalendar;
