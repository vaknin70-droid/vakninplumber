import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;

const logo = "/logo-kv.png";

const navLinks = [
  { label: "ראשי", href: "/", isRoute: true },
  { label: "אודות", href: "/about", isRoute: true },
  { label: "שירותים", href: "/services", isRoute: true },
  { label: "אזורי שירות", href: "/cities", isRoute: true },
  { label: "כלים", href: "/tools-hub", isRoute: true },
  { label: "מרכז ידע", href: "/knowledge", isRoute: true },
  { label: "בלוג", href: "/blog", isRoute: true },
  { label: "צור קשר", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur border-b border-primary/20">
      <div className="container flex items-center h-16">
        <Link to="/" className="flex items-center gap-2 ml-10">
          <img src={logo} alt="ואקנין אינסטלציה" className="h-10 w-auto invert brightness-0" />
          <span className="font-heading text-xl font-bold text-primary-foreground whitespace-nowrap">
            ואקנין אינסטלציה
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 flex-1">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-[17px] font-medium text-primary-foreground/90 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[17px] font-medium text-primary-foreground/90 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          
          <div className="flex-1" /> {/* Spacer */}

          <Button variant="cta" size="sm" asChild className="hidden md:flex">
            <a href="tel:+972528126653">
              <Phone className="w-4 h-4 ml-2" />
              התקשרו עכשיו
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary-foreground mr-auto"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary/20 bg-primary-dark pb-4">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-primary-foreground/80 hover:text-accent hover:bg-primary/20 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-primary-foreground/80 hover:text-accent hover:bg-primary/20 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
