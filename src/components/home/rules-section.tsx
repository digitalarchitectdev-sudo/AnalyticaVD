import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { eventRules } from "@/lib/rules";
import { ListChecks } from "lucide-react";

export function RulesSection() {
  return (
    <section id="rules" className="container mx-auto max-w-4xl py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Event Rules & Guidelines
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Please read the rules for each event carefully.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {eventRules.map((event) => (
          <AccordionItem key={event.id} value={event.id}>
            <AccordionTrigger className="text-xl font-headline">
              {event.name}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pl-6">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ListChecks className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
