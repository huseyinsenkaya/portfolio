export default function PortfolioItem({ portfolio }) {
  const { title, imgUrl, stack, link } = portfolio;
  return (
    <div className="overflow-hidden rounded-md border-2 border-graphite ">
      <img
        src={imgUrl}
        alt="portfolio"
        className="h-36 w-full cursor-pointer object-cover md:h-48"
      />

      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack &&
            stack.map((item) => (
              <span
                className="inline-block rounded-md border-2 border-graphite px-2 py-1 font-semibold"
                key={item}
              >
                {item}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
