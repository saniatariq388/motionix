"use client";

import { Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { IconProps, MotionVariant } from "./types";
import { useEffect } from "react";

const MotionStar = motion(Star);

const getVariants = (variant: MotionVariant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          rotate: [0, 45, 0],
          transition: { duration: 0.6, ease: "easeInOut" as const },
        },
      };
    case "bounce":
      return {
        hover: {
          rotate: 360,
          scale: [1, 1.3, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut" as const,
          },
        },
      };
    case "float":
      return {
        hover: {
          y: [0, -12, 0, 4, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut" as const,
            times: [0, 0.3, 0.6, 0.8, 1],
          },
        },
      };
  }
};

export function StarIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#eab308",
  fillOnHover = true,
  variant = "ease",
  className,
}: IconProps) {
  const variants = variant !== "pop" ? getVariants(variant) : undefined;
  const controls = useAnimation();

  useEffect(() => {
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
        transition: { duration: 0.35, ease: "easeIn" as const },
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.25, 1],
        opacity: [0, 1, 1],
        rotate: [180, 360],
        transition: {
          duration: 0.45,
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
        rotate: 0,
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
      <MotionStar
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
