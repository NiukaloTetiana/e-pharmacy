# E-PHARMACY

"E-Pharmacy" is a streamlined and accessible web application aimed at helping users easily search for, compare, and purchase medicines from pharmacies nearby. With user authentication, dynamic search, and responsive design, E-Pharmacy provides a smooth experience for users to locate and order essential medicines at their convenience.

### Pages

**1. Authentication Pages: RegisterPage & LoginPage**

**RegisterPage**

- Includes a registration form with validation. Upon successful registration, users are automatically logged in and redirected to a private page.
- A navigation link is provided for existing users to log in.

**LoginPage**

- Includes a login form with validation. Successful login redirects users to the main page.
- A navigation link is provided for new users to register.

This structure ensures a seamless user experience across both pages, with consistent branding and functionality.

![RegisterPage & LoginPage](./public/1.jpg)

**2. Home**

The HomePage includes the following sections:

Main Banner: Features a primary promo message, "Your medication delivered," with a subtext, "Say goodbye to all your healthcare worries with us."
Promo Banners: Three promotional banners:
Huge Sale: 70% discount with a "Shop now" button.
Secure Delivery: 100% guarantee with a "Read more" button.
Off: 35% discount with a "Shop now" button.
Medicine Stores: Displays six nearby stores with details like name, address, phone number, and open/closed status. Clicking on a store redirects users to the Shop page for more information.
Add Pharmacy Promo: Encourages pharmacies to join the platform, showcasing features like managing orders, creating profiles, and increasing sales.
Reviews Section: Showcases customer reviews, each including a user photo, name, and testimonial, fetched from the backend API.

<!--
- Welcomes users with a site title, company slogan, and a call-to-action button redirecting to the "Events" page. -->

![Home Page](./public/2.png)

**3. Medicine store page**

Features a list of pharmacies or stores where users can browse and select their preferred locations.

- Each store card displays key information, including the store name, address, contact number, and current status (open or closed).
- Users can also see ratings for each store and click a "Visit Store" button to view more details.

![Medicine store page](./public/3.png)

**4. Medicine page**

Provides an intuitive interface for users to search, filter, and browse available medications.

- The search and filter panel includes a "Product category" filter for selecting specific medication categories, a search field for finding medications by name, and a reset button to clear all filters and display the full product list again.
- Each card includes an image of the product, the medicine name and the price.
- "Add to Cart" button allows users to add the product to their shopping cart. If the user is not logged in, a modal prompts registration or login; if logged in, the product is added to the cart.
- A link "Details" redirects users to the Product page where they can view comprehensive information about the selected medication.
- Pagination system located at the bottom of the page, enabling users to navigate between different pages of the product catalog.

![Medicine page](./public/4.png)

**5. Product page**

![Registration](./public/3.png)

**Description**:

<!--
- Provides a user-friendly form for event registration.
- Form validation ensures accurate and complete user input. -->

![Registration](./public/3.png)

**Reviews**:

<!-- - Allows users to view a list of registered participants for each event.
- Enables search by full name or email for easy navigation.
- Presents bar charts showing registrations per last week, offering insights into event popularity trends. -->

![Participants](./public/4.png)

**6. Cart page**

- Private page accessible to authenticated users to view and manage selected products.
- Users can enter shipping information including name, email, phone number, and address, choose a payment method include "Cash On Delivery" and "Bank".
- The total order amount is displayed, with a "Place order" button to finalize the purchase.
- In products list displays the product name, unit price, quantity with an option to edit, and a "Remove" button to delete the item.
- If the cart is empty, users are prompted to visit the Medicine page to add products.

![Cart page](./public/6.jpg)

## Features

- **User Authentication**: Secure login, registration, and logout functionalities powered by Node.js.
- **Adaptive Design**: Fluid layout for breakpoints at 320px, 375px, 768px, and 1440px. Ensures compatibility and usability across various devices.
- **Modal Dialogs**: Enhanced interaction through modal dialogs for login, registration and logaut.
- **Form Validation**: Implemented using React Hook Form and Yup for client-side validation.

## About the Project

[**Layout**](<https://www.figma.com/file/qrKzOBVqM6zOZNFkTOpEO0/E-PHARMACY-(clients)?type=design&node-id=0-1&mode=design&t=O9kTuPJAS2bjEuwM-0>) |
[**Technical Task**](https://docs.google.com/spreadsheets/d/1TdZTkbTSEcscopFAAH1XiiAbkP8IOawIugpvaG9xnuw/edit?gid=0#gid=0)

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Deployment

- This project is deployed on Vercel. Check it out: [**E-Pharmacy**](https://e-pharmacy-rust.vercel.app/)
- Here you can see back-end part of website: [**E-Pharmacy backend**](https://github.com/NiukaloTetiana/e-pharmacy-backend)

Discover and order medicines effortlessly with "E-Pharmacy", your trusted partner in healthcare accessibility.
