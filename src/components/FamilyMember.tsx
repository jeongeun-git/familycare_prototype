import React from 'react';

interface FamilyMemberProps {
  name: string;
  image: string;
  progress: number;
}

export function FamilyMember({ name, image, progress }: FamilyMemberProps) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: 'var(--avatar-size-medium)', height: 'var(--avatar-size-medium)' }}>
        <svg className="absolute inset-0 -rotate-90" width="56" height="56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="var(--color-progress-bar-background)"
            strokeWidth="3"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="var(--color-progress-bar-fill)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <img 
          src={image} 
          alt={name}
          className="absolute inset-0 rounded-full object-cover m-[3px]"
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      <span className="text-[var(--font-size-caption)] text-[var(--color-text-medium)]">{name}</span>
    </div>
  );
}
