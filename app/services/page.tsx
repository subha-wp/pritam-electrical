import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Building2,
  Home,
  Shield,
  Clock,
  Lightbulb,
  Wifi,
  Battery,
  Drill,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Services",
      description:
        "Complete electrical solutions for homes including wiring, installations, and repairs.",
      features: [
        "Electrical panel upgrades",
        "Wiring and rewiring",
        "Lighting installation",
        "Outlet installation and repair",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description:
        "Comprehensive electrical services for businesses and commercial properties.",
      features: [
        "Commercial wiring",
        "Power distribution",
        "Lighting systems",
        "Energy efficiency solutions",
      ],
    },
    {
      icon: Drill,
      title: "Maintenance & Repairs",
      description:
        "Regular maintenance and prompt repair services to keep your electrical systems running smoothly.",
      features: [
        "Preventive maintenance",
        "Troubleshooting",
        "Emergency repairs",
        "System upgrades",
      ],
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description:
        "Thorough electrical safety inspections and certification services.",
      features: [
        "Code compliance checks",
        "Safety certifications",
        "Risk assessments",
        "Insurance inspections",
      ],
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description:
        "Custom lighting solutions for both indoor and outdoor spaces.",
      features: [
        "LED lighting upgrades",
        "Landscape lighting",
        "Motion sensors",
        "Dimming systems",
      ],
    },
    {
      icon: Wifi,
      title: "Smart Home Integration",
      description:
        "Modern smart home electrical solutions for automated living.",
      features: [
        "Smart lighting control",
        "Home automation",
        "Security system integration",
        "Voice control setup",
      ],
    },
    {
      icon: Battery,
      title: "Backup Power Solutions",
      description: "Reliable backup power systems for homes and businesses.",
      features: [
        "Generator installation",
        "UPS systems",
        "Battery backup",
        "Transfer switches",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Emergency Services",
      description:
        "Round-the-clock emergency electrical services when you need them most.",
      features: [
        "24/7 availability",
        "Rapid response",
        "Emergency repairs",
        "Power restoration",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=400&fit=crop"
          alt="Electrical Services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive electrical solutions for residential and commercial
            properties
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Need Electrical Services?
            </h2>
            <p className="mb-8">
              Contact us today for a free consultation. Our expert team is ready
              to help with any electrical project.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
