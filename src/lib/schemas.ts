import { z } from 'zod';

export const teamMemberSchema = z.object({
  name: z.string().min(3, { message: 'Team member name is required.' }),
  phone: z.string().min(10, { message: 'A valid phone number is required.' }),
});

export const registrationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  collegeName: z.string().min(3, { message: 'College name is required.' }),
  departmentYear: z.string().min(2, { message: 'Department and year are required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }).regex(/^\+?[0-9\s-()]+$/, { message: 'Invalid phone number format.' }),
  events: z.array(z.string()).refine(value => value.some(item => item), {
    message: "You have to select at least one event.",
  }),
  teamMembers: z.array(teamMemberSchema).optional(),
  comments: z.string().optional(),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactSchema = z.infer<typeof contactSchema>;