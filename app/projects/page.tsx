import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      description: "Complete electrical system installation for a 10-story office building, including smart lighting and energy management systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      services: ["Electrical Installation", "Smart Lighting", "Energy Management"]
    },
    {
      title: "Luxury Smart Home",
      category: "Residential",
      description: "Full home automation system with integrated lighting, security, and climate control for a luxury residence.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
      services: ["Home Automation", "Lighting Control", "Security Systems"]
    },
    {
      title: "Solar Power Installation",
      category: "Renewable Energy",
      description: "Installation of a 50kW solar panel system with battery storage for a commercial property.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      services: ["Solar Installation", "Battery Storage", "Power Management"]
    },
    {
      title: "Industrial Facility Upgrade",
      category: "Industrial",
      description: "Electrical system upgrade for a manufacturing facility, including new power distribution and safety systems.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
      services: ["Industrial Wiring", "Power Distribution", "Safety Systems"]
    },
    {
      title: "Restaurant Renovation",
      category: "Commercial",
      description: "Complete electrical renovation for a high-end restaurant, including decorative lighting and kitchen power systems.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      services: ["Commercial Wiring", "Lighting Design", "Kitchen Power"]
    },
    {
      title: "Emergency Backup System",
      category: "Healthcare",
      description: "Installation of emergency power backup systems for a medical facility, ensuring continuous operation.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop",
      services: ["Emergency Power", "Backup Systems", "Healthcare"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=400&fit=crop"
          alt="Our Projects"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing our expertise through successful electrical installations and solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
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