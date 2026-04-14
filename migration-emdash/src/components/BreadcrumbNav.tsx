const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

const BreadcrumbNav = ({ items, className }: { items: Crumb[], className?: string }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://vaknin-plumbing.co.il${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb className={cn("mb-6 text-white/90", className)}>
        <BreadcrumbList className="justify-start text-white/90">
          {items.map((item, i) => (
            <BreadcrumbItem key={i} className="text-white/90">
              {i > 0 && <BreadcrumbSeparator className="text-white/60"><ChevronLeft /></BreadcrumbSeparator>}
              {item.href ? (
                <BreadcrumbLink asChild className="text-white/90 hover:text-white transition-colors">
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-white font-bold">{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbNav;
