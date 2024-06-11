
interface QuoteCardProps {
  quote: string;
  onSave: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onSave }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <p className="text-gray-700 text-base">{quote}</p>
      <button 
        onClick={onSave}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto items-center flex"
      >
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;