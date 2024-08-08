export async function fetchCocktails(searchTerm) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await response.json();
    return data.drinks || [];
  }
