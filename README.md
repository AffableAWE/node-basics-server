README

Node.js Basic HTTP Server Examples 🚀

Welcome to a collection of simple, beginner-friendly Node.js HTTP server examples! This repository demonstrates how to set up a basic server in Node.js that can handle a variety of response types. Whether it’s JSON, HTML, CSV, or basic routing, these examples cover the essentials.

Project Highlights 🌟

| File                     | Description                                                     | Example Use Case                                          |
|--------------------------|-----------------------------------------------------------------|-----------------------------------------------------------|
| **hello.js**             | A simple HTTP server that responds with plain text: `"My First Server"`. | Understand the basics of setting up a Node.js server.     |
| **json.js**              | Responds with JSON data: `{ "message": "This is a JSON response" }`. | Ideal for learning the basics of building APIs.           |
| **csv.js**               | Returns a CSV file as a downloadable attachment.               | Demonstrates how to serve downloadable content.           |
| **html.js**              | Serves basic HTML content directly from the server.            | Useful for serving simple inline HTML responses.          |
| **htmlFile_inefficient.js** | Loads an HTML file (`index.html`) from disk on every request. | Basic static file serving, but less efficient for high-traffic scenarios. |
| **htmlFile_efficient.js**   | Caches `index.html` in memory to serve faster responses.      | Optimized for performance by reducing file I/O on each request. |
| **routes.js**            | Implements basic routing with different endpoints (`/books`, `/authors`, etc.). | Introduces routing to handle multiple endpoints in a server. |

How to Use 🚴

	1.	Clone this repository: git clone <repo-url>
	2.	Run Each File: Use node <filename.js> to start each server.
	3.	Test in Browser: Open http://localhost:8000 or use a tool like curl to see responses.

Why These Examples? 🤔

Each example is a building block for creating more complex back-end applications. These files illustrate how to:

	•	Set up a Node.js server
	•	Handle different response types (text, JSON, files)
	•	Serve HTML efficiently
	•	Implement basic routing

Inspiration

Learning Node.js basics can open doors to building full-fledged applications, from REST APIs to simple web servers. These examples aim to make those first steps clear and accessible.
