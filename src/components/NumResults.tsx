interface PropsNumResults {
  movies?: any;
}

const NumResults: React.FC<PropsNumResults> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
};

export default NumResults;
