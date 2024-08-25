import { ReactNode, useState } from "react";

interface BoxMoviesProps {
  children: ReactNode;
}

function BoxMovies({ children }: BoxMoviesProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default BoxMovies;
