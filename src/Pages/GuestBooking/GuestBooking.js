import React, { useState } from "react";
import Navbar from "../../GuestComponents/NavBar";
import Footer from "../../GuestComponents/Footer";

const VenueBooking = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        universityId: "",
        sport: "",
        team: "",
        venue: "",
        date: "",
        timeSlot: "",
        purpose: "",
        additionalNotes: "",
    });

    const venues = [
        "Outdoor Ground",
        "Indoor Sports Complex",
        "Basketball Court",
        "Tennis Court",
        "Badminton Hall",
        "Cricket Nets",
        "Football Field",
    ];

    const sports = [
        "Basketball",
        "Football",
        "Cricket",
        "Tennis",
        "Volleyball",
        "Badminton",
        "Hockey",
        "Rugby",
        "Netball",
    ];

    const timeSlots = [
        "6:00 AM - 8:00 AM",
        "8:00 AM - 10:00 AM",
        "10:00 AM - 12:00 PM",
        "12:00 PM - 2:00 PM",
        "2:00 PM - 4:00 PM",
        "4:00 PM - 6:00 PM",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Booking request submitted successfully!");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-20 pb-10 bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Venue Booking Request
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Book university venues for practices, matches, or special events.
                        Admins will verify availability and confirm your booking.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                University Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@vau.ac.lk"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Role
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                            >
                                <option value="">Select your role</option>
                                <option value="Student">Student</option>
                                <option value="Coach">Coach</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>

                        {/* University ID (only for students) */}
                        {formData.role === "Student" && (
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                    University ID
                                </label>
                                <input
                                    type="text"
                                    name="universityId"
                                    placeholder="Enter your University ID (e.g., 2021/ICT/001)"
                                    value={formData.universityId}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        )}

                        {/* Sport */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Sport
                            </label>
                            <select
                                name="sport"
                                value={formData.sport}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                            >
                                <option value="">Select Sport</option>
                                {sports.map((sport) => (
                                    <option key={sport} value={sport}>
                                        {sport}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Team */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Team
                            </label>
                            <input
                                type="text"
                                name="team"
                                placeholder="Enter team name"
                                value={formData.team}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Venue */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Select Venue
                            </label>
                            <select
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                            >
                                <option value="">Choose a venue</option>
                                {venues.map((venue) => (
                                    <option key={venue} value={venue}>
                                        {venue}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                    Time Slot
                                </label>
                                <select
                                    name="timeSlot"
                                    value={formData.timeSlot}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select time slot</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Purpose */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Purpose / Event Name
                            </label>
                            <input
                                type="text"
                                name="purpose"
                                placeholder="e.g., Practice Session, Inter-Faculty Match"
                                value={formData.purpose}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                            />
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Additional Notes (optional)
                            </label>
                            <textarea
                                name="additionalNotes"
                                placeholder="Add any extra information for the admin..."
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                rows={3}
                                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 text-gray-900 dark:text-white"
                            />
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="rounded-lg bg-primary px-8 py-3 text-white font-bold shadow-lg transition-transform hover:scale-105"
                            >
                                Submit Booking Request
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VenueBooking;
