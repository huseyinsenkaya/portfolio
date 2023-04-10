export default function TimelineItem({ timeline }) {
  const { year, title, duration, name } = timeline;
  return (
    <ol className="relative flex flex-col border-l border-black dark:border-stone-200 md:flex-row">
      <li className="mb-10">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-black bg-black dark:border-white dark:bg-stone-200 " />
        <p className="ml-4 flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-steel px-2 py-1 font-semibold text-white dark:bg-vanilla dark:text-black">
            {year}
          </span>
          <span className="text-graphite text-lg font-semibold dark:text-white">
            {title}
          </span>
        </p>
        <p className="ml-4 mt-4 text-left text-sm text-stone-600 dark:text-white">
          {name}
        </p>
      </li>
    </ol>
  );
}
