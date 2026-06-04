// Posts Controller - Business logic for blog posts

// Sample blog posts data
let posts = [
  {
    id: 1,
    title: "Getting Started with Express.js",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    author: "Alice Coltrane",
    createdAt: new Date("2024-01-15").toISOString(),
    published: true,
  },
  {
    id: 2,
    title: "Understanding RESTful APIs",
    content:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.",
    author: "Brandee Younger",
    createdAt: new Date("2024-01-20").toISOString(),
    published: true,
  },
  {
    id: 3,
    title: "JavaScript Best Practices",
    content:
      "Writing clean, maintainable JavaScript code is essential for building robust applications. Here are some best practices to follow.",
    author: "Kamasi Washington",
    createdAt: new Date("2024-01-25").toISOString(),
    published: false,
  },
];

let nextId = 4;

// Get all posts
const getAllPosts = (req, res) => {
  try {
    console.log('getAllPosts function called');
    console.log('Current number of posts:', posts.length);

    res.json({
      posts: posts,
      count: posts.length,
      totalPosts: posts.length,
    });

    console.log('getAllPosts finished successfully');
  } catch (error) {
    console.log('getAllPosts error:', error.message);
    res.status(500).json({
      error: 'Failed to retrieve posts',
      message: error.message
    });
  }
};

// Get post by ID
const getPostById = (req, res) => {
  try {
    console.log('getPostById function called');
    console.log('Looking for post with ID:', req.params.id);

    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    console.log('Post found:', post);

    if (!post) {
      return res.status(404).json({
        error: 'Post not found',
        message: `No post exists with ID ${postId}`
      });
    }

    res.json({
      post: post
    });

    console.log('getPostById finished successfully');
  } catch (error) {
    console.log('getPostById error:', error.message);
    res.status(500).json({
      error: 'Failed to retrieve post',
      message: error.message
    });
  }
};

// Create new post
const createPost = (req, res) => {
  try {
    console.log('createPost function called');
    console.log('Request body received:', req.body);

    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const published = req.body.published || false;

    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Author:', author);
    console.log('Published:', published);

    // Check that required fields exist
    if (!title || !content || !author) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Title, content, and author are required'
      });
    }

    // Check title length
    if (title.length < 3) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Title must be at least 3 characters long'
      });
    }

    // Check content length
    if (content.length < 10) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Content must be at least 10 characters long'
      });
    }

    const newPost = {
      id: nextId,
      title: title,
      content: content,
      author: author,
      createdAt: new Date().toISOString(),
      published: published
    };

    nextId = nextId + 1;
    posts.push(newPost);

    console.log('New post created:', newPost);
    console.log('Total posts now:', posts.length);

    res.status(201).json({
      message: 'Post created successfully',
      post: newPost
    });

  } catch (error) {
    console.log('createPost error:', error.message);
    res.status(500).json({
      error: 'Failed to create post',
      message: error.message
    });
  }
};

// Update post
const updatePost = (req, res) => {
  try {
    console.log('updatePost function called');
    console.log('Looking for post with ID:', req.params.id);
    console.log('Request body received:', req.body);

    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    console.log('Post index found:', postIndex);

    if (postIndex === -1) {
      return res.status(404).json({
        error: 'Post not found',
        message: `No post exists with ID ${postId}`
      });
    }

    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const published = req.body.published;

    // Validate title if it was provided
    if (title !== undefined && title.length < 3) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Title must be at least 3 characters long'
      });
    }

    // Validate content if it was provided
    if (content !== undefined && content.length < 10) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Content must be at least 10 characters long'
      });
    }

    // Only update fields that were actually provided
    if (title !== undefined) {
      posts[postIndex].title = title;
    }
    if (content !== undefined) {
      posts[postIndex].content = content;
    }
    if (author !== undefined) {
      posts[postIndex].author = author;
    }
    if (published !== undefined) {
      posts[postIndex].published = published;
    }

    console.log('Post updated successfully:', posts[postIndex]);

    res.json({
      message: 'Post updated successfully',
      post: posts[postIndex]
    });

  } catch (error) {
    console.log('updatePost error:', error.message);
    res.status(500).json({
      error: 'Failed to update post',
      message: error.message
    });
  }
};

// Delete post
const deletePost = (req, res) => {
  try {
    console.log('deletePost function called');
    console.log('Looking for post with ID:', req.params.id);

    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    console.log('Post index found:', postIndex);

    if (postIndex === -1) {
      return res.status(404).json({
        error: 'Post not found',
        message: `No post exists with ID ${postId}`
      });
    }

    const deletedPost = posts.splice(postIndex, 1)[0];

    console.log('Post deleted:', deletedPost);
    console.log('Remaining posts:', posts.length);

    res.json({
      message: 'Post deleted successfully',
      post: deletedPost,
      remainingPosts: posts.length
    });

  } catch (error) {
    console.log('deletePost error:', error.message);
    res.status(500).json({
      error: 'Failed to delete post',
      message: error.message
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};