"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface IconCopiesProps {
  variant: string;
  isHovered: boolean;
  children: ReactNode;
}

export function IconCopies({ variant, isHovered, children }: IconCopiesProps) {
  if (!isHovered || (variant !== "burst" && variant !== "trail")) {
    return <>{children}</>;
  }

  if (variant === "burst") {
    return (
      <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {children}
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Copy 1: top-left */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: -32, y: -32 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>

              {/* Copy 2: top-center */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: 0, y: -42 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>

              {/* Copy 3: top-right */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: 32, y: -32 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>

              {/* Copy 4: left */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: -38, y: 8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.07 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>

              {/* Copy 5: right */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: 38, y: 8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>

              {/* Copy 6: bottom */}
              <motion.div
                initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0.3, x: 0, y: 38 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.03 }}
                style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
                className="burst-copy"
              >
                {children}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Trail variant
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      {children}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Copy 1: largest, center */}
            <motion.div
              initial={{ opacity: 0.85, scale: 0.9, y: 0 }}
              animate={{ opacity: 0, scale: 0.2, y: -48 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0 }}
              style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
              className="trail-copy"
            >
              {children}
            </motion.div>

            {/* Copy 2: medium, left */}
            <motion.div
              initial={{ opacity: 0.65, scale: 0.7, x: -12, y: 0 }}
              animate={{ opacity: 0, scale: 0.15, x: -20, y: -38 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
              style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
              className="trail-copy"
            >
              {children}
            </motion.div>

            {/* Copy 3: smallest, right */}
            <motion.div
              initial={{ opacity: 0.5, scale: 0.55, x: 12, y: 0 }}
              animate={{ opacity: 0, scale: 0.1, x: 20, y: -38 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
              style={{ position: "absolute", pointerEvents: "none", zIndex: 1 }}
              className="trail-copy"
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
