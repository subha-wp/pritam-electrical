import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const images = ["/assets/image3.jpg", "/assets/image2.jpg"];

export default function ImageGrid() {
  return (
    <section className="py-10 my-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {images.map((src, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">
                  Image Title {index + 1}
                </h3>
                <p className="text-gray-600">
                  This is a brief description for image {index + 1}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
