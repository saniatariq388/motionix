'use strict';

var lucideReact = require('lucide-react');
var framerMotion = require('framer-motion');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/icons/BellIcon.tsx
function IconCopies({ variant, isHovered, children }) {
  if (!isHovered || variant !== "burst" && variant !== "trail") {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  }
  if (variant === "burst") {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: isHovered && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.div,
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { children: isHovered && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.div,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.div,
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
      /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.div,
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
var MotionBell = framerMotion.motion(lucideReact.Bell);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionHeart = framerMotion.motion(lucideReact.Heart);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants2(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionStar = framerMotion.motion(lucideReact.Star);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants3(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTrash2 = framerMotion.motion(lucideReact.Trash2);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants4(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSearch = framerMotion.motion(lucideReact.Search);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants5(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSun = framerMotion.motion(lucideReact.Sun);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants6(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionDownload = framerMotion.motion(lucideReact.Download);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants7(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSend = framerMotion.motion(lucideReact.Send);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants8(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLoader2 = framerMotion.motion(lucideReact.Loader2);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" && variant !== "ease" ? getVariants9(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant === "bounce" || variant === "float" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionBookmark = framerMotion.motion(lucideReact.Bookmark);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants10(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionHome = framerMotion.motion(lucideReact.Home);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants11(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMenu = framerMotion.motion(lucideReact.Menu);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants12(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionArrowLeft = framerMotion.motion(lucideReact.ArrowLeft);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants13(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionArrowRight = framerMotion.motion(lucideReact.ArrowRight);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants14(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionArrowUp = framerMotion.motion(lucideReact.ArrowUp);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants15(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionArrowDown = framerMotion.motion(lucideReact.ArrowDown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants16(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionChevronDown = framerMotion.motion(lucideReact.ChevronDown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants17(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionChevronRight = framerMotion.motion(lucideReact.ChevronRight);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants18(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionExternalLink = framerMotion.motion(lucideReact.ExternalLink);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants19(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMoreHorizontal = framerMotion.motion(lucideReact.MoreHorizontal);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants20(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionUser = framerMotion.motion(lucideReact.User);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants21(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionUsers = framerMotion.motion(lucideReact.Users);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants22(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLock = framerMotion.motion(lucideReact.Lock);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants23(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLock2 = framerMotion.motion(lucideReact.Lock);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants24(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionEye = framerMotion.motion(lucideReact.Eye);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants25(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionEyeOff = framerMotion.motion(lucideReact.EyeOff);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants26(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLogIn = framerMotion.motion(lucideReact.LogIn);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants27(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLogOut = framerMotion.motion(lucideReact.LogOut);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants28(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionShield = framerMotion.motion(lucideReact.Shield);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants29(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionKey = framerMotion.motion(lucideReact.Key);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants30(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMail = framerMotion.motion(lucideReact.Mail);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants31(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMessageSquare = framerMotion.motion(lucideReact.MessageSquare);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants32(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMessageCircle = framerMotion.motion(lucideReact.MessageCircle);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants33(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPhone = framerMotion.motion(lucideReact.Phone);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants34(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionVideo = framerMotion.motion(lucideReact.Video);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants35(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMic = framerMotion.motion(lucideReact.Mic);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants36(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMicOff = framerMotion.motion(lucideReact.MicOff);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants37(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionShare = framerMotion.motion(lucideReact.Share);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants38(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionLink = framerMotion.motion(lucideReact.Link);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants39(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionAtSign = framerMotion.motion(lucideReact.AtSign);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants40(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFile = framerMotion.motion(lucideReact.File);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants41(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFileText = framerMotion.motion(lucideReact.FileText);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants42(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFolder = framerMotion.motion(lucideReact.Folder);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants43(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionUpload = framerMotion.motion(lucideReact.Upload);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants44(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionImage = framerMotion.motion(lucideReact.Image);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants45(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPaperclip = framerMotion.motion(lucideReact.Paperclip);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants46(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCopy = framerMotion.motion(lucideReact.Copy);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants47(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionClipboard = framerMotion.motion(lucideReact.Clipboard);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants48(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionDatabase = framerMotion.motion(lucideReact.Database);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants49(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionHardDrive = framerMotion.motion(lucideReact.HardDrive);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants50(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPlus = framerMotion.motion(lucideReact.Plus);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants51(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMinus = framerMotion.motion(lucideReact.Minus);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants52(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionX = framerMotion.motion(lucideReact.X);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants53(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCheck = framerMotion.motion(lucideReact.Check);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants54(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPen = framerMotion.motion(lucideReact.Pen);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants55(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionRefreshCw = framerMotion.motion(lucideReact.RefreshCw);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants56(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFilter = framerMotion.motion(lucideReact.Filter);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants57(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionArrowUpDown = framerMotion.motion(lucideReact.ArrowUpDown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants58(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionZoomIn = framerMotion.motion(lucideReact.ZoomIn);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants59(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionZoomOut = framerMotion.motion(lucideReact.ZoomOut);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants60(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPlay = framerMotion.motion(lucideReact.Play);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants61(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPause = framerMotion.motion(lucideReact.Pause);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants62(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSquare = framerMotion.motion(lucideReact.Square);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants63(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSkipForward = framerMotion.motion(lucideReact.SkipForward);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants64(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSkipBack = framerMotion.motion(lucideReact.SkipBack);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants65(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionVolume2 = framerMotion.motion(lucideReact.Volume2);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants66(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionVolumeX = framerMotion.motion(lucideReact.VolumeX);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants67(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMusic = framerMotion.motion(lucideReact.Music);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants68(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCamera = framerMotion.motion(lucideReact.Camera);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants69(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCast = framerMotion.motion(lucideReact.Cast);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants70(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionShoppingCart = framerMotion.motion(lucideReact.ShoppingCart);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants71(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionShoppingBag = framerMotion.motion(lucideReact.ShoppingBag);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants72(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCreditCard = framerMotion.motion(lucideReact.CreditCard);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants73(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPackage = framerMotion.motion(lucideReact.Package);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants74(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTag = framerMotion.motion(lucideReact.Tag);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants75(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionGift = framerMotion.motion(lucideReact.Gift);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants76(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPercent = framerMotion.motion(lucideReact.Percent);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants77(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionWallet = framerMotion.motion(lucideReact.Wallet);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants78(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionBarChart3 = framerMotion.motion(lucideReact.BarChart3);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants79(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTrendingUp = framerMotion.motion(lucideReact.TrendingUp);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants80(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSettings = framerMotion.motion(lucideReact.Settings);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants81(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSliders = framerMotion.motion(lucideReact.Sliders);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants82(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionToggleLeft = framerMotion.motion(lucideReact.ToggleLeft);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants83(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionInfo = framerMotion.motion(lucideReact.Info);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants84(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionAlertCircle = framerMotion.motion(lucideReact.AlertCircle);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants85(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionHelpCircle = framerMotion.motion(lucideReact.HelpCircle);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants86(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTerminal = framerMotion.motion(lucideReact.Terminal);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants87(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCode = framerMotion.motion(lucideReact.Code);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants88(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionGlobe = framerMotion.motion(lucideReact.Globe);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants89(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionWifi = framerMotion.motion(lucideReact.Wifi);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants90(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionThumbsUp = framerMotion.motion(lucideReact.ThumbsUp);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants91(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionThumbsDown = framerMotion.motion(lucideReact.ThumbsDown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants92(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFlag = framerMotion.motion(lucideReact.Flag);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants93(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionAward = framerMotion.motion(lucideReact.Award);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants94(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTrophy = framerMotion.motion(lucideReact.Trophy);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants95(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionZap = framerMotion.motion(lucideReact.Zap);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants96(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFlame = framerMotion.motion(lucideReact.Flame);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants97(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCrown = framerMotion.motion(lucideReact.Crown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants98(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionSmile = framerMotion.motion(lucideReact.Smile);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants99(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionFrown = framerMotion.motion(lucideReact.Frown);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants100(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMapPin = framerMotion.motion(lucideReact.MapPin);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants101(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCalendar = framerMotion.motion(lucideReact.Calendar);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants102(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionClock = framerMotion.motion(lucideReact.Clock);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants103(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionTimer = framerMotion.motion(lucideReact.Timer);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants104(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMoon = framerMotion.motion(lucideReact.Moon);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants105(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCloud = framerMotion.motion(lucideReact.Cloud);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants106(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionMap = framerMotion.motion(lucideReact.Map);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants107(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionBattery = framerMotion.motion(lucideReact.Battery);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants108(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionPower = framerMotion.motion(lucideReact.Power);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants109(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
var MotionCpu = framerMotion.motion(lucideReact.Cpu);
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
  const [isHovered, setIsHovered] = react.useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants110(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(IconCopies, { variant, isHovered, children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      style: { display: "inline-block" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
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

exports.AlertCircleIcon = AlertCircleIcon;
exports.ArrowDownIcon = ArrowDownIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.ArrowUpIcon = ArrowUpIcon;
exports.AtSignIcon = AtSignIcon;
exports.AwardIcon = AwardIcon;
exports.BarChartIcon = BarChartIcon;
exports.BatteryIcon = BatteryIcon;
exports.BellIcon = BellIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.CalendarIcon = CalendarIcon;
exports.CameraIcon = CameraIcon;
exports.CastIcon = CastIcon;
exports.CheckIcon = CheckIcon;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ClipboardIcon = ClipboardIcon;
exports.ClockIcon = ClockIcon;
exports.CloseIcon = CloseIcon;
exports.CloudIcon = CloudIcon;
exports.CodeIcon = CodeIcon;
exports.CopyIcon = CopyIcon;
exports.CpuIcon = CpuIcon;
exports.CreditCardIcon = CreditCardIcon;
exports.CrownIcon = CrownIcon;
exports.DatabaseIcon = DatabaseIcon;
exports.DownloadIcon = DownloadIcon;
exports.EditIcon = EditIcon;
exports.ExternalLinkIcon = ExternalLinkIcon;
exports.EyeIcon = EyeIcon;
exports.EyeOffIcon = EyeOffIcon;
exports.FileIcon = FileIcon;
exports.FileTextIcon = FileTextIcon;
exports.FilterIcon = FilterIcon;
exports.FlagIcon = FlagIcon;
exports.FlameIcon = FlameIcon;
exports.FolderIcon = FolderIcon;
exports.FrownIcon = FrownIcon;
exports.GiftIcon = GiftIcon;
exports.GlobeIcon = GlobeIcon;
exports.HardDriveIcon = HardDriveIcon;
exports.HeartIcon = HeartIcon;
exports.HelpCircleIcon = HelpCircleIcon;
exports.HomeIcon = HomeIcon;
exports.IconCopies = IconCopies;
exports.ImageIcon = ImageIcon;
exports.InfoIcon = InfoIcon;
exports.KeyIcon = KeyIcon;
exports.LinkIcon = LinkIcon;
exports.LoaderIcon = LoaderIcon;
exports.LockIcon = LockIcon;
exports.LogInIcon = LogInIcon;
exports.LogOutIcon = LogOutIcon;
exports.MailIcon = MailIcon;
exports.MapIcon = MapIcon;
exports.MapPinIcon = MapPinIcon;
exports.MenuIcon = MenuIcon;
exports.MessageCircleIcon = MessageCircleIcon;
exports.MessageSquareIcon = MessageSquareIcon;
exports.MicIcon = MicIcon;
exports.MicOffIcon = MicOffIcon;
exports.MinusIcon = MinusIcon;
exports.MoonIcon = MoonIcon;
exports.MoreHorizontalIcon = MoreHorizontalIcon;
exports.MusicIcon = MusicIcon;
exports.PackageIcon = PackageIcon;
exports.PaperclipIcon = PaperclipIcon;
exports.PauseIcon = PauseIcon;
exports.PercentIcon = PercentIcon;
exports.PhoneIcon = PhoneIcon;
exports.PlayIcon = PlayIcon;
exports.PlusIcon = PlusIcon;
exports.PowerIcon = PowerIcon;
exports.RefreshIcon = RefreshIcon;
exports.SearchIcon = SearchIcon;
exports.SendIcon = SendIcon;
exports.SettingsIcon = SettingsIcon;
exports.ShareIcon = ShareIcon;
exports.ShieldIcon = ShieldIcon;
exports.ShoppingBagIcon = ShoppingBagIcon;
exports.ShoppingCartIcon = ShoppingCartIcon;
exports.SkipBackIcon = SkipBackIcon;
exports.SkipForwardIcon = SkipForwardIcon;
exports.SlidersIcon = SlidersIcon;
exports.SmileIcon = SmileIcon;
exports.SortIcon = SortIcon;
exports.StarIcon = StarIcon;
exports.StopIcon = StopIcon;
exports.SunMoonIcon = SunMoonIcon;
exports.TagIcon = TagIcon;
exports.TerminalIcon = TerminalIcon;
exports.ThumbsDownIcon = ThumbsDownIcon;
exports.ThumbsUpIcon = ThumbsUpIcon;
exports.TimerIcon = TimerIcon;
exports.ToggleIcon = ToggleIcon;
exports.TrashIcon = TrashIcon;
exports.TrendingUpIcon = TrendingUpIcon;
exports.TrophyIcon = TrophyIcon;
exports.UnlockIcon = UnlockIcon;
exports.UploadIcon = UploadIcon;
exports.UserIcon = UserIcon;
exports.UsersIcon = UsersIcon;
exports.VideoIcon = VideoIcon;
exports.VolumeIcon = VolumeIcon;
exports.VolumeOffIcon = VolumeOffIcon;
exports.WalletIcon = WalletIcon;
exports.WifiIcon = WifiIcon;
exports.ZapIcon = ZapIcon;
exports.ZoomInIcon = ZoomInIcon;
exports.ZoomOutIcon = ZoomOutIcon;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map