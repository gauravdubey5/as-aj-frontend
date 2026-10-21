# Frontend

This directory contains the browser-facing part of the application:

- `templates/` holds the Jinja page templates.
- `static/` holds CSS and JavaScript.

The templates currently require server-rendered booking, admin, Panchang, and CSRF data, so they are served by the Flask backend rather than deployed as a standalone static site. The backend explicitly loads this directory; frontend-only changes can be made here without changing Python application code.
