import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "1000+" },
    { icon: Clock, label: "Years of Experience", value: "25+" },
    { icon: Award, label: "Projects Completed", value: "5000+" },
    { icon: Shield, label: "Licensed Electricians", value: "20+" },
  ]

  const team = [
    {
      name: "John Smith",
      role: "Master Electrician",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      certifications: ["Master Electrician License", "OSHA Certified"]
    },
    {
      name: "Sarah Johnson",
      role: "Commercial Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      certifications: ["Commercial Electrical License", "Energy Management"]
    },
    {
      name: "Michael Chen",
      role: "Residential Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      certifications: ["Residential Electrical License", "Smart Home Certified"]
    },
    {
      name: "Emily Davis",
      role: "Safety Inspector",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      certifications: ["Safety Inspection License", "OSHA Trainer"]
    }
  ]

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
            Your trusted partner in electrical solutions since 1998
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 1998, PowerPro Electric has grown from a small local contractor to one of the
              region's most trusted electrical service providers. Our commitment to quality,
              safety, and customer satisfaction has been the cornerstone of our success.
            </p>
            <p className="text-lg text-muted-foreground">
              We take pride in our team of skilled electricians who bring expertise and
              professionalism to every project, whether it's a simple repair or a complex
              installation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced team of certified electricians who are dedicated to
              providing the highest quality electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}