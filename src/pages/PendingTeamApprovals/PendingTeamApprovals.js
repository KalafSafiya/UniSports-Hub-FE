// src/components/PendingTeamApprovals/PendingTeamApprovals.js
// src/components/PendingTeamApprovals/PendingTeamApprovals.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, Calendar, MapPin, Settings, LogOut, ChevronDown } from 'lucide-react';

const PendingTeamApprovals = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sportFilter, setSportFilter] = useState('Filter by Sport');
  const [dateSort, setDateSort] = useState('Sort by Date');
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'The Falcons',
      sport: 'Basketball',
      coach: 'Ethan Carter',
      submitted: '2023-10-27',
      members: 12,
      status: 'pending'
    },
    {
      id: 2,
      name: 'The Sharks',
      sport: 'Swimming',
      coach: 'Olivia Bennett',
      submitted: '2023-10-26',
      members: 15,
      status: 'pending'
    },
    {
      id: 3,
      name: 'The Lions',
      sport: 'Football',
      coach: 'Noah Thompson',
      submitted: '2023-10-25',
      members: 20,
      status: 'pending'
    },
    {
      id: 4,
      name: 'The Eagles',
      sport: 'Volleyball',
      coach: 'Sophia Clark',
      submitted: '2023-10-24',
      members: 10,
      status: 'pending'
    },
    {
      id: 5,
      name: 'The Panthers',
      sport: 'Hockey',
      coach: 'Liam Walker',
      submitted: '2023-10-23',
      members: 18,
      status: 'pending'
    }
  ]);

  const handleApprove = (teamId, teamName) => {
    setTeams(teams.map(team =>
      team.id === teamId ? { ...team, status: 'approved' } : team
    ));
    alert(`✅ Approved: ${teamName}`);
  };

  const handleReject = (teamId, teamName) => {
    setTeams(teams.map(team =>
      team.id === teamId ? { ...team, status: 'rejected' } : team
    ));
    alert(`❌ Rejected: ${teamName}`);
  };

  const isActive = (path) => location.pathname === path;

  const filteredTeams = teams.filter(team => {
    if (team.status !== 'pending') return false;
    if (sportFilter === 'Filter by Sport') return true;
    return team.sport === sportFilter;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-blue-600">Sports Council</h1>
        </div>

        <nav className="flex-1 px-3">
          <button
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 ${isActive('/dashboard')
                ? 'text-blue-600 bg-blue-50 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => navigate('/pending-approvals')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 ${isActive('/pending-approvals')
                ? 'text-blue-600 bg-blue-50 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Users className="w-5 h-5" />
            <span>Teams</span>
          </button>
          <button
            onClick={() => navigate('/schedules')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 ${isActive('/schedules')
                ? 'text-blue-600 bg-blue-50 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Schedules</span>
          </button>
          <button
            onClick={() => navigate('/grounds')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 ${isActive('/grounds')
                ? 'text-blue-600 bg-blue-50 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Grounds</span>
          </button>
          <button
            onClick={() => navigate('/users')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 ${isActive('/users')
                ? 'text-blue-600 bg-blue-50 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </button>
        </nav>

        <div className="p-3 border-t border-gray-200">
          <button
            onClick={() => navigate('/settings')}
            className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to logout?')) {
                navigate('/');
              }
            }}
            className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pending Team Approvals</h1>
            <p className="text-gray-600">Review and manage new team requests.</p>
          </div>

          {/* Filters */}
          <div className="flex justify-end space-x-4 mb-6">
            <div className="relative">
              <select
                value={sportFilter}
                onChange={(e) => setSportFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
              >
                <option>Filter by Sport</option>
                <option>Basketball</option>
                <option>Swimming</option>
                <option>Football</option>
                <option>Volleyball</option>
                <option>Hockey</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
              >
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredTeams.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pending Approvals</h3>
                <p className="text-gray-600">All team requests have been processed.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sport
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Coach
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submitted
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Members
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTeams.map((team) => (
                      <tr key={team.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {team.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {team.sport}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {team.coach}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {team.submitted}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {team.members}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleApprove(team.id, team.name)}
                              className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(team.id, team.name)}
                              className="bg-white text-gray-700 px-4 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PendingTeamApprovals;

/*import React, { useState } from 'react';
import { LayoutGrid, Users, Calendar, MapPin, Settings, LogOut, ChevronDown } from 'lucide-react';

const PendingTeamApprovals = () => {
  const [sportFilter, setSportFilter] = useState('Filter by Sport');
  const [dateSort, setDateSort] = useState('Sort by Date');

  const teams = [
    {
      name: 'The Falcons',
      sport: 'Basketball',
      coach: 'Ethan Carter',
      submitted: '2023-10-27',
      members: 12
    },
    {
      name: 'The Sharks',
      sport: 'Swimming',
      coach: 'Olivia Bennett',
      submitted: '2023-10-26',
      members: 15
    },
    {
      name: 'The Lions',
      sport: 'Football',
      coach: 'Noah Thompson',
      submitted: '2023-10-25',
      members: 20
    },
    {
      name: 'The Eagles',
      sport: 'Volleyball',
      coach: 'Sophia Clark',
      submitted: '2023-10-24',
      members: 10
    },
    {
      name: 'The Panthers',
      sport: 'Hockey',
      coach: 'Liam Walker',
      submitted: '2023-10-23',
      members: 18
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
   //slider
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-blue-600">Sports Council</h1>
        </div>

        <nav className="flex-1 px-3">
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1">
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-blue-600 bg-blue-50 rounded-lg mb-1">
            <Users className="w-5 h-5" />
            <span className="font-medium">Teams</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1">
            <Calendar className="w-5 h-5" />
            <span>Schedules</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1">
            <MapPin className="w-5 h-5" />
            <span>Grounds</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1">
            <Users className="w-5 h-5" />
            <span>Users</span>
          </a>
        </nav>

        <div className="p-3 border-t border-gray-200">
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 mb-1">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      //Main Content 
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pending Team Approvals</h1>
            <p className="text-gray-600">Review and manage new team requests.</p>
          </div>

          // Filters 
          <div className="flex justify-end space-x-4 mb-6">
            <div className="relative">
              <select 
                value={sportFilter}
                onChange={(e) => setSportFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
              >
                <option>Filter by Sport</option>
                <option>Basketball</option>
                <option>Swimming</option>
                <option>Football</option>
                <option>Volleyball</option>
                <option>Hockey</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select 
                value={dateSort}
                onChange={(e) => setDateSort(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
              >
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          // Table 
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sport
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coach
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Members
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teams.map((team, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {team.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {team.sport}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {team.coach}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {team.submitted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {team.members}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Approve
                          </button>
                          <button className="bg-white text-gray-700 px-4 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PendingTeamApprovals;
*/