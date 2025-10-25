'use server';

import { contactSchema } from '@/lib/schemas';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      status: 'error',
      message: parsed.error.issues.map((issue) => issue.message).join(', '),
    };
  }

  try {
    // Here you would typically send an email or save the inquiry to a database/Google Sheet.
    // For this demo, we'll just simulate a success response.
    console.log('Contact form submitted:', parsed.data);

    return {
      status: 'success',
      message: 'Thank you for your message! We will get back to you shortly.',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
