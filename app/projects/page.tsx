import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "PWD Temporary / Ai Work Electrical Installation",
      category: "Government",
      description:
        "Temporary electrical installation and DG Set. for accommodation of CAPF for various locations of kulpi PS under sundarban police district. LokSobha - 2024",
      image: "/pwd.png",
      services: ["Electrical Installation", "Energy Management"],
    },
    {
      title: "Kulpi Block Development / Ai Work",
      category: "Government",
      description:
        "Electrification work on hire basis electrical materials including address system etc, at DCRC venue of kulpi Janapriya High School-2024.",
      image: "/biswa-bangla.png",
      services: ["Audio System", "Lighting System", "CCTV Installation"],
    },
    {
      title: "SUNDARBAN POLICE DISTRICT / Ai Work",
      category: "Government",
      description:
        "Supply & Installation of Audio Visual on hire basis during the main brieing at kakdwip collage ground in c/w Ganga Sagar Mela -2025",
      image: "/police.png",
      services: [
        "Sound System",
        "Visual System",
        "LED WALL",
        "Live Broadcasting",
      ],
    },
    {
      title: "PWD- Temporary / Ai Work Arrangement for Illumination",
      category: "Government",
      description:
        "Arrangement for Illumination, PA System and DG Set for Bus Bufferzone at SH-1, at 2no. locations, from polerhat to mirzapur. Gangasagar Mela -2024",
      image: "/pwd.png",
      services: ["Industrial Wiring", "Power Distribution", "Safety Systems"],
    },
  ];

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
            Showcasing our expertise through successful electrical installations
            and solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
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
  );
}
