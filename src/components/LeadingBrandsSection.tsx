import huliotLogo from "@/assets/brands/huliot.svg";
import plassonLogo from "@/assets/brands/plasson.png";
import spLogo from "@/assets/brands/sp.svg";
import geberitLogo from "@/assets/technology/geberit-logo-png-transparent.png";
import groheLogo from "@/assets/technology/grohe.png";
import hansgroheLogo from "@/assets/technology/hansgrohe.png";
import ridgidLogo from "@/assets/brands/ridgid.svg";
import rothenbergerLogo from "@/assets/brands/rothenberger.svg";

const brands = [
  { name: "Geberit", logo: geberitLogo },
  { name: "SP", logo: spLogo },
  { name: "PLASSON", logo: plassonLogo },
  { name: "Huliot Group", logo: huliotLogo },
  { name: "RIDGID", logo: ridgidLogo },
  { name: "Rothenberger", logo: rothenbergerLogo },
  { name: "Hansgrohe", logo: hansgroheLogo },
  { name: "Grohe", logo: groheLogo },
] as const;

const LeadingBrandsSection = () => {
  return (
    <section className="bg-[#f8fafc] py-20 px-4 md:px-[336px]" id="brands">
      <div className="bg-[#0f2757] rounded-[40px] p-12 flex flex-col gap-6 items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[1248px] mx-auto transition-transform hover:scale-[1.01]">
        <h2 className="font-heading font-black text-3xl md:text-[48px] leading-[52px] tracking-[-0.96px] text-white text-center">
          איכות מתחילה בבחירת
          <span className="block text-[#ee4b2b]">החומרים והציוד</span>
        </h2>
        <p className="text-xl leading-[28px] text-white/70 text-center max-w-2xl">
          אנחנו בוחרים רק את המותגים שעוברים את מבחן השטח שלנו,
          <br className="hidden md:block" />
          כדי להבטיח לכם שקט נפשי לשנים קדימה.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-2">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-white/15 rounded-2xl h-24 flex items-center justify-center p-4 shadow-sm overflow-hidden"
            >
              <img
                src={brand.logo.src || brand.logo}
                alt={brand.name}
                className="max-h-11 max-w-[110px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadingBrandsSection;

