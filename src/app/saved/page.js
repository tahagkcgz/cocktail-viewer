'use client';

import { useEffect, useState } from 'react';
import RemoveFromSavedButton from '../../components/removeFromSavedButton';

export default function SavedPage() {
  const [savedCocktails, setSavedCocktails] = useState([]);

  useEffect(() => {
    const fetchSavedCocktails = async () => {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('savedCocktails') : null;
      setSavedCocktails(saved ? JSON.parse(saved) : []);
    };
    fetchSavedCocktails();
  }, []);

  const updateSavedCocktails = (newSavedCocktails) => {
    setSavedCocktails(newSavedCocktails);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Saved Cocktails</h1>
      {savedCocktails.length > 0 ? (
        savedCocktails.map((cocktail, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold">{cocktail.strDrink}</h2>
            <RemoveFromSavedButton index={index} updateSavedCocktails={updateSavedCocktails} />
          </div>
        ))
      ) : (
        <p>No saved cocktails found.</p>
      )}
    </div>
  );
}
