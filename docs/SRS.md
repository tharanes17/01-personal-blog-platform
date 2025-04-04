# 📄 Software Requirements Specification (SRS)

## 📘 Project Title:
**Personal Blogging Platform API**

---

## 1. Project Overview

**Personal Blogging Platform API** is a web-based backend service that allows users to manage their personal blog articles in one place. It provides core features such as creating, reading, updating, and deleting articles, with optional filtering capabilities based on tags or publish date.

---

## 2. Goals and Objectives

- Allow users to store and manage their personal blog articles.
- Provide endpoints to perform CRUD operations on blog posts.
- Offer filtering capabilities (e.g., by publish date or tags).
- Ensure a clean, RESTful API that can be connected to a frontend (e.g., React).
- Lay the foundation for a scalable and maintainable blogging backend.

---

## 3. Functional Requirements

The system shall expose a set of RESTful API endpoints that allow clients to manage blog articles. The core functionalities include:

### 3.1 Create an Article
- The system shall allow clients to create a new blog article by providing a title, content, and optional tags.

### 3.2 Retrieve All Articles
- The system shall provide an endpoint to retrieve a list of all articles.
- The list shall support filtering by:
  - Publish date
  - Tags

### 3.3 Retrieve a Single Article
- The system shall allow retrieval of a single article by its unique identifier.

### 3.4 Update an Article
- The system shall allow clients to update an existing article by specifying its ID.
- Clients may update fields such as title, content, and tags.

### 3.5 Delete an Article
- The system shall allow deletion of an article by its ID.

---

## 4. Non-Functional Requirements

### 4.1 Performance
- The system shall respond to API requests within 500ms under normal load.
- The system shall be capable of handling at least 100 concurrent users.

### 4.2 Scalability
- The system shall be designed in a modular way to support horizontal scaling.

### 4.3 Reliability & Availability
- The system shall maintain 99.9% uptime.
- Errors and exceptions shall be logged and monitored.

### 4.4 Security
- The API shall use HTTPS to secure communication.
- Input validation and sanitization shall be enforced to prevent injection attacks.

### 4.5 Maintainability
- The codebase shall follow standard naming conventions and be modular.
- Proper documentation shall be maintained for developers and maintainers.

### 4.6 Portability
- The system shall be containerized (e.g., Docker) for easy deployment.

### 4.7 Compliance
- The API shall conform to RESTful principles and return proper HTTP status codes.

---

## 5. Tech Stack (To Be Confirmed)

- **Backend**: Java (Spring Boot)
- **Frontend**: React (for integration later)
- **Database**: MySQL or PostgreSQL (TBD)
- **Authentication**: (Optional in MVP)
- **Deployment**: Docker + Railway/Render/EC2 (TBD)
