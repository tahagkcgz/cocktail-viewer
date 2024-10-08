'use client';

import { useState } from 'react';
import { fetchCocktails } from '../utils/fetchCocktails';
import AddToBasketButton from './addToBasketButton';
import ConfirmationModal from './confirmationModal';

const SearchComponent = ({ initialCocktails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState(initialCocktails);
  const [basket, setBasket] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleSearch = async () => {
    const fetchedCocktails = await fetchCocktails(searchTerm);
    setCocktails(fetchedCocktails);
  };

  const addToBasket = (cocktail) => {
    setBasket((prevBasket) => [...prevBasket, cocktail]);
  };

  const confirmRemoveFromBasket = (index) => {
    setItemToRemove(index);
    setShowModal(true);
  };

  const removeFromBasket = () => {
    setBasket((prevBasket) => prevBasket.filter((_, i) => i !== itemToRemove));
    setShowModal(false);
    setItemToRemove(null);
  };

  const saveToSavedCocktails = () => {
    const savedCocktails = JSON.parse(localStorage.getItem('savedCocktails')) || [];
    const newSavedCocktails = [...savedCocktails, ...basket];
    localStorage.setItem('savedCocktails', JSON.stringify(newSavedCocktails));
    setBasket([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Cocktail Search</h1>
      <div className="flex">
        <div className="w-8/12 px-4 py-2">
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-full my-2 mr-2"
              placeholder="Search for cocktails..."
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 my-2"
            >
              Search
            </button>
          </div>
          <div className="flex flex-wrap" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
            {cocktails.map((cocktail, index) => (
              <div key={index} className="w-1/2 p-4">
                <div className="p-4 bg-gray-100 rounded shadow">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-64 object-cover mb-3" />
                  <h2 className="text-2xl font-bold mb-3">{cocktail.strDrink}</h2>
                  <p className="mb-3">{cocktail.strInstructions}</p>
                  <AddToBasketButton cocktail={cocktail} addToBasket={addToBasket} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/12 px-4 py-2">
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Cocktail Basket</h2>
            {basket.length > 0 ? (
              <div>
                {basket.map((cocktail, index) => (
                  <div key={index} className="mb-4 p-2 border rounded shadow">
                    <h3 className="text-xl">{cocktail.strDrink}</h3>
                    <button
                      onClick={() => confirmRemoveFromBasket(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={saveToSavedCocktails}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4"
                >
                  Save Cocktails
                </button>
              </div>
            ) : (
              <p>No cocktails in the basket.</p>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to remove this cocktail from the basket?"
          onConfirm={removeFromBasket}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default SearchComponent;
