import Image from "next/image";
import { Marquee } from "./marquee";

const brands = [
  { name: "wbsedcl", logo: "/wbsedcl.png" },
  { name: "wbsetcl", logo: "/wbsetcl.png" },
  { name: "PWD", logo: "/pwd.png" },
  { name: "Police", logo: "/police.png" },
  { name: "BISWA BANGLA", logo: "/biswa-bangla.png" },
];

export function BrandShowcase() {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">Trusted by</h2>
        <Marquee className="py-4" speed={30}>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center mx-8"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={100}
                height={70}
                className="max-w-[100px] h-[100px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
