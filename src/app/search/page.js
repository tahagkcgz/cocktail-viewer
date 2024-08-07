import SearchComponent from '../../components/searchComponent';
import { fetchCocktails } from '../../utils/fetchCocktails';

export default async function SearchPage() {
  const initialCocktails = await fetchCocktails('');

  return (
    <SearchComponent initialCocktails={initialCocktails} />
  );
}
