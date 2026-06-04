// Users Controller - Business logic for blog users

// Sample users data
let users = [
  {
    id: 1,
    name: "Alice Coltrane",
    email: "alice@example.com",
    role: "admin",
    createdAt: new Date("2024-01-10").toISOString(),
  },
  {
    id: 2,
    name: "Brandee Younger",
    email: "brandee@example.com",
    role: "author",
    createdAt: new Date("2024-01-12").toISOString(),
  },
  {
    id: 3,
    name: "Kamasi Washington",
    email: "kamasi@example.com",
    role: "reader",
    createdAt: new Date("2024-01-14").toISOString(),
  },
];

let nextId = 4;

// Get all users
const getAllUsers = (req, res) => {
  try {
    console.log('getAllUsers function called');
    console.log('Current number of users:', users.length);

    res.json({
      users: users,
      count: users.length,
      totalUsers: users.length
    });

    console.log('getAllUsers finished successfully');
  } catch (error) {
    console.log('getAllUsers error:', error.message);
    res.status(500).json({
      error: 'Failed to retrieve users',
      message: error.message
    });
  }
};

// Get user by ID
const getUserById = (req, res) => {
  try {
    console.log('getUserById function called');
    console.log('Looking for user with ID:', req.params.id);

    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    console.log('User found:', user);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: `No user exists with ID ${userId}`
      });
    }

    res.json({
      user: user
    });

    console.log('getUserById finished successfully');
  } catch (error) {
    console.log('getUserById error:', error.message);
    res.status(500).json({
      error: 'Failed to retrieve user',
      message: error.message
    });
  }
};

// Create new user
const createUser = (req, res) => {
  try {
    console.log('createUser function called');
    console.log('Request body received:', req.body);

    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role || 'author';

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Role:', role);

    // Check that required fields exist
    if (!name || !email) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name and email are required'
      });
    }

    // Check name length
    if (name.length < 2) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Name must be at least 2 characters long'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Please provide a valid email address'
      });
    }

    // Check if email already exists
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(400).json({
        error: 'Email already exists',
        message: 'A user with this email address already exists'
      });
    }

    // Validate role
    const validRoles = ['admin', 'author', 'reader'];
    if (!validRoles.includes(role.toLowerCase())) {
      return res.status(400).json({
        error: 'Invalid role',
        message: `Role must be one of: ${validRoles.join(', ')}`
      });
    }

    const newUser = {
      id: nextId,
      name: name,
      email: email,
      role: role.toLowerCase(),
      createdAt: new Date().toISOString()
    };

    nextId = nextId + 1;
    users.push(newUser);

    console.log('New user created:', newUser);
    console.log('Total users now:', users.length);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });

  } catch (error) {
    console.log('createUser error:', error.message);
    res.status(500).json({
      error: 'Failed to create user',
      message: error.message
    });
  }
};

// Update user
const updateUser = (req, res) => {
  try {
    console.log('updateUser function called');
    console.log('Looking for user with ID:', req.params.id);
    console.log('Request body received:', req.body);

    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    console.log('User index found:', userIndex);

    if (userIndex === -1) {
      return res.status(404).json({
        error: 'User not found',
        message: `No user exists with ID ${userId}`
      });
    }

    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;

    // Validate name if it was provided
    if (name !== undefined && name.length < 2) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Name must be at least 2 characters long'
      });
    }

    // Validate email if it was provided
    if (email !== undefined) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: 'Validation error',
          message: 'Please provide a valid email address'
        });
      }

      // Check if email already exists on a different user
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.id !== userId);
      if (existingUser) {
        return res.status(400).json({
          error: 'Email already exists',
          message: 'A user with this email address already exists'
        });
      }
    }

    // Validate role if it was provided
    if (role !== undefined) {
      const validRoles = ['admin', 'author', 'reader'];
      if (!validRoles.includes(role.toLowerCase())) {
        return res.status(400).json({
          error: 'Invalid role',
          message: `Role must be one of: ${validRoles.join(', ')}`
        });
      }
    }

    // Only update fields that were actually provided
    if (name !== undefined) {
      users[userIndex].name = name;
    }
    if (email !== undefined) {
      users[userIndex].email = email;
    }
    if (role !== undefined) {
      users[userIndex].role = role.toLowerCase();
    }

    console.log('User updated successfully:', users[userIndex]);

    res.json({
      message: 'User updated successfully',
      user: users[userIndex]
    });

  } catch (error) {
    console.log('updateUser error:', error.message);
    res.status(500).json({
      error: 'Failed to update user',
      message: error.message
    });
  }
};

// Delete user
const deleteUser = (req, res) => {
  try {
    console.log('deleteUser function called');
    console.log('Looking for user with ID:', req.params.id);

    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    console.log('User index found:', userIndex);

    if (userIndex === -1) {
      return res.status(404).json({
        error: 'User not found',
        message: `No user exists with ID ${userId}`
      });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    console.log('User deleted:', deletedUser);
    console.log('Remaining users:', users.length);

    res.json({
      message: 'User deleted successfully',
      user: deletedUser,
      remainingUsers: users.length
    });

  } catch (error) {
    console.log('deleteUser error:', error.message);
    res.status(500).json({
      error: 'Failed to delete user',
      message: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
