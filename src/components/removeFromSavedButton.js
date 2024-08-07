'use client';

import { useState } from 'react';

const RemoveFromSavedButton = ({ index, updateSavedCocktails }) => {
  const handleRemove = () => {
    const savedCocktails = JSON.parse(localStorage.getItem('savedCocktails')) || [];
    savedCocktails.splice(index, 1);
    localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));
    updateSavedCocktails(savedCocktails);
  };

  return (
    <button onClick={handleRemove} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      Remove
    </button>
  );
};

export default RemoveFromSavedButton;
