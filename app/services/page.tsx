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
  Wrench,
  Factory,
  Construction,
  Cog,
  Package,
  Cable,
  Power,
  Gauge,
  HardDrive,
  Building,
  Hammer,
  Truck,
  ShoppingCart,
  Music2,
  Video,
  Projector,
  Speaker,
  MonitorPlay,
  Camera,
  Radio,
  Mic2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive electrical, civil, and mechanical services for government and industrial projects. Licensed and certified solutions.",
  keywords: [
    "electrical services",
    "civil engineering services",
    "mechanical services",
    "power distribution",
    "industrial electrical",
    "government contractor",
    "emergency electrical",
    "lighting solutions",
    "sound systems",
    "video production",
    "construction services",
  ],
  openGraph: {
    title: "Pritam Electrical Services - Comprehensive Engineering Solutions",
    description:
      "Comprehensive electrical, civil, and mechanical services for government and industrial projects. Licensed and certified solutions.",
  },
};

export default function ServicesPage() {
  const categories = [
    {
      title: "Electrical Engineering",
      icon: Zap,
      description:
        "Comprehensive electrical solutions for industrial and infrastructure projects",
      services: [
        {
          icon: Power,
          title: "Power Distribution",
          description:
            "HT/LT power distribution systems, transformers, and switchgear installation",
        },
        {
          icon: Cable,
          title: "Cable Management",
          description:
            "Underground cable laying, cable tray installation, and maintenance",
        },
        {
          icon: Lightbulb,
          title: "Lighting Solutions",
          description:
            "Industrial lighting, street lighting, and energy-efficient lighting systems",
        },
        {
          icon: Gauge,
          title: "Control Systems",
          description:
            "PLC, SCADA, and automation control panel design and installation",
        },
      ],
    },
    {
      title: "Sound & Lighting Solutions",
      icon: Music2,
      description:
        "Professional sound and lighting systems for events and installations",
      services: [
        {
          icon: Speaker,
          title: "Professional Sound Systems",
          description:
            "High-end audio systems for concerts, events, and permanent installations",
        },
        {
          icon: Mic2,
          title: "Live Sound Production",
          description:
            "Sound mixing, microphone systems, and acoustic optimization",
        },
        {
          icon: Lightbulb,
          title: "Event Lighting",
          description:
            "Stage lighting, LED walls, and dynamic lighting effects",
        },
        {
          icon: Radio,
          title: "Wireless Systems",
          description: "Professional wireless audio and control systems",
        },
      ],
    },
    {
      title: "Live Video Production",
      icon: Video,
      description: "Complete video production solutions for any occasion",
      services: [
        {
          icon: Camera,
          title: "Multi-Camera Setup",
          description: "Professional camera systems and live switching",
        },
        {
          icon: MonitorPlay,
          title: "Live Streaming",
          description:
            "High-quality streaming for events, conferences, and ceremonies",
        },
        {
          icon: Projector,
          title: "Video Display",
          description:
            "Large format displays, projection systems, and LED walls",
        },
        {
          icon: Video,
          title: "Video Recording",
          description:
            "Professional event recording and post-production services",
        },
      ],
    },
    {
      title: "Mechanical Engineering",
      icon: Cog,
      description:
        "Expert mechanical engineering services for industrial applications",
      services: [
        {
          icon: Factory,
          title: "Industrial Equipment",
          description:
            "Installation and maintenance of industrial machinery and equipment",
        },
        {
          icon: HardDrive,
          title: "HVAC Systems",
          description:
            "Design and installation of heating, ventilation, and air conditioning systems",
        },
        {
          icon: Wrench,
          title: "Preventive Maintenance",
          description: "Scheduled maintenance and repair of mechanical systems",
        },
        {
          icon: Drill,
          title: "Fabrication",
          description: "Custom metal fabrication and structural steel work",
        },
      ],
    },
    {
      title: "Civil Engineering",
      icon: Building,
      description: "Professional civil engineering and construction services",
      services: [
        {
          icon: Construction,
          title: "Infrastructure Development",
          description:
            "Roads, bridges, and infrastructure construction projects",
        },
        {
          icon: Building2,
          title: "Building Construction",
          description: "Commercial and industrial building construction",
        },
        {
          icon: Hammer,
          title: "Renovation & Repair",
          description: "Building renovation and structural repair services",
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Construction quality control and project management",
        },
      ],
    },
    {
      title: "General Order Supplier",
      icon: ShoppingCart,
      description: "Reliable supplier of industrial and construction materials",
      services: [
        {
          icon: Package,
          title: "Electrical Components",
          description: "Supply of electrical equipment and components",
        },
        {
          icon: Truck,
          title: "Construction Materials",
          description: "Building materials and construction supplies",
        },
        {
          icon: Clock,
          title: "Just-in-Time Delivery",
          description: "Efficient logistics and timely delivery services",
        },
        {
          icon: Shield,
          title: "Quality Products",
          description: "High-quality materials from trusted manufacturers",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://actionservicesgroup.com/wp-content/uploads/2022/07/Action-Services-Group-Electrical-Services_Abstract-Electrical-Wires-Banner.jpg"
          alt="Our Services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive engineering solutions and supply services for
            government and industrial projects
          </p>
        </div>
      </section>

      {/* Services Categories */}
      {categories.map((category) => (
        <section
          key={category.title}
          className="py-16 border-b last:border-b-0"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <category.icon className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.services.map((service) => (
                <Card key={service.title} className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/contact" className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8">
              Contact us today for a consultation. Our team of experts is ready
              to help with your engineering and supply needs.
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
