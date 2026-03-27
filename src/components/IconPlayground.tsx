"use client";

import { useState } from "react";
import Link from "next/link";
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
} from "./icons";
import { Copy, Check, ArrowUpRight } from "lucide-react";

const variantDescriptions: Record<MotionVariant, string> = {
  ease: "Smooth & calm motion",
  bounce: "Spring & fun energy",
  float: "Gentle top to bottom",
  pop: "Appear & disappear",
};

const variants = [
  { id: "ease" as MotionVariant, label: "Ease" },
  { id: "bounce" as MotionVariant, label: "Bounce" },
  { id: "float" as MotionVariant, label: "Float" },
  { id: "pop" as MotionVariant, label: "Pop" },
];

interface IconPlaygroundProps {
  onCopy: (iconName: string) => void;
  copiedIcon: string | null;
}

export function IconPlayground({ onCopy, copiedIcon }: IconPlaygroundProps) {
  const [size, setSize] = useState(40);
  const [iconColor, setIconColor] = useState("#888888");
  const [hoverColor, setHoverColor] = useState("#3b82f6");
  const [fillOnHover, setFillOnHover] = useState(true);
  const [variant, setVariant] = useState<MotionVariant>("ease");

  const iconProps = {
    size,
    color: iconColor,
    hoverColor,
    fillOnHover,
    variant,
  };

  return (
    <>
      {/* Main Layout Styles */}
      <style>{`
        .playground-wrapper {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 24px;
          align-items: start;
          width: 100%;
        }
        .controls-panel {
          background: var(--controls-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          box-shadow: var(--shadow);
          position: sticky;
          top: 80px;
          width: 380px;
          flex-shrink: 0;
        }
        .icons-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          width: 100%;
        }
        .icon-card {
          min-height: 140px;
          max-height: 160px;
          padding: 24px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: var(--shadow);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .icon-card:hover {
          border: 1px solid #6366f1;
          box-shadow: 0 0 24px rgba(99,102,241,0.2);
          background: var(--card-hover-bg);
        }
        .section-divider {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .section-divider:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .playground-wrapper {
            grid-template-columns: 1fr;
          }
          .controls-panel {
            width: 100%;
            position: static;
          }
          .icons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .icons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="playground-wrapper">
        {/* Left Controls Panel */}
        <div className="controls-panel">
          {/* Size Control */}
          <div className="section-divider">
            <div className="flex items-center justify-between mb-3">
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
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#6366f1",
                }}
              >
                {size}px
              </span>
            </div>
            <input
              type="range"
              min={16}
              max={96}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </div>

          {/* Color Controls */}
          <div className="section-divider">
            <div className="grid grid-cols-2 gap-4">
              {/* Stroke Color */}
              <div>
                <span
                  className="block mb-2"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  STROKE COLOR
                </span>
                <button
                  onClick={() => document.getElementById("stroke-color")?.click()}
                  className="w-full flex items-center gap-3 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
                >
                  <div
                    className="rounded-lg border border-[var(--border-color)]"
                    style={{ width: "32px", height: "32px", backgroundColor: iconColor }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      fontFamily: "monospace",
                    }}
                  >
                    {iconColor}
                  </span>
                </button>
                <input
                  id="stroke-color"
                  type="color"
                  value={iconColor}
                  onChange={(e) => setIconColor(e.target.value)}
                  className="sr-only"
                />
              </div>

              {/* Hover Color */}
              <div>
                <span
                  className="block mb-2"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  HOVER COLOR
                </span>
                <button
                  onClick={() => document.getElementById("hover-color")?.click()}
                  className="w-full flex items-center gap-3 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
                >
                  <div
                    className="rounded-lg border border-[var(--border-color)]"
                    style={{ width: "32px", height: "32px", backgroundColor: hoverColor }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      fontFamily: "monospace",
                    }}
                  >
                    {hoverColor}
                  </span>
                </button>
                <input
                  id="hover-color"
                  type="color"
                  value={hoverColor}
                  onChange={(e) => setHoverColor(e.target.value)}
                  className="sr-only"
                />
              </div>
            </div>
          </div>

          {/* Fill Toggle */}
          <div className="section-divider">
            <span
              className="block mb-3"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              FILL ON HOVER
            </span>
            <div
              onClick={() => setFillOnHover(!fillOnHover)}
              style={{
                width: "44px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: fillOnHover ? "#6366f1" : "var(--border-color)",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                flexShrink: 0,
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
                  transition: "left 0.2s ease",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>

          {/* Animation Style */}
          <div className="section-divider">
            <span
              className="block mb-3"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
              }}
            >
              ANIMATION STYLE
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v.id)}
                  style={{
                    flex: 1,
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: variant === v.id ? "#6366f1" : "transparent",
                    color: variant === v.id ? "#ffffff" : "var(--text-muted)",
                    border: `1px solid ${variant === v.id ? "#6366f1" : "var(--border-color)"}`,
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (variant !== v.id) {
                      e.currentTarget.style.borderColor = "#6366f1";
                      e.currentTarget.style.color = "var(--foreground)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (variant !== v.id) {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }
                  }}
                >
                  {v.label}
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
                minHeight: "20px",
              }}
            >
              {variantDescriptions[variant]}
            </p>
          </div>
        </div>

        {/* Right Icons Grid */}
        <div className="icons-grid">
          {/* Bell Icon Card */}
          <Link
            href="/icons/bell"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Bell");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Bell" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <BellIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Bell
            </span>
          </Link>

          {/* Heart Icon Card */}
          <Link
            href="/icons/heart"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Heart");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Heart" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <HeartIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Heart
            </span>
          </Link>

          {/* Star Icon Card */}
          <Link
            href="/icons/star"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Star");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Star" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <StarIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Star
            </span>
          </Link>

          {/* Trash Icon Card */}
          <Link
            href="/icons/trash"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Trash");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Trash" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <TrashIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Trash
            </span>
          </Link>

          {/* Search Icon Card */}
          <Link
            href="/icons/search"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Search");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Search" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <SearchIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Search
            </span>
          </Link>

          {/* Sun Icon Card */}
          <Link
            href="/icons/sun"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Sun");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Sun" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <SunMoonIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Sun
            </span>
          </Link>

          {/* Download Icon Card */}
          <Link
            href="/icons/download"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Download");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Download" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <DownloadIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Download
            </span>
          </Link>

          {/* Send Icon Card */}
          <Link
            href="/icons/send"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Send");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Send" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <SendIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Send
            </span>
          </Link>

          {/* Loader Icon Card */}
          <Link
            href="/icons/loader"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Loader");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Loader" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <LoaderIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Loader
            </span>
          </Link>

          {/* Bookmark Icon Card */}
          <Link
            href="/icons/bookmark"
            className="icon-card"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.2)";
              e.currentTarget.style.background = "var(--card-hover-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCopy("Bookmark");
              }}
              className="absolute top-2 right-2 w-7 h-7 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center opacity-0 transition-opacity duration-200 hover:border-[var(--indigo)] z-10"
              style={{
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.borderColor = "var(--border-color)";
              }}
            >
              {copiedIcon === "Bookmark" ? (
                <Check className="w-3 h-3" style={{ color: "#10b981" }} />
              ) : (
                <Copy className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
              )}
            </button>
            <ArrowUpRight
              className="absolute top-2 right-2 w-3 h-3"
              style={{
                color: "var(--text-muted)",
                opacity: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
            <BookmarkIcon {...iconProps} />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
            >
              Bookmark
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
