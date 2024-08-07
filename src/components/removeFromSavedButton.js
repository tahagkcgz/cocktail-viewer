'use client';

import { useState } from 'react';
import ConfirmationModal from './confirmationModal';

const RemoveFromSavedButton = ({ index, updateSavedCocktails }) => {
  const [showModal, setShowModal] = useState(false);

  const confirmRemove = () => {
    setShowModal(true);
  };

  const handleRemove = () => {
    const savedCocktails = JSON.parse(localStorage.getItem('savedCocktails')) || [];
    savedCocktails.splice(index, 1);
    localStorage.setItem('savedCocktails', JSON.stringify(savedCocktails));
    updateSavedCocktails(savedCocktails);
    setShowModal(false);
  };

  return (
    <>
      <button onClick={confirmRemove} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Remove
      </button>
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to remove this cocktail from saved items?"
          onConfirm={handleRemove}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default RemoveFromSavedButton;
