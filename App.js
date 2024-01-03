import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * - Logo
 * - Nav Items (Home, About Us, Cart, etc.)
 * Body
 * - Search
 * - RestaurantContainer
 *      -RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Content
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className= "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="Food logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#ccc"}}>
            <img 
                src="https://media.olivegarden.com/en_us/images/product/classic-chicken-alfredo-dinner-dpv-590x365.jpg" 
                alt="res-logo" 
                className="res-logo" 
            />
            <h3>Olive Garden</h3>
            <h4>Italian, Pasta, American</h4>
            <h4>4.4 stars</h4>
            <h4>34 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className= "app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
