import { Hero } from "@/components/home/hero";
import { AboutEvent } from "@/components/home/about-event";
import { EventFeatures } from "@/components/home/event-features";
import { Countdown } from "@/components/home/countdown";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const eventDate = "2025-10-30T09:00:00";

  return (
    <div className="flex flex-col">
      <Hero />
      <Countdown eventDate={eventDate} />
      <AboutEvent />
      <Separator className="my-12 md:my-20" />
      <EventFeatures />
    </div>
  );
}
