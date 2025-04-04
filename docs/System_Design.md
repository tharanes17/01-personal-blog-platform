# 🧩 System Design Document

## 📘 Project Title:
**Personal Blogging Platform API**

---

## 1. High-Level Architecture

This is a monolithic architecture using a React frontend and a Spring Boot backend that interacts with a PostgreSQL database.

```
[ React Frontend ]  →  [ Spring Boot REST API ]  →  [ PostgreSQL Database ]
```

The frontend and backend are maintained in separate projects but communicate via HTTP REST API. All backend logic, including business rules, data access, and API definitions, is packaged as a single Spring Boot application.

---

## 2. Database Design

### 🗃️ Table: `articles`

| Field       | Type         | Description                         |
|-------------|--------------|-------------------------------------|
| id          | UUID         | Primary key                         |
| title       | VARCHAR      | Title of the article                |
| content     | TEXT         | Full content of the article         |
| tags        | TEXT[]       | Array of tags (PostgreSQL array)    |
| created_at  | TIMESTAMP    | When the article was created        |
| updated_at  | TIMESTAMP    | When the article was last updated   |

Using PostgreSQL arrays to store tags makes filtering easy and maintains performance. Alternatively, a normalized tags table can be introduced later if needed.

---

## 3. REST API Endpoints

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| POST   | `/api/articles`        | Create a new article                |
| GET    | `/api/articles`        | Retrieve all articles               |
| GET    | `/api/articles/{id}`   | Retrieve an article by ID           |
| PUT    | `/api/articles/{id}`   | Update an existing article          |
| DELETE | `/api/articles/{id}`   | Delete an article by ID             |

### Filtering Support:
- `GET /api/articles?tag=java`
- `GET /api/articles?date=2025-04-04`

---

## 4. Technologies Used

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React              |
| Backend     | Java, Spring Boot  |
| Database    | PostgreSQL         |
| ORM         | Spring Data JPA    |
| Build Tool  | Maven or Gradle    |
| Dev Tools   | Docker, Postman    |
| Docs        | Swagger/OpenAPI    |

---

## 5. CORS Configuration

Since React runs on a different port (e.g., 3000) from the Spring Boot backend (e.g., 8080), CORS needs to be enabled in Spring Boot for development.

```java
@Configuration
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("*");
            }
        };
    }
}
```

---

## 6. Deployment Strategy

- The app will be containerized using Docker.
- Both backend and database services will be defined in a `docker-compose.yml`.
- Later, deployment to cloud services like Railway, Render, or AWS EC2 can be configured.

---

## 7. Future Enhancements

- User authentication and authorization (JWT-based)
- Commenting system
- Image upload support
- Rich text editor integration for content
- Tag management UI

---
