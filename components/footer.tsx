import { Bolt } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Bolt className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Pritam Electrical</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional electrical services for residential and commercial
              projects. Licensed, insured, and committed to quality.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Residential Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Dakshin Rajarampur, Kulpi
                <br />
                South 24 Parganas, W.B, 743348
              </li>
              <li>
                <a
                  href="tel:+919932706674"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  +91 9932706674
                </a>
              </li>
              <li>
                <a
                  href="tel:+917501177254"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  +91 7501177254
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@powerpro.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  info@powerpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Pritam Electrical. All rights reserved.
            Developed With ❤️ by{" "}
            <a
              href="https://www.nextcoder.co.in/"
              className="font-semibold text-primary"
            >
              nextcoder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
