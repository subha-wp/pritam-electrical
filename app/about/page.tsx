import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Users, Clock, Award, Briefcase } from "lucide-react";
import ImageGrid from "@/components/ImageGrid";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pritam Electrical's history, expertise, and commitment to quality electrical services. Government approved contractor since 2016.",
  keywords: [
    "about Pritam Electrical",
    "electrical contractor history",
    "government electrical services",
    "certified electrical contractor",
    "experienced electrical team",
    "West Bengal electrical company",
  ],
  openGraph: {
    title: "About Pritam Electrical - Your Trusted Electrical Contractor",
    description:
      "Learn about Pritam Electrical's history, expertise, and commitment to quality electrical services. Government approved contractor since 2016.",
  },
};

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Government Projects", value: "200+" },
    { icon: Clock, label: "Years of Service", value: "9+" },
    { icon: Award, label: "Certifications", value: "10+" },
    { icon: Briefcase, label: "Skilled Technicians", value: "25+" },
  ];

  const governmentInfo = [
    { label: "GST No", value: "19AWUPM9315Q1ZA" },
    { label: "WEBSEDCL Vendor Code", value: "513671" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=400&fit=crop"
          alt="About Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted government electrical contractor since 2016
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Established in 2016, we have grown to become a leading government
              electrical contractor, serving various public sector entities with
              dedication and expertise. Our commitment to quality, safety, and
              efficiency has made us a preferred choice for government projects.
            </p>
            <p className="text-lg text-muted-foreground">
              We take pride in our team of skilled technicians and engineers who
              bring years of experience and professionalism to every government
              project, ensuring compliance with all regulatory standards and
              delivering exceptional results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Government Information */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Government Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our official registrations and vendor codes for government
              contracts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governmentInfo.map((info) => (
                <Card key={info.label} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{info.label}</h3>
                  <Badge className="text-lg font-bold ">{info.value}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ImageGrid />
    </div>
  );
}
