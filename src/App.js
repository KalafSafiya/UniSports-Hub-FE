import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TeamApprovalPage from './pages/TeamApprovalPage/TeamApprovalPage';
import PendingTeamApprovals from './pages/PendingTeamApprovals/PendingTeamApprovals';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Pending Team Approvals - Admin view */}
        <Route path="/pending-approvals" element={<PendingTeamApprovals />} />

        {/* Team Approval Requests - User view */}
        <Route path="/team-requests" element={<TeamApprovalPage />} />

        {/* Add more routes as needed */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/schedules" element={<Schedules />} /> */}
        {/* <Route path="/grounds" element={<Grounds />} /> */}
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </Router>
  );
}

export default App;