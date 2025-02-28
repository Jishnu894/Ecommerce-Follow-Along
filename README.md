# E-Commerce Application: Backend Web Development Project

### **Milestone 1: Project Overview**

**Brief Overview:**
This project involves developing a fully functional e-commerce platform utilizing the MERN stack — MongoDB, Express, React, and Node.js. The application will be built using React's Create React App (CRA) for the front-end, MongoDB as the database solution, and Node.js with Express to handle the back-end server operations.

The project will be split into two main areas: **Frontend** (client-side) and **Backend** (server-side) development. 

- **Frontend:** We will be creating various pages for user interaction, including:
  - **Login Page**
  - **Sign Up Page**
  - **Forgot Password Page**
  - **Home Page**
  - **Product Display Page**
  - **Cart Page**
  - **Address Page**
  - **Payment Page**
  - **Order Confirmation Page**
  - **Order History Page**
  - **Help Page**
  - **Error Page**
  - Detailed Product Pages

- **Backend:** The server will interact with MongoDB, a NoSQL database, to handle data management. We will be using the Mongoose library to interact with the database and define schemas for data consistency. To manage communication between the front-end and the back-end, we will implement APIs that allow for CRUD operations (Create, Read, Update, Delete) using HTTP methods like `POST`, `GET`, `PUT`, `PATCH`, and `DELETE`.

We’ll integrate **bcrypt** for password hashing to ensure user data security, and the entire project will follow best practices for backend structure, focusing on scalability and maintainability.

---

### **Milestone 2: Frontend Development (Login Page)**

For this milestone, we successfully created the **Login Page** using React's Create React App (CRA). To improve the user interface and design, we will be updating the layout with **Tailwind CSS** for styling and incorporate **React-Icons** for intuitive icons. Tailwind CSS will help us streamline the design process with its utility-first classes, making the UI responsive and visually appealing.

The Login Page will include fields for the user's email and password, and will handle form validation, state management, and error handling for incorrect login attempts. React Icons will be utilized for visual appeal and ease of use, enhancing the overall experience.

---

### **Milestone 3: Backend Structure and Initial Setup**

At this stage, we’ve laid the foundation for the backend by setting up the directory structure for the project. The backend is structured as follows:

- **`src/` Directory:** Contains all source code files for the server.
  - **`config/`**: Stores environment configuration files like `.env` for MongoDB URL and the server port.
  - **`controllers/`**: Defines functions to handle incoming requests for various routes.
  - **`database/`**: Contains the MongoDB connection logic in `db.js`.
  - **`middleware/`**: Houses custom middleware functions such as `error.js` for centralized error handling.
  - **`model/`**: Contains Mongoose models for the database schema.
  - **`routers/`**: Defines route handlers for different API endpoints.
  - **`utils/`**: Stores utility functions, including the `ErrorHandler.js` to manage application-level errors.

In the **`index.js`** file, we imported Express, initialized the app, and set up basic routing and server listening. We can now handle HTTP requests through `app.get` and set the server to listen for incoming requests on the specified port.

### **Milestone 4: Backend Structure and Initial Setup**
creating user model, user controller and Multer support


 ## Milestone 6
: Backend Structure and Initial Setup** Password Encryption and User Data Storage

Password Hashing:

Implement bcrypt to hash the user's password during the signup process. Ensure that the hashed password is stored in the database instead of the plaintext version to enhance security. User Data Storage:

Save all relevant user information (e.g., name, email, etc.) in the database. Maintain the integrity and confidentiality of the password by ensuring it remains encrypted throughout the process.

--- 

## Milestone 7
Create Login Endpoint:

Accept user credentials (email/username and password). Retrieve the corresponding user from the database. Validate Password:

Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.

## Milestone 8
In this milestone we created two components called Home.jsx and productcard.jsx. product card.jsx is the template used in home.jsx to map out all the products and display them. We also added routes to the home.jsx to display it when the page loads. Based on the number of products the products are mapped and displayed.



## Milestone 9: Create Product Form

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to create a form that collects all the details of a product.
- Understand how to take multiple images as input and handle them properly.

### Why Create a Product Form?

In this milestone, we will create a form that allows users to input all necessary product details. These details will be stored in a database and displayed on the product homepage created in the previous milestone.

### Steps for Milestone 9 📝

1. **Create the Product Form**: 
   - Design and implement a form that collects all product-related information.
   - Ensure the form is user-friendly and validates the input fields.

2. **Handle Multiple Product Images**:
   - Enable the form to accept multiple images as input.
   - Implement proper handling and storage of these images.

This milestone is a crucial step in building a functional product listing feature. Good luck! 🚀

---

## Milestone 10: Product Schema & API Endpoint

### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write a product schema.
- Learn how to create an endpoint to validate and store product details in MongoDB.


### Product Schema

- Define the structure of product data (e.g., name, description, price, image URL) using Mongoose.
- Ensure each field has proper validation (e.g., required fields, correct data types).

### Endpoint Creation

- Build a **POST** endpoint to receive product data.
- Validate and save the product details to MongoDB.

### Why Validation?

Validation ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

This milestone is essential for backend development and securing data consistency in your project. Keep going! 🚀

# Milestone 11: Fetch & Display Product Data

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint that extracts and sends data from MongoDB.
- Understand how to receive data on the frontend.
- Dynamically display data using the product card created earlier.

## Steps for Milestone 11 📝

1. **Write an API Endpoint**:
   - Create an endpoint that retrieves all product data from MongoDB and sends it to the frontend.

2. **Fetch Data in Frontend**:
   - Write a function in the frontend to fetch all product data from the backend.

3. **Display Data Dynamically**:
   - Pass the fetched data to the product card component to display it dynamically.

This milestone is crucial in connecting the backend and frontend, making your application fully functional. Keep going! 🚀

## Milestone 12: Filter Products by User Email

Learning Goals 🎯

By the end of this milestone, you will:

Learn how to write an endpoint that will send data by filtering with a user's email and fetch relevant data from MongoDB.

Understand how to receive and display filtered data dynamically using the ProductCard component.

## Steps for Milestone 12 📝

**Write an API Endpoint:**

Create an endpoint that retrieves products associated with a specific user email and sends the data to the frontend.

**Fetch Data in Frontend:**

Implement a function in the frontend to fetch filtered product data.

**Display Data Dynamically:**

Pass the filtered data to the ProductCard component for rendering.

## Milestone 13: Update Existing Product Data

Learning Goals 🎯

By the end of this milestone, you will:

Learn how to write an endpoint that updates existing product data in MongoDB.

Understand how to auto-fill a form with previous product data and provide an option to edit it.

## Steps for Milestone 13 📝

**Write an API Endpoint:**

Create an endpoint that receives new product data and updates the existing data in MongoDB.

**Add Edit Button to Product Card:**

In the frontend, add an edit button to each product card.

**Auto-Fill Form for Editing:**

When the edit button is clicked, send the existing product data to the form, auto-fill it, and allow the user to edit and save the changes.

## Milestone 14: Delete Product by ID

Learning Goals 🎯

By the end of this milestone, you will:

Learn how to write an endpoint that deletes a product with a specific ID from MongoDB.

## Steps for Milestone 14 📝

**Write an API Endpoint:**

Create an endpoint that deletes product data from MongoDB using its unique ID.

**Add Delete Button to Product Card:**

In the frontend, add a delete button to each product card.

**Handle Deletion in Frontend:**

When the delete button is clicked, send the product ID to the server endpoint for deletion.

This milestone enhances the ability to manage product listings by allowing users to remove unwanted products efficiently.



### **Milestone 15: Create and Implement Navbar**

#### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to create a navigation (Nav) component with links to all pages.
- Understand how to make the Navbar responsive for all screen sizes.
- Implement smooth navigation across multiple pages in your application.

#### Steps for Milestone 15 📝

1. **Create the Nav Component**:
   - Design and implement a Nav component that includes links to the following pages:
     - **Home**
     - **My Products**
     - **Add Product**
     - **Cart**

2. **Make the Navbar Responsive**:
   - Use CSS (or a CSS framework like Tailwind CSS) to make the Navbar adapt to various screen sizes, ensuring it works well on mobile, tablet, and desktop views.

3. **Integrate Navbar into All Pages**:
   - Add the Nav component to all relevant pages in your application, ensuring consistent navigation throughout.

4. **Smooth Navigation**:
   - Ensure smooth transitions between pages using React Router for seamless navigation without full page reloads.

This milestone will help you understand how to build a dynamic and responsive navbar, improving user experience by making it easier to navigate through your e-commerce platform.

---


---

### **Milestone 16: Display Individual Product Page with Quantity and Add to Cart**

#### Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to create a new page to display detailed information for each product.
- Understand how to implement a quantity selector and an "Add to Cart" button.

#### Steps for Milestone 16 📝

1. **Create a New Product Page**:
   - Design and implement a new page that displays all the details of a single product, such as the name, description, price, and images.

2. **Add Quantity Selector**:
   - Implement a quantity selector that allows users to choose the number of items they want to add to their cart.

3. **Add "Add to Cart" Button**:
   - Add an "Add to Cart" button that, when clicked, adds the selected quantity of the product to the user's shopping cart.

This milestone is essential for enhancing your e-commerce platform, as it enables users to view individual product details and add items to their cart efficiently.

---

## Milestone 19: Build the Cart Page with Quantity Controls
Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a cart page that displays products using the endpoint built in Milestone 18.
Implement increase (+) and decrease (-) buttons to adjust product quantity.
Write a backend endpoint to handle quantity updates dynamically.

## Steps for Milestone 19 📝
Create the Cart Page (Frontend)

Design and implement a cart page that fetches and displays products added to the cart.
Add Quantity Controls

For each product, add "+" and "−" buttons to increase or decrease the quantity.
Ensure the quantity updates dynamically without requiring a page refresh.
Create Backend Endpoints for Quantity Updates

Write an API endpoint to handle requests for increasing and decreasing product quantity.
Ensure that the quantity cannot go below 1 and updates are reflected in the database.
This milestone is crucial in enhancing the cart functionality, allowing users to manage their orders more effectively. 🚀

---

Milestone 20: Build the User Profile Page with Address Management
Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a backend endpoint that retrieves and sends user data via email.
Build a frontend profile page that displays user information.
Display the profile photo, name, email, and addresses dynamically.
Steps for Milestone 20 📝
Create a Backend Endpoint to Retrieve User Data

Develop an API endpoint that fetches all user details from the database.
Implement functionality to send user data via email if required.
Build the Frontend Profile Page

Design a profile page to display user details.
Display User Information

In one section, show the profile photo, name, and email.
Manage Addresses Dynamically

In another section, list all saved addresses.
If no addresses are found, display "No address found".
Add a button labeled "Add Address" for users to input new addresses.
This milestone helps in creating a user-friendly profile management system, enhancing the overall experience. 🚀

---