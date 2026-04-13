import { e as createComponent, g as addAttribute, l as renderHead, aj as renderSlot, ak as renderScript, r as renderTemplate, h as createAstro, s as spreadAttributes, u as unescapeHTML, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server__d1cmUpD.mjs';
import 'piccolore';
import { clsx } from 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Phone, X, Menu, MessageCircle, ChevronLeft, ArrowLeft, Zap, Camera, Wrench, ShieldCheck, Search, Calculator, AlertTriangle, Quote, Star, BookOpen, Calendar, Clock, Mail, MapPin, Contrast, Link2, MousePointer2, PauseCircle, Accessibility, ZoomOut, ZoomIn, RotateCcw } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "\u05D5\u05D0\u05E7\u05E0\u05D9\u05DF \u05D0\u05D9\u05E0\u05E1\u05D8\u05DC\u05E6\u05D9\u05D4 | \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D0\u05D9\u05E0\u05E1\u05D8\u05DC\u05E6\u05D9\u05D4 \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD",
    description = "\u05D5\u05D0\u05E7\u05E0\u05D9\u05DF \u05D0\u05D9\u05E0\u05E1\u05D8\u05DC\u05E6\u05D9\u05D4 - \u05DE\u05D5\u05DE\u05D7\u05D9\u05DD \u05D1\u05D0\u05D9\u05EA\u05D5\u05E8 \u05E0\u05D6\u05D9\u05DC\u05D5\u05EA, \u05E4\u05EA\u05D9\u05D7\u05EA \u05E1\u05EA\u05D9\u05DE\u05D5\u05EA, \u05E6\u05D9\u05DC\u05D5\u05DD \u05E7\u05D5\u05D5\u05D9 \u05D1\u05D9\u05D5\u05D1 \u05D5\u05EA\u05D9\u05E7\u05D5\u05DF \u05E6\u05E0\u05E8\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8."
  } = Astro2.props;
  return renderTemplate`<html lang="he" dir="rtl" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-background font-body text-foreground antialiased"> ${renderSlot($$result, $$slots["default"])} <!-- Animation Reveal Scripts --> ${renderScript($$result, "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/layouts/Base.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-lg hover:shadow-xl transition-all",
        hero: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all",
        "hero-outline": "border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg transition-all"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

const Link$4 = ({ to, href, children, ...props }) => /* @__PURE__ */ jsx("a", { href: to || href, ...props, children });
const logo$1 = "/logo-kv.png";
const navLinks = [
  { label: "ראשי", href: "/", isRoute: true },
  { label: "אודות", href: "/about", isRoute: true },
  { label: "שירותים", href: "/services", isRoute: true },
  { label: "אזורי שירות", href: "/cities", isRoute: true },
  { label: "כלים", href: "/tools-hub", isRoute: true },
  { label: "מרכז ידע", href: "/knowledge", isRoute: true },
  { label: "בלוג", href: "/blog", isRoute: true },
  { label: "צור קשר", href: "/contact", isRoute: true }
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-50 bg-primary-dark/95 backdrop-blur border-b border-primary/20", children: [
    /* @__PURE__ */ jsxs("div", { className: "container flex items-center h-16", children: [
      /* @__PURE__ */ jsxs(Link$4, { to: "/", className: "flex items-center gap-2 ml-10", children: [
        /* @__PURE__ */ jsx("img", { src: logo$1, alt: "ואקנין אינסטלציה", className: "h-10 w-auto invert brightness-0" }),
        /* @__PURE__ */ jsx("span", { className: "font-heading text-xl font-bold text-primary-foreground whitespace-nowrap", children: "ואקנין אינסטלציה" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 flex-1", children: [
        navLinks.map(
          (link) => link.isRoute ? /* @__PURE__ */ jsx(
            Link$4,
            {
              href: link.href,
              className: "text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors",
              children: link.label
            },
            link.label
          ) : /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: "text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors",
              children: link.label
            },
            link.label
          )
        ),
        /* @__PURE__ */ jsx("div", { className: "flex-1" }),
        " ",
        /* @__PURE__ */ jsx(Button, { variant: "cta", size: "sm", asChild: true, className: "hidden md:flex", children: /* @__PURE__ */ jsxs("a", { href: "tel:+972528126653", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 ml-2" }),
          "התקשרו עכשיו"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden p-2 text-primary-foreground mr-auto",
          onClick: () => setOpen(!open),
          "aria-label": "תפריט",
          children: open ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-primary/20 bg-primary-dark pb-4", children: navLinks.map(
      (link) => link.isRoute ? /* @__PURE__ */ jsx(
        Link$4,
        {
          href: link.href,
          onClick: () => setOpen(false),
          className: "block px-4 py-3 text-primary-foreground/80 hover:text-accent hover:bg-primary/20 transition-colors",
          children: link.label
        },
        link.label
      ) : /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          onClick: () => setOpen(false),
          className: "block px-4 py-3 text-primary-foreground/80 hover:text-accent hover:bg-primary/20 transition-colors",
          children: link.label
        },
        link.label
      )
    ) })
  ] });
};

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const targets = container.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const heroKobi = "/kobi.png";
const HeroSection = () => {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative min-h-[600px] md:h-[900px] overflow-hidden bg-[#f4f7fb] flex items-center justify-center",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroKobi,
            alt: "קובי ואקנין",
            className: "absolute top-[-45px] left-0 w-1/2 h-[calc(100%+45px)] object-cover object-[center_top] pointer-events-none z-0 hidden md:block"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 md:hidden z-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: heroKobi,
            alt: "",
            className: "w-full h-full object-cover object-top opacity-10 pointer-events-none"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_110%_200%_at_100%_0%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.62)_34%,rgba(194,200,211,0.48)_43%,rgba(133,145,167,0.35)_51%,rgba(71,89,122,0.22)_60%,rgba(10,34,78,0.08)_68%,rgba(10,34,78,0.15)_100%)] z-[1]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bottom-0 w-full md:w-[67.7%] bg-[linear-gradient(to_right,rgba(244,247,251,0)_0%,rgba(244,247,251,0.85)_40%,#f4f7fb_65%)] z-[2]" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full px-6 md:px-[17.5%] flex justify-center md:justify-start", children: /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[39%] md:min-w-[560px] md:max-w-[749px] flex flex-col gap-6 md:gap-8 py-16 md:py-24 items-center md:items-start text-center md:text-right", children: [
          /* @__PURE__ */ jsxs("h1", { className: "flex flex-col items-center md:items-start w-full", children: [
            /* @__PURE__ */ jsx("span", { className: "reveal reveal-up stagger-1 font-heading font-black text-[52px] md:text-[83px] leading-none text-[#0f2757] tracking-[-1.7px] whitespace-nowrap", children: "אינסטלציה" }),
            /* @__PURE__ */ jsx("span", { className: "reveal reveal-up stagger-2 font-heading font-black text-[52px] md:text-[83px] leading-none text-[#1162d4] tracking-[-1.7px] whitespace-nowrap", children: "שנגמרת" }),
            /* @__PURE__ */ jsx("span", { className: "reveal reveal-up stagger-3 font-heading font-black text-[44px] md:text-[72px] leading-none text-[#ee4b2b] tracking-[-1.7px] whitespace-nowrap pt-2", children: "בפעם הראשונה" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "reveal reveal-fade stagger-4 text-[17px] md:text-[20px] leading-[28px] text-[#334155] text-center md:text-right max-w-[672px]", children: [
            "מגיעים מהר, עובדים נקי — ומסיימים את העבודה בפעם הראשונה. ואקנין אינסטלציה:",
            /* @__PURE__ */ jsx("br", {}),
            "מקצועיות, שקיפות ושקט נפשי מהרגע הראשון."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal reveal-up stagger-5 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start w-full", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/972528126653",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "touch-card flex items-center gap-3 h-14 px-7 bg-white/90 backdrop-blur-[2px] border border-[#1162d4]/15 rounded-2xl shadow-[0_18px_40px_0_rgba(13,33,74,0.1)] text-[17px] text-[#0f2757] no-underline whitespace-nowrap w-full sm:w-auto justify-center",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "שלחו וואטסאפ" }),
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:052-8126653",
                className: "touch-card flex items-center gap-3 h-14 px-7 bg-[#ee4b2b] rounded-2xl shadow-[0_22px_45px_0_rgba(255,91,43,0.28)] text-[17px] font-bold text-white no-underline whitespace-nowrap w-full sm:w-auto justify-center",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "התקשרו עכשיו" }),
                  /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal reveal-fade stagger-6 flex flex-col gap-3 max-w-[576px]", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[15px] md:text-[16px] leading-[26px] text-[#334155] text-center md:text-right", children: "ייעוץ ראשוני ברור, עבודה נקייה בשטח ושימוש בחומרים ואביזרים של מותגים מובילים כדי לתת פתרון שמחזיקה לאורך זמן." }),
            /* @__PURE__ */ jsxs("button", { className: "inline-flex gap-2 items-center bg-transparent border-none p-0 cursor-pointer w-fit mx-auto md:mx-0", children: [
              /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4 text-[#1162d4]" }),
              /* @__PURE__ */ jsx("span", { className: "text-[14px] font-bold text-[#1162d4]", children: "לראות שירותים שלנו" })
            ] })
          ] })
        ] }) })
      ]
    }
  );
};

const huliotImg = new Proxy({"src":"/_astro/huliot-equipment.ze35p6ad.jpg","width":1024,"height":682,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/huliot-equipment.jpg";
							}
							
							return target[name];
						}
					});

const BrandTrust = () => {
  return /* @__PURE__ */ jsx("section", { className: "overflow-hidden bg-primary-dark py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-full bg-accent/20 blur-3xl" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: huliotImg,
          alt: "ציוד וחומרים מקצועיים",
          className: "relative z-10 rounded-2xl border-2 border-white/10 shadow-2xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-heading text-4xl leading-tight font-black text-white", children: [
        "עובדים עם חומרים, אביזרים",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "וטכנולוגיות מהשורה הראשונה" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-white/70", children: "בכל פרויקט, קטן כגדול, אנחנו עובדים עם פתרונות איכותיים של מותגים מובילים כמו חוליות, PLASSON, SP, Geberit ו-RIDGID. זה מאפשר לנו לעבוד בצורה מדויקת יותר, אמינה יותר ועם תוצאה שמחזיקה לאורך זמן." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent", children: "Leading Brands" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/50", children: "בחירה קפדנית של חומרים ואביזרים" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent", children: "Advanced Tech" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/50", children: "איתור, אבחון וביצוע ברמת דיוק גבוהה" })
        ] })
      ] })
    ] })
  ] }) }) });
};

const repairIcon = new Proxy({"src":"/_astro/repair.D0wlYSD2.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/icons/repair.png";
							}
							
							return target[name];
						}
					});

const cameraIcon = new Proxy({"src":"/_astro/camera.l7jwly_w.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/icons/camera.png";
							}
							
							return target[name];
						}
					});

const drainIcon = new Proxy({"src":"/_astro/drain.D20_Yhgq.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/icons/drain.png";
							}
							
							return target[name];
						}
					});

const servicesBg = new Proxy({"src":"/_astro/pipeSection2.CDwIc1Ij.png","width":4096,"height":2729,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/pipeSection2.png";
							}
							
							return target[name];
						}
					});

const servicePages = [
  {
    slug: "drain-cleaning",
    name: "פתיחת סתימות",
    title: "פתיחת סתימות מקצועית — אינסטלטור עם ציוד מתקדם | ואקנין אינסטלציה",
    metaDescription: "פתיחת סתימות מקצועית עם ציוד מתקדם. פתיחת סתימות בכיור, אמבטיה, אסלה וקו ביוב ראשי. הגעה מהירה, מחירים שקופים. 24/7.",
    h1: "פתיחת סתימות מקצועית — ציוד מתקדם ותוצאות מיידיות",
    intro: "סתימה בכיור, באמבטיה או בקו הביוב? אנחנו ב-ואקנין אינסטלציה משתמשים בטכנולוגיות החדשות ביותר בשוק לפתיחת כל סוגי הסתימות — מהפשוטות ועד המורכבות ביותר. הצוות שלנו מגיע עם ציוד מקצועי מתקדם של החברות המובילות בתחום, ומבטיח פתרון מהיר ויסודי.",
    keywords: ["פתיחת סתימות", "סתימה בכיור", "סתימה באסלה", "סתימה במקלחת", "פתיחת סתימות ביוב", "אינסטלטור לסתימות", "פתיחת סתימה מחיר", "סתימה בצנרת", "פתיחת ביוב"],
    icon: "🔧",
    benefits: [
      "פתרון תוך דקות — ללא פירוק קירות",
      "אבחון מדויק עם מצלמת צנרת",
      "ציוד מתקדם שלא פוגע בצנרת",
      "אחריות מלאה על העבודה",
      "מחיר סופי לפני תחילת עבודה",
      "שירות 24/7 כולל שבת וחגים"
    ],
    process: [
      { title: "אבחון ראשוני", content: "הטכנאי מבצע בדיקה ראשונית לזיהוי מיקום ומהות הסתימה. בסתימות מורכבות, נשתמש במצלמת צנרת לצילום פנימי של הצנרת." },
      { title: "בחירת שיטת הטיפול", content: "בהתאם לאבחון — פומפה מקצועית, כבל ניקוי ממונע, סילון מים בלחץ גבוה (Hydro Jetting), או שילוב שיטות." },
      { title: "פתיחת הסתימה", content: "ביצוע העבודה עם הציוד המתקדם ביותר. כבלי ניקוי גמישים של Ridgid, מכונות לחץ מים של Rothenberger, ופומפות תעשייתיות." },
      { title: "בדיקה וניקוי", content: "לאחר פתיחת הסתימה — בדיקת זרימה מלאה, ניקוי האזור, ובמידת הצורך צילום צנרת חוזר לוודא שהסתימה הוסרה לחלוטין." },
      { title: "המלצות למניעה", content: "הטכנאי ימליץ על דרכים למנוע סתימות עתידיות — כולל מסננות, הרגלי שימוש נכונים ותחזוקה מונעת." }
    ],
    technologies: [
      { name: "מצלמת צנרת דיגיטלית", brand: "Ridgid SeeSnake", description: "מצלמה זעירה עם תאורת LED שנכנסת לתוך הצנרת ומצלמת וידאו בזמן אמת. מאפשרת לזהות בדיוק את מיקום הסתימה, סדקים, שורשים ובעיות נוספות ללא פירוק." },
      { name: "סילון מים בלחץ גבוה", brand: "Rothenberger RoPower", description: "מכונת Hydro Jetting שמשחררת סילון מים בלחץ של עד 200 בר. מפרק שומן, אבנית, שורשים וכל סוגי הסתימות. הפתרון המקצועי ביותר בשוק." },
      { name: "כבל ניקוי ממונע", brand: "Ridgid K-400", description: "כבל ניקוי חשמלי גמיש באורך עד 30 מטר. מגיע לסתימות עמוקות בקו הביוב הראשי ומפרק אותן ביעילות מרבית." },
      { name: "מאתר צנרת", brand: "Ridgid NaviTrack", description: "מערכת איתור אלקטרונית שמאתרת את מסלול הצנרת ומיקום הסתימה מבלי לחפור או לפרק." }
    ],
    faqs: [
      { question: "כמה עולה פתיחת סתימה?", answer: 'מחיר פתיחת סתימה נע בין 150-500 ש"ח בהתאם לסוג הסתימה, חומרתה ומיקומה. תמיד ניתן מחיר סופי לפני תחילת העבודה.' },
      { question: "כמה זמן לוקח לפתוח סתימה?", answer: "סתימה פשוטה — 20-40 דקות. סתימה מורכבת בקו ראשי — שעה עד שעתיים." },
      { question: "האם אתם עובדים בשבת וחגים?", answer: "כן. אנחנו זמינים 24/7, כולל שבתות, חגים ושעות לילה." },
      { question: "האם זה פוגע בצנרת?", answer: "לא. הציוד המקצועי שלנו מותאם לכל סוגי הצנרת ולא גורם נזק." }
    ],
    relatedServiceSlugs: ["leak-detection", "sewer-repair", "pipe-repair"]
  },
  {
    slug: "sewer-camera-inspection",
    name: "צילום קווי ביוב",
    title: "צילום קווי ביוב — אבחון פנים הצנרת במצלמה | ואקנין אינסטלציה",
    metaDescription: 'צילום קווי ביוב וצנרת עם מצלמת סיב אופטי מתקדמת. איתור חסימות, שברים ושורשים ללא הרס. דו"ח וידאו מפורט.',
    h1: "צילום קווי ביוב — אבחון מדויק בטכנולוגיית וידאו",
    intro: "למה לנחש כשאפשר לראות? אנחנו משתמשים במצלמות צנרת מהמתקדמות בעולם כדי לתת לכם תמונה מלאה ומדויקת של המתרחש בתוך קווי הביוב שלכם. הצילום מאפשר לאתר שורשים, שברים, קריסות וחסימות בדיוק של סנטימטר — ללא כל הרס.",
    keywords: ["צילום קווי ביוב", "צילום צנרת", "מצלמת ביוב", "אבחון צנרת בווידאו", "איתור סתימות במצלמה", "צילום ביוב מחיר", "בדיקת צנרת לפני קנייה"],
    icon: "📷",
    benefits: [
      "אבחון מדויק בלי לשבור קירות",
      "זיהוי שורשים, שברים וחסימות",
      'דו"ח וידאו מלא ללקוח',
      "חסכון של אלפי שקלים בחפירות מיותרות",
      "בדיקה חיונית לפני רכישת דירה/בית",
      "תיעוד מקצועי לחברות הביטוח"
    ],
    process: [
      { title: "הכנת האזור", content: "פתיחת נקודת גישה נוחה לקו הביוב (שוחה או פתח ניקוי)." },
      { title: "החדרת המצלמה", content: "החדרת סיב אופטי גמיש עם ראש מצלמה HD בעל זווית רחבה לתוך הצנרת." },
      { title: "סריקה ותיעוד", content: "מעבר על כל אורך הקו, צילום מוקדי הבעיה ותיעוד הממצאים בזמן אמת על גבי מסך." },
      { title: "ניתוח ממצאים", content: "זיהוי מדויק של סוג התקלה (שורשים, שבר, מעיכה) ומיקומה המדויק בעזרת משדר אלקטרוני." },
      { title: "סיכום והמלצות", content: 'מתן דו"ח מפורט והצעת מחיר ממוקדת לתיקון הבעיה שנמצאה.' }
    ],
    technologies: [
      { name: "מצלמת סיב אופטי", brand: "Ridgid SeeSnake", description: "מצלמה מקצועית עם ראש מתכוונן ותאורת LED חזקה. מצלמת באיכות HD ומאפשרת ראות מושלמת גם בתוך ביוב פעיל." },
      { name: "סמארט-כבל (Smart Cable)", brand: "Picote Solutions", description: "טכנולוגיה מתקדמת לניקוי ושיקום צנרת מבפנים. הכבל הגמיש מאפשר להסיר משקעים קשים, בטון ושורשים מבלי לפגוע בדופן הצינור." },
      { name: "משדר איתור צנרת", brand: "Ridgid NaviTrack", description: "משדר הנמצא בראש המצלמה ומאפשר לנו לאתר בחוץ את הנקודה המדויקת שבה נמצאת המצלמה בתוך האדמה." },
      { name: "מסך הקלטה דיגיטלי", brand: "Ridgid CS6x", description: 'מסך שדה המאפשר הקלטת וידאו, צילום תמונות סטילס והוספת הערות קוליות לדו"ח הסופי.' }
    ],
    faqs: [
      { question: "מתי כדאי להזמין צילום קווי ביוב?", answer: "בכל פעם שיש סתימות חוזרות, ריחות ביוב חזקים, או לפני קניית נכס יד שנייה." },
      { question: "האם מקבלים את הצילום?", answer: 'כן, בסיום העבודה אנו מספקים ללקוח את הקלטת הווידאו ודו"ח ממצאים מסודר.' },
      { question: "מה האורך המקסימלי שאפשר לצלם?", answer: "המצלמות שלנו מגיעות לאורך של עד 60 מטרים בתוך הקו." }
    ],
    relatedServiceSlugs: ["drain-cleaning", "sewer-repair", "pipe-repair"]
  },
  {
    slug: "pipe-repair",
    name: "תיקון והחלפת צנרת",
    title: "תיקון צנרת מקצועי — החלפת צנרת עם אחריות | ואקנין אינסטלציה",
    metaDescription: "תיקון והחלפת צנרת מקצועיים. עבודה עם חומרים מהשורה הראשונה, צנרת PPR ו-PEX מהמותגים המובילים. אחריות מלאה.",
    h1: "תיקון והחלפת צנרת — חומרים מובילים ואחריות מלאה",
    intro: "צנרת ישנה, חלודה או סדוקה? אנחנו מבצעים תיקון והחלפת צנרת מכל הסוגים עם החומרים האיכותיים ביותר בשוק. עובדים אך ורק עם צנרת PPR ו-PEX של המותגים המובילים, ומעניקים אחריות מלאה על כל עבודה.",
    keywords: ["תיקון צנרת", "החלפת צנרת", "צנרת מים", "תיקון צנרת נזילה", "החלפת צנרת ישנה", "צנרת PPR", "צנרת PEX", "אינסטלטור לצנרת", "צנרת דירה"],
    icon: "🔩",
    benefits: [
      "שימוש בצנרת PPR ו-PEX באיכות הגבוהה ביותר",
      "אחריות של 10 שנים על צנרת חדשה",
      "עבודה נקייה ומסודרת",
      "פתרונות ללא פירוק מיותר",
      "הלחמה מקצועית עם ציוד מתקדם",
      "ייעוץ מקצועי לשדרוג המערכת"
    ],
    process: [
      { title: "סקר מצב הצנרת", content: "בדיקה מקיפה של מצב הצנרת הקיימת — סוג, גיל, מצב חיבורים, ונקודות תורפה." },
      { title: "הצעת מחיר מפורטת", content: "הצעת מחיר שקופה עם פירוט חומרים, עבודה ולוח זמנים. ללא הפתעות." },
      { title: "ביצוע העבודה", content: "החלפה או תיקון עם ציוד הלחמה מקצועי, חיתוך מדויק, וחיבורים הרמטיים." },
      { title: "בדיקת לחץ", content: "לאחר ההתקנה — בדיקת לחץ מים לוידוא שאין נזילות בחיבורים." },
      { title: "ניקוי והחזרת מצב", content: "ניקוי יסודי של אזור העבודה, תיקון טיח בסיסי, והחזרת הכל למצב מסודר." }
    ],
    technologies: [
      { name: "מכונת הלחמת PPR", brand: "Candan CM-06", description: "מכונת הלחמה מקצועית עם בקרת טמפרטורה מדויקת. יוצרת חיבורים הרמטיים ועמידים שמחזיקים עשרות שנים." },
      { name: "צנרת PPR", brand: "Wavin Ekoplastik", description: "צנרת PPR מהמותג המוביל באירופה. עמידה בלחץ גבוה, אבנית, וטמפרטורות קיצוניות. אורך חיים של 50+ שנה." },
      { name: "צנרת PEX", brand: "Rehau Rautitan", description: "צנרת PEX גמישה מהמותג הגרמני המוביל. אידיאלית למעבר בקירות ללא חיבורים, ומונעת נזילות." },
      { name: "מכשיר בדיקת לחץ", brand: "Rothenberger RP 50", description: "מכשיר בדיקת לחץ הידרוסטטי שמוודא אטימות מושלמת של כל החיבורים לפני סגירת הקירות." }
    ],
    faqs: [
      { question: "כמה עולה החלפת צנרת בדירה?", answer: 'החלפת צנרת מלאה בדירת 4 חדרים: 8,000-15,000 ש"ח. תיקון נקודתי: 300-1,500 ש"ח.' },
      { question: "כמה זמן לוקחת החלפת צנרת?", answer: "החלפה מלאה: 2-4 ימי עבודה. תיקון נקודתי: שעות ספורות." },
      { question: "מה עדיף — PPR או PEX?", answer: "PPR מתאים לקווים ראשיים ולמים חמים. PEX מתאים למעבר בקירות ולגמישות. אנו ממליצים על שילוב של שניהם." },
      { question: "האם צריך פינוי דירה?", answer: "לא. אנו עובדים חדר אחרי חדר ומחזירים מים בסוף כל יום עבודה." }
    ],
    relatedServiceSlugs: ["leak-detection", "drain-cleaning", "bathroom-plumbing-service"]
  },
  {
    slug: "water-heater-service",
    name: "תיקון דוד שמש ודוד חשמלי",
    title: "תיקון דוד שמש ודוד חשמלי — שירות מקצועי | ואקנין אינסטלציה",
    metaDescription: "תיקון דוד שמש ודוד חשמלי. התקנה, תחזוקה והחלפה. עבודה עם מותגי דודים מובילים. אחריות מלאה, שירות 24/7.",
    h1: "תיקון דוד שמש ודוד חשמלי — מומחים עם ציוד מתקדם",
    intro: "בעיה בדוד השמש? אין מים חמים? הדוד משמיע רעשים? הצוות המקצועי שלנו מתמחה בתיקון, תחזוקה והחלפת כל סוגי הדודים — שמש, חשמל וגז. אנחנו עובדים עם המותגים המובילים בשוק ומשתמשים בחלקי חילוף מקוריים בלבד.",
    keywords: ["תיקון דוד שמש", "דוד שמש לא מחמם", "החלפת דוד שמש", "תיקון דוד חשמלי", "התקנת דוד שמש", "דוד שמש מחיר", "תחזוקת דוד", "דוד שמש נוזל", "גוף חימום לדוד"],
    icon: "☀️",
    benefits: [
      "מומחיות בכל סוגי הדודים",
      "חלקי חילוף מקוריים בלבד",
      "אחריות שנתיים על חלפים ועבודה",
      "בדיקת בטיחות חשמלית מלאה",
      "ייעוץ לחיסכון באנרגיה",
      "שירות באותו היום"
    ],
    process: [
      { title: "אבחון התקלה", content: "בדיקה מקיפה — טמפרטורת מים, גוף חימום, טרמוסטט, שסתומים, אנודה, ובדיקה חשמלית." },
      { title: "הצעת מחיר", content: "הסבר מפורט של הבעיה ומחיר שקוף לתיקון או החלפה — לפני תחילת עבודה." },
      { title: "ביצוע התיקון", content: "החלפת חלקים פגומים בחלקי חילוף מקוריים. אם הדוד ישן מדי — המלצה והתקנת דוד חדש." },
      { title: "בדיקת בטיחות", content: "בדיקה חשמלית מלאה, בדיקת שסתום בטיחות, ווידוא תקינות מערכת." },
      { title: "הנחיות תחזוקה", content: "הדרכה אישית על תחזוקה שמאריכה את חיי הדוד ב-5+ שנים." }
    ],
    technologies: [
      { name: "מולטימטר דיגיטלי", brand: "Fluke 117", description: "מולטימטר מקצועי לבדיקת מתח, זרם, התנגדות ורציפות. מאבחן תקלות חשמליות בדוד בדיוק מרבי." },
      { name: "דודי שמש", brand: "Chromagen / Amcor", description: "אנו מתקינים ומתקנים דודים של המותגים הישראליים המובילים — Chromagen, Amcor, ו-Solarflow. איכות מוכחת." },
      { name: "מד טמפרטורה אינפרא-אדום", brand: "Fluke 62 MAX", description: "מד טמפרטורה ללא מגע שמאפשר בדיקת טמפרטורות צנרת ודוד מרחוק, לאיתור בעיות חימום." },
      { name: "גוף חימום מקצועי", brand: "Backer OBL", description: "גופי חימום מהמותג השוודי המוביל. עמידים באבנית ובטמפרטורות גבוהות, עם אורך חיים כפול." }
    ],
    faqs: [
      { question: "כמה עולה תיקון דוד שמש?", answer: 'החלפת גוף חימום: 350-600 ש"ח. החלפת טרמוסטט: 200-400 ש"ח. דוד חדש + התקנה: 2,500-5,000 ש"ח.' },
      { question: "כל כמה זמן צריך תחזוקה?", answer: "מומלץ בדיקה שנתית. ניקוי אבנית כל 2-3 שנים." },
      { question: "מתי כדאי להחליף דוד?", answer: "דוד מעל 10-12 שנה שדורש תיקונים חוזרים — כדאי להחליף. דוד חדש חוסך חשמל ובטוח יותר." },
      { question: "אתם מתקינים גם דודי גז?", answer: "כן. אנו מוסמכים להתקנת ותיקון דודי גז, כולל חיבור לקו גז." }
    ],
    relatedServiceSlugs: ["pipe-repair", "bathroom-plumbing-service", "emergency-plumbing-service"]
  },
  {
    slug: "toilet-repair",
    name: "תיקון שירותים ואסלות",
    title: "תיקון שירותים ואסלות — פתרון מהיר ומקצועי | ואקנין אינסטלציה",
    metaDescription: "תיקון שירותים ואסלות — סתימות, ניאגרות, נזילות והחלפה. טכנאי מוסמך עם ציוד מתקדם. שירות מהיר, מחירים הוגנים.",
    h1: "תיקון שירותים ואסלות — מקצועי, מהיר ונקי",
    intro: "בעיה בשירותים? אסלה סתומה, ניאגרה שלא מפסיקה לזרום, או נזילה מהבסיס? אנחנו מטפלים בכל תקלות השירותים עם ציוד מקצועי מתקדם ופתרונות מהירים. התקנת אסלות חדשות מהמותגים המובילים.",
    keywords: ["תיקון אסלה", "סתימה באסלה", "תיקון ניאגרה", "החלפת אסלה", "אסלה נוזלת", "אינסטלטור לשירותים", "תיקון שירותים", "אסלה תלויה", "ניאגרה סמויה"],
    icon: "🚽",
    benefits: [
      "פתיחת כל סוגי הסתימות באסלה",
      "תיקון והחלפת ניאגרות מכל הסוגים",
      "התקנת אסלות תלויות וניאגרות סמויות",
      "עבודה נקייה ומסודרת",
      "חלקי חילוף מקוריים",
      "אחריות על כל עבודה"
    ],
    process: [
      { title: "אבחון הבעיה", content: "זיהוי סוג התקלה — סתימה, נזילה, בעיית ניאגרה, או בעיה באטם." },
      { title: "הצעת פתרון", content: "הצעת מחיר שקופה עם הסבר מה צריך לעשות ולמה." },
      { title: "ביצוע התיקון", content: "תיקון מקצועי עם חלקים מקוריים של Geberit, Grohe ו-Ideal Standard." },
      { title: "בדיקת תקינות", content: "בדיקת הדחה, איטום, ויציבות. ניקוי יסודי של אזור העבודה." }
    ],
    technologies: [
      { name: "ניאגרות סמויות", brand: "Geberit Sigma", description: "ניאגרות סמויות של Geberit — המותג מספר 1 בעולם. הדחה כפולה חסכונית, שקטה ואמינה. אחריות של 10 שנים." },
      { name: "אסלות תלויות", brand: "Ideal Standard / Duravit", description: "אסלות תלויות מעוצבות מהמותגים האירופיים המובילים. חיסכון במים, קלות לניקוי ומראה מודרני." },
      { name: "כבל ניקוי לאסלה", brand: "Ridgid K-3", description: "כבל ניקוי מקצועי שמגיע לסתימות עמוקות באסלה ובקו הביוב ללא הסרת האסלה." },
      { name: "פנים ניאגרה", brand: "Geberit Original Parts", description: "חלפי ניאגרה מקוריים של Geberit — שסתום מילוי, שסתום הדחה, כפתורים. אמינות מוכחת." }
    ],
    faqs: [
      { question: "כמה עולה תיקון ניאגרה?", answer: 'תיקון פשוט: 150-350 ש"ח. החלפת מנגנון: 250-500 ש"ח. החלפת ניאגרה סמויה: 800-1,500 ש"ח.' },
      { question: "כמה עולה התקנת אסלה תלויה?", answer: 'התקנת אסלה תלויה + ניאגרה סמויה: 2,500-5,000 ש"ח כולל חומרים.' },
      { question: "האסלה סתומה ושום דבר לא עוזר", answer: "ייתכן שהסתימה עמוקה בקו הביוב. נשתמש בכבל ניקוי ממונע או מצלמת צנרת לפתרון." },
      { question: "האסלה זזה / לא יציבה", answer: "ככל הנראה הברגים או האטם בבסיס שחוקים. נחליף אטם ונחזק את הקיבוע." }
    ],
    relatedServiceSlugs: ["drain-cleaning", "bathroom-plumbing-service", "pipe-repair"]
  },
  {
    slug: "faucet-installation",
    name: "התקנת ותיקון ברזים",
    title: "התקנת ברזים ותיקון — מותגים מובילים | ואקנין אינסטלציה",
    metaDescription: "התקנת ברזים ותיקון מקצועי למטבח ולאמבטיה. עבודה עם Grohe, Hansgrohe ו-Roca. מחירים הוגנים, אחריות מלאה.",
    h1: "התקנת ותיקון ברזים — מותגים מובילים, עבודה מקצועית",
    intro: "ברז שמטפטף, ברז שצריך החלפה, או התקנת ברז חדש? אנחנו מתמחים בהתקנה ותיקון של כל סוגי הברזים — מברז מטבח פשוט ועד מערכת מקלחת מלאה. עובדים עם המותגים המובילים בעולם ומתקינים בצורה מקצועית ומושלמת.",
    keywords: ["התקנת ברז", "תיקון ברז", "ברז מטבח", "ברז מקלחת", "ברז מטפטף", "החלפת ברז", "התקנת ברזים מחיר", "ברז חדש", "ברז אמבטיה"],
    icon: "🚿",
    benefits: [
      "התקנה מקצועית של כל סוגי הברזים",
      "תיקון טפטוף וחיסכון מים",
      "עבודה עם מותגים מובילים",
      "ייעוץ בבחירת ברז מתאים",
      "אחריות על ההתקנה",
      "עבודה נקייה ומסודרת"
    ],
    process: [
      { title: "ייעוץ ובחירה", content: "סיוע בבחירת ברז מתאים — סוג, גודל, עיצוב ותקציב. ניתן לספק ברז או להתקין ברז שרכשתם." },
      { title: "הסרת הברז הישן", content: "פירוק מקצועי של הברז הקיים, ניקוי משטח ההתקנה, ובדיקת חיבורי המים." },
      { title: "התקנת הברז החדש", content: "התקנה מדויקת עם איטום מושלם, חיבור לצנרת, ובדיקת זרימה ולחץ." },
      { title: "בדיקה סופית", content: "בדיקת כל מצבי הברז — חם, קר, לחץ, ניקוז. ניקוי האזור." }
    ],
    technologies: [
      { name: "ברזי מטבח", brand: "Grohe / Hansgrohe", description: "ברזים של המותגים הגרמניים המובילים. טכנולוגיית חיסכון מים, ציפוי כרום עמיד, וגמישות מרבית." },
      { name: "מערכות מקלחת", brand: "Hansgrohe Raindance", description: "מערכות מקלחת עם ראש מקלחת גשם, טכנולוגיית AirPower לחיסכון מים, ותרמוסטט לבקרת טמפרטורה." },
      { name: "ברזי אמבטיה", brand: "Roca / Grohe", description: "ברזים אלגנטיים לכיור אמבטיה ואמבטיה. עיצוב מודרני, חיסכון מים, ואחריות ארוכה." },
      { name: "צינורות גמישים", brand: "Neoperl", description: "צינורות חיבור גמישים באיכות הגבוהה ביותר. מונעים נזילות ומחזיקים שנים ללא החלפה." }
    ],
    faqs: [
      { question: "כמה עולה התקנת ברז מטבח?", answer: 'התקנה בלבד: 150-350 ש"ח. כולל ברז איכותי: 500-1,500 ש"ח.' },
      { question: "כמה עולה תיקון ברז מטפטף?", answer: 'תיקון טפטוף: 100-250 ש"ח. החלפת קרטוש: 150-350 ש"ח.' },
      { question: "אתם מביאים את הברז?", answer: "ניתן גם וגם. אנו יכולים לספק ברז ממותג מוביל או להתקין ברז שרכשתם." },
      { question: "כמה זמן לוקחת התקנה?", answer: "התקנת ברז: 30-60 דקות. מערכת מקלחת מלאה: 2-3 שעות." }
    ],
    relatedServiceSlugs: ["bathroom-plumbing-service", "kitchen-plumbing-service", "pipe-repair"]
  },
  {
    slug: "bathroom-plumbing-service",
    name: "אינסטלציה לאמבטיה ומקלחת",
    title: "אינסטלציה לאמבטיה ומקלחת — שיפוץ והתקנה | ואקנין אינסטלציה",
    metaDescription: "שירותי אינסטלציה מקצועיים לאמבטיה ומקלחת. התקנה, שיפוץ, תיקון נזילות ושדרוג. ציוד מתקדם ומותגים מובילים.",
    h1: "אינסטלציה לאמבטיה ומקלחת — שיפוץ, התקנה ותיקון",
    intro: "מתכננים שיפוץ אמבטיה? צריכים תיקון נזילה במקלחת? אנחנו מספקים שירותי אינסטלציה מקיפים לאמבטיה ולמקלחת — מתכנון ועד ביצוע. עובדים עם המותגים המובילים בעולם ומשתמשים בטכנולוגיות המתקדמות ביותר.",
    keywords: ["אינסטלציה אמבטיה", "שיפוץ אמבטיה אינסטלציה", "תיקון מקלחת", "התקנת מקלחון", "אינסטלטור לאמבטיה", "נזילה במקלחת", "שיפוץ מקלחת", "התקנת אמבטיה"],
    icon: "🛁",
    benefits: [
      "תכנון אינסטלציה מלא לשיפוץ",
      "התקנת כל אביזרי האמבטיה",
      "עבודה עם מותגים מובילים",
      "איטום מקצועי למניעת רטיבות",
      "פתרונות חיסכון מים",
      "אחריות מקיפה"
    ],
    process: [
      { title: "סקר ותכנון", content: "ביקור בנכס, הערכת מצב קיים, ותכנון מערכת האינסטלציה החדשה — כולל נקודות מים, ניקוז ואוורור." },
      { title: "הצעת מחיר מפורטת", content: "הצעה שקופה עם פירוט חומרים, אביזרים, עבודה ולוח זמנים." },
      { title: "ביצוע האינסטלציה", content: "העברת צנרת, התקנת נקודות מים וניקוז, חיבור אביזרים — הכל עם צנרת PPR/PEX מהמותגים המובילים." },
      { title: "התקנת אביזרים", content: "התקנת מקלחון, ברזים, ראשי מקלחת, אמבטיה, ומערכות חיסכון מים." },
      { title: "איטום ובדיקה", content: "איטום מקצועי, בדיקת לחץ, ובדיקת כל הנקודות לפני סגירת הגבס והריצוף." }
    ],
    technologies: [
      { name: "מערכת צנרת", brand: "Rehau / Wavin", description: "צנרת PEX ו-PPR מהמותגים הגרמניים המובילים. עמידות לעשרות שנים ללא תחזוקה." },
      { name: "מקלחונים", brand: "Rimadesio / מקלחון ישראלי", description: "מקלחונים מעוצבים עם זכוכית מחוסמת ופרזול איכותי." },
      { name: "מערכות מקלחת", brand: "Hansgrohe / Grohe", description: "מערכות מקלחת מלאות עם תרמוסטט, ראש גשם, וטכנולוגיית חיסכון מים." },
      { name: "ניקוזים ליניאריים", brand: "ACO / Geberit", description: "ניקוזים ליניאריים מעוצבים לרצפת מקלחת — מראה מודרני וניקוז מושלם." }
    ],
    faqs: [
      { question: "כמה עולה אינסטלציה לשיפוץ אמבטיה?", answer: 'אינסטלציה בלבד (ללא אביזרים): 3,000-8,000 ש"ח. כולל אביזרים: 6,000-15,000 ש"ח.' },
      { question: "כמה זמן לוקח שיפוץ אינסטלציה באמבטיה?", answer: "2-5 ימי עבודה בהתאם להיקף העבודה." },
      { question: "האם אתם מטפלים גם באיטום?", answer: "כן. אנו מבצעים איטום מקצועי של רצפה וקירות מקלחת למניעת רטיבות ועובש." },
      { question: "אתם עובדים עם קבלני שיפוצים?", answer: "כן. אנו עובדים בתיאום עם קבלנים, אדריכלים ומעצבים." }
    ],
    relatedServiceSlugs: ["faucet-installation", "pipe-repair", "leak-detection"]
  },
  {
    slug: "kitchen-plumbing-service",
    name: "אינסטלציה למטבח",
    title: "אינסטלציה למטבח — התקנה, תיקון ושיפוץ | ואקנין אינסטלציה",
    metaDescription: "אינסטלציה מקצועית למטבח. התקנת כיורים, ברזים, מדיחים ומסנני מים. שיפוץ מטבח עם ציוד מתקדם ומותגים מובילים.",
    h1: "אינסטלציה למטבח — התקנה, שיפוץ ותיקון מקצועי",
    intro: "משפצים מטבח? צריכים להחליף כיור, ברז או לחבר מדיח? אנחנו מספקים שירותי אינסטלציה מקיפים למטבח עם ציוד מתקדם וחומרים של החברות המובילות בשוק. מההתקנה הפשוטה ביותר ועד שיפוץ מלא.",
    keywords: ["אינסטלציה מטבח", "התקנת כיור מטבח", "החלפת ברז מטבח", "חיבור מדיח כלים", "שיפוץ מטבח אינסטלציה", "מסנן מים למטבח", "סתימה במטבח", "אינסטלטור למטבח"],
    icon: "🍳",
    benefits: [
      "התקנת כיורים וברזים מכל הסוגים",
      "חיבור מדיחי כלים ומכונות כביסה",
      "התקנת מערכות סינון מים",
      "פתרונות לסתימות חוזרות",
      "עבודה נקייה ומהירה",
      "ייעוץ לתכנון מטבח חדש"
    ],
    process: [
      { title: "הערכת צרכים", content: "בדיקת מצב קיים, הבנת הצרכים — חיבור חדש, החלפה, או שיפוץ מלא." },
      { title: "תכנון נקודות מים", content: "תכנון מיטבי של נקודות מים — כיור, מדיח, מסנן, מכונת כביסה." },
      { title: "ביצוע", content: "התקנה מקצועית עם חיבורים הרמטיים, צנרת איכותית, ואביזרים מהמותגים המובילים." },
      { title: "בדיקה ומסירה", content: "בדיקת כל הנקודות, ניקוי, והדרכה על תחזוקה." }
    ],
    technologies: [
      { name: "ברזי מטבח מקצועיים", brand: "Blanco / Franke", description: "ברזי מטבח מקצועיים עם זרוע נשלפת, טכנולוגיית חיסכון מים, וציפוי עמיד בשריטות." },
      { name: "כיורי מטבח", brand: "Blanco Silgranit", description: "כיורי גרניט מלאכותי עמידים בחום, שריטות וכתמים. מגוון צבעים ועיצובים." },
      { name: "מערכות סינון מים", brand: "Brita / Amiad", description: "מסנני מים מתקדמים — סינון פחם פעיל, אוסמוזה הפוכה, ומערכות תעשייתיות." },
      { name: "טוחן אשפה", brand: "InSinkErator", description: "טוחני אשפה מקצועיים — מפרקים שאריות מזון ומונעים סתימות ניקוז." }
    ],
    faqs: [
      { question: "כמה עולה אינסטלציה למטבח חדש?", answer: 'אינסטלציה בסיסית: 2,000-5,000 ש"ח. שיפוץ מלא כולל אביזרים: 5,000-12,000 ש"ח.' },
      { question: "כמה עולה חיבור מדיח כלים?", answer: 'חיבור מדיח: 250-500 ש"ח כולל צינורות וחיבורים.' },
      { question: "מומלץ להתקין טוחן אשפה?", answer: "כן! טוחן אשפה מונע סתימות, מפחית ריחות, ומוריד כמות אשפה אורגנית." },
      { question: "אתם מתקינים מסנני מים?", answer: "כן. אנו מתקינים כל סוגי המסננים — מסנן מתחת לכיור, מסנן מרכזי, ואוסמוזה." }
    ],
    relatedServiceSlugs: ["faucet-installation", "drain-cleaning", "pipe-repair"]
  },
  {
    slug: "sewer-repair",
    name: "תיקון ביוב וצנרת ראשית",
    title: "תיקון ביוב וצנרת ראשית — שירות מקצועי | ואקנין אינסטלציה",
    metaDescription: "תיקון ביוב וצנרת ראשית. פתיחת סתימות ביוב, תיקון שוחות, והחלפת קווי ביוב. ציוד מתקדם, שירות 24/7.",
    h1: "תיקון ביוב וצנרת ראשית — פתרונות מקצועיים עם ציוד מתקדם",
    intro: "בעיה בקו הביוב הראשי? סתימה חוזרת, ריחות ביוב, או שוחת ביוב גולשת? אנחנו מצוידים בטכנולוגיות המתקדמות ביותר לטיפול בכל בעיות הביוב — מצלמות צנרת, סילוני לחץ, ומכונות חיתוך שורשים של החברות המובילות בעולם.",
    keywords: ["תיקון ביוב", "סתימת ביוב", "פתיחת ביוב", "צנרת ביוב", "שוחת ביוב", "ריח ביוב", "החלפת קו ביוב", "אינסטלטור ביוב", "ביוב ראשי"],
    icon: "🏗️",
    benefits: [
      "פתיחת סתימות ביוב מורכבות",
      "צילום צנרת ביוב לאבחון מדויק",
      "חיתוך שורשים מכני",
      "שיקום צנרת ללא חפירה (Relining)",
      "החלפת קווי ביוב מלאה",
      "שירות חירום 24/7"
    ],
    process: [
      { title: "אבחון בווידאו", content: "הכנסת מצלמת צנרת לקו הביוב לצפייה בזמן אמת — זיהוי סתימות, שורשים, סדקים, ושברים." },
      { title: "קביעת שיטת טיפול", content: "בהתאם לממצאים — סילון לחץ, כבל חיתוך שורשים, שיקום פנימי, או החלפה." },
      { title: "ביצוע הטיפול", content: "עבודה עם הציוד המתקדם ביותר — מכונות Rothenberger ו-Ridgid לפתרון כל בעיה." },
      { title: "צילום ביקורת", content: "צילום צנרת חוזר לאחר העבודה לוידוא שהבעיה נפתרה לחלוטין." },
      { title: "תחזוקה מונעת", content: "המלצות לתחזוקה מונעת של קו הביוב — ניקוי תקופתי שמונע סתימות עתידיות." }
    ],
    technologies: [
      { name: "מצלמת ביוב מקצועית", brand: "Ridgid SeeSnake MAX", description: "מצלמה תעשייתית באורך 60 מטר עם ראש מסתובב 360°. צילום HD בתוך הצנרת לאבחון מדויק." },
      { name: "סילון לחץ גבוה", brand: "Rothenberger R600", description: "מכונת Hydro Jetting תעשייתית בלחץ של עד 300 בר. מפרק כל סתימה כולל שורשים ואבנית." },
      { name: "מכונת חיתוך שורשים", brand: "Ridgid K-7500", description: "מכונה חשמלית עם ראשי חיתוך שונים — לחיתוך שורשים, הסרת אבנית, ופתיחת סתימות קשות." },
      { name: "שיקום צנרת פנימי", brand: "Brawoliner", description: "טכנולוגיית Relining — שרוול פנימי שמצפה את הצנרת מבפנים ללא צורך בחפירה. פתרון חדשני שחוסך אלפי שקלים." }
    ],
    faqs: [
      { question: "כמה עולה פתיחת סתימת ביוב?", answer: 'פתיחה בסיסית: 300-800 ש"ח. עם צילום צנרת: 500-1,200 ש"ח. חיתוך שורשים: 800-2,000 ש"ח.' },
      { question: "מה זה שיקום צנרת ללא חפירה?", answer: "Relining — הכנסת שרוול פנימי שמצפה את הצנרת הקיימת. אין חפירה, אין הרס, ועמידות של 50+ שנה." },
      { question: "כמה פעמים צריך לנקות את קו הביוב?", answer: "מומלץ ניקוי מונע פעם בשנה. אם יש עצים בסביבה — פעמיים בשנה." },
      { question: "ריח ביוב בבית — מה הסיבה?", answer: "סיפון יבש, סתימה חלקית, סדק בצנרת, או בעיה באוורור. נבדוק ונפתור." }
    ],
    relatedServiceSlugs: ["drain-cleaning", "leak-detection", "pipe-repair"]
  },
  {
    slug: "emergency-plumbing-service",
    name: "שירות חירום 24/7",
    title: "אינסטלטור חירום 24/7 — הגעה מהירה תוך 30 דקות | ואקנין אינסטלציה",
    metaDescription: "אינסטלטור חירום 24/7. הגעה תוך 30 דקות לכל אזור מרכז. פיצוץ צנרת, הצפה, סתימה חמורה. צוות מוכן עם ציוד מלא.",
    h1: "שירות אינסטלציה חירום 24/7 — מגיעים תוך 30 דקות",
    intro: "מצב חירום אינסטלציה? פיצוץ צנרת, הצפה, נזילה חמורה? הצוות שלנו מוכן 24 שעות ביממה, 7 ימים בשבוע — כולל שבתות, חגים ושעות לילה. כל רכבי השירות מצוידים בציוד מלא של החברות המובילות, כך שנפתור את הבעיה במקום ובמהירות.",
    keywords: ["אינסטלטור חירום", "אינסטלטור חירום", "אינסטלציה חירום", "אינסטלטור 24 שעות", "אינסטלטור לילה", "אינסטלטור שבת", "הצפה בדירה", "פיצוץ צנרת", "חירום מים"],
    icon: "🚨",
    benefits: [
      "הגעה תוך 30 דקות",
      "זמינים 24/7 — כולל שבת וחגים",
      "רכב שירות מצויד בציוד מלא",
      "מחיר סופי לפני תחילת עבודה",
      "טכנאים מנוסים וממוגנים",
      "אחריות מלאה גם בקריאות חירום"
    ],
    process: [
      { title: "קבלת הקריאה", content: "מוקד 24/7 שמקבל את הפנייה, מבין את דחיפות המצב, ומכוון את הטכנאי הקרוב אליכם." },
      { title: "הגעה מהירה", content: "הגעה תוך 30 דקות עם רכב שירות מצויד בכל הציוד הנדרש." },
      { title: "סגירת נזק", content: "פעולה ראשונה — עצירת הנזילה/הצפה. סגירת שסתומים, ניתוב מים, ומניעת נזק נוסף." },
      { title: "תיקון מקצועי", content: "תיקון סופי או זמני מקצועי, בהתאם לשעה ולמצב. אם נדרש תיקון המשך — נתאם מועד." },
      { title: 'דו"ח לביטוח', content: 'תיעוד מלא של המקרה, צילומים, ודו"ח לחברת הביטוח.' }
    ],
    technologies: [
      { name: "רכב שירות מצויד", brand: "Mercedes Sprinter", description: "רכבי שירות גדולים ומצוידים בכל כלי העבודה, חלקי חילוף, ומערכות מתקדמות — מוכנים לכל תרחיש." },
      { name: "משאבת שאיבה", brand: "Grundfos Unilift", description: "משאבת שאיבה ניידת לשאיבת מי הצפה. קיבולת של 10,000 ליטר לשעה." },
      { name: "מייבש תעשייתי", brand: "Trotec TTK", description: "מייבש אוויר תעשייתי לייבוש מהיר של חללים לאחר הצפה. מונע עובש ונזקי רטיבות." },
      { name: "ציוד איטום חירום", brand: "Sylmasta / Belzona", description: "חומרי איטום חירום שעובדים גם על צנרת רטובה ותחת לחץ. פתרון מיידי עד לתיקון קבוע." }
    ],
    faqs: [
      { question: "כמה עולה קריאת חירום?", answer: 'קריאת חירום: 400-1,000 ש"ח בהתאם לשעה ולסוג העבודה. תמיד ניתן מחיר לפני תחילת עבודה.' },
      { question: "באילו שעות אתם עובדים?", answer: "24/7 — כולל לילות, שבתות וחגים. אין שעה שלא זמינים." },
      { question: "מה לעשות עד שאתם מגיעים?", answer: "סגרו את שסתום המים הראשי, כבו חשמל אם יש הצפה ליד שקעים, ואספו מים עם מגבות ודלי." },
      { question: "האם יש תוספת לשבת?", answer: "יש תוספת מינימלית לקריאות בשבתות וחגים. המחיר יימסר מראש בטלפון." }
    ],
    relatedServiceSlugs: ["drain-cleaning", "leak-detection", "pipe-repair"]
  }
];

const Link$3 = ({ to, children, ...props }) => /* @__PURE__ */ jsx("a", { href: to, ...props, children });
const topServiceSlugs = ["pipe-repair", "sewer-camera-inspection", "drain-cleaning"];
const ServicesSection = ({ showAll = false }) => {
  const displayServices = showAll ? servicePages : servicePages.filter((s) => topServiceSlugs.includes(s.slug));
  const ref = useScrollReveal();
  const serviceIcons = {
    "pipe-repair": repairIcon,
    "sewer-camera-inspection": cameraIcon,
    "drain-cleaning": drainIcon
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      id: "services",
      className: `${showAll ? "py-8" : "py-16 md:py-24"} flex flex-col items-center gap-6 bg-cover bg-center`,
      style: { backgroundImage: `url(${servicesBg.src || servicesBg})` },
      children: [
        !showAll && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1280px] px-6 py-6 md:py-[35px] flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "reveal reveal-up font-heading font-black text-3xl md:text-[60px] leading-none tracking-[-1.2px] text-[#0f2757] text-center", children: "השירותים שלנו" }),
          /* @__PURE__ */ jsx("div", { className: "h-8 md:h-[60px] w-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 ${showAll ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"} gap-6 md:gap-[50px] w-full max-w-[1314px] px-6 md:px-0 md:max-w-[calc(100%-48px)] items-stretch`, children: displayServices.map((service, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `touch-card reveal reveal-scale stagger-${Math.min(idx + 1, 6)} group relative overflow-hidden backdrop-blur-[12px] bg-white/60 border border-white/40 rounded-[24px] md:rounded-[32px] p-5 md:p-7 flex flex-col gap-3 md:gap-4 items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 hover:bg-white/85 hover:shadow-[0_45px_90px_-20px_rgba(15,39,87,0.35)]`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0 relative overflow-hidden transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", children: serviceIcons[service.slug] ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: serviceIcons[service.slug].src || serviceIcons[service.slug],
                  alt: service.name,
                  className: "w-full h-full object-contain mix-blend-multiply contrast-[1.1] brightness-[1.05]"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "text-5xl md:text-6xl filter drop-shadow-sm", children: service.icon }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-heading font-black text-xl md:text-[24px] leading-tight tracking-[-0.5px] text-[#0f2757] text-center", children: service.name }),
              /* @__PURE__ */ jsx("p", { className: "text-[14px] md:text-[15px] leading-[22px] text-[#334155] text-center line-clamp-3", children: service.intro.split(".")[0] + "." }),
              /* @__PURE__ */ jsxs(
                Link$3,
                {
                  to: `/services/${service.slug}`,
                  className: "mt-auto w-full bg-gradient-to-l from-[#ee4b2b] to-[#ff7a47] rounded-xl shadow-[0_10px_30px_0_rgba(255,91,43,0.35)] py-3 px-4 flex gap-2 items-center justify-center no-underline hover:scale-[1.02] active:scale-95 transition-all",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:-translate-x-1" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[15px] md:text-[17px] font-extrabold text-white whitespace-nowrap", children: "למידע נוסף" })
                  ]
                }
              )
            ]
          },
          service.slug
        )) }),
        !showAll && /* @__PURE__ */ jsxs(
          Link$3,
          {
            to: "/services",
            className: "mt-4 md:mt-6 flex items-center gap-3 px-8 md:px-10 py-3 md:py-[14px] pb-4 md:pb-[22px] bg-white/80 backdrop-blur-[4px] border-2 border-[#1162d4]/20 rounded-full shadow-[0_8px_30px_0_rgba(3,105,161,0.14)] text-lg md:text-xl font-bold text-[#1162d4] no-underline whitespace-nowrap transition-all hover:bg-white",
            children: [
              /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5 md:w-6 md:h-6" }),
              /* @__PURE__ */ jsx("span", { children: "לכל שירותי האינסטלציה שלנו" })
            ]
          }
        )
      ]
    }
  );
};

const checkIcon = new Proxy({"src":"/_astro/check.Dqlusbyk.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/check.png";
							}
							
							return target[name];
						}
					});

const benefits = [
  { title: "אחריות מלאה", description: "עבודה איכותית עם חומרים מהמותגים המובילים." },
  { title: "מחיר הוגן", description: "הצעת מחיר שקופה והסבר ברור לפני שמתחילים." },
  { title: "ציוד מתקדם", description: "טכנולוגיות וכלים מקצועיים לאבחון ולביצוע מדויק." },
  { title: "שירות מסודר", description: "מענה מהיר, תיאום ברור ועמידה בהתחייבויות." },
  { title: "ניסיון מוכח", description: "שנים של עבודת שטח, פתרונות מורכבים ולקוחות חוזרים." }
];
const WhyChooseUs = () => {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxs("section", { ref, id: "why-us", className: "bg-white py-16 md:py-24 px-6 md:px-16 lg:px-[320px] flex flex-col gap-12 md:gap-[72px] items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center flex flex-col gap-4 items-center max-w-[700px]", children: [
      /* @__PURE__ */ jsx("h2", { className: "reveal reveal-up font-heading font-bold text-2xl md:text-[36px] leading-tight tracking-[-0.72px] text-[#0f2757]", children: "למה לקוחות מרגישים בטוחים לבחור בנו" }),
      /* @__PURE__ */ jsx("p", { className: "reveal reveal-fade stagger-2 text-[16px] md:text-[18px] leading-[28px] text-[#676f7e]", children: "כי אינסטלציה טובה היא לא רק לפתור תקלה, אלא לתת שירות מדויק, נקי ואמין מהשיחה הראשונה." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full max-w-[1248px]", children: benefits.map((b, idx) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-scale stagger-${idx + 1} touch-card flex flex-col gap-4 items-center text-center group`, children: [
      /* @__PURE__ */ jsx("div", { className: "w-[120px] h-[120px] md:w-[160px] md:h-[160px] flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: checkIcon,
          alt: "",
          className: "w-full h-full object-contain drop-shadow-md"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 md:gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-black text-base md:text-[18px] leading-[24px] tracking-[-0.32px] text-[#0f2757]", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] md:text-[14px] leading-[20px] text-[#676f7e] max-w-[200px]", children: b.description })
      ] })
    ] }, b.title)) })
  ] });
};

const smartCableImg = new Proxy({"src":"/_astro/picote.Bq89lUmP.png","width":1024,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/picote.png";
							}
							
							return target[name];
						}
					});

const cameraImg = new Proxy({"src":"/_astro/ddssd.q-xe0KJ-.png","width":540,"height":459,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/ddssd.png";
							}
							
							return target[name];
						}
					});

const drainImg = new Proxy({"src":"/_astro/3.ITXG9ZJh.png","width":390,"height":491,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/3.png";
							}
							
							return target[name];
						}
					});

const pprImg = new Proxy({"src":"/_astro/4.DmMJsAep.png","width":1024,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/4.png";
							}
							
							return target[name];
						}
					});

const PrecisionSection = () => {
  const features = [
    {
      title: "טכנולוגיית סמארט כבל לצנרת",
      icon: Zap,
      iconBg: "#fee8d1",
      img: smartCableImg,
      imgClass: "cable",
      iconPos: "left"
    },
    {
      title: "צילום קווי ביוב וצנרת",
      icon: Camera,
      iconBg: "#fdcbc0",
      img: cameraImg,
      imgClass: "camera",
      iconPos: "right"
    },
    {
      title: "ציוד פתיחת סתימות מקצועי",
      icon: Wrench,
      iconBg: "#fbebdc",
      img: drainImg,
      imgClass: "sewer",
      iconPos: "left"
    },
    {
      title: "פתרונות PPR איכותיים",
      icon: ShieldCheck,
      iconBg: "#dcfce7",
      img: pprImg,
      imgClass: "ppr",
      iconPos: "right"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-12 md:py-20 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1686px] mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#f1f5f9] rounded-[32px] md:rounded-[48px] shadow-[0_32px_80px_0_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-[49px] flex flex-col gap-6 items-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[700px] flex flex-col items-center gap-3 md:gap-4 text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-heading font-black text-2xl md:text-[44px] leading-tight tracking-[-0.9px] flex flex-wrap justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#0f2757]", children: "פחות ניחושים," }),
        /* @__PURE__ */ jsx("span", { className: "text-[#1162d4]", children: "יותר דיוק" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[15px] md:text-[18px] leading-[28px] text-[#475569] flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx("p", { children: "הציוד המתקדם שלנו מאפשר לנו לראות מה שאחרים רק מנחשים," }),
        /* @__PURE__ */ jsx("p", { children: "ולטפל בבעיה מהשורש במינימום הרס." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-[552px] flex flex-col gap-6 md:gap-10 pt-4 md:pt-8 pb-2 md:pb-4", children: features.map((feat, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative h-20 md:h-24 bg-[#f8fafc]/20 border border-[#f1f5f9] rounded-[24px] md:rounded-[32px] flex items-center overflow-visible transition-all duration-500 hover:bg-white hover:scale-[1.02] hover:shadow-xl hover:border-[#1162d4]/10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: `flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-8 ${feat.iconPos === "right" ? "flex-row-reverse text-right" : "flex-row text-right"}`, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110",
                style: { backgroundColor: feat.iconBg },
                children: /* @__PURE__ */ jsx(feat.icon, { className: "w-5 h-5 md:w-7 md:h-7 text-[#0f2757]" })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-heading font-extrabold text-[15px] md:text-[19.2px] leading-tight md:leading-7 text-[#0f2757] transition-colors duration-300 group-hover:text-[#1162d4]", children: feat.title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `shrink-0 w-20 md:w-32 relative h-20 md:h-24 ${feat.iconPos === "right" ? "order-first" : "order-last"}`, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: feat.img,
              alt: feat.title,
              className: `absolute pointer-events-none max-w-none transition-transform duration-700 group-hover:scale-110 ${feat.imgClass === "cable" ? "right-[-12px] md:right-[-20px] top-[-40px] md:top-[-63px] h-[130px] md:h-[192px]" : feat.imgClass === "camera" ? "left-[-12px] md:left-[-20px] top-[-30px] md:top-[-50px] h-[115px] md:h-[160px]" : feat.imgClass === "sewer" ? "right-[-12px] md:right-[-20px] top-[-30px] md:top-[-50px] h-[120px] md:h-[170px]" : feat.imgClass === "ppr" ? "left-[-12px] md:left-[-20px] top-[-40px] md:top-[-65px] h-[140px] md:h-[210px]" : "left-[-12px] md:left-[-20px] top-[-24px] md:top-[-40px] h-[108px] md:h-[150px]"}`
            }
          ) })
        ]
      },
      idx
    )) })
  ] }) }) });
};

const Link$2 = ({ to, href, children, ...props }) => /* @__PURE__ */ jsx("a", { href: to || href, ...props, children });
const tools = [
  {
    icon: Search,
    title: "אבחון תקלה",
    description: "ענו על שאלות וגלו מה הבעיה",
    href: "/tools/diagnosis",
    gradient: "from-blue-500 to-cyan-400",
    visible: true
  },
  {
    icon: Calculator,
    title: "מחשבון עלויות",
    description: "הערכת מחיר מיידית לשירות",
    href: "/tools/cost-calculator",
    gradient: "from-emerald-500 to-teal-400",
    visible: false
    // מוסתר זמנית — הקובץ קיים ב-/tools/cost-calculator
  },
  {
    icon: AlertTriangle,
    title: "בדיקת חירום",
    description: "האם התקלה דחופה?",
    href: "/tools/emergency-checker",
    gradient: "from-orange-500 to-amber-400",
    visible: true
  },
  {
    icon: Camera,
    title: "אבחון בתמונה",
    description: "שלחו תמונה ונאבחן",
    href: "/tools/photo-upload",
    gradient: "from-purple-500 to-pink-400",
    visible: true
  }
];
const ToolsSection = ({ hideHeader = false }) => {
  return /* @__PURE__ */ jsx("section", { id: "tools", className: `relative bg-secondary overflow-hidden ${hideHeader ? "py-10" : "py-24"}`, children: /* @__PURE__ */ jsxs("div", { className: "container relative z-10", children: [
    !hideHeader && /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight", children: "כלים חכמים לאבחון מהיר" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: "השתמשו בכלים המתקדמים שלנו כדי להבין את הבעיה, להעריך עלויות מראש, ולקבל החלטות חכמות — הכל בחינם וללא התחייבות." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: tools.filter((t) => t.visible).map((tool) => /* @__PURE__ */ jsxs(
      Link$2,
      {
        href: tool.href,
        className: "group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" }),
          /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsx(tool.icon, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading font-bold text-lg md:text-xl text-foreground mb-3 text-center", children: tool.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center leading-relaxed", children: tool.description })
        ]
      },
      tool.href
    )) })
  ] }) });
};

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const huliotLogo = createSvgComponent({"meta":{"src":"/_astro/huliot.g-JBrknl.svg","width":313,"height":44,"format":"svg"},"attributes":{"width":"313","height":"44","viewBox":"0 0 313 44","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_1795_6522)\">\n<path d=\"M89.2177 21.5391H77.2144V34.5324H70.3569V2.81641H77.2144V15.449H89.2177V2.81641H96.0752V34.5324H89.2177V21.5391Z\" fill=\"#00A55B\" />\n<path d=\"M115.34 30.5352H115.115C114.302 32.9432 112.363 35.0792 108.482 35.0792C103.655 35.0792 101.082 31.6719 101.082 25.6734V10.6787H107.76V25.0836C107.76 27.9927 108.707 29.6276 111.143 29.6276C113.219 29.6276 115.34 28.4451 115.34 26.1745V10.6816H122.018V34.5352H115.34V30.5352Z\" fill=\"#00A55B\" />\n<path d=\"M133.657 34.5324C129.1 34.5324 127.025 32.2161 127.025 27.9899V2.81641H133.703V29.307H136.68V34.5324H133.657Z\" fill=\"#00A55B\" />\n<path d=\"M139.48 4.81775V3.81848C139.48 1.91157 140.654 0.5 143.361 0.5C146.067 0.5 147.242 1.90871 147.242 3.81848V4.81775C147.242 6.72466 146.067 8.13337 143.361 8.13337C140.654 8.13337 139.48 6.72466 139.48 4.81775ZM140.02 10.6788H146.698V34.5324H140.02V10.6788Z\" fill=\"#00A55B\" />\n<path d=\"M150.872 22.5841C150.872 14.9049 155.023 10.1348 161.971 10.1348C168.92 10.1348 173.071 14.9049 173.071 22.5841C173.071 30.2633 168.92 35.0792 161.971 35.0792C155.023 35.0792 150.872 30.2633 150.872 22.5841ZM166.122 25.0379V20.1761C166.122 17.1783 164.587 15.4518 161.971 15.4518C159.356 15.4518 157.82 17.1783 157.82 20.1761V25.0379C157.82 28.0357 159.356 29.7622 161.971 29.7622C164.587 29.7622 166.122 28.0357 166.122 25.0379Z\" fill=\"#00A55B\" />\n<path d=\"M186.786 34.5323C182.183 34.5323 179.746 32.1244 179.746 27.5804V15.9042H176.408V10.6788H178.077C179.883 10.6788 180.423 9.77111 180.423 8.13334V2.73901H186.425V10.6788H191.116V15.9042H186.425V29.3069H190.754V34.5323H186.783H186.786Z\" fill=\"#00A55B\" />\n<path d=\"M191.281 5.63943C191.281 3.82414 192.6 2.49561 194.28 2.49561C195.96 2.49561 197.279 3.82414 197.279 5.63943C197.279 7.45472 195.96 8.78326 194.28 8.78326C192.6 8.78326 191.281 7.45472 191.281 5.63943ZM196.768 5.80836V5.47337C196.768 4.11619 195.738 2.9709 194.283 2.9709C192.827 2.9709 191.798 4.11619 191.798 5.47337V5.80836C191.798 7.16553 192.827 8.31083 194.283 8.31083C195.738 8.31083 196.768 7.16553 196.768 5.80836ZM193.677 7.28865H193.208V4.06752H194.51C195.116 4.06752 195.48 4.4197 195.48 5.02956C195.48 5.54781 195.207 5.85418 194.843 5.9458L195.599 7.28865H195.085L194.371 5.99161H193.674V7.28865H193.677ZM194.496 5.6108C194.829 5.6108 194.982 5.47337 194.982 5.167V4.92362C194.982 4.61726 194.831 4.46551 194.496 4.46551H193.677V5.6108H194.496Z\" fill=\"#00A55B\" />\n<path d=\"M54.8935 9.33594C59.1296 15.363 58.7202 23.758 53.5004 29.3471C48.2834 34.9361 39.9902 35.8666 33.7554 31.9784L54.8935 9.33594Z\" fill=\"#5FD246\" />\n<path d=\"M50.3105 4.99822L39.7542 16.3051C37.3746 18.8534 33.3943 18.9765 30.8612 16.58C28.3309 14.1835 28.2086 10.1749 30.5882 7.6238C35.7996 2.0405 44.0814 1.11281 50.3105 4.99535\" fill=\"#5FD246\" />\n<path d=\"M2.87999 27.6522C-1.35616 21.6251 -0.943914 13.233 4.27308 7.64392C9.49008 2.0549 17.7833 1.12721 24.0181 5.01261L2.87999 27.6522Z\" fill=\"#00A55B\" />\n<path d=\"M7.46301 31.9928L18.0193 20.6859C20.3989 18.1376 24.3792 18.0145 26.9123 20.411C29.4426 22.8076 29.5649 26.8161 27.1853 29.3672C21.9739 34.9505 13.6921 35.8782 7.46301 31.9957\" fill=\"#00A55B\" />\n<path d=\"M219.748 29.5102H219.566C218.881 32.5481 215.682 34.8472 210.838 34.8472C203.116 34.8472 197.632 29.0492 197.632 18.2806C197.632 7.51198 203.113 1.62231 211.384 1.62231C217.05 1.62231 220.979 4.42828 223.125 8.75462L219.469 10.9164C218.099 7.69523 215.31 5.62511 211.381 5.62511C205.99 5.62511 202.38 9.44466 202.38 15.6092V20.8088C202.38 26.9762 205.945 30.8416 211.654 30.8416C215.904 30.8416 219.421 28.6798 219.421 24.2619V21.3643H212.612V17.4989H223.714V34.2946H219.739V29.5102H219.748Z\" fill=\"#5FD246\" />\n<path d=\"M228.931 34.2947V10.4612H233.181V15.0166H233.409C234.185 12.6687 236.286 10.4612 240.079 10.4612H241.495V14.7417H239.394C235.464 14.7417 233.179 16.305 233.179 18.6529V34.2976H228.928L228.931 34.2947Z\" fill=\"#5FD246\" />\n<path d=\"M242.319 22.3781C242.319 14.7848 246.66 9.90869 253.103 9.90869C259.545 9.90869 263.886 14.7876 263.886 22.3781C263.886 29.9685 259.545 34.8474 253.103 34.8474C246.66 34.8474 242.319 29.9685 242.319 22.3781ZM259.363 24.1733V20.5828C259.363 15.9358 256.804 13.5879 253.103 13.5879C249.401 13.5879 246.842 15.9358 246.842 20.5828V24.1733C246.842 28.8203 249.401 31.1682 253.103 31.1682C256.804 31.1682 259.363 28.8203 259.363 24.1733Z\" fill=\"#5FD246\" />\n<path d=\"M282.343 30.3835H282.116C281.249 32.6855 279.421 34.8473 275.492 34.8473C270.647 34.8473 267.633 31.4887 267.633 25.6906V10.4583H271.884V25.0464C271.884 29.0492 273.575 31.1193 276.91 31.1193C279.605 31.1193 282.346 29.7392 282.346 26.7472V10.4583H286.596V34.2946H282.346V30.3835H282.343Z\" fill=\"#5FD246\" />\n<path d=\"M292.257 10.4613H296.507V14.3725H296.689C297.787 11.4262 300.255 9.90869 303.499 9.90869C309.438 9.90869 313.003 14.6473 313.003 22.3781C313.003 30.1088 309.438 34.8474 303.499 34.8474C300.255 34.8474 297.787 33.3299 296.689 30.3837H296.507V43.4973H292.257V10.4613ZM308.477 24.4052V20.3566C308.477 16.3538 306.054 13.6395 302.262 13.6395C299.063 13.6395 296.505 15.4805 296.505 18.0116V26.7531C296.505 29.2842 299.063 31.1252 302.262 31.1252C306.054 31.1252 308.477 28.4109 308.477 24.4081V24.4052Z\" fill=\"#5FD246\" />\n</g>\n<defs>\n<clipPath id=\"clip0_1795_6522\">\n<rect width=\"313\" height=\"43\" fill=\"white\" transform=\"translate(0 0.5)\" />\n</clipPath>\n</defs>\n"});

const plassonLogo = new Proxy({"src":"/_astro/plasson.BA9uVLRl.png","width":1551,"height":183,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/brands/plasson.png";
							}
							
							return target[name];
						}
					});

const spLogo = createSvgComponent({"meta":{"src":"/_astro/sp.CneDQ9l-.svg","width":290,"height":43,"format":"svg"},"attributes":{"viewBox":"0 0 289.73 43.26"},"children":"<defs><style>.d{fill:#f3bd1a;}.e{fill:#2d2d2b;}</style></defs><g id=\"a\"></g><g id=\"b\"><g id=\"c\"><g><path class=\"e\" d=\"M53.1,20.8c-1.07-4.56-5.66-7-12.75-7H15.74c-1.53,0-2.29-.55-2.29-1.66s.76-1.66,2.29-1.66H53.1V0H19.77C5.95,0,0,3.35,0,11.92c0,9.7,5.02,12.36,19.8,12.36h14.53c6.94,0,6.85,5.86-.03,5.86H5.19c-2.87,0-5.19,2.35-5.19,5.24s2.33,5.24,5.19,5.24H40.35c.13,0,.25,0,.38,0h0c.12,0,.25,0,.37,0h0c.12,0,.24,0,.36-.01h0c.12,0,.24,0,.35-.02h.01c.12,0,.23-.01,.35-.02h.01c.11,0,.23-.02,.34-.02h.15c.07-.02,.14-.03,.21-.03h0c.11-.01,.22-.02,.32-.03h0l.15-.02c.06,0,.13-.02,.19-.02h0c.1-.01,.21-.03,.31-.04h0l.17-.03c.05,0,.11-.02,.16-.02l.12-.02,.2-.03,.12-.02c.07-.01,.13-.02,.2-.04l.13-.02c.06-.01,.12-.02,.19-.04,.06-.01,.11-.02,.16-.04l.13-.03c.06-.01,.11-.03,.17-.04,.05-.01,.1-.02,.14-.03l.13-.03c.06-.01,.11-.03,.17-.04,.05-.01,.11-.03,.16-.04l.13-.04,.17-.05,.11-.03c.05-.02,.1-.03,.15-.05l.13-.04s.1-.03,.15-.05l.12-.04,.14-.05s.09-.03,.14-.05l.13-.05,.13-.05s.09-.04,.14-.06l.12-.05s.09-.04,.13-.06c.04-.02,.08-.04,.12-.05l.13-.06,.12-.06,.12-.06,.11-.06s.09-.05,.13-.07c.03-.02,.07-.04,.1-.05,.04-.02,.08-.05,.13-.07l.11-.06,.11-.07s.08-.05,.12-.07c.04-.02,.07-.04,.11-.07,.04-.02,.07-.04,.11-.07,.04-.02,.08-.05,.11-.08l.1-.07s.07-.05,.1-.07c.04-.03,.07-.05,.11-.08l.09-.07,.11-.08,.09-.07s.07-.05,.1-.08c.03-.03,.06-.05,.09-.08,.03-.03,.06-.05,.09-.08,.03-.03,.07-.06,.1-.09,.03-.03,.06-.05,.08-.08,.03-.03,.06-.05,.09-.08,.03-.03,.06-.06,.09-.09l.08-.08s.06-.06,.09-.09c.03-.03,.05-.06,.08-.09l.08-.09,.08-.09s.05-.06,.08-.09c.03-.03,.05-.06,.08-.09,.02-.03,.05-.06,.07-.09,.03-.03,.05-.07,.08-.1l.07-.09,.08-.1,.06-.09s.05-.07,.07-.11c.02-.03,.04-.06,.06-.09,.02-.03,.04-.07,.06-.1,.02-.03,.04-.07,.06-.1,.02-.04,.04-.07,.06-.11l.06-.1s.04-.07,.06-.11l.06-.11,.05-.11s.03-.07,.05-.1c.02-.04,.04-.08,.06-.12l.04-.1,.05-.12,.04-.11s.03-.08,.05-.12l.04-.11,.04-.12s.03-.08,.04-.11l.04-.12s.03-.08,.04-.12l.03-.11s.03-.09,.04-.13l.03-.12,.03-.11v-12.82Z\"></path><path class=\"d\" d=\"M89.64,0H55.95V10.48h37.72c1.53,0,2.29,.55,2.29,1.66s-.76,1.66-2.29,1.66h-24.61c-8.14,0-12.99,3.21-12.99,9.17v11.33h0c0,3.18,2.35,5.87,5.46,6.27h0c.05,0,.1,.01,.15,.02h0c.05,0,.1,.01,.16,.01h0c.05,0,.1,0,.16,.01h0c.05,0,.11,0,.16,0,.05,0,.11,0,.16,0,3.46,0,6.26-2.83,6.26-6.31,0-10.05,.68-10.03,6.49-10.03h14.53c14.78,0,19.8-2.66,19.8-12.36C109.41,3.35,103.46,0,89.64,0\"></path><path class=\"e\" d=\"M282.76,40.29h1.31l.64-5.48c.07-.61,.26-1.09,.57-1.45,.31-.36,.7-.53,1.16-.53,.64,0,1.13,.2,1.47,.59,.34,.39,.51,.96,.51,1.71v4.1h-2.14v1.06h3.47v-5.02c0-1.17-.31-2.05-.9-2.65s-1.46-.9-2.6-.9c-.58,0-1.21,.06-1.89,.18-.69,.12-1.31,.27-1.86,.46l.31,1c.27-.09,.56-.18,.88-.26,.32-.08,.59-.14,.8-.18v.02c-.06,.05-.11,.09-.13,.1-.23,.19-.44,.45-.61,.8-.17,.35-.29,.71-.33,1.1l-.64,5.35Zm-8.88,2.97h1.29v-6.21c0-.39,.01-.71,.04-.97s.07-.5,.13-.71h-1.09c-.12,.25-.21,.5-.27,.75-.06,.25-.1,.59-.1,1.01v6.13Zm2.68-2.97c.74-.01,1.39-.16,1.94-.45,.55-.28,.98-.68,1.29-1.2,.3-.52,.45-1.13,.45-1.83v-4.95h-6.52v1.07h5.19v3.91c0,.49-.1,.91-.29,1.26-.19,.36-.47,.63-.82,.83-.35,.2-.76,.3-1.24,.31v1.04Zm-5.5-1.12v-4.12c0-1.05-.28-1.84-.84-2.37-.56-.53-1.39-.8-2.49-.8h-2.11v1.07h2.04c.73,0,1.26,.16,1.59,.49,.33,.33,.49,.85,.49,1.58v4.21h-4.57v1.07h6.92v-1.01l-1.02-.11Zm-8.95,1.12h1.33v-8.42h-2.31v1.07h.98v7.35Zm-2.17-8.42h-1.49l-1.86,3.39-2.24-3.39h-1.49l5.03,7.35h-4.52v1.07h6.23v-.67l-2.22-3.21,2.58-4.54Zm-11.93,0h-3.92v1.07h1.58c-.2,.26-.36,.6-.47,1.03-.11,.43-.17,.86-.17,1.3v2.66c0,.46-.1,.8-.28,1.01-.19,.21-.49,.32-.9,.32-.18,0-.34,0-.49-.03v1.07c.34,.04,.62,.06,.82,.06,.7,0,1.23-.2,1.6-.6,.37-.4,.55-.99,.55-1.76v-2.84c0-.42,.05-.84,.14-1.24,.09-.4,.22-.73,.38-.99h1.19c.7,0,1.2,.16,1.51,.49,.31,.33,.47,.86,.47,1.59v5.27h1.33v-5.19c0-1.09-.28-1.9-.83-2.43-.55-.53-1.38-.8-2.5-.8m-9.05,0h-1.49l-2.03,3.6-2.61-3.6h-1.49l1.82,2.52c-.52,.24-.9,.59-1.15,1.05-.25,.46-.37,1.06-.37,1.79v3.05h1.29v-3.53c0-.78,.26-1.32,.76-1.64l3.75,5.17h1.48l-2.66-3.68,2.7-4.74Zm-11.18,4.7h1.33v-4.7h-2.87v1.07h1.54v3.63Zm-5.45,3.87c.71,0,1.26-.2,1.64-.6,.38-.4,.57-.99,.57-1.76v-6.2h-2.98v1.07h1.65v5.02c0,.47-.1,.81-.29,1.04-.2,.22-.49,.34-.88,.34s-.73-.03-1.04-.09l-.04,1.04c.47,.1,.93,.16,1.36,.16m-4.21-.14h1.32v-5.77c0-.55-.11-1.03-.33-1.42-.22-.39-.54-.7-.96-.91-.42-.21-.92-.32-1.49-.32h-2.87v1.07h2.83c.47,0,.83,.13,1.1,.4,.27,.26,.4,.62,.4,1.08v5.87Zm-7.39,0h1.33v-8.42h-2.31v1.07h.98v7.35Zm-8.38-7.35h4.07v6.28h-4.07v-6.28Zm-1.32,7.35h6.72v-8.42h-6.72v8.42Zm-9.32-8.42h-3.92v1.07h1.58c-.2,.26-.36,.6-.47,1.03-.11,.43-.17,.86-.17,1.3v2.66c0,.46-.09,.8-.28,1.01-.19,.21-.49,.32-.9,.32-.18,0-.34,0-.49-.03v1.07c.34,.04,.62,.06,.82,.06,.7,0,1.23-.2,1.6-.6,.37-.4,.55-.99,.55-1.76v-2.84c0-.42,.05-.84,.14-1.24,.09-.4,.22-.73,.38-.99h1.19c.7,0,1.2,.16,1.51,.49,.31,.33,.47,.86,.47,1.59v5.27h1.33v-5.19c0-1.09-.27-1.9-.83-2.43-.55-.53-1.38-.8-2.5-.8m-7.35,0v5.1c0,.65-.16,1.18-.48,1.59-.32,.41-.77,.68-1.34,.81-.1-.17-.18-.35-.25-.55-.07-.2-.13-.45-.19-.74l-1.36-6.21h-1.33l1.39,6.14c.12,.54,.35,1.01,.71,1.42-.66-.04-1.41-.22-2.24-.54l-.32,.99c1.04,.39,2.04,.59,2.99,.59,.74,0,1.4-.14,1.96-.41,.57-.27,1-.68,1.32-1.21,.31-.53,.47-1.18,.47-1.93v-5.05h-1.32Zm-12.87,6.1l1.1,.04c.25-.25,.43-.56,.55-.92,.12-.36,.18-.78,.18-1.27v-3.95h-1.29v4.19c0,.43-.04,.81-.13,1.14-.09,.33-.22,.58-.4,.77m-2.02-6.1h-1.29v7.65c.66,.32,1.36,.56,2.09,.73,.73,.16,1.45,.25,2.14,.25,.9,0,1.71-.14,2.43-.41,.72-.27,1.3-.68,1.73-1.23,.43-.55,.64-1.21,.64-2v-4.98h-1.29v4.86c0,.59-.15,1.09-.46,1.49-.31,.4-.73,.7-1.27,.9-.54,.2-1.15,.3-1.84,.3-.46,0-.94-.05-1.44-.16-.5-.11-.99-.26-1.44-.46v-6.93Zm-5.06,4.7h1.33v-4.7h-2.87v1.07h1.54v3.63Zm-4.56,3.72h1.33v-8.42h-2.31v1.07h.98v7.35Zm-6.1-8.42h-3.92v1.07h1.58c-.2,.26-.36,.6-.47,1.03-.11,.43-.17,.86-.17,1.3v2.66c0,.46-.1,.8-.28,1.01-.19,.21-.49,.32-.9,.32-.18,0-.34,0-.49-.03v1.07c.34,.04,.62,.06,.82,.06,.7,0,1.23-.2,1.6-.6,.37-.4,.55-.99,.55-1.76v-2.84c0-.42,.05-.84,.14-1.24,.09-.4,.22-.73,.38-.99h1.19c.7,0,1.2,.16,1.51,.49s.47,.86,.47,1.59v5.27h1.33v-5.19c0-1.09-.27-1.9-.82-2.43-.55-.53-1.38-.8-2.5-.8m-9.74,7.3v-4.12c0-1.05-.28-1.84-.84-2.37-.56-.53-1.39-.8-2.49-.8h-2.11v1.07h2.04c.73,0,1.26,.16,1.59,.49,.33,.33,.49,.85,.49,1.58v4.21h-4.57v1.07h6.92v-1.01l-1.02-.11Zm-9.84,1.26c.71,0,1.26-.2,1.64-.6,.38-.4,.57-.99,.57-1.76v-6.2h-2.98v1.07h1.65v5.02c0,.47-.1,.81-.29,1.04-.19,.22-.49,.34-.88,.34s-.73-.03-1.04-.09l-.04,1.04c.47,.1,.93,.16,1.37,.16m-4.27-3.87h1.33v-4.7h-2.87v1.07h1.54v3.63Zm-4.42,0h1.33v-4.7h-2.87v1.07h1.54v3.63Zm-9.47,3.72h1.29v-2.96c0-.38,.01-.7,.04-.96,.03-.27,.07-.51,.13-.73h-1.09c-.12,.25-.21,.5-.27,.75-.06,.25-.1,.59-.1,1.02v2.87Zm5.12,0h1.33v-5.24c0-1.05-.28-1.84-.85-2.37-.56-.53-1.4-.8-2.5-.8h-3.12v1.07h3.05c.73,0,1.26,.16,1.59,.49,.33,.33,.49,.85,.49,1.58v5.28Z\"></path><path class=\"e\" d=\"M284.71,19.25c-.69,.55-1.71,.83-3.08,.83-1.58,0-2.79-.35-3.64-1.05-.85-.7-1.27-1.69-1.27-2.98h-3.92c0,1.42,.38,2.65,1.14,3.72,.76,1.06,1.82,1.9,3.19,2.5,1.37,.6,2.87,.91,4.5,.91,2.47,0,4.42-.55,5.86-1.67,1.44-1.11,2.16-2.61,2.16-4.49,0-1.16-.25-2.17-.74-3.03-.5-.86-1.28-1.63-2.34-2.29-1.06-.67-2.47-1.26-4.23-1.78-1.76-.52-3.02-1.05-3.78-1.6-.77-.55-1.15-1.24-1.15-2.06,0-.98,.35-1.74,1.06-2.28,.71-.55,1.7-.82,2.98-.82,1.37,0,2.43,.33,3.17,.99,.74,.66,1.11,1.58,1.11,2.74h3.9c0-1.3-.35-2.49-1.05-3.56-.7-1.07-1.67-1.89-2.9-2.47C284.47,.29,283.07,0,281.5,0c-2.37,0-4.29,.59-5.77,1.77-1.48,1.18-2.22,2.68-2.22,4.49,0,2.08,1.03,3.76,3.08,5.05,1.07,.67,2.52,1.28,4.34,1.83,1.82,.55,3.08,1.09,3.77,1.63,.7,.54,1.05,1.3,1.05,2.29,0,.91-.34,1.64-1.03,2.19m-15.52-9.55h-9.27V3.47h10.72V.31h-14.64V22.87h14.75v-3.16h-10.83v-6.91h9.27v-3.1ZM251.19,.31h-3.9V22.87h3.9V.31Zm-20.02,3.16h4.14c1.36,.02,2.39,.36,3.08,1.02s1.03,1.6,1.03,2.8-.37,2.07-1.11,2.73c-.74,.67-1.78,1-3.1,1h-4.03V3.47Zm8.89,19.4h4.2v-.2l-5.07-9.39c1.3-.55,2.32-1.33,3.04-2.35,.73-1.02,1.09-2.28,1.09-3.79,0-2.21-.71-3.9-2.12-5.07s-3.42-1.75-6.03-1.75h-7.93V22.87h3.92V14.19h4.37l4.52,8.68ZM224.29,.31h-17.9V3.47h6.97V22.87h3.89V3.47h7.03V.31Zm-24.69,18.94c-.69,.55-1.71,.83-3.08,.83-1.58,0-2.79-.35-3.64-1.05-.85-.7-1.27-1.69-1.27-2.98h-3.92c0,1.42,.38,2.65,1.14,3.72,.76,1.06,1.82,1.9,3.19,2.5,1.37,.6,2.87,.91,4.5,.91,2.47,0,4.42-.55,5.86-1.67,1.44-1.11,2.16-2.61,2.16-4.49,0-1.16-.25-2.17-.74-3.03-.5-.86-1.28-1.63-2.34-2.29-1.06-.67-2.47-1.26-4.23-1.78-1.76-.52-3.02-1.05-3.78-1.6-.76-.55-1.15-1.24-1.15-2.06,0-.98,.35-1.74,1.06-2.28,.71-.55,1.7-.82,2.98-.82,1.37,0,2.43,.33,3.17,.99,.74,.66,1.11,1.58,1.11,2.74h3.9c0-1.3-.35-2.49-1.05-3.56-.7-1.07-1.67-1.89-2.9-2.47C199.36,.29,197.96,0,196.39,0c-2.37,0-4.29,.59-5.77,1.77-1.48,1.18-2.22,2.68-2.22,4.49,0,2.08,1.03,3.76,3.08,5.05,1.07,.67,2.52,1.28,4.34,1.83,1.82,.55,3.08,1.09,3.77,1.63,.7,.54,1.05,1.3,1.05,2.29,0,.91-.34,1.64-1.03,2.19M180.75,.31V15.25c0,3.18-1.51,4.77-4.53,4.77-1.49,0-2.61-.4-3.38-1.19-.76-.79-1.15-1.94-1.15-3.45V.31h-3.9V15.37c0,2.45,.76,4.36,2.28,5.74,1.52,1.38,3.57,2.07,6.15,2.07s4.59-.7,6.13-2.1,2.3-3.3,2.3-5.69V.31h-3.9Zm-26.67,3.16c2.02,0,3.57,.64,4.63,1.93s1.6,3.15,1.6,5.6v1.25c-.02,2.4-.58,4.24-1.68,5.53-1.1,1.28-2.68,1.93-4.73,1.93h-2.56V3.47h2.74Zm-.17,19.4c2.04,0,3.84-.44,5.42-1.32,1.57-.88,2.79-2.13,3.64-3.75,.85-1.62,1.28-3.5,1.28-5.64v-1.13c0-2.11-.42-3.98-1.27-5.61-.85-1.63-2.04-2.89-3.59-3.78-1.54-.89-3.31-1.33-5.31-1.33h-6.66V22.87h6.49ZM142.79,.31h-3.89V16.38L128.82,.31h-3.92V22.87h3.92V6.86l10.06,16.01h3.92V.31Zm-22.72,0h-3.9V22.87h3.9V.31Z\"></path></g></g></g>"});

const geberitLogo = new Proxy({"src":"/_astro/geberit-logo-png-transparent.B2P1fs--.png","width":2400,"height":2400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/geberit-logo-png-transparent.png";
							}
							
							return target[name];
						}
					});

const groheLogo = new Proxy({"src":"/_astro/grohe.CmSeIBzD.png","width":360,"height":360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/grohe.png";
							}
							
							return target[name];
						}
					});

const hansgroheLogo = new Proxy({"src":"/_astro/hansgrohe.CU8W4nui.png","width":1600,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/technology/hansgrohe.png";
							}
							
							return target[name];
						}
					});

const ridgidLogo = createSvgComponent({"meta":{"src":"/_astro/ridgid.6onHwD0t.svg","width":420,"height":120,"format":"svg"},"attributes":{"width":"420","height":"120","viewBox":"0 0 420 120","fill":"none"},"children":"\n  <rect width=\"420\" height=\"120\" fill=\"white\" />\n  <text x=\"10\" y=\"58\" fill=\"#1F1A1C\" font-family=\"Arial, Helvetica, sans-serif\" font-size=\"64\" font-weight=\"700\" letter-spacing=\"-2\">\n    RIDGID\n  </text>\n  <rect x=\"12\" y=\"72\" width=\"360\" height=\"10\" fill=\"#E51B23\" />\n"});

const rothenbergerLogo = createSvgComponent({"meta":{"src":"/_astro/rothenberger.ur9_yFts.svg","width":1280,"height":260,"format":"svg"},"attributes":{"width":"1280","height":"260","viewBox":"0 0 1280 260","fill":"none"},"children":"\n  <rect width=\"1280\" height=\"260\" fill=\"white\" />\n  <path d=\"M46 43C57 104 93 151 152 184L133 221C74 193 35 144 20 78L46 43Z\" fill=\"#D50023\" />\n  <path d=\"M158 220C102 196 65 149 49 88L80 55C93 113 125 154 178 181L158 220Z\" fill=\"#D50023\" />\n  <path d=\"M186 196V42H302C359 42 396 74 396 126C396 164 374 192 336 205L392 196H186ZM259 149H293C317 149 332 139 332 118C332 98 317 88 293 88H259V149Z\" fill=\"#1A1721\" />\n  <path d=\"M470 202C399 202 347 152 347 99C347 46 399 -4 470 -4C541 -4 593 46 593 99C593 152 541 202 470 202ZM470 147C504 147 529 125 529 99C529 73 504 51 470 51C436 51 411 73 411 99C411 125 436 147 470 147Z\" fill=\"#1A1721\" />\n  <path d=\"M650 196V91H580V42H795V91H724V196H650Z\" fill=\"#1A1721\" />\n  <path d=\"M809 196V42H882V99H956V42H1029V196H956V142H882V196H809Z\" fill=\"#1A1721\" />\n  <path d=\"M1061 196V42H1257V91H1133V102H1244V137H1133V148H1263V196H1061Z\" fill=\"#1A1721\" />\n  <path d=\"M606 234C617 221 633 214 651 214C676 214 694 228 694 250C694 272 676 286 651 286C630 286 614 277 605 262H641C644 267 649 270 656 270C666 270 673 262 673 250C673 238 666 230 656 230C649 230 644 233 641 238H606V234Z\" fill=\"#5A5560\" />\n  <path d=\"M709 284V216H742C760 216 771 225 771 240C771 249 766 257 757 261L772 284H746L735 266H729V284H709ZM729 250H739C746 250 750 246 750 240C750 234 746 230 739 230H729V250Z\" fill=\"#5A5560\" />\n  <path d=\"M789 284V216H850V231H809V242H846V256H809V269H852V284H789Z\" fill=\"#5A5560\" />\n  <path d=\"M868 284V216H899L923 253L947 216H978V284H959V245L941 273H905L887 245V284H868Z\" fill=\"#5A5560\" />\n  <path d=\"M1001 284V216H1021V284H1001Z\" fill=\"#5A5560\" />\n  <path d=\"M1040 284V216H1066L1100 252V216H1120V284H1094L1060 248V284H1040Z\" fill=\"#5A5560\" />\n  <path d=\"M1140 284V216H1201V231H1160V242H1197V256H1160V269H1203V284H1140Z\" fill=\"#5A5560\" />\n"});

const brands = [
  { name: "Geberit", logo: geberitLogo },
  { name: "SP", logo: spLogo },
  { name: "PLASSON", logo: plassonLogo },
  { name: "Huliot Group", logo: huliotLogo },
  { name: "RIDGID", logo: ridgidLogo },
  { name: "Rothenberger", logo: rothenbergerLogo },
  { name: "Hansgrohe", logo: hansgroheLogo },
  { name: "Grohe", logo: groheLogo }
];
const LeadingBrandsSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#f8fafc] py-20 px-4 md:px-[336px]", id: "brands", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0f2757] rounded-[40px] p-12 flex flex-col gap-6 items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[1248px] mx-auto transition-transform hover:scale-[1.01]", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-heading font-black text-3xl md:text-[48px] leading-[52px] tracking-[-0.96px] text-white text-center", children: [
      "איכות מתחילה בבחירת",
      /* @__PURE__ */ jsx("span", { className: "block text-[#ee4b2b]", children: "החומרים והציוד" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl leading-[28px] text-white/70 text-center max-w-2xl", children: [
      "אנחנו בוחרים רק את המותגים שעוברים את מבחן השטח שלנו,",
      /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
      "כדי להבטיח לכם שקט נפשי לשנים קדימה."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-2", children: brands.map((brand) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-white border border-white/15 rounded-2xl h-24 flex items-center justify-center p-4 shadow-sm overflow-hidden",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: brand.logo,
            alt: brand.name,
            className: "max-h-11 max-w-[110px] object-contain"
          }
        )
      },
      brand.name
    )) })
  ] }) });
};

const reviews = [
  {
    name: "שרה מ.",
    text: "מקצועיים, נקיים ובמחיר סביר. החליפו לנו את דוד השמש הישן והשירות היה מצוין מתחילתו ועד סופו.",
    rating: 5,
    avatar: "ש"
  },
  {
    name: "דוד כ.",
    text: "התקשרתי בחצות עם צינור פרוץ. הם הגיעו תוך 30 דקות ותיקנו הכל במהירות. ממליץ בחום!",
    rating: 5,
    avatar: "ד"
  },
  {
    name: "אבי ר.",
    text: "האינסטלטור הכי טוב שהזמנו. פתר סתימה עקשנית ששני אינסטלטורים אחרים לא הצליחו להתמודד איתה. מחיר הוגן.",
    rating: 5,
    avatar: "א"
  },
  {
    name: "רחל ל.",
    text: "התקין ברז חדש לחדר האמבטיה בצורה מושלמת. עבודה נקייה ותקשורת מעולה לאורך כל התהליך.",
    rating: 5,
    avatar: "ר"
  }
];
const ReviewsSection = () => {
  return /* @__PURE__ */ jsx("section", { id: "reviews", className: "bg-[#f1f5f9] py-20 px-8 md:px-[320px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-6 flex flex-col gap-14 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center flex flex-col gap-4 items-center max-w-[700px]", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-heading font-bold text-3xl md:text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f2757]", children: "מה הלקוחות אומרים" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-[28px] text-[#676f7e]", children: "המלצות אמיתיות מלקוחות מרוצים." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]", children: reviews.map((review, i) => /* @__PURE__ */ jsxs("div", { className: "relative bg-white border border-[#e2e7e9] rounded-xl p-[29px] flex flex-col gap-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]", children: [
      /* @__PURE__ */ jsx(Quote, { className: "absolute left-4 top-4 w-8 h-8 text-[#1162d4]/10" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 justify-start", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsx(
        Star,
        {
          className: "w-4 h-4 text-[#ffc107] fill-[#ffc107]"
        },
        j
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm leading-[23px] text-[#1f242e]/80 text-right", children: [
        '"',
        review.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center justify-start pt-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#1162d4] flex items-center justify-center font-bold text-sm text-white shrink-0", children: review.avatar }),
        /* @__PURE__ */ jsx("span", { className: "font-heading font-bold text-sm text-[#0f2757]", children: review.name })
      ] })
    ] }, i)) })
  ] }) });
};

const blogPosts = [
  // ============================
  // מאמר 1 — נזילות סמויות
  // ============================
  {
    slug: "signs-of-hidden-water-leaks",
    title: "5 סימנים שיש לכם נזילה סמויה בבית",
    excerpt: "נזילות סמויות יכולות לגרום לנזקים של אלפי שקלים לפני שאתם בכלל מבינים שיש בעיה. למדו לזהות את הסימנים המוקדמים ולחסוך הרבה כסף וכאב ראש.",
    date: "12 באפריל 2026",
    category: "נזילות מים",
    readTime: 5,
    featured: true,
    content: [
      {
        title: "למה נזילות סמויות כל כך מסוכנות?",
        body: "נזילה סמויה היא נזילה שמתרחשת בתוך הקירות, הרצפה או מתחת לאריחים — ואתם לא רואים אותה ישירות. בישראל, הבעיה נפוצה במיוחד בגלל מים קשים שמשחקים עם הצנרת לאורך זמן. מים שדולפים לאיטם גורמים לעובש, לנזקי מבנה ולעלייה משמעותית בחשבון המים."
      },
      {
        title: "סימן 1: עלייה פתאומית בחשבון המים",
        body: "אם חשבון המים עלה בפתאומיות מבלי שהרגליכם השתנו, זה אחד הסימנים הברורים ביותר לנזילה. השוו את החשבונות החודשיים האחרונים. עלייה של יותר מ-20-30% ללא סיבה ברורה — הגיע הזמן לבדוק."
      },
      {
        title: "סימן 2: כתמי לחות או קילוף צבע",
        body: "כתמים צהובים-חומים על הקירות, תקרה קמורה, או צבע שמתקלף הם סימנים קלאסיים לרטיבות מתמשכת. אל תתעלמו מהם — גם כתם קטן עלול להיות סימן לנזילה גדולה מאחוריו."
      },
      {
        title: "סימן 3: ריח עובש ללא מקור ברור",
        body: "ריח לחות או עובש שלא נעלם גם לאחר אוורור הוא אות אדום. עובש מתפתח מהר מאוד במקומות לחים, ויכול לגרום לבעיות בריאות חמורות — בעיקר לילדים ולאנשים עם אסטמה."
      },
      {
        title: "סימן 4: רצפה או קירות שמרגישים רטובים",
        body: "אם אתם מרגישים שהרצפה קצת רטובה מתחת לאריחים, או שהקיר מרגיש קר ולח באופן לא רגיל, זה עלול להיות נזילה תת-קרקעית. זו בעיה שדורשת מומחה עם ציוד איתור מקצועי."
      },
      {
        title: "סימן 5: מד המים זזה כשכל הברזים סגורים",
        body: "בדיקה פשוטה: סגרו את כל ברזי הבית ובדקו את מד המים. אם המחוג זזה — יש נזילה. ציינו את המספר, המתינו 10 דקות ובדקו שוב. אם המספר השתנה, קראו לאינסטלטור מיד."
      }
    ],
    tips: [
      "בצעו בדיקת מד מים אחת לחודש — לוקח שתי דקות ויכול לחסוך אלפים",
      "אחסנו תמונות של מצב הקירות שלכם לאורך זמן — ישקף שינויים",
      "קנו גלאי לחות זול מהרשת — שוות זהב לאיתור מוקד",
      "בדקו מתחת לכיורים ומאחורי האסלה פעם בחצי שנה"
    ],
    faqs: [
      {
        question: "כמה עולה לאתר נזילה סמויה?",
        answer: 'איתור נזילה סמויה עם ציוד מקצועי עולה בדרך כלל 300-600 ש"ח, תלוי במורכבות. זה הרבה יותר זול מנזקי המבנה שנזילה לא מטופלת יכולה לגרום.'
      },
      {
        question: "האם ביטוח הבית מכסה נזילות סמויות?",
        answer: "רוב פוליסות ביטוח הבית כוללות כיסוי לנזקי מים מנזילות סמויות, אך עם מגבלות ותאריכי דיווח. כדאי לבדוק את הפוליסה שלכם ולדווח מהר ככל האפשר."
      },
      {
        question: "כמה זמן לוקח לתקן נזילה סמויה?",
        answer: "תלוי מאוד במיקום ובחומרה. נזילה פשוטה יכולה להיות מטופלת תוך שעה-שעתיים. נזילה בצנרת ראשית בתוך קיר עלולה לקחת יום-יומיים כולל ייבוש."
      }
    ]
  },
  // ============================
  // מאמר 2 — סתימות כיור
  // ============================
  {
    slug: "how-to-prevent-sink-clogs",
    title: "איך למנוע סתימות בכיור — 7 הרגלים שכל בעל בית צריך",
    excerpt: "כיור סתום הוא אחד הטרדות הנפוצות ביותר בבית. הבשורה הטובה: 90% מהסתימות ניתן למנוע לגמרי עם כמה הרגלים פשוטים. הנה המדריך המלא.",
    date: "28 במרץ 2026",
    category: "תחזוקה מונעת",
    readTime: 4,
    featured: true,
    content: [
      {
        title: "למה כיורים נסתמים — הסיבות האמיתיות",
        body: "כיורי מטבח נסתמים בעיקר בגלל שומן, שאריות מזון וקפה טחון. כיורי אמבטיה — בגלל שיער ושאריות סבון. ברגע שאתם מבינים את האויב, קל הרבה יותר להתמודד איתו."
      },
      {
        title: "הרגל 1: לעולם אל תשפכו שומן לכיור",
        body: "שומן מתבשיל מתקשה בצינורות כמו נר. במהלך השנים הוא מצטבר ויוצר פקק עבה שמושך אליו חלקיקים נוספים. שפכו שומן לצנצנת ישנה ואחר כך לפח — זה ההרגל שישמור את הצנרת שלכם הכי הרבה זמן."
      },
      {
        title: "הרגל 2: מסננת — השקעה הכי משתלמת שתעשו",
        body: 'מסננת ניקוז טובה עולה 10-30 ש"ח ומונעת קריאת אינסטלטור של מאות שקלים. השתמשו במסננת בכל כיור ומקלחת, ונקו אותה אחרי כל שימוש. פשוט, יעיל, חוסך כסף.'
      },
      {
        title: "הרגל 3: מים רותחים — הניקוי השבועי",
        body: "פעם בשבוע, שפכו קומקום מלא של מים רותחים לכיור המטבח לאחר שטיפת הכלים. המים הרותחים ממיסים את השומן הצבור ומנקים את הדפנות לפני שהוא מספיק להתקשות."
      },
      {
        title: "הרגל 4: סודה + חומץ פעם בחודש",
        body: "שפכו חצי כוס סודה לשתייה לניקוז, ואחריה חצי כוס חומץ לבן. תשמעו בועות — זה עובד! המתינו 20 דקות ושטפו במים רותחים. ניקוי טבעי, לא פוגע בצנרת ומצוין לתחזוקה שוטפת."
      },
      {
        title: "הרגל 5: אל תשפכו שאריות קפה לכיור",
        body: "קפה טחון הוא אחד הגורמים הנפוצים לסתימות כיור מטבח. הוא לא נמס במים ומצטבר יחד עם השומן. תמיד שפכו קפה לפח."
      },
      {
        title: "הרגל 6: בדקו את הסיפון אחת לשנה",
        body: "הסיפון (צינור ה-U מתחת לכיור) הוא המקום הנפוץ ביותר לסתימות. פעם בשנה, פתחו אותו עם דלי מתחת, נקו אותו והרכיבו בחזרה. לוקח 10 דקות ומונע כאבי ראש."
      },
      {
        title: "הרגל 7: אל תיכנסו לפאניקה — פומפה לפני אינסטלטור",
        body: "לפני שאתם מתקשרים, נסו פומפה (פלנג'ר) — הכלי הכי יעיל לסתימות קלות עד בינוניות. עבדו עם תנועות מהירות 15-20 פעמים. ברוב המקרים זה יפתור את הבעיה."
      }
    ],
    tips: [
      "רכשו מסננת לכל כיור בבית — השקעה חד-פעמית קטנה",
      "שמרו סודה לשתייה וחומץ בבית לתחזוקה חודשית",
      "הדרכת ילדים לגבי מה לא לשפוך לכיור — הכי חשוב!"
    ]
  },
  // ============================
  // מאמר 3 — דוד שמש
  // ============================
  {
    slug: "when-to-replace-solar-water-heater",
    title: "מתי להחליף דוד שמש — הסימנים שאל תתעלמו מהם",
    excerpt: "דוד שמש טוב יכול להחזיק 15-20 שנה, אך ישנם סימנים ברורים שמעידים שהגיע הזמן להחלפה. כדאי לדעת מה לחפש לפני שהוא מפסיק לעבוד לגמרי — ותישארו בלי מים חמים.",
    date: "15 במרץ 2026",
    category: "דוד שמש",
    readTime: 6,
    featured: false,
    content: [
      {
        title: "מה תוחלת החיים של דוד שמש?",
        body: "דוד שמש ישראלי טיפוסי מחזיק בין 12 ל-20 שנה, תלוי באיכות הציוד ובתחזוקה. גב השמש (הקולקטור) בדרך כלל מחזיק יותר זמן מהמיכל עצמו. בדקו מתי הותקן הדוד שלכם — זה המידע הכי חשוב."
      },
      {
        title: "סימן 1: מים לא מספיק חמים",
        body: "אם המים לא מגיעים לטמפרטורה שאתם רגילים אליה, גם בימים שמשיים, זה סימן שיש בעיה. ייתכן שזו תקלה בכדור הניתן לתיקון, אך לדוד ישן — לרוב זה סימן שהגיע הזמן."
      },
      {
        title: "סימן 2: חלודה ורטיבות בסביבת הדוד",
        body: "חלודה על המיכל, על הצנרת שמסביב, או כתמי לחות על התקרה מתחת לדוד — אלה סימני אזהרה רציניים. חלודה בדוד היא בדרך כלל לא ניתנת לתיקון וגוררת החלפה."
      },
      {
        title: "סימן 3: רעשים חריגים",
        body: "בועות, הקשות, או רעשי זרימה חריגים בדוד הם סימן להצטברות אבנית, תקלה בתרמוסטט, או בעיה בגוף החימום החשמלי. חלק מהרעשים ניתנים לתיקון — אך כדאי לבדוק עם מקצוען."
      },
      {
        title: "מה עדיף — תיקון או החלפה?",
        body: "הכלל הפשוט: אם הדוד מעל 12 שנה ועולה לתקן אותו יותר מ-40% ממחיר דוד חדש — תחליפו. דוד חדש יעיל בהרבה מבחינת אנרגיה, ויחסוך לכם כסף בטווח הארוך."
      },
      {
        title: "כמה עולה להחליף דוד שמש?",
        body: 'החלפת דוד שמש כולל גב שמש חדש עולה בדרך כלל 2,500-5,000 ש"ח, תלוי בגודל ובמותג. ניתן לקבל מענקים מהמדינה דרך רשות החשמל — מומלץ לבדוק זכאות לפני רכישה.'
      }
    ],
    faqs: [
      {
        question: "האם ניתן לתקן דוד שמש שדולף?",
        answer: "תלוי במיקום הנזילה. נזילה בצנרת — לרוב תיקון פשוט. נזילה מהמיכל עצמו — לרוב מצריכה החלפת מיכל או דוד שלם."
      },
      {
        question: "כמה זמן לוקח להתקין דוד שמש חדש?",
        answer: "התקנת דוד שמש חדש על גג קיים לוקחת בדרך כלל 3-6 שעות. אם יש צורך בשיפוץ גג או חיזוק מבנה — עלול לקחת יותר."
      }
    ]
  },
  // ============================
  // מאמר 4 — חירום
  // ============================
  {
    slug: "what-to-do-pipe-burst",
    title: "פיצוץ צינור — מה לעשות בשלוש הדקות הראשונות",
    excerpt: "פיצוץ צינור הוא מצב חירום שכל דקה שנייה חשובה. פעולה נכונה ומהירה יכולה למנוע נזק של עשרות אלפי שקלים. הנה המדריך לפעולה מהירה ונכונה.",
    date: "5 במרץ 2026",
    category: "חירום",
    readTime: 3,
    featured: false,
    content: [
      {
        title: "שניה לפני — דעו איפה ברז הניתוק הראשי",
        body: 'הדבר הכי חשוב שאתם יכולים לעשות עכשיו, לפני שיש בעיה: מצאו את ברז הניתוק הראשי בדירה שלכם. בדרך כלל הוא נמצא ליד מד המים — ליד הכניסה לדירה, במרפסת, או בממ"ד. סמנו אותו לאתם ולכל בני המשפחה.'
      },
      {
        title: "דקה 1: סגרו את ברז הניתוק הראשי",
        body: "ברגע שיש פיצוץ צינור — לא מחפשים, לא בודקים, לא מתקשרים. קודם כל: ברז ניתוק ראשי. סגירתו תעצור את זרימת המים לכל הדירה ותמנע את הנזק מלהתרחב. זאת הפעולה הכי חשובה."
      },
      {
        title: "דקה 2: כבו את החשמל אם יש מים ליד שקעים",
        body: "מים וחשמל הם שילוב מסוכן. אם המים הגיעו לאזור שקעים או לוח חשמל — כבו את הפסק הראשי בארגז החשמל ואל תיגעו בשקעים. בטיחות קודם לכל."
      },
      {
        title: "דקה 3: התקשרו לאינסטלטור חירום ואז לביטוח",
        body: "עכשיו קראו לאינסטלטור חירום. אחרי שהזמנתם אינסטלטור — צלמו את הנזק ודווחו לחברת הביטוח. תיעוד מוקדם חיוני לתביעה."
      },
      {
        title: "מה לעשות בזמן ההמתנה לאינסטלטור",
        body: "פנו רהיטים וחפצים אישיים מהאזור המוצף. הניחו מגבות ודליים לספוג מים. פתחו חלונות לאוורור. אל תחזרו לחשמל עד שהאזור יבש ומאושר על ידי מקצוען."
      }
    ],
    tips: [
      "שמרו את מספר אינסטלטור החירום בטלפון עכשיו — לפני שצריכים",
      "לימדו כל בן משפחה בוגר איפה ברז הניתוק הראשי",
      "צלמו את ברז הניתוק וקראו לתמונה 'ברז ראשי' — תמצאו אותה בשנייה"
    ],
    faqs: [
      {
        question: "האם ביטוח הבית מכסה פיצוץ צינור?",
        answer: "ברוב המקרים כן — פיצוץ צינור מכוסה תחת 'נזקי מים פתאומיים'. חשוב לתעד את הנזק לפני ניקיון ולדווח מהר ככל האפשר."
      },
      {
        question: "כמה עולה תיקון פיצוץ צינור?",
        answer: 'הטווח רחב — 500 ש"ח עד אלפי שקלים, תלוי בסוג הצינור, מיקומו ובנזקי הלוואי. ביטוח טוב יכסה את רוב הסכום.'
      }
    ]
  },
  // ============================
  // מאמר 5 — תחזוקה שנתית
  // ============================
  {
    slug: "annual-plumbing-maintenance-checklist",
    title: "צ'קליסט תחזוקת אינסטלציה שנתי — 12 דברים לבדוק לפני החורף",
    excerpt: "חורף ישראלי עלול להיות קשה על מערכות האינסטלציה בבית. הכינו את הבית לפני שמתחיל הגשם עם צ'קליסט פשוט שיחסוך לכם הוצאות גדולות.",
    date: "20 בפברואר 2026",
    category: "תחזוקה מונעת",
    readTime: 5,
    featured: false,
    content: [
      {
        title: "למה תחזוקה מונעת שווה כסף",
        body: 'הנתון שמפתיע אנשים: עלות תחזוקה שנתית מקצועית היא בסביבות 300-500 ש"ח. עלות תיקון נזק ממוצע שניתן היה למנוע — כ-2,000 ש"ח ויותר. החשבון פשוט.'
      },
      {
        title: "בדיקות ניקוז וצנרת",
        body: "בדקו שכל ניקוזים זורמים בחופשיות. נקו מסננות וניקוזים על הגג לפני עונת הגשמים. בדקו צינורות חיצוניים לחלודה ונזילות. ודאו שאין עצים שמסתמנים לחדור לביוב."
      },
      {
        title: "בדיקות אסלה וכיורים",
        body: "בצעו בדיקת נזילה אסלה: הוסיפו כמה טיפות צבע מאכל לבית הגלימה. המתינו 15 דקות מבלי למשוך. אם הצבע מגיע לאגן — יש נזילה. בדקו שכל ברזים לא מטפטפים."
      },
      {
        title: "בדיקות דוד שמש",
        body: "בדקו את הדוד ואת הצינורות שאליו לחלודה. ודאו שאין נזילות בחיבורים. בדקו שלחות החשמלי פועל כראוי לימות הגשם. נקו את הלוח השמשי לפי הצורך."
      },
      {
        title: "מה לעשות בסיום הבדיקות",
        body: "תעדו מה בדקתם ומה מצאתם. צלמו מקומות חשודים. תקנו בעיות קלות לפני שהחורף מגיע. לבעיות שאינכם בטוחים לגביהן — כדאי להזמין ביקור תחזוקה שנתי עם אינסטלטור מקצועי."
      }
    ],
    tips: [
      "קבעו תזכורת שנתית בלוח השנה: 'בדיקת אינסטלציה — לפני החורף'",
      "תעדו כל בעיה שמוצאים — עוזר לאינסטלטור להבין את ההיסטוריה",
      "בדקו את ביטוח הבית לפני החורף — ודאו שהכיסוי מתאים"
    ]
  }
];
const getRecentPosts = (count = 3) => [...blogPosts].slice(0, count);

const Link$1 = ({ to, href, children, ...props }) => /* @__PURE__ */ jsx("a", { href: to || href, ...props, children });
const getCategoryStyle = (cat) => {
  const colors = {
    "נזילות מים": { bg: "#dbeafe", text: "#1d4ed8" },
    "תחזוקה מונעת": { bg: "#dcfce7", text: "#15803d" },
    "דוד שמש": { bg: "#ffedd5", text: "#9a3412" },
    "חירום": { bg: "#fee2e2", text: "#b91c1c" }
  };
  const style = colors[cat] || { bg: "#f1f5f9", text: "#475569" };
  return { backgroundColor: style.bg, color: style.text };
};
const BlogSection = () => {
  const posts = getRecentPosts(3);
  return /* @__PURE__ */ jsx("section", { className: "bg-[#f8fafc] py-20 px-8 md:px-[320px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-6 flex flex-col gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 border border-[#1162d4]/15 rounded-full px-[13px] py-[7px]", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-[#1162d4]", children: "הבלוג שלנו" }),
          /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-[#1162d4]" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-heading font-black text-3xl md:text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f2757]", children: "טיפים ועצות אינסטלציה" }),
        /* @__PURE__ */ jsx("p", { className: "text-[18px] text-[#64748b] text-right", children: "מאמרים שימושיים לשמירה על מערכת האינסטלציה בבית." })
      ] }),
      /* @__PURE__ */ jsxs(Link$1, { to: "/blog", className: "flex gap-2 items-center no-underline group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-[#1162d4]/10 flex items-center justify-center transition-colors group-hover:bg-[#1162d4]/20", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 text-[#1162d4]" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#1162d4]", children: "לכל המאמרים" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: posts.map((post) => /* @__PURE__ */ jsxs(
      Link$1,
      {
        href: `/blog/${post.slug}`,
        className: "bg-white border border-[#f1f5f9] rounded-2xl h-[352px] overflow-hidden relative shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] cursor-pointer no-underline transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 top-0 h-[150px] overflow-hidden flex items-center justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-[6px] bg-gradient-to-l from-[#1162d4] to-[#ee4b2b] opacity-70 z-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 top-[6px] bg-gradient-to-br from-[#0f2757]/05 to-[#1162d4]/10" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative z-20 px-3 py-1.5 rounded-full text-xs font-bold",
                style: getCategoryStyle(post.category),
                children: post.category
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 top-[150px] p-5 flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center justify-start mb-1 text-[#94a3b8] text-xs", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: post.date }),
              /* @__PURE__ */ jsx("span", { children: "·" }),
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 ml-1" }),
              /* @__PURE__ */ jsxs("span", { children: [
                post.readTime,
                " דק'"
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading font-bold text-[15px] leading-6 tracking-[-0.32px] text-[#0f2757] text-right", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] leading-5 text-[#64748b] text-right h-[60px] overflow-hidden", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 items-center justify-start mt-1 text-[#1162d4] font-bold text-sm", children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "קראו עוד" })
            ] })
          ] })
        ]
      },
      post.slug
    )) })
  ] }) });
};

const contactCards = [
  {
    icon: /* @__PURE__ */ jsx(Phone, { className: "h-7 w-7" }),
    title: "טלפון",
    content: "052-8126653",
    href: "tel:+972528126653",
    color: "text-primary",
    bg: "from-primary/10 to-primary/5"
  },
  {
    icon: /* @__PURE__ */ jsx(MessageCircle, { className: "h-7 w-7" }),
    title: "ווטסאפ משרד",
    content: "שלחו הודעה מהירה",
    href: "https://wa.me/972528126653",
    color: "text-green-600",
    bg: "from-green-500/10 to-green-500/5"
  },
  {
    icon: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7" }),
    title: "אימייל",
    content: "info@vaknin-plumbing.co.il",
    href: "mailto:info@vaknin-plumbing.co.il",
    color: "text-blue-600",
    bg: "from-blue-500/10 to-blue-500/5"
  },
  {
    icon: /* @__PURE__ */ jsx(MapPin, { className: "h-7 w-7" }),
    title: "אזור שירות",
    content: "תל אביב והמרכז",
    href: null,
    color: "text-accent",
    bg: "from-accent/10 to-accent/5"
  }
];
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `שם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aהודעה: ${formData.message}`;
    window.open(`https://wa.me/972528126653?text=${text}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative overflow-hidden bg-slate-50 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute top-0 right-0 z-0 h-full w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-1/2 w-1/2 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent/5 blur-[100px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary shadow-sm", children: "זמינים עבורכם" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-6 font-heading text-4xl font-black text-primary-dark md:text-5xl", children: [
          "צרו קשר לקבלת ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "הצעת מחיר" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-slate-500 md:text-xl", children: "צריכים ייעוץ, אבחון או הצעת מחיר? פנו אלינו באחת הדרכים הנוחות לכם, ונחזור אליכם בהקדם עם מענה מקצועי וברור." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-6 lg:col-span-2", children: contactCards.map((item, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} ${item.color} shadow-sm transition-transform duration-300 group-hover:scale-110`,
                  children: item.icon
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm font-semibold text-slate-500", children: item.title }),
                item.href ? /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : void 0,
                    rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
                    className: "block font-heading text-lg font-bold text-primary-dark transition-colors hover:text-primary",
                    children: item.content
                  }
                ) : /* @__PURE__ */ jsx("p", { className: "font-heading text-lg font-bold text-primary-dark", children: item.content })
              ] })
            ]
          },
          idx
        )) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex h-full flex-col justify-center rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-12",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-8 font-heading text-2xl font-black uppercase tracking-wide text-primary-dark", children: "שלחו פנייה מהירה" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-bold text-slate-700", children: "שם מלא" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      maxLength: 100,
                      value: formData.name,
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none",
                      placeholder: "הקלידו את שמכם המלא"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-bold text-slate-700", children: "מספר טלפון" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      required: true,
                      maxLength: 20,
                      value: formData.phone,
                      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                      className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none",
                      placeholder: "למשל: 052-8126653",
                      dir: "ltr"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-bold text-slate-700", children: "הודעה (אופציונלי)" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      maxLength: 1e3,
                      rows: 4,
                      value: formData.message,
                      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                      className: "w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none",
                      placeholder: "תארו בקצרה את הבעיה או ציינו פרטים נוספים..."
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "hero",
                  size: "xl",
                  type: "submit",
                  className: "mt-8 w-full shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                  children: [
                    /* @__PURE__ */ jsx(MessageCircle, { className: "ml-2 h-5 w-5" }),
                    "שליחה ויצירת קשר בווטסאפ"
                  ]
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] });
};

const cityPages = [
  {
    slug: "tel-aviv",
    name: "תל אביב",
    title: "אינסטלטור בתל אביב 24/7 | ואקנין אינסטלציה - הגעה תוך 30 דקות",
    metaDescription: "מחפשים אינסטלטור בתל אביב? ואקנין אינסטלציה מספקים שירותי אינסטלציה מקצועיים 24/7. פתיחת סתימות, איתור נזילות במצלמה תרמית ושירותי חירום. התקשרו עכשיו!",
    h1: "אינסטלטור בתל אביב — זמינים 24/7 לכל תקלה",
    emergencyH2: "אינסטלטור חירום בתל אביב — הגעה מהירה",
    intro: "מחפשים אינסטלטור אמין בתל אביב? ואקנין אינסטלציה מספקים שירותי אינסטלציה מקצועיים בכל רחבי תל אביב, 24 שעות ביממה, 7 ימים בשבוע. הגעה מהירה תוך 30-60 דקות לכל אזור בעיר עם הציוד המתקדם ביותר.",
    areaDescription: "אנו מכסים את כל אזורי תל אביב כולל מרכז העיר, יפו, רמת אביב, נווה צדק, פלורנטין, הצפון הישן והחדש.",
    neighborhoods: ["רמת אביב", "נווה צדק", "פלורנטין", "יפו", "הצפון הישן", "הצפון החדש", "מרכז העיר", "נווה שאנן"]
  },
  {
    slug: "ramat-gan",
    name: "רמת גן",
    title: "אינסטלטור ברמת גן 24/7 | ואקנין אינסטלציה - מחירים הוגנים",
    metaDescription: "אינסטלטור מקצועי ברמת גן. שירותי אינסטלציה מקיפים 24/7: תיקון נזילות, פתיחת סתימות ביוב, זמינות מיידית. שירות אמין עם אחריות מלאה.",
    h1: "אינסטלטור ברמת גן — שירות מהיר ומקצועי",
    emergencyH2: "אינסטלטור חירום ברמת גן",
    intro: "צריכים אינסטלטור ברמת גן? אנחנו כאן בשבילכם! צוות ואקנין אינסטלציה מגיע לכל מקום ברמת גן תוך זמן קצר עם כל הציוד הנדרש לפתרון כל תקלה במקום.",
    areaDescription: "שירות בכל רמת גן כולל מרום נווה, תל בנימין, הגפן, קריית קריניצי ואזור הבורסה.",
    neighborhoods: ["מרום נווה", "תל בנימין", "הגפן", "קריית קריניצי", "נחלת גנים", "רמת עמידר", "רמת חן"]
  },
  {
    slug: "givatayim",
    name: "גבעתיים",
    title: "אינסטלטור בגבעתיים | ואקנין אינסטלציה - מומחים באיתור נזילות",
    metaDescription: "אינסטלטור מקצועי בגבעתיים. תיקון נזילות סמויות, פתיחת סתימות מורכבות ושירותי אינסטלציה בחירום 24/7. הגעה מהירה ומקצועיות ללא פשרות.",
    h1: "אינסטלטור בגבעתיים — מקצועי ואמין",
    emergencyH2: "שירות חירום בגבעתיים — 24/7",
    intro: "מחפשים אינסטלטור מקצועי בגבעתיים? ואקנין אינסטלציה מספקים שירותי אינסטלציה מהירים ואמינים בכל אזורי גבעתיים, עם ניסיון של מעל 20 שנה בשטח.",
    areaDescription: "מכסים את כל גבעתיים כולל בורוכוב, אזור המרכז, רמת יצחק והשכונות הוותיקות.",
    neighborhoods: ["בורוכוב", "מרכז גבעתיים", "רמת יצחק", "שיכוני גבעתיים"]
  },
  {
    slug: "petah-tikva",
    name: "פתח תקווה",
    title: "אינסטלטור בפתח תקווה 24/7 | ואקנין אינסטלציה - שירות מהיר",
    metaDescription: "אינסטלטור בפתח תקווה לכל תקלה. שירות אינסטלציה מקצועי 24/7 כולל איתור נזילות, פתיחת סתימות ותיקון צנרת. זמינות גבוהה ומחירים הוגנים.",
    h1: "אינסטלטור בפתח תקווה — שירות מקצועי בכל שעה",
    emergencyH2: "אינסטלטור חירום בפתח תקווה",
    intro: "צריכים אינסטלטור בפתח תקווה? ואקנין אינסטלציה מגיעים לכל אזור בפתח תקווה עם ציוד מקצועי ושירות מהיר. אנחנו מתמחים בפתרונות אינסטלציה מתקדמים לבית ולעסק.",
    areaDescription: "משרתים את כל פתח תקווה כולל קרית אריה, אם המושבות, כפר גנים, נווה גן, עין גנים והשכונות החדשות.",
    neighborhoods: ["כפר גנים", "אם המושבות", "נווה גן", "עין גנים", "קריית אריה", "כפר אברהם"]
  },
  {
    slug: "bnei-brak",
    name: "בני ברק",
    title: "אינסטלטור בבני ברק | ואקנין אינסטלציה - שירות אמין לקהילה",
    metaDescription: "אינסטלטור מקצועי בבני ברק. שירותי אינסטלציה 24/7 (למעט שבתות). פתיחת סתימות, תיקון נזילות ועוד. מקצועיות ואמינות מובטחת.",
    h1: "אינסטלטור בבני ברק — זמינים לכל תקלת מים",
    emergencyH2: "שירות חירום בבני ברק",
    intro: "מחפשים אינסטלטור בבני ברק? ואקנין אינסטלציה מעניקים שירות אינסטלציה מקצועי ואמין בכל רחבי בני ברק, עם ציוד חדיש ושירות אדיב.",
    areaDescription: "מכסים את כל בני ברק כולל פרדס כץ, אזור הרב שך, שכונת הפועלים והשכונות החדשות.",
    neighborhoods: ["פרדס כץ", "שכונת הפועלים", "נווה אילן", "מרכז בני ברק"]
  },
  {
    slug: "holon",
    name: "חולון",
    title: "אינסטלטור בחולון 24/7 | ואקנין אינסטלציה - הגעה מהירה",
    metaDescription: "אינסטלטור בחולון לתיקון נזילות, פתיחת סתימות ושירותי חירום 24/7. ואקנין אינסטלציה - מומחים עם מעל 20 שנות ניסיון. התקשרו עכשיו!",
    h1: "אינסטלטור בחולון — שירות מקצועי ומהיר במיוחד",
    emergencyH2: "אינסטלטור חירום בחולון",
    intro: "צריכים אינסטלטור בחולון? ואקנין אינסטלציה מספקים שירותי אינסטלציה מהירים ומקצועיים לכל אזורי חולון. אנו משתמשים במצלמות תרמיות לאיתור נזילות ללא הרס.",
    areaDescription: "משרתים את כל חולון כולל ג'סי כהן, קרית שרת, נאות רחל, רמת הדר ועוד.",
    neighborhoods: ["ג'סי כהן", "קרית שרת", "נאות רחל", "רמת הדר", "מולדת", "תל גיבורים"]
  },
  {
    slug: "bat-yam",
    name: "בת ים",
    title: "אינסטלטור בבת ים | ואקנין אינסטלציה - שירות אינסטלציה 24/7",
    metaDescription: "צריכים אינסטלטור בבת ים? ואקנין אינסטלציה מספקים מענה מהיר לכל תקלת אינסטלציה: פיצוץ צנרת, סתימות ביוב ודודי שמש. מחירים הוגנים.",
    h1: "אינסטלטור בבת ים — שירות אמין ומקצועי",
    emergencyH2: "שירות חירום בבת ים — הגעה מהירה",
    intro: "מחפשים אינסטלטור בבת ים? ואקנין אינסטלציה מגיעים מהר עם כל הציוד המתקדם. שירות אמין, מקצועי ובמחירים הוגנים לכל תושבי בת ים.",
    areaDescription: "מכסים את כל בת ים כולל חוף הים, רמת הנשיא, עזרא ושכונות נוספות.",
    neighborhoods: ["רמת הנשיא", "עזרא", "חוף הים", "שיכון ותיקים", "מרכז בת ים"]
  },
  {
    slug: "rishon-lezion",
    name: "ראשון לציון",
    title: "אינסטלטור בראשון לציון 24/7 | ואקנין אינסטלציה - מגיעים מהר",
    metaDescription: "אינסטלטור מוסמך בראשון לציון. שירותי אינסטלציה מקצועיים מסביב לשעון: איתור נזילות, פתיחת סתימות ותיקון צנרת. שירות אישי ואמין.",
    h1: "אינסטלטור בראשון לציון — זמינות מלאה 24/7",
    emergencyH2: "אינסטלטור חירום בראשון לציון",
    intro: 'צריכים אינסטלטור בראשון לציון? ואקנין אינסטלציה מספקים שירותי אינסטלציה מקצועיים בכל רחבי ראשון לציון, כולל שירותי חירום בלילה ובסופ"ש.',
    areaDescription: "משרתים את כל ראשון לציון כולל נחלת יהודה, רמת אלון, קרית משה, נווה הדרים ועוד.",
    neighborhoods: ["נחלת יהודה", "רמת אלון", "קרית משה", "נווה הדרים", "נאות אשלים", "מערב ראשון"]
  },
  {
    slug: "netanya",
    name: "נתניה",
    title: "אינסטלטור בנתניה 24/7 | ואקנין אינסטלציה - שירות מקצועי",
    metaDescription: "אינסטלטור מקצועי בנתניה לכל תקלה. איתור נזילות, פתיחת סתימות ביוב, תיקון דודי שמש וחשמל. זמינות מיידית והגעה מהירה לכל חלקי העיר.",
    h1: "אינסטלטור בנתניה — שירות מקצועי, יסודי ומהיר",
    emergencyH2: "שירות חירום בנתניה",
    intro: "מחפשים אינסטלטור בנתניה? ואקנין אינסטלציה מספקים שירות אינסטלציה מקצועי ומהיר בכל רחבי נתניה והסביבה, עם דגש על שירות איכותי ואמינות.",
    areaDescription: "מכסים את כל נתניה כולל מרכז העיר, קרית נורדאו, אזור הים, עיר ימים, פולג ועוד.",
    neighborhoods: ["מרכז העיר", "קרית נורדאו", "עיר ימים", "פולג", "אזור הים", "קרית השרון"]
  },
  {
    slug: "herzliya",
    name: "הרצליה",
    title: "אינסטלטור בהרצליה | ואקנין אינסטלציה - מומחים באינסטלציה",
    metaDescription: "אינסטלטור מומחה בהרצליה לשירותי אינסטלציה מתקדמים. איתור נזילות תרמי, תיקון צנרת PPR/PEX, ושירות חירום 24/7. הגעה להרצליה פיתוח והסביבה.",
    h1: "אינסטלטור בהרצליה — שירות מקצועי ברמה הגבוהה ביותר",
    emergencyH2: "אינסטלטור חירום בהרצליה",
    intro: "צריכים אינסטלטור בהרצליה? אנחנו מספקים שירות מקצועי ומהיר בהרצליה, כולל הרצליה פיתוח ונווה עמל. מומחים בפתרונות אינסטלציה מורכבים.",
    areaDescription: "משרתים את כל הרצליה כולל הרצליה פיתוח ונווה עמל."
  }
];

const logo = new Proxy({"src":"/_astro/logo-kv.Dt2kZqoV.png","width":119,"height":80,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/assets/logo-kv.png";
							}
							
							return target[name];
						}
					});

const Link = ({ to, href, children, ...props }) => /* @__PURE__ */ jsx("a", { href: to || href, ...props, children });
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden bg-primary-dark py-12 pb-24 text-primary-foreground/80 md:pb-12", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 right-0 left-0 h-12 bg-background",
        style: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10 pt-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "ואקנין אינסטלציה", className: "h-10 w-auto invert brightness-0" }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-bold text-primary-foreground", children: "ואקנין אינסטלציה" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "שירותי אינסטלציה מקצועיים עם עבודה נקייה, ציוד מתקדם וחומרים מהמותגים המובילים בשוק." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-3 font-heading font-semibold text-primary-foreground", children: "שירותים" }),
          /* @__PURE__ */ jsx("nav", { className: "space-y-2 text-sm", children: servicePages.slice(0, 6).map((s) => /* @__PURE__ */ jsx(Link, { href: `/services/${s.slug}`, className: "block transition-colors hover:text-accent", children: s.name }, s.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-3 font-heading font-semibold text-primary-foreground", children: "אזורי שירות" }),
          /* @__PURE__ */ jsxs("nav", { className: "space-y-2 text-sm", children: [
            cityPages.slice(0, 6).map((c) => /* @__PURE__ */ jsx(Link, { href: `/city/${c.slug}`, className: "block transition-colors hover:text-accent", children: `אינסטלטור ב${c.name}` }, c.slug)),
            /* @__PURE__ */ jsx(Link, { to: "/cities", className: "mt-2 block font-semibold text-accent hover:underline", children: "לכל אזורי השירות..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-3 font-heading font-semibold text-primary-foreground", children: "קישורים" }),
          /* @__PURE__ */ jsxs("nav", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsx(Link, { to: "/services", className: "block transition-colors hover:text-accent", children: "כל השירותים" }),
            /* @__PURE__ */ jsx("a", { href: "/#reviews", className: "block transition-colors hover:text-accent", children: "המלצות" }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block transition-colors hover:text-accent", children: "צור קשר" }),
            /* @__PURE__ */ jsx(Link, { to: "/knowledge", className: "block transition-colors hover:text-accent", children: "מרכז הידע" }),
            /* @__PURE__ */ jsx(Link, { to: "/tools-hub", className: "block font-semibold text-accent transition-colors hover:text-accent", children: "מרכז הכלים" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-3 font-heading font-semibold text-primary-foreground", children: "דברו איתנו" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+972528126653",
              className: "flex items-center gap-2 text-lg font-bold text-accent transition-colors hover:text-accent/80",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
                "052-8126653"
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "ייעוץ, הצעת מחיר ותיאום עבודה מקצועית באזור תל אביב והמרכז." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-2 border-t border-primary-foreground/10 pt-6 text-center text-xs", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "transition-colors hover:text-accent", children: "מדיניות פרטיות" }),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsx(Link, { to: "/accessibility", className: "transition-colors hover:text-accent", children: "הצהרת נגישות" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ואקנין אינסטלציה. כל הזכויות שמורות."
        ] })
      ] })
    ] })
  ] });
};

const FloatingButtons = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary-dark p-3 flex gap-2", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "tel:+972528126653",
          className: "flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-3 rounded-lg text-sm",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            "התקשרו עכשיו"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://wa.me/972528126653",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 bg-[#25D366] text-accent-foreground font-bold py-3 px-5 rounded-lg text-sm",
          children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/972528126653",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hidden md:flex fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform",
        "aria-label": "שלחו הודעה בוואטסאפ",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-7 h-7 text-accent-foreground" })
      }
    )
  ] });
};

const defaultState = {
  fontSize: 0,
  highContrast: false,
  highlightLinks: false,
  bigCursor: false,
  stopAnimations: false
};
const STORAGE_KEY = "a11y-settings";
const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultState;
    } catch {
      return defaultState;
    }
  });
  const applySettings = useCallback((s) => {
    const html = document.documentElement;
    const sizes = ["100%", "120%", "140%"];
    html.style.fontSize = sizes[s.fontSize];
    html.classList.toggle("a11y-high-contrast", s.highContrast);
    html.classList.toggle("a11y-highlight-links", s.highlightLinks);
    html.classList.toggle("a11y-big-cursor", s.bigCursor);
    html.classList.toggle("a11y-stop-animations", s.stopAnimations);
  }, []);
  useEffect(() => {
    applySettings(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
    }
  }, [settings, applySettings]);
  const update = (patch) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };
  const reset = () => {
    setSettings(defaultState);
  };
  const increaseFontSize = () => {
    setSettings((prev) => ({ ...prev, fontSize: Math.min(prev.fontSize + 1, 2) }));
  };
  const decreaseFontSize = () => {
    setSettings((prev) => ({ ...prev, fontSize: Math.max(prev.fontSize - 1, 0) }));
  };
  const toggleItems = [
    { key: "highContrast", icon: Contrast, label: "ניגודיות גבוהה", active: settings.highContrast },
    { key: "highlightLinks", icon: Link2, label: "הדגשת קישורים", active: settings.highlightLinks },
    { key: "bigCursor", icon: MousePointer2, label: "סמן מוגדל", active: settings.bigCursor },
    { key: "stopAnimations", icon: PauseCircle, label: "עצירת אנימציות", active: settings.stopAnimations }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "fixed bottom-28 md:bottom-24 left-4 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "aria-label": "פתח תפריט נגישות",
        title: "נגישות",
        children: /* @__PURE__ */ jsx(Accessibility, { className: "w-6 h-6" })
      }
    ),
    open && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-foreground/40 z-[70]", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "fixed left-4 bottom-40 z-[80] w-72 bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in-up",
          role: "dialog",
          "aria-label": "תפריט נגישות",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Accessibility, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { className: "font-heading font-bold", children: "תפריט נגישות" })
              ] }),
              /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "סגור תפריט נגישות", className: "hover:opacity-80", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "גודל גופן" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: decreaseFontSize,
                      disabled: settings.fontSize === 0,
                      className: "flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors",
                      "aria-label": "הקטן גופן",
                      children: [
                        /* @__PURE__ */ jsx(ZoomOut, { className: "w-4 h-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "הקטנה" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: increaseFontSize,
                      disabled: settings.fontSize === 2,
                      className: "flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors",
                      "aria-label": "הגדל גופן",
                      children: [
                        /* @__PURE__ */ jsx(ZoomIn, { className: "w-4 h-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "הגדלה" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: toggleItems.map((item) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => update({ [item.key]: !item.active }),
                  className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors text-sm font-medium ${item.active ? "bg-primary/10 border-primary text-primary" : "border-border text-foreground hover:bg-secondary"}`,
                  "aria-pressed": item.active,
                  children: [
                    /* @__PURE__ */ jsx(item.icon, { className: "w-4 h-4 shrink-0" }),
                    item.label
                  ]
                },
                item.key
              )) }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: reset,
                  className: "w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary border border-border transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(RotateCcw, { className: "w-4 h-4" }),
                    "איפוס הגדרות"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/accessibility",
                  className: "block text-center text-xs text-primary hover:underline",
                  children: "הצהרת נגישות מלאה"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Navbar", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/HeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "BrandTrust", BrandTrust, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/BrandTrust", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesSection", ServicesSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ServicesSection", "client:component-export": "default" })} ${renderComponent($$result2, "WhyChooseUs", WhyChooseUs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/WhyChooseUs", "client:component-export": "default" })} ${renderComponent($$result2, "PrecisionSection", PrecisionSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/PrecisionSection", "client:component-export": "default" })} ${renderComponent($$result2, "ToolsSection", ToolsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ToolsSection", "client:component-export": "default" })} ${renderComponent($$result2, "LeadingBrandsSection", LeadingBrandsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/LeadingBrandsSection", "client:component-export": "default" })} ${renderComponent($$result2, "ReviewsSection", ReviewsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ReviewsSection", "client:component-export": "default" })} ${renderComponent($$result2, "BlogSection", BlogSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/BlogSection", "client:component-export": "default" })} ${renderComponent($$result2, "ContactSection", ContactSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ContactSection", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "FloatingButtons", FloatingButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FloatingButtons", "client:component-export": "default" })} ${renderComponent($$result2, "AccessibilityWidget", AccessibilityWidget, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/AccessibilityWidget", "client:component-export": "default" })} ` })}`;
}, "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/Documents/Gravity/qwen3.5/vak-plumbing-main/migration-emdash/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
