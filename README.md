# Legends_Fast_Pizza_App

Welcome to the Legends_Fast_Pizza_App! This is a simple application where users can order pizzas from a dynamically loaded menu, built using React.

## Description

This application allows users to select multiple pizzas from a menu, add them to a cart, and place orders without needing to create an account. Users only need to provide basic information, and they can even prioritize their order for faster delivery. It's a fast and easy way to order your favorite pizza!

## Features

- Dynamically loaded pizza menu from an API
- Add multiple pizzas to the cart
- Simple order process with just name, phone number, and address
- Option to mark an order as "priority" for an additional 20% of the total price
- Unique order ID generated and displayed for future tracking
- Ability to mark the order as "priority" even after it has been placed
- Optional GPS location input for easier delivery

## Usage

To use the Pizza Ordering App, follow these steps:

1. **View the App Online**: You can access the app through the following link: [Legends_Fast_Pizza_App
   ](https://legends-fast-pizza-app.vercel.app/).
2. **Download the Source Code**: If you want to explore the source code or run the app locally, you can download it from [this repository](https://github.com/legend4tech/Fast_Pizza_App).
3. **Installation**: After downloading the source code, navigate to the project directory and run `npm install` to install the necessary dependencies.
4. **Run the App**: Once the dependencies are installed, run `npm run dev` to start the development server.
5. **Start Ordering!**: Open your browser and go to `localhost:5173` to start selecting pizzas and placing orders.

## How It Works

1. **Menu Loading**: The pizza menu is loaded from an external API, allowing flexibility in menu changes.
2. **Ordering**: Users can add pizzas to the cart and place an order by providing their name, phone number, and address. Optionally, users can also provide their GPS location.
3. **Priority Orders**: Users can mark their order as "priority" during checkout or after the order has been placed, which will add 20% to the total price.
4. **Order Confirmation**: Each order generates a unique ID for tracking purposes.

## API Endpoints

1. **Get Menu**: The pizza menu is fetched from the API (e.g., `GET /https://react-fast-pizza-api.onrender.com/api/menu`).
2. **Place Order**: Orders are placed by sending a `POST` request to the API with user information and selected pizzas (e.g., `POST /https://react-fast-pizza-api.onrender.com/api/order`).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## CopyRight

CopyRight &copy; [Legend](https://github.com/legend4tech)
