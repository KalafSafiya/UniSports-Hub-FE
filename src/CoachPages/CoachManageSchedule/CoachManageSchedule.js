import React, { useState } from "react";
import Navbar from "../../CoachComponents/NavBar";
import Footer from "../../GuestComponents/Footer";

// Initial schedule data
const initialSchedules = [
    { sport: "Basketball", date: "2025-11-03", time: "10:00 - 12:00", type: "Practice", venue: "Basketball Court", status: "Pending" },
    { sport: "Football", date: "2025-11-05", time: "14:00 - 16:00", type: "Match", venue: "Outdoor Ground", status: "Approved" },
    { sport: "Cricket", date: "2025-11-08", time: "09:00 - 12:00", type: "Practice", venue: "Cricket Ground", status: "Rejected" },
];

function CoachManageSchedule() {
    const [schedules, setSchedules] = useState(initialSchedules);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newSession, setNewSession] = useState({ sport: "", date: "", time: "", type: "Practice", venue: "" });
    const [editingSession, setEditingSession] = useState(null);

    // Add new session
    const handleAddSession = () => {
        if (!newSession.sport || !newSession.date || !newSession.time || !newSession.venue) return;
        setSchedules([...schedules, { ...newSession, status: "Pending" }]);
        setNewSession({ sport: "", date: "", time: "", type: "Practice", venue: "" });
        setShowAddForm(false);
    };

    // Remove session
    const handleRemoveSession = (idx) => {
        if (window.confirm("Are you sure you want to remove this session?")) {
            const updated = [...schedules];
            updated.splice(idx, 1);
            setSchedules(updated);
        }
    };

    // Open edit modal
    const openEditModal = (idx) => {
        setEditingSession({ ...schedules[idx], idx });
    };

    // Update session
    const handleUpdateSession = () => {
        const updated = [...schedules];
        updated[editingSession.idx] = { ...editingSession };
        setSchedules(updated);
        setEditingSession(null);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-20 pb-10 bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Coach Manage Schedules</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Create, edit, and remove practice or match sessions for your teams. All changes are subject to admin approval.
                        </p>
                    </div>

                    {/* Add Session Button */}
                    <div className="mb-6 flex justify-center">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                            onClick={() => setShowAddForm(!showAddForm)}
                        >
                            Add New Session
                        </button>
                    </div>

                    {/* Add Session Form */}
                    {showAddForm && (
                        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow-md max-w-md mx-auto">
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Add Session</h3>
                            <input
                                type="text"
                                placeholder="Sport"
                                value={newSession.sport}
                                onChange={(e) => setNewSession({ ...newSession, sport: e.target.value })}
                                className="w-full p-2 border rounded mb-2"
                            />
                            <input
                                type="date"
                                value={newSession.date}
                                onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                                className="w-full p-2 border rounded mb-2"
                            />
                            <input
                                type="text"
                                placeholder="Time (e.g., 10:00 - 12:00)"
                                value={newSession.time}
                                onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                                className="w-full p-2 border rounded mb-2"
                            />
                            <select
                                value={newSession.type}
                                onChange={(e) => setNewSession({ ...newSession, type: e.target.value })}
                                className="w-full p-2 border rounded mb-2"
                            >
                                <option value="Practice">Practice</option>
                                <option value="Match">Match</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Venue"
                                value={newSession.venue}
                                onChange={(e) => setNewSession({ ...newSession, venue: e.target.value })}
                                className="w-full p-2 border rounded mb-2"
                            />
                            <button
                                onClick={handleAddSession}
                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                            >
                                Add Session
                            </button>
                        </div>
                    )}

                    {/* Schedule Table */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    {["Sport", "Date", "Time", "Type", "Venue", "Status", "Actions"].map((header) => (
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
                                        <td className={`px-6 py-4 font-semibold ${session.status === "Pending" ? "text-yellow-500" : session.status === "Approved" ? "text-green-600" : "text-red-600"}`}>{session.status}</td>
                                        <td className="px-6 py-4 flex gap-2">
                                            <button
                                                className="text-blue-600 text-sm"
                                                onClick={() => openEditModal(i)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-600 text-sm"
                                                onClick={() => handleRemoveSession(i)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Edit Session Modal */}
                    {editingSession && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                    Edit Session: {editingSession.sport}
                                </h3>
                                <input
                                    type="text"
                                    value={editingSession.sport}
                                    onChange={(e) => setEditingSession({ ...editingSession, sport: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="date"
                                    value={editingSession.date}
                                    onChange={(e) => setEditingSession({ ...editingSession, date: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="text"
                                    value={editingSession.time}
                                    onChange={(e) => setEditingSession({ ...editingSession, time: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <select
                                    value={editingSession.type}
                                    onChange={(e) => setEditingSession({ ...editingSession, type: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                >
                                    <option value="Practice">Practice</option>
                                    <option value="Match">Match</option>
                                </select>
                                <input
                                    type="text"
                                    value={editingSession.venue}
                                    onChange={(e) => setEditingSession({ ...editingSession, venue: e.target.value })}
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <div className="flex justify-end gap-2">
                                    <button
                                        className="px-3 py-1 rounded bg-gray-400 hover:bg-gray-500 text-white"
                                        onClick={() => setEditingSession(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
                                        onClick={handleUpdateSession}
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CoachManageSchedule;
