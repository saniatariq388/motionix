"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface IconReactionsProps {
  iconSlug: string;
}

interface ReactionData {
  emoji: string;
  type: string;
  label: string;
}

const reactions: ReactionData[] = [
  { emoji: "❤️", type: "love", label: "Love" },
  { emoji: "🔥", type: "fire", label: "Fire" },
  { emoji: "💡", type: "idea", label: "Idea" },
];

export function IconReactions({ iconSlug }: IconReactionsProps) {
  const [counts, setCounts] = useState({ love: 0, fire: 0, idea: 0 });
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReactions = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("icon_reactions")
          .select("reaction, count")
          .eq("icon_slug", iconSlug);

        if (error) {
          console.error("Fetch reactions error:", error);
          return;
        }

        if (data && data.length > 0) {
          const newCounts = { love: 0, fire: 0, idea: 0 };
          data.forEach((row: { reaction: string; count: number }) => {
            if (row.reaction in newCounts) {
              newCounts[row.reaction as keyof typeof newCounts] = row.count;
            }
          });
          setCounts(newCounts);
        }

        // Load user reaction from localStorage
        const saved = localStorage.getItem(`motionix_reaction_${iconSlug}`);
        if (saved) setUserReaction(saved);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReactions();
  }, [iconSlug]);

  // Debug connection test
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("icon_reactions")
        .select("*")
        .limit(3);

      console.log("Supabase test data:", data);
      console.log("Supabase test error:", error);
    };
    testConnection();
  }, []);

  const handleReaction = async (reactionType: string) => {
    if (userReaction === reactionType) return;

    try {
      // Step 1: If switching reaction, decrement old one
      if (userReaction) {
        const { error: decrementError } = await supabase
          .from("icon_reactions")
          .update({
            count: Math.max(0, (counts[userReaction as keyof typeof counts] || 1) - 1),
          })
          .eq("icon_slug", iconSlug)
          .eq("reaction", userReaction);

        if (decrementError) {
          console.error("Decrement error:", decrementError);
        }
      }

      // Step 2: Get current count first
      const { data: currentData, error: fetchError } = await supabase
        .from("icon_reactions")
        .select("count")
        .eq("icon_slug", iconSlug)
        .eq("reaction", reactionType)
        .single();

      if (fetchError) {
        console.error("Fetch error:", fetchError);
        return;
      }

      const currentCount = currentData?.count || 0;

      // Step 3: Increment new reaction
      const { error: incrementError } = await supabase
        .from("icon_reactions")
        .update({ count: currentCount + 1 })
        .eq("icon_slug", iconSlug)
        .eq("reaction", reactionType);

      if (incrementError) {
        console.error("Increment error:", incrementError);
        return;
      }

      // Step 4: Update local state
      const newCounts = { ...counts };
      if (userReaction) {
        newCounts[userReaction as keyof typeof counts] = Math.max(
          0,
          newCounts[userReaction as keyof typeof counts] - 1
        );
      }
      newCounts[reactionType as keyof typeof counts] = currentCount + 1;

      setCounts(newCounts);
      setUserReaction(reactionType);

      // Step 5: Save to localStorage
      localStorage.setItem(`motionix_reaction_${iconSlug}`, reactionType);
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  return (
    <div
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "48px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--foreground)",
            marginBottom: "4px",
          }}
        >
          Community Reactions
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          How do you feel about this icon?
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        {reactions.map((reaction) => {
          const isSelected = userReaction === reaction.type;
          const count = counts[reaction.type as keyof typeof counts];

          return (
            <motion.button
              key={reaction.type}
              onClick={() => handleReaction(reaction.type)}
              animate={{ scale: isSelected ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                padding: "16px 24px",
                borderRadius: "12px",
                border: isSelected
                  ? "1px solid #6366f1"
                  : "1px solid var(--border-color)",
                background: isSelected
                  ? "rgba(99,102,241,0.1)"
                  : "var(--card-bg)",
                cursor: userReaction === reaction.type ? "default" : "pointer",
                minWidth: "80px",
                transition: "all 0.2s",
                transform: isSelected ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.background = "rgba(99,102,241,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.background = "var(--card-bg)";
                }
              }}
            >
              <span style={{ fontSize: "28px" }}>{reaction.emoji}</span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: isSelected ? "#6366f1" : "var(--foreground)",
                }}
              >
                {loading ? "..." : count}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {reaction.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      <p
        style={{
          fontSize: "11px",
          fontStyle: "italic",
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: "12px",
        }}
      >
        Click to react • No login required
      </p>
    </div>
  );
}
