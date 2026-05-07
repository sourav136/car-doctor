# 🚗 Car Doctor — Full-Stack Car Servicing Web Application

> A production-ready car servicing platform built with **Next.js 16**, **MongoDB Atlas**, and **NextAuth.js v5** — featuring dual authentication, role-based access control, and a full admin panel.

**Live Demo:** [car-doctor-rho-nine.vercel.app](https://car-doctor-rho-nine.vercel.app)

---

## 📸 Lighthouse Audit Scores

| Performance | Accessibility | Best Practices | SEO |
|:-----------:|:-------------:|:--------------:|:---:|
| 86 | 90 | 96 | 100 |

---

## ✨ Features

### For Users
- Browse all available car services with pricing details
- View full service details including facilities and descriptions
- Book a service via a protected checkout flow
- View and manage personal bookings (cancel anytime)
- Register and log in with email/password or Google account

### For Admins
- Full admin dashboard accessible only to users with `admin` role
- Add, view, and delete services
- View all bookings from all users
- Update booking statuses (Pending → Confirmed / Cancelled)

### Authentication & Security
- **Google OAuth 2.0** via NextAuth.js
- **Credential-based login** with bcrypt password hashing
- **JWT sessions** with role embedded in token
- **Middleware-level route protection** for `/checkout` and `/admin` paths
- **Role-Based Access Control (RBAC)** — regular users cannot access admin routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS v4, daisyUI v5 |
| Database | MongoDB Atlas |
| Authentication | NextAuth.js v5, Google OAuth 2.0, bcrypt |
| Icons | React Icons |
| Deployment | Vercel |

---

## 📁 Project Structure

```
car-doctor/
├── app/
│   ├── (routes)/
│   │   ├── login/           # Login page
│   │   ├── register/        # Registration page
│   │   ├── services/        # Services listing
│   │   │   └── [id]/        # Service detail page
│   │   ├── checkout/
│   │   │   └── [id]/        # Protected checkout page
│   │   └── admin/           # Admin dashboard (role-protected)
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth handlers
│   │   ├── bookings/            # GET (all/by user), POST
│   │   │   └── [id]/            # DELETE, PATCH, GET by ID
│   │   ├── services/            # GET all, POST (admin only)
│   │   │   └── [id]/            # GET by ID, DELETE (admin only)
│   │   └── register/            # User registration endpoint
│   └── components/          # Shared UI components
├── lib/
│   ├── mongodb.js           # MongoDB client with connection pooling
│   ├── service.js           # Service data helpers
│   └── booking.js           # Booking data helpers
├── auth.js                  # NextAuth config (providers, callbacks, JWT)
├── middleware.js            # Route protection middleware
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster
- Google OAuth credentials ([Google Cloud Console](https://console.cloud.google.com/))

### 1. Clone the repository

```bash
git clone https://github.com/your-username/car-doctor.git
cd car-doctor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/carDoctor

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> **Tip:** Generate a strong `NEXTAUTH_SECRET` using `openssl rand -base64 32`

### 4. Set up MongoDB collections

In your `carDoctor` database, create the following collections:

- `users` — stores registered users with `name`, `email`, `password` (hashed), `role`
- `services` — stores service documents with `title`, `img`, `price`, `description`, `facility[]`
- `bookings` — stores booking documents with nested `service` and `customer` objects

### 5. Create an admin user

After registering a user normally, manually update their role in MongoDB Atlas:

```js
db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } })
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication Flow

```
User visits /checkout or /admin
        ↓
middleware.js checks JWT token
        ↓
No token?  →  Redirect to /login?callbackUrl=...
Token exists but role !== "admin" (for /admin)?  →  Redirect to /
Token valid?  →  Allow access
```

- Google sign-in automatically creates a new user document on first login
- JWT tokens include the user's `role` field, fetched from MongoDB on sign-in
- Sessions expose `session.user.role` for client-side conditional rendering

---

## 📡 API Reference

### Bookings

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/bookings` | Required | Returns all bookings (admin) or user's own bookings |
| `POST` | `/api/bookings` | Required | Create a new booking |
| `DELETE` | `/api/bookings/[id]` | Required | Delete booking (admin: any, user: own only) |
| `PATCH` | `/api/bookings/[id]` | Required | Update booking status |
| `GET` | `/api/bookings/[id]` | — | Get single booking by ID |

### Services

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/services` | — | Get all services |
| `POST` | `/api/services` | Admin only | Add a new service |
| `GET` | `/api/services/[id]` | — | Get service by ID |
| `DELETE` | `/api/services/[id]` | Admin only | Delete a service |

### Auth & Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST` | `/api/auth/[...nextauth]` | NextAuth handlers |
| `POST` | `/api/register` | Register a new user |

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add all environment variables from `.env.local` in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js and configures everything

---

## 📦 Dependencies

```json
{
  "next": "^16.2.3",
  "next-auth": "^5.0.0-beta.31",
  "mongodb": "^7.2.0",
  "bcryptjs": "^3.0.3",
  "react": "19.2.4",
  "tailwindcss": "^4.2.2",
  "daisyui": "^5.5.19",
  "react-icons": "^5.6.0"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <a href="https://github.com/souravbarua">Sourav Barua</a></p>