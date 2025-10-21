import React from "react";
import {
  MapPin,
  Calendar,
  Settings,
  CircleParking,
  ChevronRight,
  Footprints,
  Utensils,
  Dumbbell,
  Pill,
} from "lucide-react";
import { FamilyMember } from "../components/FamilyMember";
import { RoutineCard } from "../components/RoutineCard";
import { ActivityFeedCard } from "../components/ActivityFeedCard";

export default function HomePage() {
  const familyMembers = [
    {
      name: "나",
      image:
        "https://images.unsplash.com/photo-1729687996457-42b1df452ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDA4MTA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 76,
    },
    {
      name: "엄마",
      image:
        "https://images.unsplash.com/photo-1591339088601-6b0fd7eb323d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc2MDA4MTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 85,
    },
    {
      name: "조광래",
      image:
        "https://images.unsplash.com/photo-1729687996457-42b1df452ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDA4MTA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 60,
    },
    {
      name: "작은딸",
      image:
        "https://images.unsplash.com/photo-1591339088601-6b0fd7eb323d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc2MDA4MTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 92,
    },
  ];

  const routines = [
    {
      icon: Footprints,
      title: "걷기",
      points: 50,
      status: "5,520 걸음",
      iconBg: "var(--color-accent-green)",
      link: "/walking", // 추후 구현
    },
    {
      icon: Utensils,
      title: "식단",
      status: "아직 식단 기록이 없어요!",
      iconBg: "var(--color-accent-green)",
      link: "/diet",
    },
    {
      icon: Pill,
      title: "복약",
      status: "아직 등록된 약이 없어요!",
      iconBg: "var(--color-accent-green)",
      link: "/medication",
    },
    {
      icon: Dumbbell,
      title: "운동",
      points: 50,
      status: "계단 오르기 10분",
      iconBg: "var(--color-accent-green)",
      link: "/exercise", // 추후 구현
    },
  ];

  const activities = [
    {
      userName: "나",
      userImage:
        "https://images.unsplash.com/photo-1729687996457-42b1df452ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDA4MTA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      timeAgo: "방금 전",
      activityType: "저녁 식단 기록",
      activityDetail: "연어 샐러드",
      likes: 3,
      comments: 1,
    },
    {
      userName: "작은딸",
      userImage:
        "https://images.unsplash.com/photo-1591339088601-6b0fd7eb323d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc2MDA4MTA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      timeAgo: "30분 전",
      activityType: "운동 기록",
      activityDetail: "유산소 운동",
      likes: 3,
      comments: 1,
    },
  ];

  return (
    <div
      className="min-h-screen overflow-y-auto scrollbar-hide"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div
        className="max-w-md mx-auto"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* 헤더 */}
        <header className="flex items-center justify-between p-4">
          <h1
            className="text-[var(--font-size-h1)]"
            style={{
              color: "var(--color-text-dark)",
              fontWeight: "var(--font-weight-h1)",
            }}
          >
            루틴케어
          </h1>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-[var(--button-primary-radius)]"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--button-primary-text)",
            }}
          >
            <MapPin size={16} />
            <span className="text-[var(--font-size-body2)]">
              안심위치
            </span>
          </button>
        </header>

        {/* 날짜 */}
        <div className="flex items-center justify-between px-4 py-2">
          <span
            className="text-[var(--font-size-body1)]"
            style={{ color: "var(--color-text-dark)" }}
          >
            오늘 9월 24일
          </span>
          <button>
            <Calendar
              size={20}
              style={{ color: "var(--color-text-medium)" }}
            />
          </button>
        </div>

        {/* 나의 패밀리 */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-[var(--font-size-h2)]"
              style={{
                color: "var(--color-text-dark)",
                fontWeight: "var(--font-weight-h2)",
              }}
            >
              나의 패밀리
            </h2>
            <button>
              <Settings
                size={20}
                style={{ color: "var(--color-text-medium)" }}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            {familyMembers.map((member, index) => (
              <FamilyMember key={index} {...member} />
            ))}
          </div>
        </section>

        {/* 나의 루틴 기록 */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-[var(--font-size-h2)]"
              style={{
                color: "var(--color-text-dark)",
                fontWeight: "var(--font-weight-h2)",
              }}
            >
              나의 루틴 기록
            </h2>
            <button className="flex items-center gap-1">
              <CircleParking
                size={16}
                style={{ color: "var(--color-accent-orange)" }}
              />
              <span
                className="text-[var(--font-size-body2)]"
                style={{ color: "var(--color-accent-orange)" }}
              >
                210
              </span>
              <ChevronRight
                size={16}
                style={{ color: "var(--color-text-light)" }}
              />
            </button>
          </div>

          {/* 루틴 실천률 */}
          <div
            className="p-4 rounded-[var(--card-radius)] mb-4"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <div className="mb-3">
              <span
                className="text-[var(--font-size-body2)]"
                style={{ color: "var(--color-text-medium)" }}
              >
                루틴 실천률
              </span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <div
                className="text-[32px]"
                style={{
                  color: "var(--color-text-dark)",
                  fontWeight: "700",
                }}
              >
                76<span className="text-[20px]">%</span>
              </div>
              <div
                className="px-3 py-1 rounded-full text-[12px]"
                style={{
                  backgroundColor: "var( --primary-950)",
                  color: "var(--color-surface)",
                }}
              >
                조금만 더 힘내볼까요?
              </div>
            </div>
            <div
              className="h-[var(--progress-bar-height)] rounded-[var(--progress-bar-radius)] overflow-hidden"
              style={{
                backgroundColor: "var(--neutral-50)",
              }}
            >
              <div
                className="h-full rounded-[var(--progress-bar-radius)] transition-all duration-300"
                style={{
                  width: "76%",
                  backgroundColor: "var(--progress-bar-fill)",
                }}
              />
            </div>
          </div>

          {/* 루틴 항목 리스트 */}
          <div className="space-y-3">
            {routines.map((routine, index) => (
              <RoutineCard key={index} {...routine} />
            ))}
          </div>
        </section>

        {/* 패밀리 활동 피드 */}
        <section className="px-4 py-6 px-[28px] py-[24px]">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-[var(--font-size-h2)]"
              style={{
                color: "var(--color-text-dark)",
                fontWeight: "var(--font-weight-h2)",
              }}
            >
              패밀리 활동 피드
            </h2>
            <button className="flex items-center gap-1">
              <span
                className="text-[var(--font-size-body2)]"
                style={{ color: "var(--color-text-medium)" }}
              >
                더보기
              </span>
              <ChevronRight
                size={16}
                style={{ color: "var(--color-text-light)" }}
              />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start"
                style={{ width: "calc(100% - 80px)" }}
              >
                <ActivityFeedCard {...activity} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}