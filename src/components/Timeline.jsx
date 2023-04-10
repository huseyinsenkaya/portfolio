// data
import timeline from "../data/timeline";
// components
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="flex w-full flex-col items-start sm:w-[32rem]">
      <h3 className="text-xl font-bold underline decoration-coral decoration-4 underline-offset-4">
        Timeline
      </h3>
      <div className="my-6 flex flex-col justify-end md:flex-row">
        <div className="w-full">
          {timeline.length > 0 &&
            timeline.map((timeline) => (
              <TimelineItem key={timeline.id} timeline={timeline} />
            ))}
        </div>
      </div>
    </div>
  );
}
