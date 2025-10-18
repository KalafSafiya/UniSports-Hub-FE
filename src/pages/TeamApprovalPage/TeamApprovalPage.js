// src/components/TeamApprovalPage/TeamApprovalPage.js
// src/components/TeamApprovalPage/TeamApprovalPage.js
import React, { useState } from 'react';
import { Bell, ChevronDown, Filter } from 'lucide-react';

const TeamApprovalPage = () => {
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [sortOrder, setSortOrder] = useState('Newest First');
  
  const teams = [
    {
      name: 'Volleyball Team A',
      sport: 'Volleyball',
      submissionDate: '2024-07-20',
      status: 'Approved',
      reason: ''
    },
    {
      name: 'Basketball Team B',
      sport: 'Basketball',
      submissionDate: '2024-07-18',
      status: 'Pending',
      reason: ''
    },
    {
      name: 'Soccer Team C',
      sport: 'Soccer',
      submissionDate: '2024-07-15',
      status: 'Rejected',
      reason: 'Team roster exceeds maximum limit.'
    },
    {
      name: 'Tennis Team D',
      sport: 'Tennis',
      submissionDate: '2024-07-10',
      status: 'Approved',
      reason: ''
    },
    {
      name: 'Badminton Team E',
      sport: 'Badminton',
      submissionDate: '2024-07-05',
      status: 'Rejected',
      reason: 'Incomplete team information.'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredTeams = teams.filter(team => {
    if (statusFilter === 'All Statuses') return true;
    return team.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">Sports Council</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/sports" className="text-gray-700 hover:text-gray-900">Sports</a>
              <a href="/teams" className="text-gray-700 hover:text-gray-900">Teams</a>
              <a href="/schedules" className="text-gray-700 hover:text-gray-900">Schedule</a>
              <a href="/grounds" className="text-gray-700 hover:text-gray-900">Grounds</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>

            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Approval Requests</h1>
          <p className="text-gray-600">Track the status of your submitted team approval requests.</p>
        </div>

        {/* Filter and Sort Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <div className="relative">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-48"
                  >
                    <option>All Statuses</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-48"
                  >
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-t border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sport
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submission Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason for Rejection
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeams.map((team, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {team.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {team.sport}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {team.submissionDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(team.status)}`}>
                        {team.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600">
                      {team.reason || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamApprovalPage;

/*import React, { useState } from 'react';
import { Bell, ChevronDown, Filter } from 'lucide-react';

const TeamApprovalPage = () => {
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [sortOrder, setSortOrder] = useState('Newest First');
  
  const teams = [
    {
      name: 'Volleyball Team A',
      sport: 'Volleyball',
      submissionDate: '2024-07-20',
      status: 'Approved',
      reason: ''
    },
    {
      name: 'Basketball Team B',
      sport: 'Basketball',
      submissionDate: '2024-07-18',
      status: 'Pending',
      reason: ''
    },
    {
      name: 'Soccer Team C',
      sport: 'Soccer',
      submissionDate: '2024-07-15',
      status: 'Rejected',
      reason: 'Team roster exceeds maximum limit.'
    },
    {
      name: 'Tennis Team D',
      sport: 'Tennis',
      submissionDate: '2024-07-10',
      status: 'Approved',
      reason: ''
    },
    {
      name: 'Badminton Team E',
      sport: 'Badminton',
      submissionDate: '2024-07-05',
      status: 'Rejected',
      reason: 'Incomplete team information.'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-900">Sports Council</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Sports</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Teams</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Schedule</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Grounds</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>

            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Approval Requests</h1>
          <p className="text-gray-600">Track the status of your submitted team approval requests.</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <div className="relative">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-48"
                  >
                    <option>All Statuses</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-48"
                  >
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-t border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sport
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submission Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason for Rejection
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
                      {team.submissionDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(team.status)}`}>
                        {team.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600">
                      {team.reason || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamApprovalPage;
*/