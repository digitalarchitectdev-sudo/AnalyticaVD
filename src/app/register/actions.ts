'use server';

import { redirect } from 'next/navigation';
import { registrationSchema, type RegistrationSchema } from '@/lib/schemas';

export type FormState = {
  message: string;
  fields?: Record<string, any>; // Allow any for fields
  issues?: string[];
};

export async function registerForEvent(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  
  // Manually construct teamMembers array from FormData
  const teamMembers = [];
  let i = 0;
  while (formData[`teamMembers[${i}].name`]) {
    teamMembers.push({
      name: formData[`teamMembers[${i}].name`],
      phone: formData[`teamMembers[${i}].phone`],
    });
    i++;
  }
  
  const payload = {
    ...formData,
    events: data.getAll('events'),
    teamMembers: teamMembers.length > 0 ? teamMembers : undefined,
  };
  
  const parsed = registrationSchema.safeParse(payload);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
  
  const { fullName, email, teamMembers: parsedTeamMembers } = parsed.data;

  try {
    // Here you would typically:
    // 1. Save the data to Google Sheets via an API call.
    // 2. Send a confirmation email.
    // 3. Generate and store a unique QR code identifier.
    // For this demo, we'll simulate this and generate the QR data directly.

    const qrData = JSON.stringify({
      name: fullName,
      email: email,
      event: "Analytica 2025",
      team: parsedTeamMembers,
    });

    const encodedQrData = encodeURIComponent(qrData);

    // Redirect to a success page with user info and QR data
    const params = new URLSearchParams();
    params.set('name', fullName);
    params.set('qrData', encodedQrData);
    
    redirect(`/register/success?${params.toString()}`);

  } catch (error) {
    return {
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}