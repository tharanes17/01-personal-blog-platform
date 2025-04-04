
# 📝 Personal Blogging Platform

A full-stack personal blogging platform that allows users to create, view, and manage articles. Built with **React (Vite + Tailwind CSS)** on the frontend and **Spring Boot + PostgreSQL** on the backend.

---

## 📦 Tech Stack

### 🚀 Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### 🛠 Backend
- Java Spring Boot
- PostgreSQL
- Spring Data JPA
- Swagger (API documentation)

---

## 📁 Project Structure

```
/backend         # Spring Boot Application
/frontend        # React App with Vite
```

---

## ⚙️ Getting Started

### 🔧 Backend Setup

1. Clone the repo & navigate to the `backend` directory
2. Configure your DB connection in `application.properties`
3. Run:

```bash
./mvnw spring-boot:run
```

### 🌐 Frontend Setup

1. Navigate to the `frontend` folder
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

4. Run the development server:

```bash
npm run dev
```

---

## 📬 API Endpoints

Base URL: `/api/articles`

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | `/articles`      | Get all articles       |
| POST   | `/articles`      | Create a new article   |

> 📌 More endpoints will be added as the project evolves.

---

## 🛡 CORS

CORS is enabled on the backend to allow frontend requests from different origins during development.

---

## 📚 Documentation

- API documentation available via Swagger (Coming soon)
- System Design Spec in `docs/` folder (if applicable)

---

## ✅ Features

- [x] Create article
- [x] List all articles
- [ ] View article detail
- [ ] Edit / Delete article
- [ ] Tags, search & filter
- [ ] Authentication (optional)
- [ ] Deploy to production

---

## 🤝 Contributing

This project is for learning purposes, but feel free to fork and explore!

---

## 🧑‍💻 Author

**Thar** — Backend-focused developer learning full-stack development.

---

## 📃 License

This project is licensed under the MIT License.
