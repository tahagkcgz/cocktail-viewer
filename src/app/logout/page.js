'use client';

import { useEffect } from "react";

export default function Logout() {
    useEffect(() => {
        localStorage.setItem("loggedIn", 'false');
        window.location.href = "/";
    }, []);

    return (
      <div />
    );
  }
  