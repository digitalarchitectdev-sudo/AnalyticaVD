
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin } from "lucide-react";

const committeeMembers = [
  { name: "Alex Johnson", role: "Event Coordinator", avatar: "https://picsum.photos/seed/c1/100/100" },
  { name: "Samantha Lee", role: "Lead Developer", avatar: "https://picsum.photos/seed/c2/100/100" },
  { name: "Michael Chen", role: "Marketing Head", avatar: "https://picsum.photos/seed/c3/100/100" },
];

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

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <a href="mailto:contact@technexus.com" className="hover:text-primary transition-colors">contact@technexus.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <span>+1 (234) 567-890</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <span>123 Tech Avenue, Innovation City, 12345</span>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold font-headline">Organizing Committee</h3>
                    <div className="space-y-4">
                        {committeeMembers.map(member => (
                            <div key={member.name} className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person photo" />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{member.name}</p>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
