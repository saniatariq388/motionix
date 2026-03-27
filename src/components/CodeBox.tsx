"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBoxProps {
  code: string;
  language?: string;
}

export function CodeBox({ code, language = "tsx" }: CodeBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDark = typeof window !== "undefined" 
    ? document.documentElement.classList.contains("dark")
    : false;

  return (
    <div
      style={{
        position: "relative",
        background: isDark ? "#0d0d0d" : "#f5f5f5",
        border: "1px solid var(--border-color)",
        borderRadius: "10px",
        padding: "16px 48px 16px 20px",
        fontFamily: "monospace",
        fontSize: "13px",
        lineHeight: 1.7,
        color: isDark ? "#e2e8f0" : "#1e293b",
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "6px",
          padding: "6px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#6366f1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
        }}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
        ) : (
          <Copy className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
        )}
      </button>
      <code>{code}</code>
    </div>
  );
}
