import { Loader2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { IconProps, MotionVariant } from "./types";
import { useEffect, useState } from "react";

const MotionLoader2 = motion(Loader2);

const getVariants = (variant: MotionVariant) => {
  switch (variant) {
    case "bounce":
      return {
        hover: {
          rotate: 360,
          transition: {
            duration: 0.5,
            ease: "easeInOut" as const,
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

export function LoaderIcon({
  size = 24,
  color = "currentColor",
  hoverColor = "#6366f1",
  fillOnHover = true,
  variant = "ease",
  className,
}: IconProps) {
  const variants = variant !== "pop" && variant !== "ease" ? getVariants(variant) : undefined;
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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
        transition: { duration: 0.3, ease: "easeIn" as const },
      });
      await new Promise((resolve) => setTimeout(resolve, 80));
      await controls.start({
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut" as const,
          times: [0, 0.6, 1],
        },
      });
    } else if (variant === "ease") {
      controls.start({
        rotate: 360,
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "linear" as const,
        },
      });
    } else if (variant === "bounce") {
      await controls.start({
        rotate: 360,
        transition: {
          duration: 0.5,
          ease: "easeInOut" as const,
        },
      });
      await controls.start({
        rotate: 720,
        transition: {
          duration: 0.5,
          ease: "easeInOut" as const,
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
    } else if (variant === "ease") {
      controls.stop();
      controls.set({ rotate: 0 });
    }
  };

  return (
    <motion.span
      variants={variants}
      whileHover={variant === "bounce" || variant === "float" ? "hover" : undefined}
      animate={controls}
      className={className}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <MotionLoader2
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
