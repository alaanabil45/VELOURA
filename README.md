# VELOURA | Organic Skincare E-Commerce Website

VELOURA is a modern, responsive e-commerce web project designed to offer a smooth shopping experience for organic skincare products. It features user registration, login, a dynamic shopping cart, and a clean, accessible interface.

---

## 🔗 Live Demo

> _[[My Project Demo](https://drive.google.com/file/d/1FpfVRWS7UuMHDeMaXukSkblth-fgS07R/view?usp=sharing)]_

---

## 📦 How to Run Locally

1. Clone this repository:
   ```bash
    https://alaanabil45.github.io/VELOURA/

---

## ✅ Features Overview

### 🔐 Authentication

- **Firebase Authentication** (Email & Password)
- Stores username in `localStorage` after login.
- Login/logout menu dynamically updates based on session status.

### 🛍️ Shopping Cart

- Products are added to the cart and stored in `localStorage`.
- Quantity increase/decrease buttons.
- Total price calculation.
- Remove item functionality.
- Toast notification system (ready for integration).

### 🧾 Checkout Page

- (Placeholder) A page redirect prepared for processing the order.

### 📱 Responsive Design

- Mobile-friendly layout using CSS media queries.
- Flexbox used for clean, responsive item arrangement.

### 📧 Newsletter Subscription

- Static form in the footer for email subscriptions (can be connected to backend service later).

### 🔗 Footer & Navigation

- Includes social media icons (Facebook, Twitter/X, YouTube, LinkedIn).
- Quick links to all pages (Home, Shop, Contact, Blog, About).
- Clean branding and footer layout.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Firebase Authentication**
- **Font Awesome** for icons
- **LocalStorage** for storing cart and session data

---



## 🔍 Folder and Code Highlights
1. cart.html
- Dynamically renders items from localStorage

- Fully functional cart with:

- Increase/Decrease quantity

- Remove button

- Total price calculation

- Toast component for user feedback (hidden by default)

2. login.html & register.html
- Firebase-powered forms

- Stores logged-in username to localStorage for display in header

3. style.css
Styles for:

- Forms

- Buttons (hover effects)

- Cart items

- Footer layout

- Responsive breakpoints

## 🧪 Future Enhancements
- Connect cart and checkout to backend for real orders.

- Add search and filter functionality to products.

- Implement Firebase Firestore or Realtime Database for product data.

- Add user profile page with order history.

- Integrate real newsletter email service (like Mailchimp or EmailJS).

- Add animations or loading indicators for better UX.

- Implement "Clear Cart" button.

## 📄 License
This project is for educational and personal learning purposes.

## 🙌 Acknowledgements
- Firebase (Google)

- Font Awesome

- Wepik (for logo/image)
