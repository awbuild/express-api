# Blog Post API

A complete RESTful API for managing blog posts and users built with Express.js.

## Features

- **Posts Management**: Create, read, update, and delete blog posts
- **User Management**: Handle user accounts with role-based access
- **Error Handling**: Custom error middleware for consistent error responses
- **Validation**: Input validation for all endpoints
- **API Documentation**: Built-in documentation at root endpoint
- **Health Check**: Monitor API status

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Server runs on `http://localhost:3000`

### 3. View API Documentation
Open `http://localhost:3000/` in your browser to see all available endpoints and request formats.

---

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Utility
- `GET /` - API documentation
- `GET /health` - Health check

---

## Testing

### Run All Tests
```bash
npm test
```

### Run Tests with Detailed Output
```bash
npm run test:api:verbose
```

### Using Postman
1. Import `Blog-Post-API.postman_collection.json` into Postman
2. Ensure server is running (`npm run dev`)
3. Run the collection or individual requests

---

## Request Examples

### Create a Post
```bash
POST /api/posts
Content-Type: application/json

{
  "title": "Getting Started with Express",
  "content": "Express is a minimal and flexible Node.js web application framework...",
  "author": "Jane Doe",
  "published": true
}
```

### Create a User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "role": "author"
}
```

---

## Project Structure

```
complete-example/
├── app.js                          # Main application file
├── package.json                    # Dependencies and scripts
├── Blog-Post-API.postman_collection.json  # API tests
├── controllers/
│   ├── postsController.js          # Posts business logic
│   └── usersController.js          # Users business logic
├── routes/
│   ├── posts.js                    # Posts route definitions
│   └── users.js                    # Users route definitions
└── middleware/
    └── errorHandler.js             # Error handling middleware
```

---

## Available Scripts

- `npm start` - Run production server
- `npm run dev` - Run development server with auto-restart
- `npm test` - Run API tests with Newman
- `npm run test:api` - Run API tests
- `npm run test:api:verbose` - Run tests with detailed JSON output

---

## Data Storage

Data is stored in-memory and will reset when the server restarts. This is for demonstration purposes only.

---

## Error Responses

All errors follow a consistent format:

```json
{
  "error": "Error message here",
  "details": "Additional context (development mode only)"
}
```

### Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

---

## Development Notes

- Server runs on port 3000 (configurable via `PORT` environment variable)
- Request logging enabled in console
- Environment-based error responses (development vs production)
