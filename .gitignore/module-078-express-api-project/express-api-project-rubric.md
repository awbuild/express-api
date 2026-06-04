# Express API Project - Assessment Rubric

## Project Overview

This rubric evaluates the Express API Project based on Express.js concepts the last few sessions. Students will build a comprehensive RESTful API demonstrating mastery of Express setup, routing, middleware, controllers, and error handling skills.

### What should I make?

Build a **Blog Post API** that manages blog posts and users. Your API should have two main resources:

- **Posts** - Blog articles with title, content, author, and publishing information
- **Users** - Authors who can create and manage blog posts

Notes:

- This is a great team project if you have already learned how to deal with branches
  and merge conflicts
- Do not make a frontend for this, you will interact with this api via Postman

---

## **Must Have (Required for Passing):**

### **Express.js API Implementation**

- [ ] **Express Setup** - Proper Express.js project initialization with package.json and dependency management
- [ ] **Server Configuration** - Basic Express application setup with port configuration and environment variables
- [ ] **Posts API Routes** - Implements full CRUD operations (GET, POST, PUT, DELETE) for blog posts at `/api/posts`
- [ ] **Users API Routes** - Implements full CRUD operations (GET, POST, PUT, DELETE) for users at `/api/users`
- [ ] **Express Router** - Uses Express Router to organize routes into separate files (`routes/posts.js` and `routes/users.js`)
- [ ] **Request/Response Handling** - Properly handles request data (params, query, body) and sends appropriate JSON responses

### **Controllers and MVC Architecture**

- [ ] **Posts Controller** - Creates `controllers/postsController.js` with functions for all CRUD operations (getAllPosts, getPostById, createPost, updatePost, deletePost)
- [ ] **Users Controller** - Creates `controllers/usersController.js` with functions for all CRUD operations (getAllUsers, getUserById, createUser, updateUser, deleteUser)
- [ ] **Route-Controller Connection** - Connects routes to controller methods cleanly in both route files
- [ ] **Separation of Concerns** - Routes handle HTTP routing, controllers handle business logic and data manipulation

### **Middleware and Data Management**

- [ ] **Built-in Middleware** - Uses express.json() for parsing request bodies and other appropriate middleware
- [ ] **Posts Data Storage** - Implements in-memory data storage for blog posts with properties (id, title, content, author, createdAt, published)
- [ ] **Users Data Storage** - Implements in-memory data storage for users with properties (id, name, email, role, createdAt)
- [ ] **Data Validation** - Validates incoming request data for both posts and users (required fields, data types)
- [ ] **Error Handling** - Implements proper error handling middleware with appropriate HTTP status codes

### **API Testing and Documentation**

- [ ] **Posts Endpoint Testing** - All posts endpoints (`GET /api/posts`, `POST /api/posts`, `GET /api/posts/:id`, `PUT /api/posts/:id`, `DELETE /api/posts/:id`) work correctly
- [ ] **Users Endpoint Testing** - All users endpoints (`GET /api/users`, `POST /api/users`, `GET /api/users/:id`, `PUT /api/users/:id`, `DELETE /api/users/:id`) work correctly
- [ ] **HTTP Status Codes** - Uses appropriate HTTP status codes (200, 201, 400, 404, 500, etc.) for all endpoints

### **Production-Ready Features**

- [ ] **File Organization** - Well-structured project with separate files: `app.js`, `routes/posts.js`, `routes/users.js`, `controllers/postsController.js`, `controllers/usersController.js`, middleware files

---

## **Could Have (Bonus Points):**

### **Enhanced Features**

- [ ] **Development Workflow** - Uses nodemon for development and includes proper npm scripts
- [ ] **Environment Configuration** - Uses environment variables for configuration (PORT, etc.)
- [ ] **Logging System** - Includes request logging and error logging functionality
- [ ] **Custom Middleware** - Creates at least one custom middleware function (logging, validation, etc.)
- [ ] **Advanced Validation** - Uses validation libraries (joi, express-validator) for comprehensive input validation
- [ ] **Advanced Error Handling** - Distinguishes between development and production error responses
- [ ] **Static File Serving** - Serves static files and implements proper file organization

---

## Submission Requirements

### **Technical Requirements:**

- [ ] **Working Blog API** - Complete functional API with CRUD operations for both posts and users
- [ ] **MVC Architecture** - Well-organized code structure with separate route and controller files for posts and users
- [ ] **Package Management** - Proper package.json with all dependencies and scripts configured

### **Project Structure Requirements:**

```
blog-api-project/
├── app.js
├── package.json
├── routes/
│   ├── posts.js
│   └── users.js
├── controllers/
│   ├── postsController.js
│   └── usersController.js
└── middleware/
    └── errorHandler.js (optional)
```

### **API Interface Requirements:**

- [ ] **RESTful Design** - Follows REST conventions for URL structure and HTTP methods for both `/api/posts` and `/api/users`
- [ ] **Consistent Responses** - All endpoints return data in consistent JSON format with proper structure
- [ ] **Basic Error Handling** - Graceful error handling with appropriate status codes and messages for both resource types
- [ ] **Documentation** - Clear API documentation with endpoint descriptions and examples for both posts and users APIs

### **Required API Endpoints:**

**Posts API (`/api/posts`):**

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get specific blog post
- `POST /api/posts` - Create new blog post
- `PUT /api/posts/:id` - Update existing blog post
- `DELETE /api/posts/:id` - Delete blog post

**Users API (`/api/users`):**

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update existing user
- `DELETE /api/users/:id` - Delete user

### **Code Quality Requirements:**

- [ ] **Clean Code** - Well-formatted, readable code with consistent naming conventions
- [ ] **Express Best Practices** - Proper use of Express patterns, middleware, and routing

**Due Date:** April 18th
**Submission Method:** Github Repo link on #projects channel
