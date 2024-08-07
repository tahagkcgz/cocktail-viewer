let savedCocktails = []; // This simulates an in-memory store

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(savedCocktails);
  } else if (req.method === 'POST') {
    const cocktail = req.body;
    savedCocktails.push(cocktail);
    res.status(201).json({ message: 'Cocktail saved' });
  } else if (req.method === 'DELETE') {
    const { index } = req.body;
    savedCocktails.splice(index, 1);
    res.status(200).json({ message: 'Cocktail removed' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
