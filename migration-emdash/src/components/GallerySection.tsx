import kobiExcavator from "@/assets/gallery/kobiwork.jpeg";
import kobiTrench from "@/assets/gallery/kobi work.jpeg";
import parkingJob from "@/assets/parking-job.jpg";

const images = [
  { src: parkingJob, alt: "עבודות אינסטלציה מורכבות ופתיחת סתימות" },
  { src: kobiTrench, alt: "חפירת תשתיות ביוב עמוקות והתקנת שוחות" },
  { src: kobiExcavator, alt: "עבודות תשתית ופיתוח עם ציוד מכני הנדסי" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-white py-20 px-8 md:px-[320px] flex flex-col gap-14 items-center">
      <div className="text-center flex flex-col gap-4 items-center max-w-[700px]">
        <h2 className="font-heading font-bold text-3xl md:text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f2757]">
          העבודות שלנו
        </h2>
        <p className="text-lg leading-[28px] text-[#676f7e]">
          צפו בדוגמאות מפרויקטי האינסטלציה המקצועיים שלנו.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px]">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden h-64 relative shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] cursor-pointer group">
            <img
              src={img.src.src || img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-[350ms] group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2757]/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-sm text-right">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

