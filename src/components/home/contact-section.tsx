
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="container mx-auto py-12 md:py-24 px-4">
             <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    Get In Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="space-y-8 text-center">
                    <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
                    <div className="space-y-4 text-lg inline-block text-left">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <a href="mailto:daivadnyadarshan@gmail.com" className="hover:text-primary transition-colors">daivadnyadarshan@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <a href="tel:+919113851473" className="hover:text-primary transition-colors">+91 91138 51473</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
