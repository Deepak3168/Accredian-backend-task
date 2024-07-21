# Referral and Earn Backend

This is the backend for the "Referral and Earn" application. It is built using Node.js and Express, with database interactions handled by PostgreSQL. The backend provides APIs for managing and processing referrals.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## Prerequisites

Before running the application, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (v15 or higher)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Deepak3168/Accredian-backend-task.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd Accredian-backend-task
    ```

3. **Install the project dependencies**:

    ```bash
    npm install
    ```

## Configuration

1. **Create a `.env` file** in the root directory of the project.

2. **Add the required environment variables** to the `.env` file. Make sure to include your Google OAuth credentials, database connection details, and other sensitive information. The `.env` file should look something like this:

    ```env
    PORT=5000
    DATABASE_URL=postgresql://username:password@hostname:port/database
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

3. **Ensure that your `.env` file is added to `.gitignore`** to prevent sensitive information from being committed to the repository. Add the following line to your `.gitignore` file:

    ```
    .env
    ```

## Running the Application

To start the development server and view the application:

1. **Run the development server**:

    ```bash
    npm start
    ```

    This command will start the server and listen for requests. By default, it will be accessible at `http://localhost:5000`.

2. **Build for Production**:

    To create a production-ready build of the application, you might need to use a tool like Docker or deploy to a cloud platform that supports Node.js applications.

## Deployment

For deployment, you can use cloud services such as Render, Heroku, or AWS. Follow the deployment instructions specific to your chosen platform. Ensure that environment variables are configured properly in your deployment environment.

## Project Structure

- `src/`: Contains the source code for the backend application.
  - `controllers/`: Handles the business logic for different routes.
  - `models/`: Defines the data models and database interactions.
  - `routes/`: Defines the API endpoints and request handling.
  - `utils/`: Utility functions and middleware.
  - `index.js`: Entry point for the Node.js application.
  
