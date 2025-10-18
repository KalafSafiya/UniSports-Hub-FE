// src/components/HomePage/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const practiceSchedules = [
    { sport: 'Basketball', team: "Men's Varsity", day: 'Mondays, Wednesdays', time: '6:00 PM - 8:00 PM', location: 'Main Gymnasium' },
    { sport: 'Basketball', team: "Women's Varsity", day: 'Tuesdays, Thursdays', time: '6:00 PM - 8:00 PM', location: 'Main Gymnasium' },
    { sport: 'Football', team: "Men's Team", day: 'Mondays, Fridays', time: '5:00 PM - 7:00 PM', location: 'AstroTurf Pitch' },
    { sport: 'Swimming', team: 'Co-ed Team', day: 'Tuesdays, Thursdays, Saturdays', time: '7:00 AM - 9:00 AM', location: 'University Pool' },
    { sport: 'Tennis', team: "Men's & Women's Club", day: 'Wednesdays', time: '4:00 PM - 6:00 PM', location: 'Tennis Courts 1-4' },
    { sport: 'Volleyball', team: "Women's Team", day: 'Mondays, Wednesdays', time: '7:00 PM - 9:00 PM', location: 'West Gymnasium' }
  ];

  const recentNews = [
    {
      category: 'BASKETBALL',
      title: 'University Wins National Basketball Championship',
      description: "The University's basketball team clinched the national championship title after a thrilling final match.",
      date: 'June 28, 2024',
      image: 'basketball'
    },
    {
      category: 'EVENTS',
      title: 'Upcoming Inter-University Sports Festival',
      description: 'Mark your calendars for the annual Inter-University Sports Festival, featuring a variety of sports and competitions.',
      date: 'June 25, 2024',
      image: 'festival'
    },
    {
      category: 'FOOTBALL',
      title: 'New AstroTurf Pitch Inaugurated',
      description: 'A state-of-the-art AstroTurf football pitch has been inaugurated to enhance the training facilities for our teams.',
      date: 'June 22, 2024',
      image: 'pitch'
    }
  ];

  const announcements = [
    {
      title: 'Ground Booking System Now Available',
      description: 'Book your sports grounds easily through our new online booking system. Check availability and reserve your slots now.',
      link: 'Book Now',
      action: () => navigate('/grounds')
    },
    {
      title: 'Sports Council Meeting Schedule',
      description: 'The next Sports Council meeting is scheduled for July 15th. All members are requested to attend.',
      link: null,
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-6 h-6 bg-blue-600 transform rotate-45"></div>
              <span className="text-xl font-bold text-gray-900">University Sports Council</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-gray-900 font-medium">Home</button>
              <button onClick={() => navigate('/sports')} className="text-gray-700 hover:text-gray-900">Sports</button>
              <button onClick={() => navigate('/team-requests')} className="text-gray-700 hover:text-gray-900">Teams</button>
              <button onClick={() => navigate('/schedules')} className="text-blue-600 hover:text-blue-700">Schedules</button>
              <button onClick={() => navigate('/bookings')} className="text-gray-700 hover:text-gray-900">Bookings</button>
              <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-gray-900">Contact</button>
            </nav>

            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/team-requests')}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                My Teams
              </button>
              <button
                onClick={() => navigate('/pending-approvals')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Admin Portal
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000' fill-opacity='.1'/%3E%3C/svg%3E')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Stay Updated with University Sports</h1>
          <p className="text-xl mb-8 text-blue-50">
            Get the latest news, schedules, and announcements from the University Sports Council.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/sports')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Sports
            </button>
            <button
              onClick={() => navigate('/team-requests')}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Submit Team Request
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => navigate('/team-requests')}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Team Approval Requests</h3>
            <p className="text-sm text-gray-600">Track your team registration status</p>
          </button>

          <button
            onClick={() => navigate('/pending-approvals')}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pending Approvals</h3>
            <p className="text-sm text-gray-600">Review and approve team requests (Admin)</p>
          </button>

          <button
            onClick={() => navigate('/grounds')}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Book Grounds</h3>
            <p className="text-sm text-gray-600">Reserve sports facilities and venues</p>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Practice Schedules */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Team Practice Schedules</h2>
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by team or sport"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              <button
                onClick={() => navigate('/schedules')}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Calendar className="w-5 h-5" />
                <span>Calendar View</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sport</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {practiceSchedules.map((schedule, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{schedule.sport}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{schedule.team}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{schedule.day}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{schedule.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{schedule.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* News and Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Recent News */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent News</h2>
            <div className="space-y-6">
              {recentNews.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="flex-1 p-6">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{news.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{news.description}</p>
                      <p className="text-xs text-gray-500">{news.date}</p>
                    </div>
                    <div className="w-48 bg-gray-200 flex-shrink-0"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                View Older News
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Filter by Category
              </button>
            </div>
          </section>

          {/* Announcements */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Announcements</h2>
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{announcement.title}</h3>
                    {index === 0 && <div className="w-32 h-32 bg-gray-200 rounded-lg ml-4"></div>}
                    {index === 1 && <div className="w-32 h-32 bg-gray-200 rounded-lg ml-4"></div>}
                  </div>
                  <p className="text-gray-600 mb-4">{announcement.description}</p>
                  {announcement.link && announcement.action && (
                    <button
                      onClick={announcement.action}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {announcement.link}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 University Sports Council. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => navigate('/about')} className="text-sm text-gray-600 hover:text-gray-900">About Us</button>
              <button onClick={() => navigate('/contact')} className="text-sm text-gray-600 hover:text-gray-900">Contact</button>
              <button onClick={() => navigate('/privacy')} className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</button>
              <button onClick={() => navigate('/terms')} className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;