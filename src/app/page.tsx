"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconPlayground } from "@/components/IconPlayground";
import { ArrowRight, Bell, Heart, Star, Download, Send, Bookmark } from "lucide-react";
import { useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";

export default function Home() {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const playgroundRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingIcons = [
    { IconComponent: Bell, position: { top: "15%", left: "5%" }, delay: 0, duration: 3.5 },
    { IconComponent: Heart, position: { top: "20%", right: "6%" }, delay: 0.5, duration: 4 },
    { IconComponent: Star, position: { top: "55%", left: "3%" }, delay: 1, duration: 3 },
    { IconComponent: Download, position: { top: "60%", right: "4%" }, delay: 1.5, duration: 4.5 },
    { IconComponent: Send, position: { top: "38%", left: "8%" }, delay: 0.8, duration: 3.8 },
    { IconComponent: Bookmark, position: { top: "35%", right: "8%" }, delay: 1.2, duration: 4.2 },
  ] as Array<{ IconComponent: LucideIcon; position: Record<string, string>; delay: number; duration: number }>;

  const scrollToPlayground = () => {
    playgroundRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopy = async (iconName: string) => {
    const importStatement = `import { ${iconName}Icon } from "motionix"`;
    await navigator.clipboard.writeText(importStatement);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 1500);
  };

  return (
    <div className="grid-bg min-h-screen">
      {/* Fixed Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 h-14 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)] z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <span
            className="nav-logo gradient-text"
            style={{
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            motionix
          </span>

          {/* Center Nav Links */}
          <div className="nav-links flex items-center gap-6">
            <button
              onClick={scrollToPlayground}
              className="nav-link text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Icons
            </button>
            <button
              onClick={scrollToFooter}
              className="nav-link text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              License
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] text-[var(--foreground)] hover:border-[var(--indigo)] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section relative overflow-hidden"
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px 40px 100px",
        }}
      >
        {/* Radial Glow */}
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
            width: "700px",
            height: "500px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
          className="dark-glow"
        />
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
            width: "700px",
            height: "500px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
          className="light-glow"
        />

        {/* Floating Background Icons Container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          {floatingIcons.map(({ IconComponent, position, delay, duration }, index) => (
            <motion.div
              key={index}
              className="floating-icon"
              style={{
                position: "absolute",
                ...position,
                pointerEvents: "none",
                color: "rgba(255,255,255,0.12)",
              } as React.CSSProperties}
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <IconComponent
                size={36}
                strokeWidth={1.5}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badges */}
          <motion.div variants={itemVariants} className="badge-container flex items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--indigo)] text-xs text-[var(--text-muted)] badge">
              <span className="w-2 h-2 rounded-full bg-[var(--indigo)]" />
              Open Source Icon Library
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981] text-xs text-[var(--text-muted)] badge">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              MIT License
            </div>
          </motion.div>

          {/* Heading */}
          <div
            className="hero-heading"
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
              marginBottom: "24px",
            }}
          >
            <motion.div variants={itemVariants}>
              <div>Icons that move</div>
              <span
                className="gradient-text"
                style={{
                  display: "block",
                }}
              >
                with intent
              </span>
            </motion.div>
          </div>

          {/* Subtext */}
          <div
            className="hero-subtext"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-muted)] max-w-xl mx-auto mb-10"
            >
              6 motion variants per icon. Fully customizable. Copy paste ready.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              maxWidth: "480px",
              margin: "32px auto 0",
              padding: "0 20px",
              boxSizing: "border-box",
              flexWrap: "nowrap",
            }}
          >
            <a
              href="#playground"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#6366f1",
                color: "#ffffff",
                padding: "14px 20px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                minWidth: "0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4f46e5";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#6366f1";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Browse Icons
              <ArrowRight size={15} />
            </a>
            <a
              href="https://github.com/YOUR_USERNAME/motionix"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "var(--foreground)",
                padding: "14px 20px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1.5px solid var(--border-color)",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                minWidth: "0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#6366f1";
                e.currentTarget.style.color = "#6366f1";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "rgba(99,102,241,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ width: "15px", height: "15px" }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="stats-bar flex items-center justify-center mt-10"
          >
            <div className="stat-item flex items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="gradient-text stat-value" style={{ fontSize: "20px", fontWeight: 800 }}>100</span>
                <span className="text-[var(--text-muted)] stat-label" style={{ fontSize: "12px", fontWeight: 500 }}>Icons</span>
              </div>
              <div style={{ width: "1px", height: "32px", background: "var(--border-color)" }} />
              <div className="flex flex-col items-center">
                <span className="gradient-text stat-value" style={{ fontSize: "20px", fontWeight: 800 }}>6</span>
                <span className="text-[var(--text-muted)] stat-label" style={{ fontSize: "12px", fontWeight: 500 }}>Variants</span>
              </div>
              <div style={{ width: "1px", height: "32px", background: "var(--border-color)" }} />
              <div className="flex flex-col items-center">
                <span className="gradient-text stat-value" style={{ fontSize: "20px", fontWeight: 800 }}>MIT</span>
                <span className="text-[var(--text-muted)] stat-label" style={{ fontSize: "12px", fontWeight: 500 }}>License</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Built With Strip */}
      <section
        className="built-with-strip"
        style={{
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          padding: "24px",
          background: "var(--card-bg)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            BUILT WITH
          </span>
          <div className="built-with-links flex items-center gap-10">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Next.js 16
            </a>
            <div style={{ width: "1px", height: "16px", background: "var(--border-color)" }} />
            <a
              href="https://www.framer.com/motion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Framer Motion
            </a>
            <div style={{ width: "1px", height: "16px", background: "var(--border-color)" }} />
            <a
              href="https://lucide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Lucide React <span className="text-[#10b981]">(MIT)</span>
            </a>
            <div style={{ width: "1px", height: "16px", background: "var(--border-color)" }} />
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Tailwind CSS
            </a>
            <div style={{ width: "1px", height: "16px", background: "var(--border-color)" }} />
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              shadcn/ui <span className="text-[#10b981]">(MIT)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section id="playground" ref={playgroundRef} className="playground-section py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2
              className="playground-title gradient-text"
              style={{
                fontSize: "40px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
              }}
            >
              Interactive Playground
            </h2>
            <p
              className="playground-subtitle"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--text-muted)",
              }}
            >
              Customize and preview every icon live
            </p>
          </div>
          <IconPlayground onCopy={handleCopy} copiedIcon={copiedIcon} />
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={footerRef}
        style={{
          borderTop: "1px solid var(--border-color)",
          padding: "48px 24px",
          background: "var(--card-bg)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 - Brand */}
            <div>
              <span
                className="gradient-text"
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                }}
              >
                motionix
              </span>
              <p
                className="mt-2"
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                }}
              >
                Icons that move with intent
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10b981] text-xs text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                MIT Licensed
              </div>
              <p
                className="mt-3"
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                }}
              >
                Free to use in personal and commercial projects
              </p>
            </div>

            {/* Column 2 - Credits */}
            <div>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Built On
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://lucide.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    Lucide React — MIT License
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.framer.com/motion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    Framer Motion — MIT License
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    shadcn/ui — MIT License
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    Next.js 16 — MIT License
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Links */}
            <div>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    GitHub
                  </a>
                </li>
                <li
                  className="text-[var(--text-muted)]"
                  style={{ fontSize: "13px", opacity: 0.6 }}
                >
                  npm (coming soon)
                </li>
                <li>
                  <a
                    href="https://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    License (MIT)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    Request an Icon
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="footer-bottom mt-10 pt-6"
            style={{
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              className="text-[var(--text-muted)]"
              style={{ fontSize: "12px" }}
            >
              © 2025 motionix. MIT Licensed.
            </p>
            <p
              className="text-[var(--text-muted)]"
              style={{ fontSize: "12px" }}
            >
              Animations are original work. SVG icons based on Lucide React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
