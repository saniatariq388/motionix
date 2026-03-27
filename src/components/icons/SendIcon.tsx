"use client";

import { Send } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { IconProps, MotionVariant } from "./types";
import { useEffect } from "react";

const MotionSend = motion(Send);

const getVariants = (variant: MotionVariant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          x: [0, 4, 0],
          y: [0, -4, 0],
          transition: { duration: 0.4, ease: "easeInOut" as const },
        },
      };
    case "bounce":
      return {
        hover: {
          x: [0, 10, -5, 8, 0],
          y: [0, -10, 5, -8, 0],
          transition: {
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1] as const,
          },
        },
      };
    case "float":
      return {
        hover: {
          y: [0, -10, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut" as const,
            times: [0, 0.3, 0.6, 0.8, 1],
          },
        },
      };
  }
};

export function SendIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className,
}: IconProps) {
  const variants = variant !== "pop" ? getVariants(variant) : undefined;
  const controls = useAnimation();

  useEffect(() => {
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
        transition: { duration: 0.3, ease: "easeIn" as const },
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        x: [-10, 0],
        y: [10, 0],
        transition: {
          duration: 0.4,
          ease: "easeOut" as const,
          times: [0, 0.6, 1],
        },
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
        transition: { duration: 0.2 },
      });
    }
  };

  return (
    <motion.span
      variants={variants}
      whileHover={variant !== "pop" ? "hover" : undefined}
      animate={controls}
      className={className}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <MotionSend
        size={size}
        stroke={color}
        fill={fillOnHover ? hoverColor : "none"}
        onMouseEnter={(e) => {
          e.currentTarget.style.transition = "stroke 0.2s, fill 0.2s";
          e.currentTarget.style.stroke = hoverColor;
          if (fillOnHover) {
            e.currentTarget.style.fill = hoverColor;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.stroke = color;
          if (fillOnHover) {
            e.currentTarget.style.fill = "none";
          }
        }}
      />
    </motion.span>
  );
}
