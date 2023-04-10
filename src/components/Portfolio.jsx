// data
import portfolios from "../data/portfolio";

// components
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.length > 0 &&
          portfolios.map((item) => (
            <PortfolioItem key={item.title} portfolio={item} />
          ))}
      </div>
    </div>
  );
}
