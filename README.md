# 🛍️ E-Comm: Full-Stack E-commerce Web Application

[![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue?logo=react)](https://www.mongodb.com/mern-stack)
[![Tailwind CSS](https://img.shields.io/badge/Style-TailwindCSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Cloudinary](https://img.shields.io/badge/Image%20Upload-Cloudinary-lightblue?logo=cloudinary)](https://cloudinary.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A feature-rich e-commerce web platform with user and admin panels, built with the MERN stack. Supports product browsing, cart, checkout, image uploads, dynamic theming, and secure admin management.

---

## 📌 Overview

**E-Comm** is a modern full-stack e-commerce web application built using the **MERN** stack: MongoDB, Express.js, React.js, and Node.js. It supports a full customer journey from browsing to checkout, while also offering a powerful admin dashboard for managing products, orders, and stock.

The application features:

- Google OAuth login
- JWT-based role-based authentication
- Cloudinary-based product image uploads
- Dark/light mode toggle
- Responsive and mobile-friendly design

---

## 🚀 Features

### 👤 User Panel
- 🔐 **Register/Login** (including Google Sign-In)
- 🛍️ **Browse Products** with filters (color, size, category)
- 🛒 **Add to Cart**, adjust quantity, and proceed to checkout
- 💳 **Order Summary** with delivery and payment status
- 📦 **Order History** page
- 🌙 **Dark/Light Mode Toggle** (persists theme)

### 🛠️ Admin Panel
- ✏️ **Add/Edit/Delete Products** with real-time image upload
- 📋 **Manage Categories**, colors, sizes, stock
- 📃 **View & Update Orders**
- 🔐 **Secure Access** via JWT tokens (with admin middleware)

### 📷 Media Upload
- Upload product images directly to **Cloudinary**
- Preview image before upload
- Uses streaming buffers for optimized upload handling

---

## 🛠️ Tech Stack

| Frontend        | Backend             | Database | Dev Tools / Others             |
|----------------|---------------------|----------|--------------------------------|
| React.js       | Node.js             | MongoDB  | Cloudinary (Image Hosting)     |
| Vite + Tailwind| Express.js          | Mongoose | Multer (File Upload)           |
| Redux Toolkit  | JWT Auth            |          | Firebase (Google OAuth)        |
| Axios          | Middleware-based API|          | Sonner (Toast Notifications)   |

---

## 📂 Project Structure

```
E-Comm/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── tailwind.config.js
└── README.md
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
```env
PORT=9000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (`frontend/.env`)
```env
VITE_BACKEND_URL=http://localhost:9000
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ezanand/E-Comm.git
cd E-Comm
```

### 2️⃣ Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Run Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 🔐 Authentication & Authorization

- 🔒 JWT-based role authentication
- 🔐 Admin routes protected via middleware (`protect`, `admin`)

---

## 📈 Future Improvements

| Status | Feature                             |
|--------|-------------------------------------|
| ✅     | Stripe or Razorpay integration      |
| ✅     | Improved product filtering/search   |
| ⏳     | Email notifications for order status|
| ⏳     | Multi-language support              |
| ⏳     | CMS-like drag & drop product editor |

---

## 👨‍💻 Author

**Anand Raj Singh**  
📧 [anandraj.singh2003@gmail.com](mailto:anandraj.singh2003@gmail.com)  
🔗 [GitHub: ezanand](https://github.com/ezanand)

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
