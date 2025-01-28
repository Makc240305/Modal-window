# Modal Component with React, Vite, and SCSS

This project demonstrates a simple modal component built using React, Vite, and SCSS. The modal appears when a button is clicked and can be closed by clicking an "X" icon inside the modal.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast and modern build tool for React applications.
*   **SCSS:** A CSS preprocessor that extends CSS with variables, nested rules, and more.

## Features

*   Simple modal window with smooth animations.
*   Button to trigger the modal window.
*   Responsive design, styled using SCSS.
*   Smooth transition for modal appearance and disappearance.
*   Close button ("X") to dismiss the modal.

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/Makc240305/Modal-window.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd modal-react-vite-scss
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

The app should now be running on `http://localhost:3000`.

## How It Works

The modal is controlled using React's state (`useState`).

*   Clicking the trigger button sets the modal state to visible.
*   Clicking the close button or anywhere outside the modal triggers a function to hide the modal.
