# 🛍️ E-Comm - Full Stack E-commerce Application

## 📌 Overview

**E-Comm** is a modern full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features both user and admin panels, enabling seamless product browsing, order processing, and backend management. Includes Google authentication, image upload via Cloudinary, dynamic theming (dark/light), and responsive design.

---

## 🚀 Features

### 🧑 User Features

* 🔐 Register/Login 
* 🛍️ Browse products with filters (color, size, category)
* 🛒 Add to cart, update quantity, checkout
* 💳 Payment status & delivery status
* 📦 View order details and history
* 🌙 Dark/Light theme toggle

### 🛠️ Admin Features

* ✏️ Add/Edit/Delete products (including image uploads)
* 📦 Manage stock, sizes, colors, categories
* 📃 View all orders and delivery/payment statuses
* 🔐 Secure admin access with token authentication

### 📷 Media Upload

* Upload product images to **Cloudinary** with streaming buffers
* Real-time display of image previews before saving

---

## 🛠️ Tech Stack

| Frontend      | Backend            | Database | Other Tools                    |
| ------------- | ------------------ | -------- | ------------------------------ |
| React.js      | Node.js            | MongoDB  | Cloudinary (Image Upload)      |
| Redux Toolkit | Express.js         | Mongoose |                                |
| Tailwind CSS  | JWT Authentication |          | Vite (React Build Tool)        |
| Axios         | Multer             |          | Toast notifications via Sonner |

---

## 📂 Project Structure (Simplified)

```
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.jsx
│   └── tailwind.config.js
```

---

## 🔑 Environment Variables

Create a `.env` file in both `backend/` and `frontend/`:

### Backend (`backend/.env`):

```
PORT=9000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### Frontend (`frontend/.env`):

```
VITE_BACKEND_URL=http://localhost:9000

```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ezanand/E-Comm.git
cd E-Comm
```

### 2. Install Dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Run Development Servers

```bash
# Terminal 1 (backend)
cd backend
npm run dev

# Terminal 2 (frontend)
cd frontend
npm run dev
```

---

## 🔐 Authentication & Authorization

* JWT-based authentication system
* Firebase Google OAuth integration
* Protected admin routes (middleware: `protect`, `admin`)

---

## ✅ TODO / Future Improvements

* ✅ Stripe or Razorpay integration
* ✅ Enhanced search and filtering
* ⏳ Email notifications for orders
* ⏳ Multi-language support
* ⏳ CMS-like product editing with drag-drop

---

## 👨‍💻 Author

**Anand Raj Singh**
📧 [anandraj.singh2003@gmail.com](mailto:anandraj.singh2003@gmail.com)
🔗 [GitHub: ezanand](https://github.com/ezanand)

---

## 📜 License

This project is licensed under the MIT License.
