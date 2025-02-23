import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pritam Electrical for all your electrical, civil, and mechanical needs. Available 24/7 for emergency services.",
  keywords: [
    "contact Pritam Electrical",
    "electrical contractor contact",
    "emergency electrical service",
    "Kulpi electrical contractor",
    "South 24 Parganas electrical services",
    "electrical service contact",
  ],
  openGraph: {
    title: "Contact Pritam Electricals - 24/7 Emergency Services Available",
    description:
      "Get in touch with Pritam Electrical for all your electrical, civil, and mechanical needs. Available 24/7 for emergency services.",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7501177254", "Emergency: +91 9932706674"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@pritamelectricals.in", "support@pritamelectricals.in"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Dakshin Rajarampur, Kulpi", "South 24 Parganas, W.B, 743348"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Service"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1920&h=400&fit=crop"
          alt="Contact Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team for all your electrical needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-6 ">
                    <info.icon className="h-6 w-6 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </Card>
                ))}
              </div>
            </div>

            <div className="border w-full rounded-lg overflow-hidden md:col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.949089415503!2d88.2446435!3d22.051542899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x838b4be6f8db80cb%3A0xff656eed2e505884!2sM%2FS%20PRITAM%20ELECTRICALS%20%26%20ELECTRONICS!5e0!3m2!1sen!2sin!4v1740276047837!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
