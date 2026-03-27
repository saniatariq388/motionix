"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Copy } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { iconsData } from "@/data/icons";
import { CodeBox } from "@/components/CodeBox";
import { IconReactions } from "@/components/IconReactions";
import { IconRequestBox } from "@/components/IconRequestBox";
import {
  BellIcon,
  HeartIcon,
  StarIcon,
  TrashIcon,
  SearchIcon,
  SunMoonIcon,
  DownloadIcon,
  SendIcon,
  LoaderIcon,
  BookmarkIcon,
  MotionVariant,
} from "@/components/icons";

const variantDescriptions: Record<MotionVariant, string> = {
  ease: "Smooth and calm motion",
  bounce: "Spring and fun energy",
  float: "Gentle top to bottom bob",
  pop: "Appear and disappear effect",
};

const iconComponents: Record<string, any> = {
  BellIcon,
  HeartIcon,
  StarIcon,
  TrashIcon,
  SearchIcon,
  SunMoonIcon,
  DownloadIcon,
  SendIcon,
  LoaderIcon,
  BookmarkIcon,
};

const packageManagers = [
  { name: "npm", command: "npm install motionix framer-motion lucide-react" },
  { name: "pnpm", command: "pnpm add motionix framer-motion lucide-react" },
  { name: "yarn", command: "yarn add motionix framer-motion lucide-react" },
];

export default function IconDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const icon = iconsData.find((i) => i.slug === slug);

  const [variant, setVariant] = useState<MotionVariant>("ease");
  const [size, setSize] = useState(48);
  const [color, setColor] = useState("#888888");
  const [hoverColor, setHoverColor] = useState(icon?.defaultHoverColor || "#6366f1");
  const [fillOnHover, setFillOnHover] = useState(true);
  const [installTab, setInstallTab] = useState<"package" | "manual">("package");
  const [pmTab, setPmTab] = useState("npm");

  const controls = useAnimation();

  useEffect(() => {
    if (icon) {
      setHoverColor(icon.defaultHoverColor);
    }
  }, [icon]);

  useEffect(() => {
    controls.start({ scale: 1, opacity: 1, rotate: 0, x: 0, y: 0 });
  }, [variant, controls]);

  if (!icon) {
    router.push("/");
    return null;
  }

  const IconComponent = iconComponents[icon.component];

  const handleVariantClick = async (newVariant: MotionVariant) => {
    setVariant(newVariant);
    await controls.start({
      scale: newVariant === "pop" ? 0 : 1,
      opacity: newVariant === "pop" ? 0 : 1,
      transition: { duration: 0.2 },
    });
    if (newVariant !== "pop") {
      await controls.start({
        scale: newVariant === "bounce" ? 1.1 : 1,
        transition: { duration: 0.3 },
      });
    }
  };

  const importCode = `import { ${icon.component} } from "motionix"`;

  const usageCode = `${importCode}

export default function App() {
  return (
    <${icon.component}
      variant="${variant}"
      size={${size}}
      hoverColor="${hoverColor}"
      fillOnHover={true}
    />
  )
}`;

  const pmCommand = packageManagers.find((pm) => pm.name === pmTab)?.command || "";

  return (
    <div className="grid-bg min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-14 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)] z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link
            href="/"
            className="gradient-text"
            style={{ fontSize: "18px", fontWeight: 800 }}
          >
            motionix
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#playground"
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Icons
            </Link>
            <Link
              href="/#footer"
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              License
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] text-[var(--foreground)] hover:border-[var(--indigo)] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 24px 80px" }}>
        {/* Back Button */}
        <Link
          href="/#playground"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[#6366f1] transition-colors"
          style={{ marginBottom: "40px" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Icons
        </Link>

        {/* Icon Hero - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left - Icon Preview */}
          <div
            style={{
              width: "260px",
              height: "260px",
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "24px",
              boxShadow: "var(--shadow)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <motion.span
              animate={controls}
              style={{ pointerEvents: "none" }}
            >
              <IconComponent
                size={72}
                color={color}
                hoverColor={hoverColor}
                fillOnHover={fillOnHover}
                variant={variant}
              />
            </motion.span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginTop: "16px",
              }}
            >
              Hover to preview
            </span>
          </div>

          {/* Right - Icon Info */}
          <div className="flex flex-col justify-center">
            <h1
              className="gradient-text"
              style={{
                fontSize: "36px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--foreground)",
                marginBottom: "12px",
              }}
            >
              {icon.name}
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              {icon.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {icon.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Variant Selector */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Animation Style
              </span>
              <div className="flex gap-2 mt-3">
                {(["ease", "bounce", "float", "pop"] as MotionVariant[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => handleVariantClick(v)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: 600,
                      backgroundColor: variant === v ? "#6366f1" : "transparent",
                      color: variant === v ? "#ffffff" : "var(--text-muted)",
                      border: `1px solid ${variant === v ? "#6366f1" : "var(--border-color)"}`,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                  marginTop: "10px",
                }}
              >
                {variantDescriptions[variant]}
              </p>
            </div>
          </div>
        </div>

        {/* Live Customizer */}
        <section style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--foreground)",
              marginBottom: "16px",
            }}
          >
            Customize
          </h2>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Size */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                SIZE
              </span>
              <div className="flex items-center justify-between mt-2">
                <input
                  type="range"
                  min={16}
                  max={96}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  style={{ flex: 1, marginRight: "12px" }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#6366f1",
                    minWidth: "40px",
                    textAlign: "right",
                  }}
                >
                  {size}px
                </span>
              </div>
            </div>

            {/* Stroke Color */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                COLOR
              </span>
              <button
                onClick={() => document.getElementById("detail-stroke-color")?.click()}
                className="w-full flex items-center gap-3 mt-2 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
              >
                <div
                  style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: color }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  {color}
                </span>
              </button>
              <input
                id="detail-stroke-color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="sr-only"
              />
            </div>

            {/* Hover Color */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                HOVER
              </span>
              <button
                onClick={() => document.getElementById("detail-hover-color")?.click()}
                className="w-full flex items-center gap-3 mt-2 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
              >
                <div
                  style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: hoverColor }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  {hoverColor}
                </span>
              </button>
              <input
                id="detail-hover-color"
                type="color"
                value={hoverColor}
                onChange={(e) => setHoverColor(e.target.value)}
                className="sr-only"
              />
            </div>
          </div>

          {/* Fill Toggle */}
          <div
            onClick={() => setFillOnHover(!fillOnHover)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: fillOnHover ? "#6366f1" : "var(--border-color)",
                position: "relative",
                transition: "background-color 0.2s",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "2px",
                  left: fillOnHover ? "22px" : "2px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  transition: "left 0.2s",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Fill on Hover
            </span>
          </div>
        </section>

        {/* Installation */}
        <section style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "24px",
            }}
          >
            Installation
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 mb-6">
            <button
              onClick={() => setInstallTab("package")}
              style={{
                fontSize: "14px",
                paddingBottom: "8px",
                borderBottom: installTab === "package" ? "2px solid #6366f1" : "none",
                color: installTab === "package" ? "var(--foreground)" : "var(--text-muted)",
                fontWeight: installTab === "package" ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Package
            </button>
            <button
              onClick={() => setInstallTab("manual")}
              style={{
                fontSize: "14px",
                paddingBottom: "8px",
                borderBottom: installTab === "manual" ? "2px solid #6366f1" : "none",
                color: installTab === "manual" ? "var(--foreground)" : "var(--text-muted)",
                fontWeight: installTab === "manual" ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              Manual
            </button>
          </div>

          {installTab === "package" ? (
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                1. Install motionix
              </span>

              {/* Package Manager Tabs */}
              <div className="flex gap-2 mt-3 mb-4">
                {["npm", "pnpm", "yarn"].map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setPmTab(pm)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 500,
                      backgroundColor: pmTab === pm ? "#6366f1" : "var(--card-bg)",
                      color: pmTab === pm ? "#ffffff" : "var(--text-muted)",
                      border: `1px solid ${pmTab === pm ? "#6366f1" : "var(--border-color)"}`,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {pm}
                  </button>
                ))}
              </div>

              <CodeBox code={pmCommand} language="bash" />

              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                2. Import and use
              </span>
              <CodeBox code={usageCode} language="tsx" />
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                Copy the component directly into your project
              </p>
              <CodeBox code={`// ${icon.component}.tsx source code would go here`} language="tsx" />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  display: "block",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                2. Import and use
              </span>
              <CodeBox code={usageCode} language="tsx" />
            </div>
          )}
        </section>

        {/* Props Table */}
        <section style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Props
          </h2>

          <div
            style={{
              width: "100%",
              borderRadius: "12px",
              border: "1px solid var(--border-color)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-4"
              style={{
                background: "var(--card-bg)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                padding: "12px 16px",
              }}
            >
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>

            {/* Rows */}
            {[
              { prop: "variant", type: "ease/bounce/float/pop", default: "ease", desc: "Animation style" },
              { prop: "size", type: "number", default: "24", desc: "Icon size in px" },
              { prop: "color", type: "string", default: "currentColor", desc: "Stroke color" },
              { prop: "hoverColor", type: "string", default: "icon default", desc: "Color on hover" },
              { prop: "fillOnHover", type: "boolean", default: "true", desc: "Fill on hover" },
              { prop: "className", type: "string", default: "—", desc: "Custom CSS class" },
            ].map((row, i) => (
              <div
                key={row.prop}
                className="grid grid-cols-4"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border-color)",
                  fontSize: "14px",
                  padding: "12px 16px",
                  background: i % 2 === 1 ? "var(--card-bg)" : "transparent",
                }}
              >
                <div style={{ fontWeight: 500 }}>{row.prop}</div>
                <div style={{ fontFamily: "monospace", color: "#6366f1", fontSize: "13px" }}>{row.type}</div>
                <div style={{ fontFamily: "monospace", color: "#6366f1", fontSize: "13px" }}>{row.default}</div>
                <div style={{ color: "var(--text-muted)" }}>{row.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Reactions */}
        <IconReactions iconSlug={icon.slug} />

        {/* Icon Request Box */}
        <IconRequestBox iconSlug={icon.slug} />
      </main>
    </div>
  );
}
