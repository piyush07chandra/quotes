import QuoteCard from "./components/QuoteCard"
import  { useState } from 'react';
import axios from 'axios';


const  App: React.FC = () => {
 
  const [quote, setQuote] = useState<string>('');
  const [savedQuotes, setSavedQuotes] = useState<string[]>([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    } else {
      alert('This quote is already saved!');
    }
  };

  return (
    <>
 <div className="min-h-screen bg-gray-100  flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      <button 
        onClick={fetchQuote}
        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Random Quote
      </button>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-2 text-center">Saved Quotes</h2>
        {savedQuotes.length > 0 ? (
          savedQuotes.map((savedQuote, index) => (
            <div key={index} className="mb-2 p-4 bg-white rounded shadow">
              <p className="text-gray-700">{savedQuote}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No saved quotes yet.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default App
