# 🏡 Rentora — Full-Stack Vacation Rental Marketplace

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.19-blue.svg?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.2-purple.svg?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Rentora** is a full-stack, feature-rich web application inspired by Airbnb. It enables users to discover, list, and review unique properties around the world with real-time cloud image storage, category filtering, user authentication, and responsive design across all screen sizes.

---

## 🌟 Key Features

### 🔍 Discovery & Filtering
- **Category-Based Filtering**: Easily browse properties categorized into *Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Campaign, Farms, and Arctic*.
- **Destination Search**: Search properties by country destination.
- **Dynamic Tax Toggle**: Interactive switch to display total property prices with included taxes (18% GST).

### 🏠 Property Hosting & Management
- **Add New Listings**: Host new property listings with title, description, category, price, location, country, and image file upload.
- **Cloud Image Uploads**: Integrated with **Cloudinary** for image transformation, optimization, and cloud storage.
- **Full CRUD Operations**: Property owners can edit details, swap images, or delete listings.

### ⭐ Reviews & Ratings System
- **Interactive Ratings**: 1 to 5 star rating system with interactive Starability slot widgets.
- **Cascading Deletes**: Automatic database cleanup of all reviews associated with a property when the property is deleted.

### 🔒 Security & Authentication
- **User Authentication**: Secure Signup, Login, and Logout using **Passport.js** session-based authentication.
- **Role-Based Authorization**: Custom middleware ensuring only property owners can edit/delete listings and only review authors can delete their reviews.
- **Server-Side Input Validation**: Schema validation using **Joi** to prevent invalid database writes or injection attacks.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology Used |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), EJS, EJS-Mate layouts, Bootstrap 5 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM, MongoDB Atlas |
| **Cloud Storage** | Cloudinary API, Multer, Multer Storage Cloudinary |
| **Authentication** | Passport.js, Passport-Local, Express-Session, Connect-Mongo |
| **Validation & Safety** | Joi Schema Validation, Custom Middleware |

---

## 🏛️ Application Architecture

```
                                  +-------------------+
                                  |   Browser Client  |
                                  +---------+---------+
                                            |
                                            v (HTTP Requests)
                                  +---------+---------+
                                  |   Express Server  |
                                  +---------+---------+
                                            |
           +--------------------------------+--------------------------------+
           |                                |                                |
           v                                v                                v
+----------+----------+          +----------+----------+          +----------+----------+
|  Passport Auth &    |          |  Joi Schema         |          |  Multer & Cloudinary|
|  Session Middleware |          |  Validation         |          |  Image Storage      |
+----------+----------+          +----------+----------+          +----------+----------+
           |                                |                                |
           +--------------------------------+--------------------------------+
                                            |
                                            v
                                  +---------+---------+
                                  |   Mongoose ODM    |
                                  +---------+---------+
                                            |
                                            v
                                  +---------+---------+
                                  |   MongoDB Atlas   |
                                  +---------+---------+
```

---

## ⚙️ Engineering Highlights

- **MVC Architecture**: Strict separation of concerns across Models (`/models`), Views (`/views`), and Controllers (`/controllers`).
- **Cascade Deletion Hook**: Implemented Mongoose `post("findOneAndDelete")` middleware on the `Listing` model to eliminate orphaned review data automatically.
- **Robust Error Handling**: Centralized asynchronous error handler (`wrapAsync`) and custom `ExpressError` class for graceful error handling.
- **Mobile-First Responsive Design**: Optimized layouts with fluid grid systems, touch-scrollable category filter bars, and responsive media queries across all breakpoints.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas Cluster account)
- [Cloudinary Account](https://cloudinary.com/) (for image hosting API keys)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/rentora.git
   cd rentora
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your credentials:
   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_express_session_secret_key
   ```

4. **Seed Sample Data (Optional)**
   ```bash
   node init/index.js
   ```

5. **Start the Development Server**
   ```bash
   node app.js
   ```
   The application will be running at `http://localhost:8080`.

---

## 📁 Directory Structure

```
Project1/
├── controllers/          # Business logic handlers (listings, reviews, users)
├── init/                 # Sample seed data & initialization script
├── models/               # Mongoose data schemas (Listing, Review, User)
├── public/               # Static assets (CSS styles, JS scripts)
├── routes/               # Express route definitions
├── utils/                # Utility helpers (wrapAsync, ExpressError)
├── views/                # EJS templates & partial layouts
│   ├── includes/         # Navbar, Footer, Flash alerts
│   ├── layouts/          # EJS-Mate Boilerplate template
│   ├── listings/         # Index, Show, New, Edit property views
│   └── users/            # Login & Signup views
├── app.js                # Main application entry point & Express configuration
├── cloudConfig.js        # Cloudinary & Multer configuration
├── middleware.js         # Custom auth & validation middleware
├── schema.js             # Joi validation schemas
└── package.json          # Node.js dependencies & scripts
```

---

## 🧑‍💻 Author & Contact

**Rupchand Naiya**  
- 💼 **LinkedIn**: [linkedin.com/in/rupchand-naiya-87bb8a228](https://www.linkedin.com/in/rupchand-naiya-87bb8a228)
- 🐙 **GitHub**: [github.com/usergithubrup](https://github.com/usergithubrup)
- 📧 **Email**: [rupchandnaiya27@gmail.com](mailto:rupchandnaiya27@gmail.com)

---

⭐ *If you find this project interesting, please consider giving it a star on GitHub!*
