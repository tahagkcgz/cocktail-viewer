'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const router = useRouter();
    const handleRoute = (route) => {
        router.push(route);
    };

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
        };

        checkLoginStatus();

        const handleStorageChange = (event) => {
            if (event.key === "loggedIn") {
                checkLoginStatus();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <div className="cursor-pointer" onClick={() => handleRoute("/")}>Home</div>
                </li>
                <li>
                    <div className="cursor-pointer" onClick={() => handleRoute("/search")}>Search</div>
                </li>
                <li>
                    <div className="cursor-pointer" onClick={() => handleRoute("/saved")}>Saved Cocktails</div>
                </li>
                <li>
                    {isLoggedIn ? (
                        <div className="cursor-pointer" onClick={() => handleRoute("/logout")}>Logout</div>
                    ) : (
                        <div className="cursor-pointer" onClick={() => handleRoute("/login")}>Login</div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
