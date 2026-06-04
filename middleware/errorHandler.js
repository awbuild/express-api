// Error Handler Middleware - Centralized error handling

const errorHandler = (err, req, res, next) => {
  console.log("\n=== ERROR OCCURRED ===");
  console.log("Error message:", err.message);
  console.log("Request URL:", req.url);
  console.log("Request method:", req.method);
  console.log("Time:", new Date().toISOString());
  console.log("=====================\n");

  // Default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Send error response
  res.status(statusCode).json({
    error: {
      message: message,
      statusCode: statusCode,
      timestamp: new Date().toISOString(),
    },
  });
};

module.exports = errorHandler;