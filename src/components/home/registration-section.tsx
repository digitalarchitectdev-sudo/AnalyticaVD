import { RegistrationForm } from '@/app/register/registration-form';

export function RegistrationSection() {
  return (
    <section id="register" className="container mx-auto max-w-3xl py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Register for Analytica 2025
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Secure your spot today! Fill out the form below to join the most anticipated tech event of the year.
        </p>
      </div>
      <RegistrationForm />
    </section>
  );
}
