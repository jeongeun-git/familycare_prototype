import React from "react";
import { Heart, MessageCircle } from "lucide-react";

interface ActivityFeedCardProps {
  userName: string;
  userImage: string;
  timeAgo: string;
  activityType: string;
  activityDetail: string;
  likes: number;
  comments: number;
}

export function ActivityFeedCard({
  userName,
  userImage,
  timeAgo,
  activityType,
  activityDetail,
  likes,
  comments,
}: ActivityFeedCardProps) {
  return (
    <div
      className="p-4 rounded-[var(--card-radius)]"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[var(--font-size-body2)]"
              style={{ color: "var(--color-text-dark)" }}
            >
              {userName}
            </span>
            <span
              className="text-[var(--font-size-caption)]"
              style={{ color: "var(--color-text-medium)" }}
            >
              {timeAgo}
            </span>
          </div>
          <p
            className="text-[var(--font-size-body2)] mt-1"
            style={{ color: "var(--color-text-medium)" }}
          >
            {activityType}
          </p>
          <div
            className="inline-block mt-2 px-3 py-1 text-[var(--font-size-caption)]"
            style={{
              color: "var(--button-secondary-text)",
            }}
          >
            {activityDetail}
          </div>

          <div className="flex items-center gap-4 mt-3">
            <button className="flex items-center gap-1">
              <Heart
                size={16}
                style={{ color: "var(--color-accent-orange)" }}
                fill="var(--color-accent-orange)"
              />
              <span
                className="text-[var(--font-size-caption)]"
                style={{ color: "var(--color-text-medium)" }}
              >
                {likes}
              </span>
            </button>
            <button className="flex items-center gap-1">
              <MessageCircle
                size={16}
                style={{ color: "var(--color-text-medium)" }}
              />
              <span
                className="text-[var(--font-size-caption)]"
                style={{ color: "var(--color-text-medium)" }}
              >
                {comments}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}