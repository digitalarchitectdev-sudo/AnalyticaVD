
export function RegistrationSection() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS6bzKZaj1LNvphulOgL9vPx7UZh8Zc8zj2Am6pQtMRj20sA/viewform?embedded=true";

  return (
    <section id="register" className="container mx-auto py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Register for Analytica 2025
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Fill out the form below to secure your spot!
        </p>
      </div>
      <div className="flex justify-center">
        <iframe
          src={googleFormUrl}
          width="100%"
          height="1275"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="max-w-2xl w-full"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
