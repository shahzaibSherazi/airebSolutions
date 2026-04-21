# Admin Dashboard Setup Guide

## 🚀 Overview

A professional, fully functional admin dashboard for managing blogs and white papers with:

- User authentication (login/logout)
- Blog CRUD operations with image uploads
- White Paper CRUD operations with PDF uploads
- Dynamic filtering and search
- Responsive design (mobile-friendly)
- State management with Zustand
- Real-time data sync

---

## 📋 Table of Contents

1. [Backend Setup](#backend-setup)
2. [Frontend Setup](#frontend-setup)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Features](#features)
6. [Usage Guide](#usage-guide)

---

##Backend Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud - Atlas)
- npm or yarn

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Environment Variables

Update `.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/aireb_local_db

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Email (keep existing)
GMAIL_USER=your_email@gmail.com
GMAIL_PASSWORD=your_app_password

# CORS
FRONTEND_URL=http://localhost:5173
```

### Step 3: Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

---

## 🎨 Frontend Setup

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Configure Environment Variables

Create `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

Update `.env.local`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Aireb Solutions
VITE_APP_URL=http://localhost:5173
```

### Step 3: Start Frontend Development Server

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

##🛠 Running the Application

### Terminal 1: Backend

```bash
cd backend
npm run dev
```

### Terminal 2: Frontend

```bash
cd frontend
npm run dev
```

Visit: `http://localhost:5173/admin/login`

---

## 🔑 Default Admin Credentials

**Email:** `admin@aireb.com`  
**Password:** `password123`

⚠️ **Important:** Change these credentials in production!

To create additional users, use the registration endpoint or create them directly in MongoDB.

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register new user            |
| POST   | `/api/auth/login`    | User login                   |
| GET    | `/api/auth/me`       | Get current user (Protected) |
| GET    | `/api/auth/logout`   | User logout                  |

### Blogs

| Method | Endpoint                | Description             |
| ------ | ----------------------- | ----------------------- |
| GET    | `/api/blogs`            | Get all blogs (Public)  |
| GET    | `/api/blogs/:id`        | Get single blog         |
| POST   | `/api/blogs`            | Create blog (Protected) |
| PUT    | `/api/blogs/:id`        | Update blog (Protected) |
| DELETE | `/api/blogs/:id`        | Delete blog (Protected) |
| GET    | `/api/blogs/categories` | Get blog categories     |

### White Papers

| Method | Endpoint                            | Description                    |
| ------ | ----------------------------------- | ------------------------------ |
| GET    | `/api/whitepapers`                  | Get all white papers (Public)  |
| GET    | `/api/whitepapers/:id`              | Get single white paper         |
| POST   | `/api/whitepapers`                  | Create white paper (Protected) |
| PUT    | `/api/whitepapers/:id`              | Update white paper (Protected) |
| DELETE | `/api/whitepapers/:id`              | Delete white paper (Protected) |
| GET    | `/api/whitepapers/admin/categories` | Get white paper categories     |
| POST   | `/api/whitepapers/:id/download`     | Track download                 |

---

## ✨ Features

### 1. **Authentication**

- Secure JWT-based authentication
- Token stored in localStorage
- Auto-logout on 401 response
- Protected routes

### 2. **Blog Management**

- Create/Edit/Delete blogs
- Image upload with preview
- Rich content with sections (paragraph, lists, subheadings)
- Category filtering
- Search functionality
- Draft/Published status
- View counter
- Author information

### 3. **White Paper Management**

- Create/Edit/Delete white papers
- Image upload with preview
- PDF upload and storage
- Key points management
- Category filtering
- Search functionality
- Download tracking
- Draft/Published status

### 4. **Dashboard**

- Overview statistics (total blogs, white papers, views)
- Recent content preview
- Quick navigation to management pages
- At-a-glance metrics

### 5. **User Experience**

- Responsive design (mobile, tablet, desktop)
- Dark theme with blue accents
- Loading states
- Error handling
- Success notifications
- Pagination
- Table UI with sorting

---

## 📖 Usage Guide

### Logging In

1. Go to `http://localhost:5173/admin/login`
2. Enter credentials:
   - Email: `admin@aireb.com`
   - Password: `password123`
3. Click "Login"

### Creating a Blog

1. From Dashboard, click "+ New Blog" or go to Blogs
2. Fill in required fields:
   - Title \*
   - Category \*
   - Featured Image \*
   - Author (optional)
   - Read Time (optional)
   - Intro (optional)
3. Set Status (Draft/Published)
4. Click "Create Blog"

### Editing a Blog

1. Go to Blogs page
2. Click Edit icon (pencil) on the blog row
3. Modify content
4. Click "Update Blog"

### Deleting a Blog

1. Go to Blogs page
2. Click Delete icon (trash) on the blog row
3. Confirm deletion

### Creating a White Paper

1. From Dashboard, click "+ New Paper" or go to White Papers
2. Fill in required fields:
   - Title \*
   - Category \*
   - Featured Image \*
   - PDF File \*
   - Author (optional)
   - Description (optional)
3. Add Key Points (optional)
4. Set Status (Draft/Published)
5. Click "Create White Paper"

### Filtering Content

- Use Status filter to show Published/Draft content
- Use Category filter for specific categories
- Use Search to find content by title

---

## 🔐 Security Notes

1. **JWT Secret:** Change `JWT_SECRET` in production
2. **Credentials:** Never commit demo credentials to production
3. **File Uploads:** Validate file types and sizes
4. **CORS:** Configure `FRONTEND_URL` appropriately
5. **Tokens:** Set reasonable `JWT_EXPIRE` times
6. **Database:** Use MongoDB Atlas with SSL in production

---

## 📊 Project Structure

### Backend

```
backend/
├── models/          # Database schemas
│   ├── Blog.js
│   ├── WhitePaper.js
│   └── User.js
├── controllers/     # Route handlers
│   ├── authController.js
│   ├── blogController.js
│   └── whitePaperController.js
├── routes/          # API routes
│   ├── authRoutes.js
│   ├── blogRoutes.js
│   └── whitePaperRoutes.js
├── middleware/      # Auth & error handling
│   ├── authMiddleware.js
│   └── errorHandler.js
├── config/          # Configuration files
│   └── database.js
└── server.js        # Entry point
```

### Frontend

```
frontend/src/
├── pages/admin/           # Admin pages
│   ├── AdminLogin.tsx
│   ├── AdminDashboard.tsx
│   ├── BlogsManagement.tsx
│   ├── BlogForm.tsx
│   ├── WhitePapersManagement.tsx
│   └── WhitePaperForm.tsx
├── components/admin/      # Admin components
│   ├── Sidebar.tsx
│   ├── AdminLayout.tsx
│   └── ProtectedRoute.tsx
├── services/api/          # API integration
│   ├── client.ts
│   ├── authAPI.ts
│   ├── blogAPI.ts
│   └── whitePaperAPI.ts
├── store/                 # Zustand stores
│   ├── authStore.ts
│   └── contentStore.ts
└── utils/                 # Helper functions
    └── helpers.ts
```

---

## 🐛 Troubleshooting

### "Cannot connect to backend"

- Ensure backend is running on port 5000
- Check `VITE_API_URL` in `.env.local`
- Check CORS configuration in backend

### "Token expired"

- Login again to refresh token
- Check JWT_EXPIRE in backend

### "Image upload fails"

- Ensure file is less than 5MB
- Supported formats: PNG, JPG, WebP, GIF

### "PDF upload fails"

- Ensure PDF file is less than 10MB
- File type must be `application/pdf`

---

## 📚 Additional Resources

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Router Documentation](https://reactrouter.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🎯 Next Steps

1. **Customize Branding** - Update logo and colors
2. **Add More Fields** - Extend blog/white paper models
3. **Implement AI Integration** - Use LLM for content suggestions
4. **Add Media Library** - Centralize image/PDF management
5. **Email Notifications** - Notify on new publications
6. **Analytics** - Track user engagement

---

## 📝 License

This dashboard is part of Aireb Solutions. All rights reserved.

---

## 🤝 Support

For issues or questions, contact the development team.
