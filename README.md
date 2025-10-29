# 🛡️ NestJS Social Auth

A complete **NestJS authentication boilerplate** that supports **Google OAuth2** login using Passport.js strategies and issues a **JWT token** for secure API access.

This project is ideal for modern applications that require social login functionality and serves as a clean, extensible starting point for production-grade authentication in NestJS.

---

## 🚀 Features

- ✅ Google
- 🔐 JWT authentication for protected routes
- ⚙️ Modular NestJS structure (Auth + Users)
- 📦 TypeScript + Passport strategies
- 🧩 Environment-based configuration
- 💾 Simple in-memory user storage (replaceable with DB)
- 🧱 Ready to extend for PostgreSQL, MongoDB, or Prisma

---

## 📁 Project Structure
```
signin-with-google/
├── src/
│ ├── auth/
│ │ ├── auth.controller.ts
│ │ ├── auth.module.ts
│ │ ├── google.strategy.ts
│ │ └── jwt.strategy.ts
│ ├── users/
│ │ ├── users.module.ts
│ │ └── users.service.ts
│ ├── app.module.ts
│ └── main.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```
---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/muaaz0333/Sign-in-with-Google.git

# 2. Navigate to the folder
cd Sign-in-with-Google

# 3. Install dependencies
pnpm install

```
---
## 🔧 Environment Setup
Create a .env file in the project root:
```
PORT=3000

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/redirect

```
---

## ▶️ Run the Application

```
pnpm start:dev
```
Server runs at:
```
http://localhost:3000
```
---

## 🧪 Testing with Postman
| Step | Method | Endpoint                  | Description                      |
| ---- | ------ | ------------------------- | -------------------------------- |
| 1    | GET    | `/auth/google`            | Start Google login               |
| 2    | GET    | `/auth/google/redirect`   | Receive Google JWT token         |
| 3    | GET    | `/profile`                | Access protected route using JWT |

---

## 🧰 Tech Stack
#### NestJS — Backend framework
#### Passport.js — OAuth2 strategies
#### JWT — Token-based authentication
#### TypeScript — Static typing
#### dotenv — Environment variables
#### Express (default adapter)

---


## 🙌 Follow the Author

Made with ❤️ by **Muaaz Ahmad**  
👨‍💻 GitHub: [@muaaz0333](https://github.com/muaaz0333)  
🔗 LinkedIn: [linkedin.com/in/MuaazAhmad](https://www.linkedin.com/in/expertfullstackdeveloper/)

---