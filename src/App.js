import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Guest Pages
import GuestDashboard from "./Pages/GuestDashboard/GuestDashboard";
import GuestBooking from "./Pages/GuestBooking/GuestBooking";
import GuestContact from "./Pages/GuestContact/GuestContact";
import GuestSchedule from "./Pages/GuestSchedule/GuestSchedule";
import GuestSports from "./Pages/GuestSports/GuestSports";

// Admin Pages
import AdminDashboard from "./AdminPages/AdminDashbBoard/AdminDashBoard";
import AdminManageNews from "./AdminPages/AdminNewsAnnouncements/AdminNewsAnnouncements";
import AdminTeamApprovals from "./AdminPages/AdminCoachRequests/AdminCoachRequests";
import AdminScheduleRequests from "./AdminPages/AdminScheduleRequests/AdminScheduleRequests";

// Coach Pages
import CoachDashBoard from "./CoachPages/CoachDashBoard/CoachDashBoard";
import CoachManageTeams from "./CoachPages/CoachManageTeams/CoachManageTeam";
import CoachManageSchedule from "./CoachPages/CoachManageSchedule/CoachManageSchedule";

// Login
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<GuestDashboard />} />
        <Route path="/bookings" element={<GuestBooking />} />
        <Route path="/contact" element={<GuestContact />} />
        <Route path="/schedules" element={<GuestSchedule />} />
        <Route path="/sports-and-teams" element={<GuestSports />} />

        <Route path="/login" element={<Login />} />
        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/news-and-announcements" element={<AdminManageNews />} />
        <Route path="/sports-requests" element={<AdminTeamApprovals />} />
        <Route path="/schedule-requests" element={<AdminScheduleRequests />} />

        {/* Coach Routes */}
        <Route path="/dashboard" element={<CoachDashBoard />} />
        <Route path="/manage-team" element={<CoachManageTeams />} />
        <Route path="/schedule-session" element={<CoachManageSchedule />} />

        {/* Auth/Login */}


        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
