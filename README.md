# 🏨 The Wild Oasis - Hotel Management System

A modern, full-stack hotel management application built with React, designed to streamline hotel operations and enhance guest experiences.

![The Wild Oasis](https://img.shields.io/badge/The%20Wild%20Oasis-Hotel%20Management-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.17-pink)

## 🌟 Overview

The Wild Oasis is a comprehensive hotel management system that helps hotel staff manage cabins, bookings, and guest information efficiently. The application features a modern, responsive design with an intuitive user interface that makes hotel management tasks simple and straightforward.

## 🎥 Live Demo

Check out the live demo of The Wild Oasis:

🔗 [Live Demo](https://the-wild-oasis-demo.netlify.app)

### Demo Credentials

```
Email: admin@example.com
Password: admin123
```

### Key Features Demo

- **Dashboard Overview**: View hotel statistics and recent activities
- **Cabin Management**: Add, edit, and manage cabin listings
- **Booking System**: Create and manage guest bookings
- **User Settings**: Configure hotel preferences and settings


## ✨ Features

### 🏠 Cabin Management

- View all cabins in a sortable and filterable table
- Add new cabins with detailed information
- Edit existing cabin details
- Delete cabins
- Duplicate cabins for quick creation
- Upload cabin images
- Set pricing and capacity information

### 📅 Booking System

- Manage guest bookings
- View booking details including:
  - Guest information
  - Stay duration
  - Pricing
  - Payment status
- Check-in/Check-out management
- Booking history

### 👥 User Management

- Secure authentication system
- User roles and permissions
- Profile management
- Account settings

### ⚙️ Settings

- Configure hotel settings
- Set minimum and maximum booking lengths
- Manage maximum guests per booking
- Configure breakfast pricing

### 📊 Dashboard

- Overview of hotel operations
- Quick access to important information
- Activity monitoring
- Performance metrics

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **Styling:** Styled Components
- **State Management:** React Query
- **Form Handling:** React Hook Form
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Date Handling:** date-fns
- **Notifications:** React Hot Toast
- **Backend Integration:** Supabase
- **Development Tools:**
  - Vite
  - ESLint
  - React Query DevTools

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/the-wild-oasis.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd the-wild-oasis
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

5. Open your browser and visit:
   \`\`\`
   http://localhost:5173
   \`\`\`

## 📝 Environment Variables

Create a \`.env\` file in the root directory and add the following variables:

\`\`\`env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

## 🏗️ Project Structure

\`\`\`
src/
├── features/ # Feature-based components
│ ├── authentication/
│ ├── bookings/
│ ├── cabins/
│ ├── check-in-out/
│ ├── dashboard/
│ └── settings/
├── pages/ # Page components
├── services/ # API services
├── styles/ # Global styles
├── ui/ # Reusable UI components
└── utils/ # Utility functions
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request


## 👥 Author

- [AmirMohammad](https://github.com/Amir-mohammad-ahmady-1234) -
