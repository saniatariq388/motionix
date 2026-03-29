import { Heart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { IconProps, MotionVariant } from "./types";
import { useEffect, useState } from "react";
import { IconCopies } from "./IconCopies";

const MotionHeart = motion(Heart);

const getVariants = (variant: MotionVariant) => {
  switch (variant) {
    case "ease":
      return {
        hover: {
          scale: [1, 1.08, 1],
          transition: { duration: 0.6, ease: "easeInOut" as const },
        },
      };
    case "bounce":
      return {
        hover: {
          scale: [1, 1.5, 0.8, 1.2, 1],
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

export function HeartIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#ef4444",
  fillOnHover = true,
  variant = "ease",
  className,
}: IconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = variant !== "pop" && variant !== "burst" && variant !== "trail" ? getVariants(variant) : undefined;
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
        transition: { duration: 0.35, ease: "easeIn" as const },
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.25, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.45,
          ease: "easeOut" as const,
          times: [0, 0.6, 1],
        },
      });
    }
  };

  const handleHoverEnd = async () => {
    setIsHovered(false);
    if (variant === "pop") {
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2 },
      });
    }
  };

  return (
    <IconCopies variant={variant} isHovered={isHovered}>
      <motion.span
        variants={variants}
        whileHover={variant !== "pop" && variant !== "burst" && variant !== "trail" ? "hover" : undefined}
        animate={controls}
        className={className}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{ display: "inline-block" }}
      >
        <MotionHeart
          size={size}
          stroke={isHovered && (variant === "burst" || variant === "trail") ? hoverColor : color}
          fill={fillOnHover && isHovered && (variant === "burst" || variant === "trail") ? hoverColor : (fillOnHover ? hoverColor : "none")}
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
    </IconCopies>
  );
}
