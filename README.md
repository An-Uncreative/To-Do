# Todo/Shopping List Manager

🔗 **[Live Demo](https://to-do-[your-username].vercel.app)** | 🌐 **[API Backend](https://todo-shopping-api.onrender.com)**

## 📝 Project Overview

A full-stack todo and shopping list application built with React and a RESTful API backend. Features complete CRUD operations, real-time search functionality, and persistent data storage.

## ✨ Features

- **Add Items:** Create new todo or shopping items with input validation
- **Mark Complete:** Check off completed items
- **Delete Items:** Remove items from the list
- **Search Functionality:** Real-time filtering of items by name
- **API Integration:** Fetches and manages data from a mock REST API
- **Loading States:** Shows loading indicators while fetching data
- **Error Handling:** Graceful error messages for failed requests
- **Responsive Design:** Works seamlessly on all device sizes

## 🛠️ Technologies Used

### Frontend

- **React 19.2.0** - UI library with hooks (useState, useEffect)
- **Vite** - Frontend build tool and dev server
- **React Icons** - Icon library for UI elements
- **CSS3** - Responsive styling
- **ESLint** - Code quality
- **Vercel** - Frontend deployment platform

### Backend

- **JSON Server** - RESTful API with full CRUD operations
- **Node.js** - Runtime environment
- **CORS** - Cross-origin resource sharing
- **Render.com** - Backend API deployment

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Steps

```bash
# Navigate to project
cd my2-react-app

# Install dependencies
npm install

# Terminal 1: Start JSON Server (mock backend)
npx json-server --watch data/db.json --port 3500

# Terminal 2: Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App title and branding
│   ├── Content.jsx          # Main container component
│   ├── Footer.jsx           # Footer section
│   ├── AddItems.jsx         # Form to add new items
│   ├── SearchItem.jsx       # Search/filter input
│   ├── ItemList.jsx         # List container
│   └── LineItem.jsx         # Individual item component
├── App.jsx
└── index.css

data/
└── db.json                  # Mock database (JSON Server)
```

## 💡 Key Learning Points

- **API Integration:** Communicating with REST API endpoints (GET, POST, DELETE)
- **Component Composition:** Breaking app into reusable, focused components
- **State Management:** Managing global and local component state
- **Side Effects:** Using useEffect for API calls and data fetching
- **Search/Filter:** Real-time filtering of list items
- **Error Handling:** Try-catch blocks and error state management
- **Loading States:** UX improvement with loading indicators

## 🔄 API Endpoints

**Base URL (Production):** `https://todo-shopping-api.onrender.com`  
**Base URL (Development):** `http://localhost:3500`

- `GET /items` - Fetch all items
- `GET /items/:id` - Fetch single item
- `POST /items` - Create new item
- `PUT /items/:id` - Update item
- `DELETE /items/:id` - Delete item

## 🚀 Deployment

This is a **full-stack application** deployed across two platforms:

### Frontend (React)

- **Platform:** Vercel
- **Automatic Deployments:** Enabled on push to main branch
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Backend (JSON Server API)

- **Platform:** Render.com
- **Repository:** [Todo-Shopping-API](https://github.com/An-Uncreative/Todo-Shopping-API)
- **Automatic Deployments:** Enabled on push to main branch
- **Note:** Free tier has cold starts (~30s wake time after inactivity)

## 🐛 Future Improvements

- Persist data to browser localStorage as fallback
- Add edit functionality for existing items
- Implement item categories/tags
- Due date tracking with calendar
- Item priority levels
- Dark/light theme toggle
- Export/import list functionality

## 📚 Resources

- [React Documentation](https://react.dev)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite Documentation](https://vitejs.dev)

## 👤 Author

Created as part of fullstack development bootcamp learning path

## 📄 License

Educational project
