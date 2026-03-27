"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface IconRequestBoxProps {
  iconSlug: string;
}

interface Request {
  id: string;
  message: string;
  likes: number;
  created_at: string;
}

function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function IconRequestBox({ iconSlug }: IconRequestBoxProps) {
  const [requests, setRequests] = useState<Request[]>([]);
  const [newRequest, setNewRequest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userLikedRequests, setUserLikedRequests] = useState<string[]>([]);

  useEffect(() => {
    // Load liked requests from localStorage
    const stored = localStorage.getItem("motionix_liked_requests");
    if (stored) {
      try {
        setUserLikedRequests(JSON.parse(stored));
      } catch {
        setUserLikedRequests([]);
      }
    }

    // Fetch requests from Supabase
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from("icon_requests")
        .select("*")
        .eq("icon_slug", iconSlug)
        .order("likes", { ascending: false })
        .limit(5);

      if (!error && data) {
        setRequests(data);
      }
      setLoading(false);
    };

    fetchRequests();
  }, [iconSlug]);

  const handleSubmit = async () => {
    if (newRequest.trim().length === 0) {
      setError("Please write something");
      return;
    }
    if (newRequest.trim().length < 10) {
      setError("Please write at least 10 characters");
      return;
    }

    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase.from("icon_requests").insert({
      icon_slug: iconSlug,
      message: newRequest.trim(),
      likes: 0,
    });

    setSubmitting(false);

    if (!insertError) {
      setSubmitted(true);
      setNewRequest("");
      setTimeout(() => setSubmitted(false), 2000);

      // Refetch requests
      const { data } = await supabase
        .from("icon_requests")
        .select("*")
        .eq("icon_slug", iconSlug)
        .order("likes", { ascending: false })
        .limit(5);

      if (data) {
        setRequests(data);
      }
    }
  };

  const handleLike = async (requestId: string) => {
    if (userLikedRequests.includes(requestId)) return;

    const { error } = await supabase.rpc("increment_request_likes", {
      p_request_id: requestId,
    });

    if (!error) {
      // Update local state
      setRequests((prev) =>
        prev.map((r) =>
          r.id === requestId ? { ...r, likes: r.likes + 1 } : r
        )
      );

      // Update localStorage
      const newLiked = [...userLikedRequests, requestId];
      setUserLikedRequests(newLiked);
      localStorage.setItem("motionix_liked_requests", JSON.stringify(newLiked));
    }
  };

  return (
    <div
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "24px",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--foreground)",
            marginBottom: "4px",
          }}
        >
          💬 Variant Requests
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          Suggest a new animation for this icon
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
          placeholder="e.g. Can you add a wiggle effect?"
          maxLength={200}
          style={{
            width: "100%",
            minHeight: "80px",
            background: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "14px",
            color: "var(--foreground)",
            resize: "none",
            outline: "none",
            fontFamily: "inherit",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#6366f1";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "var(--border-color)";
          }}
        />

        <div
          className="flex items-center justify-between"
          style={{ marginTop: "8px" }}
        >
          {error && (
            <span style={{ fontSize: "11px", color: "#ef4444" }}>{error}</span>
          )}
          <span
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              marginLeft: "auto",
            }}
          >
            {newRequest.length}/200
          </span>
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: submitted
              ? "#10b981"
              : submitting
              ? "#6366f1"
              : "#6366f1",
            color: "white",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: submitting ? "not-allowed" : "pointer",
            opacity: submitting ? 0.7 : 1,
            transition: "all 0.2s",
            border: "none",
          }}
          onMouseEnter={(e) => {
            if (!submitting && !submitted) {
              e.currentTarget.style.background = "#4f46e5";
            }
          }}
          onMouseLeave={(e) => {
            if (!submitting && !submitted) {
              e.currentTarget.style.background = "#6366f1";
            }
          }}
        >
          {submitting ? "Sending..." : submitted ? "✓ Submitted!" : "Submit Request"}
        </button>
      </div>

      <div style={{ margin: "20px 0", borderTop: "1px solid var(--border-color)" }} />

      <div>
        <h4
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "12px",
          }}
        >
          Recent Requests
        </h4>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: "40px",
                  borderRadius: "8px",
                  background: "var(--border-color)",
                  animation: "pulse 1.5s infinite",
                }}
              />
            ))}
          </div>
        ) : requests.length === 0 ? (
          <p
            style={{
              fontSize: "13px",
              fontStyle: "italic",
              color: "var(--text-muted)",
              textAlign: "center",
              padding: "20px",
            }}
          >
            No requests yet. Be the first!
          </p>
        ) : (
          <div>
            {requests.map((request) => {
              const isLiked = userLikedRequests.includes(request.id);

              return (
                <div
                  key={request.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom:
                      request.id === requests[requests.length - 1].id
                        ? "none"
                        : "1px solid var(--border-color)",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--foreground)",
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {request.message}
                    </p>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                      }}
                    >
                      {timeAgo(request.created_at)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleLike(request.id)}
                    disabled={isLiked}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      cursor: isLiked ? "default" : "pointer",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      transition: "all 0.15s",
                      background: isLiked ? "rgba(99,102,241,0.1)" : "transparent",
                      border: "none",
                      color: isLiked ? "#6366f1" : "var(--text-muted)",
                      fontWeight: isLiked ? 700 : 500,
                    }}
                    onMouseEnter={(e) => {
                      if (!isLiked) {
                        e.currentTarget.style.color = "#6366f1";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLiked) {
                        e.currentTarget.style.color = "var(--text-muted)";
                      }
                    }}
                  >
                    <span>▲</span>
                    <span>{request.likes}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
