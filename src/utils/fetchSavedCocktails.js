// src/utils/fetchSavedCocktails.js
export async function fetchSavedCocktails() {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('savedCocktails') : null;
    return saved ? JSON.parse(saved) : [];
  }
  