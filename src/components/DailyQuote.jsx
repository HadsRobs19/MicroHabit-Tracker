import { useState, useEffect } from 'react';
import { fetchQuote } from '../utils/quotesApi';

function DailyQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadQuote() {
      setLoading(true);
      const result = await fetchQuote();

      if (result) {
        setQuote(result);
        setError(null);
      } else {
        setError('Could not load quote');
      }
      setLoading(false);
    }

    loadQuote();
  }, []);

  if (loading) {
    return (
      <div className="quote-container">
        <p className="quote-loading">Loading inspiration...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote-container">
        <p className="quote-text">"Stay motivated and keep building great habits!"</p>
        <p className="quote-author">— MicroHabit</p>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <p className="quote-text">"{quote.quote}"</p>
      <p className="quote-author">— {quote.author}</p>
    </div>
  );
}

export default DailyQuote;
