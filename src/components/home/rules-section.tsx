'use client';
import React from "react";
import { eventRules } from "@/lib/rules";
import { ListChecks } from "lucide-react";

export function RulesSection() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section id="rules" className="container mx-auto max-w-4xl py-12 md:py-24 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-semibold mt-2">
                    Event Rules & Guidelines
                </h2>
                <p className="mt-4 text-lg text-slate-500">
                    Please read the rules for each event carefully.
                </p>
            </div>

            <div className='max-w-xl w-full mx-auto mt-6 flex flex-col gap-4 items-start text-left'>
                {eventRules.map((event, index) => (
                    <div key={event.id} className='flex flex-col items-start w-full'>
                        <div 
                            className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded' 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h2 className='text-md font-medium'>{event.name}</h2>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                            <ul className="space-y-3 text-sm text-slate-500">
                                {event.rules.map((rule, ruleIndex) => (
                                    <li key={ruleIndex} className="flex items-start gap-3">
                                        <ListChecks className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
