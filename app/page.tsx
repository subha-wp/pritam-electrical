import { BrandShowcase } from "@/components/brand-showcase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Zap,
  Building2,
  HomeIcon,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Services",
      description:
        "Complete electrical solutions for your home, from repairs to installations.",
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description:
        "Comprehensive electrical services for businesses and commercial properties.",
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description:
        "Thorough electrical safety inspections and maintenance programs.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description:
        "Round-the-clock emergency electrical services when you need them most.",
    },
  ];

  const projects = [
    {
      title: "Modern Office Building",
      description:
        "Complete electrical system installation for a 10-story office building.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      title: "Luxury Home Automation",
      description:
        "Smart home integration and lighting control system installation.",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
    },
    {
      title: "Solar Panel Installation",
      description: "Residential solar panel system design and installation.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=600&fit=crop"
          alt="Electrician at work"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Electrical Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Licensed electrical contractors providing quality services for
            residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-primary"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <BrandShowcase />
      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive electrical services for both residential
              and commercial clients, ensuring safety and reliability in every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/services" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent electrical projects and see how
              we've helped our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/projects" className="flex items-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="mb-8">
              Contact us today for a free consultation and quote. Our team of
              experts is ready to help with your electrical needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
