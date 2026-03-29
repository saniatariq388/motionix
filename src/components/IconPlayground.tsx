"use client";

import { useState, useMemo } from "react";
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
  HomeIcon,
  MenuIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  MoreHorizontalIcon,
  UserIcon,
  UsersIcon,
  LockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  LogInIcon,
  LogOutIcon,
  ShieldIcon,
  KeyIcon,
  MailIcon,
  MessageSquareIcon,
  MessageCircleIcon,
  PhoneIcon,
  VideoIcon,
  MicIcon,
  MicOffIcon,
  ShareIcon,
  LinkIcon,
  AtSignIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  UploadIcon,
  ImageIcon,
  PaperclipIcon,
  CopyIcon,
  ClipboardIcon,
  DatabaseIcon,
  HardDriveIcon,
  PlusIcon,
  MinusIcon,
  CloseIcon,
  CheckIcon,
  EditIcon,
  RefreshIcon,
  FilterIcon,
  SortIcon,
  ZoomInIcon,
  ZoomOutIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipForwardIcon,
  SkipBackIcon,
  VolumeIcon,
  VolumeOffIcon,
  MusicIcon,
  CameraIcon,
  CastIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  PackageIcon,
  TagIcon,
  GiftIcon,
  PercentIcon,
  WalletIcon,
  BarChartIcon,
  TrendingUpIcon,
  SettingsIcon,
  SlidersIcon,
  ToggleIcon,
  InfoIcon,
  AlertCircleIcon,
  HelpCircleIcon,
  TerminalIcon,
  CodeIcon,
  GlobeIcon,
  WifiIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  FlagIcon,
  AwardIcon,
  TrophyIcon,
  ZapIcon,
  FlameIcon,
  CrownIcon,
  SmileIcon,
  FrownIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  MoonIcon,
  CloudIcon,
  MapIcon,
  BatteryIcon,
  PowerIcon,
  CpuIcon,
  MotionVariant,
} from "./icons";
import { iconsData } from "@/data/icons";
import { Copy, Check, ArrowUpRight, Search } from "lucide-react";

const variantDescriptions: Record<MotionVariant, string> = {
  ease: "Smooth & calm motion",
  bounce: "Spring & fun energy",
  float: "Gentle top to bottom",
  pop: "Appear & disappear",
  burst: "Copies shoot outward",
  trail: "Copies float upward",
};

const variants = [
  { id: "ease" as MotionVariant, label: "Ease" },
  { id: "bounce" as MotionVariant, label: "Bounce" },
  { id: "float" as MotionVariant, label: "Float" },
  { id: "pop" as MotionVariant, label: "Pop" },
  { id: "burst" as MotionVariant, label: "Burst" },
  { id: "trail" as MotionVariant, label: "Trail" },
];

const categories = [
  "All",
  "Navigation",
  "User & Auth",
  "Communication",
  "Files",
  "Actions",
  "Media",
  "E-Commerce",
  "System",
  "Social",
  "Misc",
];

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
  HomeIcon,
  MenuIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  MoreHorizontalIcon,
  UserIcon,
  UsersIcon,
  LockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  LogInIcon,
  LogOutIcon,
  ShieldIcon,
  KeyIcon,
  MailIcon,
  MessageSquareIcon,
  MessageCircleIcon,
  PhoneIcon,
  VideoIcon,
  MicIcon,
  MicOffIcon,
  ShareIcon,
  LinkIcon,
  AtSignIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  UploadIcon,
  ImageIcon,
  PaperclipIcon,
  CopyIcon,
  ClipboardIcon,
  DatabaseIcon,
  HardDriveIcon,
  PlusIcon,
  MinusIcon,
  CloseIcon,
  CheckIcon,
  EditIcon,
  RefreshIcon,
  FilterIcon,
  SortIcon,
  ZoomInIcon,
  ZoomOutIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipForwardIcon,
  SkipBackIcon,
  VolumeIcon,
  VolumeOffIcon,
  MusicIcon,
  CameraIcon,
  CastIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  PackageIcon,
  TagIcon,
  GiftIcon,
  PercentIcon,
  WalletIcon,
  BarChartIcon,
  TrendingUpIcon,
  SettingsIcon,
  SlidersIcon,
  ToggleIcon,
  InfoIcon,
  AlertCircleIcon,
  HelpCircleIcon,
  TerminalIcon,
  CodeIcon,
  GlobeIcon,
  WifiIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  FlagIcon,
  AwardIcon,
  TrophyIcon,
  ZapIcon,
  FlameIcon,
  CrownIcon,
  SmileIcon,
  FrownIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  TimerIcon,
  MoonIcon,
  CloudIcon,
  MapIcon,
  BatteryIcon,
  PowerIcon,
  CpuIcon,
};

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const iconProps = {
    size,
    color: iconColor,
    hoverColor,
    fillOnHover,
    variant,
  };

  const filteredIcons = useMemo(() => {
    return iconsData.filter((icon) => {
      const matchesCategory =
        selectedCategory === "All" || icon.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: iconsData.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = iconsData.filter((icon) => icon.category === cat).length;
      }
    });
    return counts;
  }, []);

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
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        }
        .icons-section {
          width: 100%;
        }
        .search-box {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 12px 16px;
          padding-left: 44px;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s;
        }
        .search-box:focus {
          border-color: #6366f1;
        }
        .search-box::placeholder {
          color: var(--text-muted);
        }
        .search-wrapper {
          position: relative;
          margin-bottom: 8px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .results-count {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .category-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          margin-bottom: 24px;
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .category-scroll::-webkit-scrollbar {
          display: none;
        }
        .category-pill {
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.15s;
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-muted);
        }
        .category-pill.selected {
          background: #6366f1;
          color: #ffffff;
          border-color: #6366f1;
        }
        .category-pill:hover:not(.selected) {
          border-color: #6366f1;
          color: var(--foreground);
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
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
        }
        .empty-state-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .empty-state-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 8px;
        }
        .empty-state-text {
          font-size: 14px;
          color: var(--text-muted);
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
        
        /* Tablet: 768px - 1024px */
        @media (max-width: 1024px) {
          .playground-wrapper {
            grid-template-columns: 320px 1fr;
          }
          .controls-panel {
            width: 320px;
            padding: 20px;
          }
          .icons-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        /* Mobile Landscape / Small Tablet: 600px - 768px */
        @media (max-width: 768px) {
          .playground-wrapper {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .controls-panel {
            width: 100%;
            position: static;
            padding: 20px;
          }
          .icons-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          .icon-card {
            min-height: 120px;
            max-height: 140px;
            padding: 16px 8px;
          }
        }
        
        /* Mobile Portrait: 480px - 600px */
        @media (max-width: 600px) {
          .controls-panel {
            padding: 16px;
          }
          .icons-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .icon-card {
            min-height: 130px;
            max-height: 150px;
            padding: 20px 10px;
          }
          .category-pill {
            padding: 6px 12px;
            font-size: 11px;
          }
        }
        
        /* Small Mobile: < 480px */
        @media (max-width: 480px) {
          .controls-panel {
            padding: 14px;
            max-height: none;
            position: static;
          }
          .search-box {
            padding: 10px 14px;
            padding-left: 40px;
            font-size: 13px;
          }
          .search-icon {
            left: 12px;
            width: 14px;
            height: 14px;
          }
          .icons-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .icon-card {
            min-height: 110px;
            max-height: 130px;
            padding: 16px 8px;
            border-radius: 12px;
          }
          .icon-card span {
            font-size: 11px;
          }
          .category-pill {
            padding: 5px 10px;
            font-size: 10px;
          }
          .variant-btn {
            padding: 6px 12px;
            font-size: 11px;
          }
          .control-label {
            font-size: 10px !important;
          }
          .control-value {
            font-size: 12px !important;
          }
          .color-picker-btn {
            padding: 8px !important;
          }
          .toggle-label {
            font-size: 12px !important;
          }
        }
        
        /* Touch-friendly improvements */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
          }
          .category-pill {
            min-height: 32px;
          }
          .variant-btn {
            min-height: 36px;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>

      <div className="playground-wrapper">
        {/* Left Controls Panel */}
        <div className="controls-panel">
          {/* Size Control */}
          <div className="section-divider">
            <div className="flex items-center justify-between mb-3">
              <span
                className="control-label"
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
                className="control-value"
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
                  className="block mb-2 control-label"
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
                  className="color-picker-btn w-full flex items-center gap-3 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
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
                  className="block mb-2 control-label"
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
                  className="color-picker-btn w-full flex items-center gap-3 p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--indigo)] transition-colors"
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
              className="block mb-3 toggle-label"
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
                flexWrap: "wrap",
                gap: "8px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v.id)}
                  className="variant-btn"
                  style={{
                    flex: "none",
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
                    width: "auto",
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

        {/* Right Icons Section */}
        <div className="icons-section">
          {/* Search Box */}
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-box"
              placeholder="Search 100 icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Results Count */}
          {filteredIcons.length > 0 ? (
            <p className="results-count">{filteredIcons.length} icons found</p>
          ) : (
            <p className="results-count">
              No icons found for &apos;{searchQuery}&apos;
            </p>
          )}

          {/* Category Filter Pills */}
          <div className="category-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill${selectedCategory === cat ? " selected" : ""}`}
              >
                {cat} ({categoryCounts[cat]})
              </button>
            ))}
          </div>

          {/* Icons Grid or Empty State */}
          {filteredIcons.length > 0 ? (
            <div className="icons-grid">
              {filteredIcons.map((icon) => {
                const IconComponent = iconComponents[icon.component];
                return (
                  <Link
                    key={icon.slug}
                    href={`/icons/${icon.slug}`}
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
                        onCopy(icon.name);
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
                      {copiedIcon === icon.name ? (
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
                    <IconComponent {...iconProps} />
                    <span
                      style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-muted)", marginTop: "4px" }}
                    >
                      {icon.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <Search className="w-8 h-8" style={{ color: "var(--text-muted)" }} />
              </div>
              <p className="empty-state-title">No icons found</p>
              <p className="empty-state-text">Try searching for &apos;home&apos; or &apos;arrow&apos;</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
