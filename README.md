# GadgetHaven

GadgetHaven is an e-commerce platform designed for gadget enthusiasts. It features a modern and responsive UI based on a detailed Figma design, providing functionalities such as product filtering, a shopping cart, and a wishlist system. The website ensures a seamless user experience with persistent data storage and smooth navigation across all pages.

## Live Website Link
[ph-a-8.surge.sh](#)

## Requirement Document Link
[file:///C:/Projects/React/B10-A8-gadget-heaven/Batch-10_Assignment-08.pdf](#)

---

## Features

1. **Structured Navigation**:
   - Includes Logo, Brand Name, Dashboard, and Stats.
   - Active route indication in the Navbar.

2. **Dynamic Home Page**:
   - Attractive banner with a button linking to the Dashboard.
   - Categories sidebar displaying gadget types.
   - Product cards with gadget details, linked to their respective detail pages.

3. **Product Details Page**:
   - Displays all details of a selected product.
   - Add to Cart (🛒) and Wishlist (❤) functionalities.
   - Prevents duplicate additions to the wishlist.

4. **Dashboard Page**:
   - Tabs for viewing Cart and Wishlist.
   - Displays total cart price with sorting by price functionality.

5. **Reload and Error Handling**:
   - Persistent data using Context API and LocalStorage.
   - Custom 404 page.

---

## Project Highlights

### React Fundamentals Used
- **Component-Based Architecture**: Each UI section is built as a reusable component.
- **Context API**: Used for managing the cart and wishlist state globally.
- **useState and useEffect Hooks**: For managing state and side effects.
- **useLocation Hook**: Dynamically changes the background color based on the route.
- **useNavigate Hook**: Smooth navigation and modal-based actions.
- **React Router**: For managing routes and nested layouts.

### Data Handling
- **State Management**: Context API for global state sharing.

### Challenge Tasks
- Implemented dynamic background color using `useLocation` hook.
- Added a "Purchase" button with a modal confirmation. The button:
  - Congratulates the user upon successful purchase.
  - Empties the cart and resets the total price.
  - Redirects to the Home page after closing the modal using `useNavigate` hook.
---

## Technologies Used
- **React**: For building the user interface.
- **React Router**: For routing and navigation.
- **Context API**: For state management.
- **CSS**: For styling.

---

### Features of This Website
1. Responsive design for mobile and desktop.
2. Persistent state management using Context API and LocalStorage.
3. Dynamic sorting and filtering functionalities.
4. Interactive toast notifications for user actions.
5. Smooth navigation and error handling.

---














