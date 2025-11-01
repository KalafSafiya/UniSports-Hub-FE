import React, { useState } from "react";
import Navbar from "../../GuestComponents/NavBar";
import Footer from "../../GuestComponents/Footer";

// Updated schedules with venue and time
const schedules = [
    { sport: "Basketball", date: "2025-11-03", time: "10:00 - 12:00", type: "Practice", venue: "Basketball Court" },
    { sport: "Football", date: "2025-11-05", time: "14:00 - 16:00", type: "Match", venue: "Outdoor Ground" },
    { sport: "Cricket", date: "2025-11-08", time: "09:00 - 12:00", type: "Practice", venue: "Cricket Ground" },
    { sport: "Tennis", date: "2025-11-12", time: "13:00 - 15:00", type: "Practice", venue: "Tennis Court" },
    { sport: "Volleyball", date: "2025-11-16", time: "11:00 - 13:00", type: "Match", venue: "Volleyball Court" },
    { sport: "Badminton", date: "2025-11-18", time: "10:00 - 12:00", type: "Practice", venue: "Indoor Hall" },
    { sport: "Hockey", date: "2025-11-21", time: "15:00 - 17:00", type: "Match", venue: "Hockey Field" },
    { sport: "Netball", date: "2025-11-24", time: "12:00 - 14:00", type: "Practice", venue: "Outdoor Ground" },
];

function Schedules() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const getEventsForDay = (day) => {
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return schedules.filter((e) => e.date === dateString);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-20 pb-10 bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900">Sports & Practice Schedules</h1>
                        <p className="mt-2 text-gray-600">View all matches and practices by date, time, or sport</p>
                    </div>

                    {/* Schedule Table */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    {["Sport", "Date", "Time", "Type", "Venue"].map((header) => (
                                        <th
                                            key={header}
                                            className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {schedules.map((session, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-semibold text-gray-900">{session.sport}</td>
                                        <td className="px-6 py-4 text-gray-700">{session.date}</td>
                                        <td className="px-6 py-4 text-gray-700">{session.time}</td>
                                        <td className={`px-6 py-4 font-semibold ${session.type === "Match" ? "text-green-600" : "text-blue-600"}`}>{session.type}</td>
                                        <td className="px-6 py-4 text-gray-700">{session.venue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Calendar View */}
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <button onClick={prevMonth} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">← Previous</button>
                            <h2 className="text-2xl font-bold text-gray-800">{monthName} {year}</h2>
                            <button onClick={nextMonth} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Next →</button>
                        </div>

                        {/* Weekdays */}
                        <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (<div key={d}>{d}</div>))}
                        </div>

                        {/* Calendar Grid */}
                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 text-center mt-2">
                            {Array.from({ length: firstDayIndex }).map((_, i) => (
                                <div key={`empty-${i}`} className="h-24 bg-transparent"></div>
                            ))}

                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const events = getEventsForDay(day);
                                const isToday =
                                    day === new Date().getDate() &&
                                    month === new Date().getMonth() &&
                                    year === new Date().getFullYear();

                                return (
                                    <div
                                        key={day}
                                        className={`h-24 flex flex-col items-center justify-start rounded-lg border p-1 transition
                    ${isToday ? "border-blue-500 bg-blue-50" : "border-gray-200"}
                    ${events.length > 0 ? "hover:shadow-md cursor-pointer" : ""}`}
                                    >
                                        <span className="font-medium text-gray-800">{day}</span>
                                        {events.map((e, i) => (
                                            <div
                                                key={i}
                                                className={`w-full mt-1 text-[10px] rounded px-1 py-[2px] text-white truncate ${e.type === "Match" ? "bg-green-500" : "bg-blue-500"}`}
                                                title={`${e.sport} @ ${e.venue} | ${e.time}`} // Hover shows sport, venue, and time
                                            >
                                                {e.sport} {/* Only sport name displayed */}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>


                        <div className="mt-6 flex justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-blue-500 rounded"></span> Practice
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-green-500 rounded"></span> Match
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Schedules;
