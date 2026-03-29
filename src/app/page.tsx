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
    { IconComponent: Bell, position: { top: "10%", left: "5%" }, delay: 0, duration: 3 },
    { IconComponent: Heart, position: { top: "15%", right: "8%" }, delay: 0.5, duration: 4 },
    { IconComponent: Star, position: { top: "40%", left: "3%" }, delay: 1, duration: 3.5 },
    { IconComponent: Download, position: { top: "45%", right: "5%" }, delay: 1.5, duration: 4.5 },
    { IconComponent: Send, position: { top: "70%", left: "6%" }, delay: 2, duration: 3.2 },
    { IconComponent: Bookmark, position: { top: "75%", right: "10%" }, delay: 2.5, duration: 4.2 },
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
      <style>{`
        /* Navbar Responsive */
        .navbar {
          padding-left: 24px;
          padding-right: 24px;
        }
        .navbar .max-w-7xl {
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (max-width: 768px) {
          .navbar {
            padding-left: 16px;
            padding-right: 16px;
          }
          .navbar .max-w-7xl {
            padding-left: 0;
            padding-right: 0;
          }
          .nav-links {
            gap: 12px !important;
          }
          .nav-link {
            font-size: 13px !important;
          }
          .github-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .navbar {
            padding-left: 12px;
            padding-right: 12px;
          }
          .nav-logo {
            font-size: 16px !important;
          }
        }
        
        /* Max width container responsive */
        .max-w-7xl {
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (max-width: 768px) {
          .max-w-7xl {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
        @media (max-width: 480px) {
          .max-w-7xl {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
        
        /* Responsive Hero Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          .hero-heading {
            font-size: clamp(32px, 8vw, 48px) !important;
          }
          .hero-subtext {
            font-size: 16px !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .stats-bar {
            gap: 24px !important;
          }
          .stat-item {
            gap: 16px !important;
          }
          .floating-icon {
            opacity: 0.5 !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding-top: 80px !important;
            padding-bottom: 40px !important;
          }
          .hero-heading {
            font-size: clamp(28px, 10vw, 36px) !important;
          }
          .hero-subtext {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          .badge-container {
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .badge {
            font-size: 10px !important;
            padding: 3px 10px !important;
          }
          .stats-bar {
            gap: 16px !important;
          }
          .stat-value {
            font-size: 16px !important;
          }
          .stat-label {
            font-size: 10px !important;
          }
        }
        
        /* Built With Strip Responsive */
        @media (max-width: 768px) {
          .built-with-strip {
            padding: 20px 16px !important;
          }
          .built-with-links {
            flex-wrap: wrap !important;
            gap: 16px !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .built-with-links a {
            font-size: 12px !important;
          }
        }
        
        /* Playground Section Responsive */
        @media (max-width: 768px) {
          .playground-section {
            padding: 40px 16px !important;
          }
          .playground-title {
            font-size: 28px !important;
          }
          .playground-subtitle {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .playground-section {
            padding: 30px 12px !important;
          }
          .playground-title {
            font-size: 24px !important;
          }
        }
        
        /* Footer Responsive */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
        }
      `}</style>
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
          paddingTop: "140px",
          paddingBottom: "100px",
          textAlign: "center",
        }}
      >
        {/* Radial Glow */}
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
            width: "600px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />

        {/* Floating Background Icons */}
        {floatingIcons.map(({ IconComponent, position, delay, duration }, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={{
              position: "absolute",
              ...position,
              zIndex: 1,
              pointerEvents: "none",
            } as React.CSSProperties}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <IconComponent size={28} strokeWidth={1.5} style={{ color: "rgba(99,102,241,0.15)" }} />
          </motion.div>
        ))}

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
          <motion.div variants={itemVariants} className="hero-buttons flex items-center justify-center gap-3">
            <a
              href="#playground"
              className="hero-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[var(--indigo)] text-white font-medium hover:bg-[var(--indigo-hover)] transition-colors"
            >
              Browse Icons
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[var(--border-color)] text-[var(--foreground)] hover:border-[var(--indigo)] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
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
