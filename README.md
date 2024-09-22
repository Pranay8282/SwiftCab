# Swift Cab Project

Swift Cab is a cab booking application that provides a user-friendly platform for booking transportation services. This project uses **React.js** for the frontend and **Django** for the backend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Project](#running-the-project)

---

## Features

- User authentication for riders and drivers
- Driver signup form with vehicle information
- Cab booking functionality
- City and state dropdowns for location selection
- Google login integration

---

## Technologies

### Frontend:
- React.js
- CSS for styling

### Backend:
- Django (Python)
- Django Rest Framework (DRF)

---

## Setup Instructions

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (package managers for Node.js)
- **Python** (version 3.7 or higher)
- **Django** and **Django Rest Framework**

---

## Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install the required Node.js modules:**

    ```bash
    npm install
    ```

    Alternatively, if you're using yarn:

    ```bash
    yarn install
    ```

3. **Environment Variables:**

    Create a `.env` file in the `frontend` directory to store the environment variables like Google OAuth credentials.

4. **Modules to be installed:**

    - `axios`: For making API calls to the Django backend.

    ```bash
    npm install axios
    ```

    - `react-router-dom`: For handling routing in React.

    ```bash
    npm install react-router-dom
    ```

    - `@mui/material`: For Material UI components (optional if you're using Material UI).

    ```bash
    npm install @mui/material
    ```

---

## Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Create a virtual environment:**

    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment:**

    - On macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

    - On Windows:

      ```bash
      venv\Scripts\activate
      ```

4. **Install the required Python modules:**

    ```bash
    pip install -r requirements.txt
    ```

    Make sure that `Django`, `djangorestframework`, and any other required dependencies are included in `requirements.txt`.

5. **Create a `.env` file in the backend directory** and store important credentials and secret keys.

---

## Running the Project

### Start the Backend:

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Run migrations to set up the database:**

    ```bash
    python manage.py migrate
    ```

3. **Start the Django development server:**

    ```bash
    python manage.py runserver
    ```

    The backend server will be running on `http://127.0.0.1:8000/`.

### Start the Frontend:

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Start the React development server:**

    ```bash
    npm start
    ```

    The frontend server will be running on `http://localhost:3000/`.

---

## Additional Commands

### For Backend

- **Create a superuser for accessing the Django admin:**

    ```bash
    python manage.py createsuperuser
    ```

- **Install any new Python packages:**

    ```bash
    pip install <package_name>
    ```

    Then, update the `requirements.txt` file:

    ```bash
    pip freeze > requirements.txt
    ```

### For Frontend

- **Build the production-ready frontend files:**

    ```bash
    npm run build
    ```

---

## Troubleshooting

- If you encounter any issues during setup, try deleting the `node_modules` folder in the `frontend` and reinstalling the modules:

    ```bash
    rm -rf node_modules
    npm install
    ```

- Ensure that your backend API URLs are correctly set up in your frontend.

---

## License

This project is licensed under the MIT License. Feel free to modify and use it as per your requirements.
