'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    }, []);

    return (
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={isLoggedIn ? "/search" : "/login"}>Search</Link>
                </li>
                <li>
                    <Link href={isLoggedIn ? "/saved" : "/login"}>Saved Cocktails</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link href="/logout">Logout</Link>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
