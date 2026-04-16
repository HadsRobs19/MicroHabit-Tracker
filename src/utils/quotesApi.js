const API_KEY = import.meta.env.VITE_QUOTES_API_KEY;
const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

export async function fetchQuote() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'X-Api-Key': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data[0]; // Returns { quote: "...", author: "...", category: "..." }
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return null;
  }
}
