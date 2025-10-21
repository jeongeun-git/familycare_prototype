import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";

interface RoutineCardProps {
  icon: LucideIcon;
  title: string;
  points?: number;
  status: string;
  iconBg: string;
  link?: string;
}

export function RoutineCard({
  icon: Icon,
  title,
  points,
  status,
  iconBg,
  link,
}: RoutineCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-[var(--card-radius)] ${link ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
      style={{ backgroundColor: "var(--color-surface)" }}
      onClick={handleClick}
    >
      <div
        className="flex items-center justify-center rounded-[var(--border-radius-medium)]"
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: iconBg,
        }}
      >
        <Icon
          size={24}
          style={{ color: "var(--color-surface)" }}
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            className="text-[var(--font-size-body1)] font-semibold"
            style={{ color: "var(--neutral-600)" }}
          >
            {title}
          </span>
          {points && (
            <span
              className="text-[var(--font-size-caption)]"
              style={{ color: "var(--color-accent-orange)" }}
            >
              +{points}P
            </span>
          )}
        </div>
        <span
          className="text-[14px]"
          style={{ color: "var(--color-text-medium)" }}
        >
          {status}
        </span>
      </div>

      <ChevronRight
        size={20}
        style={{ color: "var(--color-text-light)" }}
      />
    </div>
  );
}