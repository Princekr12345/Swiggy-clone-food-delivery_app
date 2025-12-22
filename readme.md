# 🍽️ Swiggy Clone - Food Delivery App

A modern, responsive food delivery application built with React, Redux Toolkit, and Tailwind CSS. This app replicates the core functionality of Swiggy, including restaurant browsing, menu viewing, food ordering, and cart management.

## ✨ Features

### 🏠 Home Page
- *Hero Section*: Eye-catching header with search functionality
- *Service Options*: 
  - Food delivery
  - Grocery delivery (Instamart)
  - Dine-out options
  - Genie services
- *Location-based Search*: Search for restaurants and food items by location

### 🍕 Restaurant Browsing
- *Restaurant Listings*: Browse restaurants in Delhi area
- *Real-time Data*: Fetches live restaurant data from Swiggy API
- *Shimmer Loading*: Smooth loading animations while data loads
- *Responsive Grid*: Beautiful card-based layout for restaurant information

### 🍽️ Restaurant Menu
- *Complete Menu*: View full restaurant menu with categories
- *Food Filtering*: Filter by vegetarian/non-vegetarian options
- *Search Functionality*: Search for specific dishes within a restaurant
- *Dynamic Routing*: URL-based navigation with restaurant IDs

### 🛒 Shopping Cart
- *Redux State Management*: Centralized cart state using Redux Toolkit
- *Add/Remove Items*: Add food items to cart with quantity management
- *Increment/Decrement*: Adjust quantities of items in cart
- *Persistent Cart*: Cart state maintained across page navigation

### 💳 Checkout System
- *Order Summary*: View all items in cart
- *Quantity Display*: Shows item quantities and names
- *Checkout Flow*: Streamlined checkout process

## 🛠️ Tech Stack

- *Frontend Framework*: React 19.0.0
- *State Management*: Redux Toolkit + React Redux
- *Routing*: React Router v7
- *Styling*: Tailwind CSS v4
- *Build Tool*: Parcel v2
- *Icons*: Lucide React
- *HTTP Client*: Fetch API

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd Day20
   

2. *Install dependencies*
   bash
   npm install
   

3. *Start the development server*
   bash
   npm start
   

4. *Open your browser*
   Navigate to http://localhost:1234 (Parcel default port)

### Build for Production

bash
npm run build


## 📁 Project Structure


Day20/
├── src/
│   ├── Components/
│   │   ├── Header.js          # Main navigation header
│   │   ├── Home.js            # Home page component
│   │   ├── Restaurant.js      # Restaurant listing page
│   │   ├── RestaurantMenu.js  # Individual restaurant menu
│   │   ├── RestCard.js        # Restaurant card component
│   │   ├── MenuCard.js        # Menu item card component
│   │   ├── FoodCard.js        # Food item display
│   │   ├── GroceryCard.js     # Grocery item display
│   │   ├── DineCard.js        # Dine-out option display
│   │   ├── SearchFood.js      # Food search functionality
│   │   ├── Checkout.js        # Cart checkout page
│   │   ├── Shimmer.js         # Loading skeleton component
│   │   └── SecondaryHome.js   # Secondary layout wrapper
│   ├── Stored/
│   │   ├── stores.js          # Redux store configuration
│   │   └── CartSlicer.js      # Cart state management
│   ├── Utils/
│   │   ├── DineData.js        # Dine-out data
│   │   ├── FoodData.js        # Food-related data
│   │   └── Grocery.js         # Grocery data
│   ├── App.js                 # Main application component
│   ├── index.css              # Global styles
│   └── index.html             # HTML template
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation


## 🔧 Configuration

### API Configuration
The app uses Swiggy's public API endpoints with a CORS proxy server:
- *Base URL*: https://www.swiggy.com/dapi/
- *CORS Proxy*: https://cors-anywhere.herokuapp.com/
- *Default Location*: Delhi, India (coordinates: 28.7040592, 77.10249019999999)

### Redux Store Structure
javascript
{
  cartslice: {
    items: [],      // Array of cart items
    count: 0        // Total item count
  }
}


## 🎨 UI/UX Features

- *Responsive Design*: Mobile-first approach with Tailwind CSS
- *Modern Interface*: Clean, intuitive user interface
- *Loading States*: Smooth shimmer effects for better UX
- *Interactive Elements*: Hover effects and smooth transitions
- *Color Scheme*: Swiggy's signature orange (#ff5200) theme

## 📱 Responsive Features

- *Mobile Optimized*: Touch-friendly interface
- *Flexible Layouts*: Adaptive grid systems
- *Responsive Typography*: Scalable text sizes
- *Mobile Navigation*: Optimized for small screens

## 🔄 State Management

### Cart Actions
- addItems: Add new items to cart
- IncrementItems: Increase item quantity
- DecrementItems: Decrease item quantity or remove if quantity = 1

### Cart Item Structure
javascript
{
  id: number,        // Unique item identifier
  name: string,      // Item name
  quantity: number   // Item quantity
}


## 🚧 Development Notes

- *Proxy Server*: Currently using CORS-anywhere for development
- *API Limits*: Be mindful of Swiggy API rate limits
- *Error Handling*: Basic error handling implemented
- *Performance*: Optimized with React best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- *Swiggy*: For the API endpoints and design inspiration
- *React Team*: For the amazing framework
- *Tailwind CSS*: For the utility-first CSS framework
- *Redux Toolkit*: For simplified state management

## 📞 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

*Note*: This is a clone project for educational purposes. Please respect Swiggy's terms of service and API usage policies.
# 🍽️ Swiggy Clone - Food Delivery App

A modern, responsive food delivery application built with React, Redux Toolkit, and Tailwind CSS. This app replicates the core functionality of Swiggy, including restaurant browsing, menu viewing, food ordering, and cart management.

## ✨ Features

### 🏠 Home Page
- *Hero Section*: Eye-catching header with search functionality
- *Service Options*: 
  - Food delivery
  - Grocery delivery (Instamart)
  - Dine-out options
  - Genie services
- *Location-based Search*: Search for restaurants and food items by location

### 🍕 Restaurant Browsing
- *Restaurant Listings*: Browse restaurants in Delhi area
- *Real-time Data*: Fetches live restaurant data from Swiggy API
- *Shimmer Loading*: Smooth loading animations while data loads
- *Responsive Grid*: Beautiful card-based layout for restaurant information

### 🍽️ Restaurant Menu
- *Complete Menu*: View full restaurant menu with categories
- *Food Filtering*: Filter by vegetarian/non-vegetarian options
- *Search Functionality*: Search for specific dishes within a restaurant
- *Dynamic Routing*: URL-based navigation with restaurant IDs

### 🛒 Shopping Cart
- *Redux State Management*: Centralized cart state using Redux Toolkit
- *Add/Remove Items*: Add food items to cart with quantity management
- *Increment/Decrement*: Adjust quantities of items in cart
- *Persistent Cart*: Cart state maintained across page navigation

### 💳 Checkout System
- *Order Summary*: View all items in cart
- *Quantity Display*: Shows item quantities and names
- *Checkout Flow*: Streamlined checkout process

## 🛠️ Tech Stack

- *Frontend Framework*: React 19.0.0
- *State Management*: Redux Toolkit + React Redux
- *Routing*: React Router v7
- *Styling*: Tailwind CSS v4
- *Build Tool*: Parcel v2
- *Icons*: Lucide React
- *HTTP Client*: Fetch API

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd Day20
   

2. *Install dependencies*
   bash
   npm install
   

3. *Start the development server*
   bash
   npm start
   

4. *Open your browser*
   Navigate to http://localhost:1234 (Parcel default port)

### Build for Production

bash
npm run build


## 📁 Project Structure


Day20/
├── src/
│   ├── Components/
│   │   ├── Header.js          # Main navigation header
│   │   ├── Home.js            # Home page component
│   │   ├── Restaurant.js      # Restaurant listing page
│   │   ├── RestaurantMenu.js  # Individual restaurant menu
│   │   ├── RestCard.js        # Restaurant card component
│   │   ├── MenuCard.js        # Menu item card component
│   │   ├── FoodCard.js        # Food item display
│   │   ├── GroceryCard.js     # Grocery item display
│   │   ├── DineCard.js        # Dine-out option display
│   │   ├── SearchFood.js      # Food search functionality
│   │   ├── Checkout.js        # Cart checkout page
│   │   ├── Shimmer.js         # Loading skeleton component
│   │   └── SecondaryHome.js   # Secondary layout wrapper
│   ├── Stored/
│   │   ├── stores.js          # Redux store configuration
│   │   └── CartSlicer.js      # Cart state management
│   ├── Utils/
│   │   ├── DineData.js        # Dine-out data
│   │   ├── FoodData.js        # Food-related data
│   │   └── Grocery.js         # Grocery data
│   ├── App.js                 # Main application component
│   ├── index.css              # Global styles
│   └── index.html             # HTML template
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation


## 🔧 Configuration

### API Configuration
The app uses Swiggy's public API endpoints with a CORS proxy server:
- *Base URL*: https://www.swiggy.com/dapi/
- *CORS Proxy*: https://cors-anywhere.herokuapp.com/
- *Default Location*: Delhi, India (coordinates: 28.7040592, 77.10249019999999)

### Redux Store Structure
javascript
{
  cartslice: {
    items: [],      // Array of cart items
    count: 0        // Total item count
  }
}


## 🎨 UI/UX Features

- *Responsive Design*: Mobile-first approach with Tailwind CSS
- *Modern Interface*: Clean, intuitive user interface
- *Loading States*: Smooth shimmer effects for better UX
- *Interactive Elements*: Hover effects and smooth transitions
- *Color Scheme*: Swiggy's signature orange (#ff5200) theme

## 📱 Responsive Features

- *Mobile Optimized*: Touch-friendly interface
- *Flexible Layouts*: Adaptive grid systems
- *Responsive Typography*: Scalable text sizes
- *Mobile Navigation*: Optimized for small screens

## 🔄 State Management

### Cart Actions
- addItems: Add new items to cart
- IncrementItems: Increase item quantity
- DecrementItems: Decrease item quantity or remove if quantity = 1

### Cart Item Structure
javascript
{
  id: number,        // Unique item identifier
  name: string,      // Item name
  quantity: number   // Item quantity
}


## 🚧 Development Notes

- *Proxy Server*: Currently using CORS-anywhere for development
- *API Limits*: Be mindful of Swiggy API rate limits
- *Error Handling*: Basic error handling implemented
- *Performance*: Optimized with React best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- *Swiggy*: For the API endpoints and design inspiration
- *React Team*: For the amazing framework
- *Tailwind CSS*: For the utility-first CSS framework
- *Redux Toolkit*: For simplified state management

## 📞 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

*Note*: This is a clone project for educational purposes. Please respect Swiggy's terms of service and API usage policies.