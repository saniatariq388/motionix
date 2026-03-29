import { Bell, Heart, Star, Trash2, Search, Sun, Download, Send, Loader2, Bookmark, Home, Menu, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ChevronDown, ChevronRight, ExternalLink, MoreHorizontal, User, Users, Lock, Eye, EyeOff, LogIn, LogOut, Shield, Key, Mail, MessageSquare, MessageCircle, Phone, Video, Mic, MicOff, Share, Link, AtSign, File, FileText, Folder, Upload, Image, Paperclip, Copy, Clipboard, Database, HardDrive, Plus, Minus, X, Check, Pen, RefreshCw, Filter, ArrowUpDown, ZoomIn, ZoomOut, Play, Pause, Square, SkipForward, SkipBack, Volume2, VolumeX, Music, Camera, Cast, ShoppingCart, ShoppingBag, CreditCard, Package, Tag, Gift, Percent, Wallet, BarChart3, TrendingUp, Settings, Sliders, ToggleLeft, Info, AlertCircle, HelpCircle, Terminal, Code, Globe, Wifi, ThumbsUp, ThumbsDown, Flag, Award, Trophy, Zap, Flame, Crown, Smile, Frown, MapPin, Calendar, Clock, Timer, Moon, Cloud, Map, Battery, Power, Cpu } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

// src/icons/BellIcon.tsx
function IconCopies({ variant, isHovered, children }) {
  if (!isHovered || variant !== "burst" && variant !== "trail") {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  if (variant === "burst") {
    return /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: [
      children,
      /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: -32, y: -32 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: 0, y: -42 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0.05 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: 32, y: -32 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: -38, y: 8 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0.07 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: 38, y: 8 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0.12 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0.9, scale: 1, x: 0, y: 0 },
            animate: { opacity: 0, scale: 0.3, x: 0, y: 38 },
            exit: { opacity: 0 },
            transition: { duration: 0.7, ease: "easeOut", delay: 0.03 },
            style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
            className: "burst-copy",
            children
          }
        )
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: [
    children,
    /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0.85, scale: 0.9, y: 0 },
          animate: { opacity: 0, scale: 0.2, y: -48 },
          exit: { opacity: 0 },
          transition: { duration: 0.9, ease: "easeOut", delay: 0 },
          style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
          className: "trail-copy",
          children
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0.65, scale: 0.7, x: -12, y: 0 },
          animate: { opacity: 0, scale: 0.15, x: -20, y: -38 },
          exit: { opacity: 0 },
          transition: { duration: 0.9, ease: "easeOut", delay: 0.18 },
          style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
          className: "trail-copy",
          children
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0.5, scale: 0.55, x: 12, y: 0 },
          animate: { opacity: 0, scale: 0.1, x: 20, y: -38 },
          exit: { opacity: 0 },
          transition: { duration: 0.9, ease: "easeOut", delay: 0.35 },
          style: { position: "absolute", pointerEvents: "none", zIndex: 1 },
          className: "trail-copy",
          children
        }
      )
    ] }) })
  ] });
}
var MotionBell = motion(Bell);
var getVariants = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, -8, 8, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          rotate: [0, -25, 25, -25, 25, 0],
          scale: [1, 1.2, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -12, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function BellIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.35, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.25, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.45,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionBell,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionHeart = motion(Heart);
var getVariants2 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.5, 0.8, 1.2, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -12, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function HeartIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants2(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.35, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.25, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.45,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionHeart,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionStar = motion(Star);
var getVariants3 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 45, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          rotate: 360,
          scale: [1, 1.3, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -12, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function StarIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants3(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        rotate: 180,
        transition: { duration: 0.35, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.25, 1],
        opacity: [0, 1, 1],
        rotate: [180, 360],
        transition: {
          duration: 0.45,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionStar,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTrash2 = motion(Trash2);
var getVariants4 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [-3, 3, -3, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          rotate: [-8, 8, -8, 8, 0],
          scale: [1, 1.15, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TrashIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants4(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTrash2,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSearch = motion(Search);
var getVariants5 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          rotate: [0, -15, 15, -10, 0],
          scale: [1, 1.2, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SearchIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants5(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSearch,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSun = motion(Sun);
var getVariants6 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 20, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          rotate: 360,
          scale: [1, 1.3, 1],
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SunMoonIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants6(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        rotate: 180,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        rotate: [180, 360, 360],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSun,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionDownload = motion(Download);
var getVariants7 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, 4, 0],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          y: [0, 8, -4, 6, 0],
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function DownloadIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants7(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionDownload,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSend = motion(Send);
var getVariants8 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          x: [0, 4, 0],
          y: [0, -4, 0],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          x: [0, 10, -5, 8, 0],
          y: [0, -10, 5, -8, 0],
          transition: {
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SendIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants8(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        x: 20,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        x: [-10, 0],
        y: [10, 0],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSend,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLoader2 = motion(Loader2);
var getVariants9 = (variant) => {
  switch (variant) {
    case "bounce":
      return {
        hover: {
          rotate: 360,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function LoaderIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" && variant !== "ease" ? getVariants9(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    } else if (variant === "ease") {
      controls.start({
        rotate: 360,
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }
      });
    } else if (variant === "bounce") {
      await controls.start({
        rotate: 360,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      });
      await controls.start({
        rotate: 720,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    } else if (variant === "ease") {
      controls.stop();
      controls.set({ rotate: 0 });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant === "bounce" || variant === "float" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLoader2,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionBookmark = motion(Bookmark);
var getVariants10 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.1, 1],
          transition: { duration: 0.3, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          y: [0, -8, 2, -5, 0],
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function BookmarkIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants10(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionBookmark,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionHome = motion(Home);
var getVariants11 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, -4, 0],
          scale: [1, 1.05, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function HomeIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants11(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionHome,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMenu = motion(Menu);
var getVariants12 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scaleX: [1, 0.8, 1],
          transition: { duration: 0.4, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MenuIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants12(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMenu,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionArrowLeft = motion(ArrowLeft);
var getVariants13 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          x: [0, -6, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ArrowLeftIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants13(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionArrowLeft,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionArrowRight = motion(ArrowRight);
var getVariants14 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          x: [0, 6, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ArrowRightIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants14(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionArrowRight,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionArrowUp = motion(ArrowUp);
var getVariants15 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, -6, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ArrowUpIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants15(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionArrowUp,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionArrowDown = motion(ArrowDown);
var getVariants16 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, 6, 0],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ArrowDownIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants16(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionArrowDown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionChevronDown = motion(ChevronDown);
var getVariants17 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ChevronDownIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants17(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionChevronDown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionChevronRight = motion(ChevronRight);
var getVariants18 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ChevronRightIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants18(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionChevronRight,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionExternalLink = motion(ExternalLink);
var getVariants19 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ExternalLinkIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants19(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionExternalLink,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMoreHorizontal = motion(MoreHorizontal);
var getVariants20 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MoreHorizontalIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants20(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMoreHorizontal,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionUser = motion(User);
var getVariants21 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function UserIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants21(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionUser,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionUsers = motion(Users);
var getVariants22 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function UsersIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants22(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionUsers,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLock = motion(Lock);
var getVariants23 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function LockIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants23(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLock,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLock2 = motion(Lock);
var getVariants24 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function UnlockIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants24(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLock2,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionEye = motion(Eye);
var getVariants25 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function EyeIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants25(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionEye,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionEyeOff = motion(EyeOff);
var getVariants26 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function EyeOffIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants26(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionEyeOff,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLogIn = motion(LogIn);
var getVariants27 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function LogInIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants27(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLogIn,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLogOut = motion(LogOut);
var getVariants28 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function LogOutIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants28(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLogOut,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionShield = motion(Shield);
var getVariants29 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ShieldIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants29(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionShield,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionKey = motion(Key);
var getVariants30 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function KeyIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants30(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionKey,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMail = motion(Mail);
var getVariants31 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MailIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants31(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMail,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMessageSquare = motion(MessageSquare);
var getVariants32 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MessageSquareIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants32(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMessageSquare,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMessageCircle = motion(MessageCircle);
var getVariants33 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MessageCircleIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants33(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMessageCircle,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPhone = motion(Phone);
var getVariants34 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PhoneIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants34(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPhone,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionVideo = motion(Video);
var getVariants35 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function VideoIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants35(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionVideo,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMic = motion(Mic);
var getVariants36 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MicIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants36(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMic,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMicOff = motion(MicOff);
var getVariants37 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MicOffIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants37(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMicOff,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionShare = motion(Share);
var getVariants38 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ShareIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants38(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionShare,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionLink = motion(Link);
var getVariants39 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function LinkIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants39(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionLink,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionAtSign = motion(AtSign);
var getVariants40 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function AtSignIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants40(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionAtSign,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFile = motion(File);
var getVariants41 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FileIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants41(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFile,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFileText = motion(FileText);
var getVariants42 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FileTextIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants42(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFileText,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFolder = motion(Folder);
var getVariants43 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FolderIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants43(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFolder,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionUpload = motion(Upload);
var getVariants44 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function UploadIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants44(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionUpload,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionImage = motion(Image);
var getVariants45 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ImageIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants45(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionImage,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPaperclip = motion(Paperclip);
var getVariants46 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PaperclipIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants46(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPaperclip,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCopy = motion(Copy);
var getVariants47 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CopyIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants47(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCopy,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionClipboard = motion(Clipboard);
var getVariants48 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ClipboardIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants48(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionClipboard,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionDatabase = motion(Database);
var getVariants49 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function DatabaseIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants49(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionDatabase,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionHardDrive = motion(HardDrive);
var getVariants50 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function HardDriveIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants50(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionHardDrive,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPlus = motion(Plus);
var getVariants51 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PlusIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants51(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPlus,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMinus = motion(Minus);
var getVariants52 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MinusIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants52(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMinus,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionX = motion(X);
var getVariants53 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 90, 0],
          transition: { duration: 0.3, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CloseIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants53(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionX,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCheck = motion(Check);
var getVariants54 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.3, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CheckIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants54(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCheck,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPen = motion(Pen);
var getVariants55 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function EditIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants55(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPen,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionRefreshCw = motion(RefreshCw);
var getVariants56 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 180, 360],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function RefreshIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants56(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionRefreshCw,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFilter = motion(Filter);
var getVariants57 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FilterIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants57(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFilter,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionArrowUpDown = motion(ArrowUpDown);
var getVariants58 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SortIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants58(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionArrowUpDown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionZoomIn = motion(ZoomIn);
var getVariants59 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ZoomInIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants59(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionZoomIn,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionZoomOut = motion(ZoomOut);
var getVariants60 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ZoomOutIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants60(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionZoomOut,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPlay = motion(Play);
var getVariants61 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.2, 1],
          transition: { duration: 0.3, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PlayIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants61(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPlay,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPause = motion(Pause);
var getVariants62 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PauseIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants62(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPause,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSquare = motion(Square);
var getVariants63 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function StopIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants63(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSquare,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSkipForward = motion(SkipForward);
var getVariants64 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SkipForwardIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants64(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSkipForward,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSkipBack = motion(SkipBack);
var getVariants65 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SkipBackIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants65(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSkipBack,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionVolume2 = motion(Volume2);
var getVariants66 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function VolumeIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants66(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionVolume2,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionVolumeX = motion(VolumeX);
var getVariants67 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function VolumeOffIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants67(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionVolumeX,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMusic = motion(Music);
var getVariants68 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MusicIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants68(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMusic,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCamera = motion(Camera);
var getVariants69 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CameraIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants69(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCamera,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCast = motion(Cast);
var getVariants70 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CastIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants70(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCast,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionShoppingCart = motion(ShoppingCart);
var getVariants71 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ShoppingCartIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants71(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionShoppingCart,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionShoppingBag = motion(ShoppingBag);
var getVariants72 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ShoppingBagIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants72(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionShoppingBag,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCreditCard = motion(CreditCard);
var getVariants73 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CreditCardIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants73(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCreditCard,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPackage = motion(Package);
var getVariants74 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PackageIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants74(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPackage,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTag = motion(Tag);
var getVariants75 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TagIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants75(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTag,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionGift = motion(Gift);
var getVariants76 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function GiftIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants76(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionGift,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPercent = motion(Percent);
var getVariants77 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PercentIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants77(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPercent,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionWallet = motion(Wallet);
var getVariants78 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function WalletIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants78(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionWallet,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionBarChart3 = motion(BarChart3);
var getVariants79 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function BarChartIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants79(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionBarChart3,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTrendingUp = motion(TrendingUp);
var getVariants80 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TrendingUpIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#f59e0b",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants80(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTrendingUp,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSettings = motion(Settings);
var getVariants81 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 90],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SettingsIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#888888",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants81(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    } else if (variant === "ease") {
      await controls.start({
        rotate: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSettings,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSliders = motion(Sliders);
var getVariants82 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SlidersIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#888888",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants82(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSliders,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionToggleLeft = motion(ToggleLeft);
var getVariants83 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ToggleIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#888888",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants83(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionToggleLeft,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionInfo = motion(Info);
var getVariants84 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function InfoIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants84(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionInfo,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionAlertCircle = motion(AlertCircle);
var getVariants85 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function AlertCircleIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants85(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionAlertCircle,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionHelpCircle = motion(HelpCircle);
var getVariants86 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function HelpCircleIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants86(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionHelpCircle,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTerminal = motion(Terminal);
var getVariants87 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TerminalIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#888888",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants87(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTerminal,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCode = motion(Code);
var getVariants88 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CodeIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#888888",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants88(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCode,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionGlobe = motion(Globe);
var getVariants89 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function GlobeIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants89(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionGlobe,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionWifi = motion(Wifi);
var getVariants90 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function WifiIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants90(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionWifi,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionThumbsUp = motion(ThumbsUp);
var getVariants91 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ThumbsUpIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants91(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionThumbsUp,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionThumbsDown = motion(ThumbsDown);
var getVariants92 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ThumbsDownIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants92(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionThumbsDown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFlag = motion(Flag);
var getVariants93 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FlagIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants93(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFlag,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionAward = motion(Award);
var getVariants94 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function AwardIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants94(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionAward,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTrophy = motion(Trophy);
var getVariants95 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TrophyIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants95(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTrophy,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionZap = motion(Zap);
var getVariants96 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, -4, 2, 0],
          scale: [1, 1.2, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ZapIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants96(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionZap,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFlame = motion(Flame);
var getVariants97 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          y: [0, -3, 0],
          scale: [1, 1.15, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FlameIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants97(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFlame,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCrown = motion(Crown);
var getVariants98 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CrownIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants98(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCrown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionSmile = motion(Smile);
var getVariants99 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function SmileIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants99(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionSmile,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionFrown = motion(Frown);
var getVariants100 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function FrownIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants100(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionFrown,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMapPin = motion(MapPin);
var getVariants101 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MapPinIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants101(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMapPin,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCalendar = motion(Calendar);
var getVariants102 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CalendarIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants102(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCalendar,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionClock = motion(Clock);
var getVariants103 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function ClockIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants103(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionClock,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionTimer = motion(Timer);
var getVariants104 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function TimerIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants104(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionTimer,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMoon = motion(Moon);
var getVariants105 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MoonIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#8b5cf6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants105(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMoon,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCloud = motion(Cloud);
var getVariants106 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CloudIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#3b82f6",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants106(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCloud,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionMap = motion(Map);
var getVariants107 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function MapIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants107(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionMap,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionBattery = motion(Battery);
var getVariants108 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function BatteryIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#10b981",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants108(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionBattery,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionPower = motion(Power);
var getVariants109 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function PowerIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants109(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionPower,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}
var MotionCpu = motion(Cpu);
var getVariants110 = (variant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        }
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.4, 0.85, 1.2, 1],
          transition: { duration: 0.6, ease: "easeInOut" }
        }
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }
        }
      };
  }
};
function CpuIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants110(variant) : void 0;
  const controls = useAnimation();
  useEffect(() => {
    if (variant !== "pop" && variant !== "burst" && variant !== "trail") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
    setIsHovered(true);
    if (variant === "pop") {
      await controls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeIn" }
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
          times: [0, 0.6, 1]
        }
      });
    }
  };
  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsx(
    motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsx(
        MotionCpu,
        {
          size,
          stroke: isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color,
          fill: fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : fillOnHover ? hoverColor : "none",
          onMouseEnter: (e) => {
            e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
            e.currentTarget.style.stroke = hoverColor;
            if (fillOnHover) {
              e.currentTarget.style.fill = hoverColor;
            }
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.stroke = color;
            if (fillOnHover) {
              e.currentTarget.style.fill = "none";
            }
          }
        }
      )
    }
  ) });
}

export { AlertCircleIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, AtSignIcon, AwardIcon, BarChartIcon, BatteryIcon, BellIcon, BookmarkIcon, CalendarIcon, CameraIcon, CastIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, ClipboardIcon, ClockIcon, CloseIcon, CloudIcon, CodeIcon, CopyIcon, CpuIcon, CreditCardIcon, CrownIcon, DatabaseIcon, DownloadIcon, EditIcon, ExternalLinkIcon, EyeIcon, EyeOffIcon, FileIcon, FileTextIcon, FilterIcon, FlagIcon, FlameIcon, FolderIcon, FrownIcon, GiftIcon, GlobeIcon, HardDriveIcon, HeartIcon, HelpCircleIcon, HomeIcon, IconCopies, ImageIcon, InfoIcon, KeyIcon, LinkIcon, LoaderIcon, LockIcon, LogInIcon, LogOutIcon, MailIcon, MapIcon, MapPinIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, MicIcon, MicOffIcon, MinusIcon, MoonIcon, MoreHorizontalIcon, MusicIcon, PackageIcon, PaperclipIcon, PauseIcon, PercentIcon, PhoneIcon, PlayIcon, PlusIcon, PowerIcon, RefreshIcon, SearchIcon, SendIcon, SettingsIcon, ShareIcon, ShieldIcon, ShoppingBagIcon, ShoppingCartIcon, SkipBackIcon, SkipForwardIcon, SlidersIcon, SmileIcon, SortIcon, StarIcon, StopIcon, SunMoonIcon, TagIcon, TerminalIcon, ThumbsDownIcon, ThumbsUpIcon, TimerIcon, ToggleIcon, TrashIcon, TrendingUpIcon, TrophyIcon, UnlockIcon, UploadIcon, UserIcon, UsersIcon, VideoIcon, VolumeIcon, VolumeOffIcon, WalletIcon, WifiIcon, ZapIcon, ZoomInIcon, ZoomOutIcon };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map