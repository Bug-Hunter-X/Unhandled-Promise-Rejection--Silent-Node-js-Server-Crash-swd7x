# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common yet subtle issue in Node.js server development: unexpected server shutdown due to unhandled promise rejections. The server appears to function correctly but silently crashes when an asynchronous operation fails without proper error handling.

## Bug Description

The provided `bug.js` file includes a simple HTTP server. While this example doesn't explicitly include promise rejection handling, it showcases how easily unhandled rejections can cause unexpected server termination without any clear error messages.

## Bug Solution

The `bugSolution.js` demonstrates how to handle promise rejections using `.catch()` to gracefully handle errors, prevent unexpected shutdowns, and provide more informative error logs.