import Thumbnail from './Thumbnail';

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
