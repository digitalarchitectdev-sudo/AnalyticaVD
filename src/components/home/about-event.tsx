import Image from "next/image";

export function AboutEvent() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                    About The Event
                </h2>
                <div className="w-24 h-1.5 bg-accent mt-4 mb-6 rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Analytica 2025 is the premier technology conference for college students, designed to foster innovation and collaboration. Whether you're a budding developer, a design enthusiast, or an aspiring entrepreneur, this event is your platform to learn from industry leaders, showcase your skills, and network with like-minded peers. Join us for an unforgettable experience that will shape your tech journey.
                </p>
            </div>
            <div className="flex justify-center">
                <Image 
                    src="https://picsum.photos/seed/about/600/400"
                    alt="Students collaborating on a project."
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                    data-ai-hint="students collaborating"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
