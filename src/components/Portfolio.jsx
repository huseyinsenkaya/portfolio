// data
import portfolios from "../data/portfolio";

// components
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex w-full flex-col items-start sm:w-[32rem]">
      <h3 className="mb-6 text-xl font-bold underline decoration-coral decoration-4 underline-offset-4">
        Projects
      </h3>
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <div className="">
          {portfolios.length > 0 &&
            portfolios.map((item) => (
              <PortfolioItem key={item.title} portfolio={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
