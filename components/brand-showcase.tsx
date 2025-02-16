import Image from "next/image";
import { Marquee } from "./marquee";

const brands = [
  { name: "Apple", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Google", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Microsoft", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Amazon", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Facebook", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Tesla", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Netflix", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Adobe", logo: "/placeholder.svg?height=80&width=80" },
];

export function BrandShowcase() {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Trusted by Industry Leaders
        </h2>
        <Marquee className="py-4" speed={30}>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center mx-8"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={80}
                height={80}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
