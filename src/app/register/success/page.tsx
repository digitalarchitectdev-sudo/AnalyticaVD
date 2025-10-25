'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegistrationSuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const qrData = searchParams.get('qrData');

  if (!name || !qrData) {
    // Handle case where params are missing, maybe redirect to home
    return (
        <div className="container mx-auto max-w-2xl py-12 md:py-24 px-4 text-center">
            <h1 className="text-2xl font-bold">Something went wrong.</h1>
            <p className="text-muted-foreground mt-2">Could not retrieve registration details.</p>
            <Button asChild className="mt-6">
                <Link href="/">Go to Homepage</Link>
            </Button>
        </div>
    )
  }

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrData}`;

  return (
    <div className="container mx-auto max-w-2xl py-12 md:py-24 px-4">
      <Card className="text-center shadow-lg">
        <CardHeader className="items-center">
          <div className="bg-green-100 p-3 rounded-full dark:bg-green-900/50">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-3xl font-headline mt-4">Registration Successful!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for registering, {name}.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Your QR code for event check-in is below. A confirmation has also been sent to your email.
          </p>
          <div className="flex justify-center p-4 bg-white rounded-lg border">
            <Image
              src={qrCodeUrl}
              alt="Your registration QR code"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
                <a href={qrCodeUrl} download={`Analytica2025_QRCode_${name.replace(/\s+/g, '_')}.png`}>
                    <Download className="mr-2 h-5 w-5" />
                    Download QR Code
                </a>
            </Button>
            <Button asChild variant="outline" size="lg">
                <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
