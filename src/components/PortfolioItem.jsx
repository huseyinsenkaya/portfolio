export default function PortfolioItem({ portfolio }) {
  const { title, image, stack, link } = portfolio;
  return (
    <div className="overflow-hidden rounded-md border-2 border-neutral-300 dark:border-white">
      <a href={link} target="blank">
        <img
          src={image}
          alt="portfolio"
          className="h-36 w-full cursor-pointer object-cover md:h-48"
        />
      </a>

      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack &&
            stack.map((item) => (
              <span
                className="border-graphite inline-block rounded-md border-2 px-2 py-1 font-semibold"
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
