'use client';

const AddToBasketButton = ({ cocktail, addToBasket }) => {
  return (
    <button
      onClick={() => addToBasket(cocktail)}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add to Basket
    </button>
  );
};

export default AddToBasketButton;
