import{j as e}from"./jsx-runtime.D3GSbgeI.js";import{r as i}from"./index.BjBev32T.js";import{c as r}from"./createLucideIcon.DP1YA160.js";import{X as p}from"./x.DaB4ONez.js";import"./index.yBjzXJbu.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=r("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),c={fontSize:0,highContrast:!1,highlightLinks:!1,bigCursor:!1,stopAnimations:!1},m="a11y-settings",I=()=>{const[l,n]=i.useState(!1),[s,o]=i.useState(()=>{try{const t=localStorage.getItem(m);return t?JSON.parse(t):c}catch{return c}}),d=i.useCallback(t=>{const a=document.documentElement,b=["100%","120%","140%"];a.style.fontSize=b[t.fontSize],a.classList.toggle("a11y-high-contrast",t.highContrast),a.classList.toggle("a11y-highlight-links",t.highlightLinks),a.classList.toggle("a11y-big-cursor",t.bigCursor),a.classList.toggle("a11y-stop-animations",t.stopAnimations)},[]);i.useEffect(()=>{d(s);try{localStorage.setItem(m,JSON.stringify(s))}catch{}},[s,d]);const x=t=>{o(a=>({...a,...t}))},h=()=>{o(c)},g=()=>{o(t=>({...t,fontSize:Math.min(t.fontSize+1,2)}))},u=()=>{o(t=>({...t,fontSize:Math.max(t.fontSize-1,0)}))},f=[{key:"highContrast",icon:j,label:"ניגודיות גבוהה",active:s.highContrast},{key:"highlightLinks",icon:v,label:"הדגשת קישורים",active:s.highlightLinks},{key:"bigCursor",icon:N,label:"סמן מוגדל",active:s.bigCursor},{key:"stopAnimations",icon:k,label:"עצירת אנימציות",active:s.stopAnimations}];return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!l),className:"fixed bottom-28 md:bottom-24 left-4 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","aria-label":"פתח תפריט נגישות",title:"נגישות",children:e.jsx(y,{className:"w-6 h-6"})}),l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-foreground/40 z-[70]",onClick:()=>n(!1)}),e.jsxs("div",{className:"fixed left-4 bottom-40 z-[80] w-72 bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in-up",role:"dialog","aria-label":"תפריט נגישות",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{className:"w-5 h-5"}),e.jsx("span",{className:"font-heading font-bold",children:"תפריט נגישות"})]}),e.jsx("button",{onClick:()=>n(!1),"aria-label":"סגור תפריט נגישות",className:"hover:opacity-80",children:e.jsx(p,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-foreground mb-2",children:"גודל גופן"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:u,disabled:s.fontSize===0,className:"flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors","aria-label":"הקטן גופן",children:[e.jsx(z,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm",children:"הקטנה"})]}),e.jsxs("button",{onClick:g,disabled:s.fontSize===2,className:"flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors","aria-label":"הגדל גופן",children:[e.jsx(S,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm",children:"הגדלה"})]})]})]}),e.jsx("div",{className:"space-y-2",children:f.map(t=>e.jsxs("button",{onClick:()=>x({[t.key]:!t.active}),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors text-sm font-medium ${t.active?"bg-primary/10 border-primary text-primary":"border-border text-foreground hover:bg-secondary"}`,"aria-pressed":t.active,children:[e.jsx(t.icon,{className:"w-4 h-4 shrink-0"}),t.label]},t.key))}),e.jsxs("button",{onClick:h,className:"w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary border border-border transition-colors",children:[e.jsx(C,{className:"w-4 h-4"}),"איפוס הגדרות"]}),e.jsx("a",{href:"/accessibility",className:"block text-center text-xs text-primary hover:underline",children:"הצהרת נגישות מלאה"})]})]})]})]})};export{I as default};
