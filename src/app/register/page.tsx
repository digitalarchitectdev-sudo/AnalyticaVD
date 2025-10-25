import { RegistrationForm } from './registration-form';

export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Register for Analytica 2025
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Secure your spot today! Fill out the form below to join the most anticipated tech event of the year.
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
}
