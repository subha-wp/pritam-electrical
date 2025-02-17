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
  Wrench,
  HardHat,
  Bolt,
  Building,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: Bolt,
      title: "Electrical Services",
      description:
        "Complete electrical solutions including installation, maintenance, and upgrades for government and private projects.",
    },
    {
      icon: HardHat,
      title: "Civil Construction",
      description:
        "Professional civil construction services for government infrastructure and building projects.",
    },
    {
      icon: Wrench,
      title: "Mechanical Services",
      description:
        "Comprehensive mechanical engineering solutions for industrial and governmental facilities.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description:
        "Round-the-clock emergency services for critical government and private infrastructure.",
    },
  ];

  const govtCredentials = [
    {
      title: "WBSEDCL Approved",
      description:
        "Licensed electrical contractor for West Bengal State Electricity Distribution Company Ltd.",
      code: "Vendor Code: 513671",
    },
    {
      title: "PWD Registered",
      description:
        "Authorized contractor for Public Works Department, Government of West Bengal",
      code: "",
    },
    {
      title: "GST Registered",
      description: "Government registered and compliant business entity",
      code: "GST No: 19AWUPM9315QIZA",
    },
  ];

  const projects = [
    {
      title: "WBSEDCL Substation",
      description:
        "Complete electrical system installation and maintenance for WBSEDCL substation.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      type: "Government",
    },
    {
      title: "PWD Infrastructure",
      description:
        "Civil construction and electrical work for PWD infrastructure project.",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
      type: "Government",
    },
    {
      title: "Industrial Installation",
      description:
        "Industrial-scale electrical and mechanical system installation.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      type: "Industrial",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://www.polyu.edu.hk/eee/-/media/Department/EEE/Content/Study/Bachelor-of-Engineering-Scheme-in-Electrical-Engineering/electricity-workers-and-pylon-silhouette-picture-id1252617520.jpg?bc=ffffff&h=1080&w=1600&rev=d2a46c29969048a29582cfed2ac7e71e&hash=FCE72FB05224F08BA647C669486C7292"
          alt="Electrician at work"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Government Approved Electrical Contractors
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Licensed and registered contractor providing professional
            electrical, civil, and mechanical services for government and
            private projects
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

      {/* Government Credentials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Government Credentials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Officially registered and approved contractor for various
              government departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {govtCredentials.map((credential) => (
              <Card key={credential.title} className="p-6">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {credential.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {credential.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {credential.code}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BrandShowcase />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for government and private sector
              projects, ensuring quality and reliability
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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Featured Government Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our expertise in handling major government and
              industrial projects
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
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {project.type}
                    </span>
                  </div>
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
              experts is ready to help with your electrical, civil, and
              mechanical needs.
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
