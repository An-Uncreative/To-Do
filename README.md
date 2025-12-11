# My2 React App: Todo/Shopping List Manager

## 📝 Project Overview

A comprehensive todo and shopping list application built with React. Features full CRUD operations, search functionality, and API integration with a local JSON server backend.

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

- **React 19.2.0** - UI library with hooks (useState, useEffect)
- **Vite** - Frontend build tool
- **React Icons** - Icon library for UI elements
- **JSON Server** - Mock REST API backend (for development)
- **CSS3** - Responsive styling
- **ESLint** - Code quality

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

## 🔄 API Endpoints (JSON Server)

- `GET http://localhost:3500/items` - Fetch all items
- `POST http://localhost:3500/items` - Create new item
- `DELETE http://localhost:3500/items/:id` - Delete item
- `PATCH http://localhost:3500/items/:id` - Update item

## 🚀 Deployment Notes

When deploying to production, replace the JSON Server mock API with a real backend:

- Node.js/Express server
- Firebase Realtime Database
- Supabase
- MongoDB + Node.js API

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
