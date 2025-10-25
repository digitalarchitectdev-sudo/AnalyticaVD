'use client';

import { useFormState } from 'react-dom';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationSchema } from '@/lib/schemas';
import { registerForEvent, type FormState } from './actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

type EventDetail = {
  id: string;
  label: string;
  type: 'group' | 'individual';
  teamSize?: number;
};

const availableEvents: EventDetail[] = [
    { id: 'wip-code', label: 'WIP Code', type: 'group', teamSize: 2 },
    { id: 'mystery-solving', label: 'Mystery Solving', type: 'group', teamSize: 4 },
    { id: 'tech-memes-quiz', label: 'Tech Meme’s, Quiz', type: 'individual' },
    { id: 'tech-talk', label: 'Tech Talk', type: 'individual' },
    { id: 'tech-debate', label: 'Tech Debate', type: 'individual' },
];

const initialState: FormState = {
  message: '',
};

export function RegistrationForm() {
  const [state, formAction] = useFormState(registerForEvent, initialState);
  const { toast } = useToast();

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      usn: '',
      departmentYear: '',
      email: '',
      phone: '',
      events: [],
      teamMembers: [],
      comments: '',
      ...state.fields,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "teamMembers"
  });

  const selectedEvents = form.watch('events');

  const selectedGroupEvent = useMemo(() => {
    return availableEvents.find(event => selectedEvents.includes(event.id) && event.type === 'group');
  }, [selectedEvents]);

  useEffect(() => {
    // Clear team members if no group event is selected
    if (!selectedGroupEvent && fields.length > 0) {
      remove();
    }
    // Adjust team members if a group event is selected
    if (selectedGroupEvent) {
      const requiredMembers = (selectedGroupEvent.teamSize || 0) - 1;
      const currentMembers = fields.length;
      if (currentMembers < requiredMembers) {
        for (let i = 0; i < requiredMembers - currentMembers; i++) {
          append({ name: '', phone: '' });
        }
      } else if (currentMembers > requiredMembers) {
        for (let i = currentMembers - 1; i >= requiredMembers; i--) {
          remove(i);
        }
      }
    }
  }, [selectedGroupEvent, fields.length, append, remove]);


  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  const handleCheckboxChange = (checked: boolean | 'indeterminate', eventId: string) => {
    const currentEvents = form.getValues('events');
    const eventDetails = availableEvents.find(e => e.id === eventId);
    
    if (!eventDetails) return;

    let newEvents: string[];

    if (checked) {
      // Logic for adding an event
      const groupEventsCount = currentEvents.filter(id => availableEvents.find(e => e.id === id)?.type === 'group').length;
      const individualEventsCount = currentEvents.filter(id => availableEvents.find(e => e.id === id)?.type === 'individual').length;

      if (eventDetails.type === 'group' && groupEventsCount >= 1) {
        toast({ title: "Rule Violation", description: "You can only select one group event.", variant: "destructive" });
        return;
      }
      if (eventDetails.type === 'individual' && individualEventsCount >= 2) {
        toast({ title: "Rule Violation", description: "You can select a maximum of two individual events.", variant: "destructive" });
        return;
      }
      newEvents = [...currentEvents, eventId];
    } else {
      // Logic for removing an event
      newEvents = currentEvents.filter(id => id !== eventId);
    }
    
    form.setValue('events', newEvents, { shouldValidate: true });
  };


  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="usn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>USN</FormLabel>
                    <FormControl>
                      <Input placeholder="1AB23CS001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departmentYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department / Year</FormLabel>
                    <FormControl>
                      <Input placeholder="Computer Science / 3rd Year" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="events"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Events Interested In</FormLabel>
                    <FormDescription>
                      Select up to 1 group event and 2 individual events.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableEvents.map((item) => (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                      >
                        <FormControl>
                          <Checkbox
                            checked={form.getValues('events').includes(item.id)}
                            onCheckedChange={(checked) => handleCheckboxChange(checked, item.id)}
                          />
                        </FormControl>
                        <div className='grid gap-1.5 leading-none'>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                          <FormDescription>
                            {item.type === 'group' ? `Group Event (Team of ${item.teamSize})` : 'Individual Event'}
                          </FormDescription>
                        </div>
                      </FormItem>
                  ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedGroupEvent && (
              <div className="space-y-4 rounded-md border p-4">
                <h3 className="font-medium">
                  Team Members for {selectedGroupEvent.label} (Team of {selectedGroupEvent.teamSize})
                </h3>
                 <Alert variant="default">
                  <AlertDescription>
                    You are the first member. Please add {selectedGroupEvent.teamSize! - 1} more member(s).
                  </AlertDescription>
                </Alert>
                {fields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                     <FormField
                      control={form.control}
                      name={`teamMembers.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member {index + 2} Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Team Member Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name={`teamMembers.${index}.phone`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member {index + 2} Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            )}


            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Comments (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any questions or comments?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full md:w-auto" size="lg">
              Submit Registration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
