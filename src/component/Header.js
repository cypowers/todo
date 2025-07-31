import React from "react";
import "./Header.css";

const Header = () => {
    return (
    <div className="Header">
        <h3>오늘은 🎇</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
    );
};
               //Memoization to prevent unnecessary re-renders
export default React.memo(Header);