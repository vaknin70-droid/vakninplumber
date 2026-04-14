import { useState, useEffect, useCallback } from "react";
import { Accessibility, X, ZoomIn, ZoomOut, Contrast, Link2, MousePointer2, PauseCircle, RotateCcw } from "lucide-react";

interface A11yState {
  fontSize: number; // 0 = normal, 1 = large, 2 = x-large
  highContrast: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  stopAnimations: boolean;
}

const defaultState: A11yState = {
  fontSize: 0,
  highContrast: false,
  highlightLinks: false,
  bigCursor: false,
  stopAnimations: false,
};

const STORAGE_KEY = "a11y-settings";

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11yState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultState;
    } catch {
      return defaultState;
    }
  });

  const applySettings = useCallback((s: A11yState) => {
    const html = document.documentElement;

    // Font size
    const sizes = ["100%", "120%", "140%"];
    html.style.fontSize = sizes[s.fontSize];

    // High contrast
    html.classList.toggle("a11y-high-contrast", s.highContrast);

    // Highlight links
    html.classList.toggle("a11y-highlight-links", s.highlightLinks);

    // Big cursor
    html.classList.toggle("a11y-big-cursor", s.bigCursor);

    // Stop animations
    html.classList.toggle("a11y-stop-animations", s.stopAnimations);
  }, []);

  useEffect(() => {
    applySettings(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings, applySettings]);

  const update = (patch: Partial<A11yState>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };

  const reset = () => {
    setSettings(defaultState);
  };

  const increaseFontSize = () => {
    setSettings((prev) => ({ ...prev, fontSize: Math.min(prev.fontSize + 1, 2) as 0 | 1 | 2 }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({ ...prev, fontSize: Math.max(prev.fontSize - 1, 0) as 0 | 1 | 2 }));
  };

  const toggleItems = [
    { key: "highContrast" as const, icon: Contrast, label: "ניגודיות גבוהה", active: settings.highContrast },
    { key: "highlightLinks" as const, icon: Link2, label: "הדגשת קישורים", active: settings.highlightLinks },
    { key: "bigCursor" as const, icon: MousePointer2, label: "סמן מוגדל", active: settings.bigCursor },
    { key: "stopAnimations" as const, icon: PauseCircle, label: "עצירת אנימציות", active: settings.stopAnimations },
  ];

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 md:bottom-24 left-4 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Panel */}
      {open && (
        <>
          <div className="fixed inset-0 bg-foreground/40 z-[70]" onClick={() => setOpen(false)} />
          <div
            className="fixed left-4 bottom-40 z-[80] w-72 bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in-up"
            role="dialog"
            aria-label="תפריט נגישות"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                <span className="font-heading font-bold">תפריט נגישות</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="סגור תפריט נגישות" className="hover:opacity-80">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Font size */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">גודל גופן</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize === 0}
                    className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors"
                    aria-label="הקטן גופן"
                  >
                    <ZoomOut className="w-4 h-4" />
                    <span className="text-sm">הקטנה</span>
                  </button>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize === 2}
                    className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border border-border text-foreground hover:bg-secondary disabled:opacity-40 transition-colors"
                    aria-label="הגדל גופן"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">הגדלה</span>
                  </button>
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-2">
                {toggleItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => update({ [item.key]: !item.active })}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors text-sm font-medium ${
                      item.active
                        ? "bg-primary/10 border-primary text-primary"
                        : "border-border text-foreground hover:bg-secondary"
                    }`}
                    aria-pressed={item.active}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Reset */}
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary border border-border transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                איפוס הגדרות
              </button>

              {/* Link to statement */}
              <a
                href="/accessibility"
                className="block text-center text-xs text-primary hover:underline"
              >
                הצהרת נגישות מלאה
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;
