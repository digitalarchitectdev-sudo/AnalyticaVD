
'use client';
import React from "react";
import { eventRules } from "@/lib/rules";
import { ListChecks, User, Calendar, Users, Trophy, Shield, Info, Phone, Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "../ui/card";

const RuleItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <div>
            <h4 className="font-semibold text-base mb-1">{title}</h4>
            <div className="text-muted-foreground text-sm space-y-2">{children}</div>
        </div>
    </div>
);

const RuleList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
                <ListChecks className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

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

            <Accordion type="single" collapsible className="w-full space-y-4">
                {eventRules.map((event) => (
                    <AccordionItem value={event.id} key={event.id} className="border-b-0">
                        <Card className="overflow-hidden">
                        <AccordionTrigger className="p-6 text-xl font-headline hover:no-underline [&[data-state=open]]:bg-muted/50">
                            {event.name}
                        </AccordionTrigger>
                        <AccordionContent>
                           <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RuleItem icon={Building} title="Organized by">
                                        <p>{event.organizedBy}</p>
                                    </RuleItem>
                                    <RuleItem icon={Calendar} title="Date & Venue">
                                        <p><strong>Date:</strong> {event.date}</p>
                                        <p><strong>Venue:</strong> {event.venue}</p>
                                    </RuleItem>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RuleItem icon={Users} title="Eligibility">
                                        <p>{event.eligibility.openTo}</p>
                                        <p>Register as {event.eligibility.team}.</p>
                                        {event.eligibility.maxMembers && <p>Max team members: {event.eligibility.maxMembers}</p>}
                                    </RuleItem>
                                    <RuleItem icon={Info} title="Registration">
                                        <p>Starts: {event.registration.starts}</p>
                                        <p>Last date: {event.registration.ends}</p>
                                        <p>Spot registration: {event.registration.spot}</p>
                                    </RuleItem>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RuleItem icon={Shield} title="Event Specific Rules">
                                        <RuleList items={event.eventSpecificRules} />
                                    </RuleItem>
                                    <RuleItem icon={Shield} title="General Rules">
                                        <RuleList items={event.generalRules} />
                                    </RuleItem>
                                </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RuleItem icon={Info} title="Competition Format">
                                        <RuleList items={event.competitionFormat} />
                                    </RuleItem>
                                     <RuleItem icon={Trophy} title="Judging & Prizes">
                                        <p className="font-semibold">Judging Criteria:</p>
                                        <RuleList items={event.judgingCriteria} />
                                        <p className="font-semibold mt-4">Prizes:</p>
                                        <ul className="list-disc pl-5">
                                            <li><strong>First Prize:</strong> {event.prizes.first}</li>
                                            <li><strong>Second Prize:</strong> {event.prizes.second}</li>
                                            <li>{event.prizes.certificates}</li>
                                        </ul>
                                    </RuleItem>
                                </div>
                                <RuleItem icon={Phone} title="Event Coordinators">
                                    <div className="flex flex-col space-y-1">
                                        {event.coordinators.map(c => (
                                            <p key={c.name}>{c.name}: {c.contact}</p>
                                        ))}
                                    </div>
                                </RuleItem>
                           </CardContent>
                        </AccordionContent>
                        </Card>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
