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
    <div className="playground-layout">
        {/* Left Controls Panel */}
        <div className="controls-panel">
          {/* Size Control */}
          <div className="section-divider">
            <div className="flex items-center justify-between mb-3">
              <span className="control-label">SIZE</span>
              <span className="control-value">{size}px</span>
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
            <div className="color-pickers-row">
              {/* Stroke Color */}
              <div className="color-picker-item">
                <span className="block mb-2 control-label">STROKE COLOR</span>
                <button
                  onClick={() => document.getElementById("stroke-color")?.click()}
                  className="color-picker-btn"
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
              <div className="color-picker-item">
                <span className="block mb-2 control-label">HOVER COLOR</span>
                <button
                  onClick={() => document.getElementById("hover-color")?.click()}
                  className="color-picker-btn"
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
            <span className="block mb-3 toggle-label">FILL ON HOVER</span>
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
            <span className="block mb-3 control-label">ANIMATION STYLE</span>
            <div className="variant-pills">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v.id)}
                  className={`variant-pill${variant === v.id ? " selected" : ""}`}
                  style={{
                    backgroundColor: variant === v.id ? "#6366f1" : "transparent",
                    color: variant === v.id ? "#ffffff" : "var(--text-muted)",
                    border: `1px solid ${variant === v.id ? "#6366f1" : "var(--border-color)"}`,
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
        <div className="icons-section" style={{ minWidth: 0, width: "100%", overflow: "hidden" }}>
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
                    style={{ textDecoration: "none" }}
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
                      style={{ 
                        fontSize: "12px", 
                        fontWeight: 600, 
                        color: "var(--text-muted)", 
                        marginTop: "4px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
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
  );
}
