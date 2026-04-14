import React from "react";
import { Zap, Camera, Wrench, ShieldCheck } from "lucide-react";
import smartCableImg from "@/assets/picote.png";
import cameraImg from "@/assets/technology/ddssd.png";
import drainImg from "@/assets/technology/3.png";
import pprImg from "@/assets/technology/4.png";

const PrecisionSection = () => {
  const features = [
    {
      title: "טכנולוגיית סמארט כבל לצנרת",
      icon: Zap,
      iconBg: "#fee8d1",
      img: smartCableImg,
      imgClass: "cable",
      iconPos: "left",
    },
    {
      title: "צילום קווי ביוב וצנרת",
      icon: Camera,
      iconBg: "#fdcbc0",
      img: cameraImg,
      imgClass: "camera",
      iconPos: "right",
    },
    {
      title: "ציוד פתיחת סתימות מקצועי",
      icon: Wrench,
      iconBg: "#fbebdc",
      img: drainImg,
      imgClass: "sewer",
      iconPos: "left",
    },
    {
      title: "פתרונות PPR איכותיים",
      icon: ShieldCheck,
      iconBg: "#dcfce7",
      img: pprImg,
      imgClass: "ppr",
      iconPos: "right",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1686px] mx-auto px-4 md:px-6">
        <div className="bg-white border border-[#f1f5f9] rounded-[32px] md:rounded-[48px] shadow-[0_32px_80px_0_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-[49px] flex flex-col gap-6 items-center relative overflow-hidden">
          
          <div className="max-w-[700px] flex flex-col items-center gap-3 md:gap-4 text-center">
            <h2 className="font-heading font-black text-2xl md:text-[44px] leading-tight tracking-[-0.9px] flex flex-wrap justify-center gap-2">
              <span className="text-[#0f2757]">פחות ניחושים,</span>
              <span className="text-[#1162d4]">יותר דיוק</span>
            </h2>
            <div className="text-[15px] md:text-[18px] leading-[28px] text-[#475569] flex flex-col gap-1">
              <p>הציוד המתקדם שלנו מאפשר לנו לראות מה שאחרים רק מנחשים,</p>
              <p>ולטפל בבעיה מהשורש במינימום הרס.</p>
            </div>
          </div>

          <div className="w-full max-w-[552px] flex flex-col gap-6 md:gap-10 pt-4 md:pt-8 pb-2 md:pb-4">
            {features.map((feat, idx) => (
              <div 
                key={idx}
                className="group relative h-20 md:h-24 bg-[#f8fafc]/20 border border-[#f1f5f9] rounded-[24px] md:rounded-[32px] flex items-center overflow-visible transition-all duration-500 hover:bg-white hover:scale-[1.02] hover:shadow-xl hover:border-[#1162d4]/10"
              >
                <div className={`flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-8 ${feat.iconPos === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-right'}`}>
                  <div 
                    className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                    style={{ backgroundColor: feat.iconBg }}
                  >
                    <feat.icon className="w-5 h-5 md:w-7 md:h-7 text-[#0f2757]" />
                  </div>
                  <span className="font-heading font-extrabold text-[15px] md:text-[19.2px] leading-tight md:leading-7 text-[#0f2757] transition-colors duration-300 group-hover:text-[#1162d4]">
                    {feat.title}
                  </span>
                </div>

                <div className={`shrink-0 w-20 md:w-32 relative h-20 md:h-24 ${feat.iconPos === 'right' ? 'order-first' : 'order-last'}`}>
                  <img
                    src={feat.img.src || feat.img}
                    alt={feat.title}
                    className={`absolute pointer-events-none max-w-none transition-transform duration-700 group-hover:scale-110 ${
                      feat.imgClass === 'cable' ? 'right-[-12px] md:right-[-20px] top-[-40px] md:top-[-63px] h-[130px] md:h-[192px]' : 
                      feat.imgClass === 'camera' ? 'left-[-12px] md:left-[-20px] top-[-30px] md:top-[-50px] h-[115px] md:h-[160px]' : 
                      feat.imgClass === 'sewer' ? 'right-[-12px] md:right-[-20px] top-[-30px] md:top-[-50px] h-[120px] md:h-[170px]' : 
                      feat.imgClass === 'ppr' ? 'left-[-12px] md:left-[-20px] top-[-40px] md:top-[-65px] h-[140px] md:h-[210px]' : 
                      'left-[-12px] md:left-[-20px] top-[-24px] md:top-[-40px] h-[108px] md:h-[150px]'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionSection;
