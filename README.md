
# UniSports Hub

## Overview

UniSports Hub is a comprehensive web application designed to manage and facilitate sports activities within a university setting. It provides a platform for administrators, coaches, and guests to interact with sports-related services, including booking venues, managing schedules, handling teams, and staying updated with news and announcements.

The application features a modern React-based frontend with a robust Node.js backend, utilizing both MongoDB and MySQL databases for flexible data management.

## Features

### Admin Panel
- Manage coaches and their requests
- Oversee booking requests and approvals
- Handle schedule requests
- Manage cover photos and news/announcements
- Dashboard for overall system insights

### Coach Panel
- Manage personal dashboard
- Handle team management and memberships
- Oversee and update schedules

### Guest/User Panel
- View and book sports venues
- Browse available sports and schedules
- Access news and announcements
- Contact support through feedback forms
- Dashboard for personal bookings and activities

### General Features
- User authentication and authorization
- Responsive design with Tailwind CSS
- Real-time updates and notifications
- Secure data handling with JWT and bcrypt

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **React Router**: Declarative routing for React

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for flexible data storage (news, announcements)
- **MySQL**: Relational database for structured data (users, bookings, schedules)
- **Mongoose**: ODM for MongoDB
- **Sequelize**: ORM for MySQL
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **Nodemailer**: Email sending functionality
- **CORS**: Cross-origin resource sharing

### Development Tools
- **Nodemon**: Automatic server restarts during development
- **React Scripts**: Build scripts for React applications
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- MySQL

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add necessary environment variables (e.g., database URLs, JWT secret, email credentials)

4. Start the development server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000` for the frontend and typically `http://localhost:5000` for the backend (adjust based on your configuration).

## Usage

1. **Admin Login**: Access the admin panel to manage system-wide operations.
2. **Coach Login**: Coaches can log in to manage their teams and schedules.
3. **Guest Access**: Browse sports, view schedules, make bookings, and stay informed.
4. **Navigation**: Use the responsive navigation bars tailored for each user type.

## Project Structure

```
UniSports_Hub/
├── backend/
│   ├── config/
│   │   ├── mongo.js
│   │   └── mysql.js
│   ├── controllers/
│   ├── models/
│   │   ├── mongo/
│   │   └── mysql/
│   ├── routers/
│   ├── utils/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── AdminComponents/
│   │   ├── AdminPages/
│   │   ├── CoachComponents/
│   │   ├── CoachPages/
│   │   ├── GuestComponents/
│   │   ├── Pages/
│   │   ├── Data/
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
├── TODO.md
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the development team.

---

*This README provides an overview of the UniSports Hub project. For detailed API documentation or specific implementation details, refer to the code comments and individual component files.*
