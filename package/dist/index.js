'use strict';

var lucideReact = require('lucide-react');
var framerMotion = require('framer-motion');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/icons/BellIcon.tsx
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
  const variants = variant !== "pop" ? getVariants(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionBell,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants2(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionHeart,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants3(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionStar,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants4(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionTrash2,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants5(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionSearch,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants6(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionSun,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants7(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionDownload,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants8(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionSend,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" && variant !== "ease" ? getVariants9(variant) : void 0;
  const controls = framerMotion.useAnimation();
  const [isHovered, setIsHovered] = react.useState(false);
  react.useEffect(() => {
    if (variant !== "pop") {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant === "bounce" || variant === "float" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionLoader2,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
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
  const variants = variant !== "pop" ? getVariants10(variant) : void 0;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (variant !== "pop") {
      controls.stop();
      controls.set({ scale: 1, opacity: 1, y: 0, rotate: 0 });
    }
  }, [variant, controls]);
  const handleHoverStart = async () => {
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
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      variants,
      whileHover: variant !== "pop" ? "hover" : void 0,
      animate: controls,
      className,
      onHoverStart: handleHoverStart,
      onHoverEnd: handleHoverEnd,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        MotionBookmark,
        {
          size,
          stroke: color,
          fill: fillOnHover ? hoverColor : "none",
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
  );
}

exports.BellIcon = BellIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.DownloadIcon = DownloadIcon;
exports.HeartIcon = HeartIcon;
exports.LoaderIcon = LoaderIcon;
exports.SearchIcon = SearchIcon;
exports.SendIcon = SendIcon;
exports.StarIcon = StarIcon;
exports.SunMoonIcon = SunMoonIcon;
exports.TrashIcon = TrashIcon;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map