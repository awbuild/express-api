// Sample Data for Blog Post API
// Copy these arrays to use as starter data in your controllers

// Sample Posts Data
let posts = [
  {
    id: 1,
    title: "Getting Started with Express.js",
    content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    author: "Alice Johnson",
    createdAt: new Date('2024-01-15').toISOString(),
    published: true
  },
  {
    id: 2,
    title: "Understanding RESTful APIs",
    content: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.",
    author: "Bob Smith",
    createdAt: new Date('2024-01-20').toISOString(),
    published: true
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    content: "Writing clean, maintainable JavaScript code is essential for building robust applications. Here are some best practices to follow.",
    author: "Carol Davis",
    createdAt: new Date('2024-01-25').toISOString(),
    published: false
  }
];

let nextPostId = 4;

// Sample Users Data
let users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "admin",
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "author",
    createdAt: new Date('2024-01-12').toISOString()
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    role: "author",
    createdAt: new Date('2024-01-14').toISOString()
  }
];

let nextUserId = 4;
