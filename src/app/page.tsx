"use client";

import React, { useState, useEffect } from "react";
import { translations, type Lang } from "./translations";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  CheckCircle2,
  UploadCloud,
  Award,
  Download,
  Flame,
  User,
  MessageSquare,
  Heart,
  Share2,
  Bell,
  Volume2,
  Play,
  X,
  ChevronRight,
  TrendingUp,
  UserCheck,
  Sparkles,
  Search,
  BookOpen,
  Wifi,
  Printer,
  ChevronDown,
  Layers,
  Star,
  Activity
} from "lucide-react";

export default function ClientLMSDashboard() {
  // --- States ---
  const [activeTab, setActiveTab] = useState<"training" | "ai" | "curriculum" | "network" | "portfolio">("training");
  const [lang, setLang] = useState<Lang>("KOR");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.["KOR"] || key;
  };

  const getTimelineTitle = (item: any): string => {
    if (item.type === "dance") return t("timelineDance");
    if (item.type === "vocal") return t("timelineVocal");
    if (item.type === "ai") return t("timelineAI");
    if (item.type === "camera") return t("timelineCamera");
    if (item.type === "reserved") {
      let spaceLabel = item.spaceId === "s1" ? t("space1Name") : item.spaceId === "s2" ? t("space2Name") : t("space3Name");
      return `${t("timelineReservedPrefix")} ${spaceLabel} ${t("timelineReservedSuffix")}`;
    }
    return item.title;
  };

  const getFeedContent = (feedId: string, defaultContent: string) => {
    if (feedId === "f1") return t("feed1Content");
    if (feedId === "f2") return t("feed2Content");
    return defaultContent;
  };

  const getCommentText = (commentId: string, defaultText: string) => {
    if (commentId === "c1_1") return t("feed1Comment");
    if (commentId === "c2_1") return t("feed2Comment");
    return defaultText;
  };

  // 1. [탭 1 - 나의 훈련] 스케줄러 & 타임라인 상태
  const [timeline, setTimeline] = useState([
    { id: 1, time: "09:00 - 11:00", title: "🕺 K-Pop 댄스 타이틀 안무 클래스 (A 스튜디오)", completed: true, type: "dance" },
    { id: 2, time: "11:00 - 12:30", title: "🎤 보컬 개인 레슨 & 발성 교정 (C 룸)", completed: true, type: "vocal" },
    { id: 3, time: "13:30 - 15:00", title: "🤖 AI 보이스 스타일 분석 및 음역대 측정", completed: false, type: "ai" },
    { id: 4, time: "16:00 - 18:00", title: "📸 데뷔 프로필 개인 컷 촬영 (스튜디오 B)", completed: false, type: "camera" }
  ]);

  // [탭 1 - 나의 훈련] 예약 공간 상태
  const [spaces, setSpaces] = useState([
    { id: "s1", name: "댄스 연습실 (A룸)", status: "여유", count: "2/10", slots: ["15:00", "19:00", "21:00"], color: "emerald" },
    { id: "s2", name: "보컬 트레이닝 전문 룸", status: "마감 임박", count: "4/5", slots: ["18:30", "20:00"], color: "amber" },
    { id: "s3", name: "1:1 원포인트 기획사 멘토링", status: "매진", count: "5/5", slots: [], color: "rose" }
  ]);

  // 예약 모달 관리
  const [reservationModal, setReservationModal] = useState<null | { id: string; name: string; slots: string[] }>(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  // 2. [탭 2 - AI 비디오 훈련] 업로드 파일 및 진단 결과
  const [uploadFile, setUploadFile] = useState<{ name: string; size: string; progress: number; completed: boolean } | null>({
    name: "20260521_안무과제_댄스라인_IU.mp4",
    size: "42.8 MB",
    progress: 100,
    completed: true
  });
  const [isDropActive, setIsDropActive] = useState(false);
  const [activeVOD, setActiveVOD] = useState<null | { title: string; desc: string; videoUrl: string }>(null);
  const [activeTimestamp, setActiveTimestamp] = useState<null | string>(null);

  // 3. [탭 3 - 글로벌 네트워킹] 피드 좋아요 / 댓글 상태
  const [feeds, setFeeds] = useState([
    {
      id: "f1",
      author: "정민 (대한민국)",
      avatar: "🇰🇷",
      content: "캠프 끝나고 서울에서 연습 중인 아이유! 보컬 연습 열심히 하고 있어? 내가 보낸 안무 피드백 영상 체크해 봐! 😊",
      likes: 12,
      comments: [
        { id: "c1_1", author: "Coach Min", text: "두 분의 협동 시너지가 오디션 평가에 매우 긍정적입니다!" }
      ],
      liked: false,
      showComments: false,
      newCommentText: ""
    },
    {
      id: "f2",
      author: "아이유 (대한민국)",
      avatar: "🇰🇷",
      content: "정민! 대시보드 커뮤니티 채널에 내 오늘 자 보컬 커버 올렸어. 트레이너 쌤이 라이브 때 봐주셨으면 좋겠다! 🎤🎶",
      likes: 8,
      comments: [
        { id: "c2_1", author: "정민", text: "와 아이유! 고음 부분 힘 빠지는 거 완전 해결됐네 대박!!" }
      ],
      liked: false,
      showComments: false,
      newCommentText: ""
    }
  ]);

  const [liveSubscribed, setLiveSubscribed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [wiggleBell, setWiggleBell] = useState(false);

  // 4. [탭 4 - 데뷔 포트폴리오] 
  const [isRadarAnimated, setIsRadarAnimated] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  // --- Effects ---
  useEffect(() => {
    // 탭 4 활성화 또는 마운트 시 SVG 레이더 스트레칭 활성화
    if (activeTab === "portfolio") {
      setIsRadarAnimated(false);
      const timer = setTimeout(() => setIsRadarAnimated(true), 150);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // --- Actions ---
  const toggleTimeline = (id: number) => {
    setTimeline(prev =>
      prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const completedCount = timeline.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / timeline.length) * 100) || 0;

  const handleOpenReservation = (space: typeof spaces[0]) => {
    if (space.status === "매진") {
      setToastMessage(t("toastWaitlist"));
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }
    setReservationModal(space);
    setSelectedSlot(space.slots[0] || "");
  };

  const confirmReservation = () => {
    if (!reservationModal || !selectedSlot) return;
    
    const newId = Date.now();
    const newTime = `${selectedSlot} - ${parseInt(selectedSlot.split(":")[0]) + 1}:${selectedSlot.split(":")[1]}`;
    const newTimelineItem = {
      id: newId,
      time: newTime,
      title: `🔑 [자율 예약 확정] ${reservationModal.name} 전용 세션`,
      completed: false,
      type: "reserved",
      spaceId: reservationModal.id
    };

    setTimeline(prev => [...prev, newTimelineItem]);

    // 잔여석 갱신 시뮬레이션
    setSpaces(prev =>
      prev.map(sp => {
        if (sp.id === reservationModal.id) {
          const [cur, tot] = sp.count.split("/").map(Number);
          const nextCount = cur + 1;
          const nextStatus = nextCount >= tot ? "매진" : nextCount >= tot - 1 ? "마감 임박" : "여유";
          const nextSlots = sp.slots.filter(sl => sl !== selectedSlot);
          return {
            ...sp,
            count: `${nextCount}/${tot}`,
            status: nextStatus,
            slots: nextSlots
          };
        }
        return sp;
      })
    );

    const spaceLabel = reservationModal.id === "s1" ? t("space1Name") : reservationModal.id === "s2" ? t("space2Name") : t("space3Name");
    setToastMessage(`🎉 ${spaceLabel} (${selectedSlot}) ${t("toastReserveSuccess")}`);
    setReservationModal(null);
    setSelectedSlot("");

    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropActive(true);
  };

  const handleDragLeave = () => {
    setIsDropActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDropActive(false);
    const file = e.dataTransfer.files[0];
    if (file) simulateUpload(file.name, (file.size / (1024 * 1024)).toFixed(1) + " MB");
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file.name, (file.size / (1024 * 1024)).toFixed(1) + " MB");
  };

  const simulateUpload = (name: string, size: string) => {
    setUploadFile({ name, size, progress: 0, completed: false });
    let cur = 0;
    const interval = setInterval(() => {
      cur += 20;
      setUploadFile(prev => {
        if (!prev) return null;
        if (cur >= 100) {
          clearInterval(interval);
          setToastMessage(`⚡ ${name} ${t("toastUploadSuccess")}`);
          setTimeout(() => setToastMessage(null), 3500);
          return { ...prev, progress: 100, completed: true };
        }
        return { ...prev, progress: cur };
      });
    }, 200);
  };

  const handleLike = (feedId: string) => {
    setFeeds(prev =>
      prev.map(f => (f.id === feedId ? { ...f, likes: f.liked ? f.likes - 1 : f.likes + 1, liked: !f.liked } : f))
    );
  };

  const toggleCommentsView = (feedId: string) => {
    setFeeds(prev =>
      prev.map(f => (f.id === feedId ? { ...f, showComments: !f.showComments } : f))
    );
  };

  const handleAddComment = (feedId: string, e: React.FormEvent) => {
    e.preventDefault();
    setFeeds(prev =>
      prev.map(f => {
        if (f.id === feedId && f.newCommentText.trim()) {
          return {
            ...f,
            comments: [...f.comments, { id: `c_${Date.now()}`, author: "나 (연습생 아이유)", text: f.newCommentText.trim() }],
            newCommentText: ""
          };
        }
        return f;
      })
    );
  };

  const handleCommentTextChange = (feedId: string, val: string) => {
    setFeeds(prev =>
      prev.map(f => (f.id === feedId ? { ...f, newCommentText: val } : f))
    );
  };

  const handleLiveAlertSubscribe = () => {
    setWiggleBell(true);
    setTimeout(() => setWiggleBell(false), 800);

    if (liveSubscribed) {
      setLiveSubscribed(false);
      setToastMessage(t("toastLiveUnsubscribed"));
    } else {
      setLiveSubscribed(true);
      setToastMessage(t("toastLiveSubscribed"));
    }
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownloadProfile = () => {
    setDownloadProgress(0);
    let cur = 0;
    const interval = setInterval(() => {
      cur += 10;
      if (cur >= 100) {
        setDownloadProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setDownloadProgress(null);
          window.print();
        }, 600);
      } else {
        setDownloadProgress(cur);
      }
    }, 70);
  };

  // --- SVG Radar Chart ---
  const scale = 70;
  const cx = 100;
  const cy = 100;
  const dVal = isRadarAnimated ? { vocal: 78, dance: 92, visual: 85, attitude: 88, fitness: 70 } : { vocal: 0, dance: 0, visual: 0, attitude: 0, fitness: 0 };
  const getRadarPath = () => {
    const p1_y = cy - (dVal.vocal / 100) * scale;
    const p2_x = cx + (dVal.dance / 100) * scale * 0.951;
    const p2_y = cy + (dVal.dance / 100) * scale * (-0.309);
    const p3_x = cx + (dVal.visual / 100) * scale * 0.588;
    const p3_y = cy + (dVal.visual / 100) * scale * 0.809;
    const p4_x = cx + (dVal.attitude / 100) * scale * (-0.588);
    const p4_y = cy + (dVal.attitude / 100) * scale * 0.809;
    const p5_x = cx + (dVal.fitness / 100) * scale * (-0.951);
    const p5_y = cy + (dVal.fitness / 100) * scale * (-0.309);
    return `M ${cx} ${p1_y} L ${p2_x} ${p2_y} L ${p3_x} ${p3_y} L ${p4_x} ${p4_y} L ${p5_x} ${p5_y} Z`;
  };

  return (
    <div className="flex-1 flex flex-col relative w-full font-sans">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="absolute top-[-10%] left-[-15%] w-[45%] h-[45%] bg-neon-pink/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-neon-purple/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* --- BRAND HEADER (NO-PRINT) --- */}
      <header className="no-print border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-lg sticky top-0 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5.5 sm:py-6.5 flex items-center justify-between">
          <div className="flex items-center gap-4.5">
            <div className="w-13 h-13 rounded-xl border-2 border-[#CFA764] bg-[#CFA764]/10 flex items-center justify-center shadow-[0_0_15px_rgba(207,167,100,0.3)] animate-pulse-ring">
              <Flame className="w-6.5 h-6.5 text-[#E6C897] animate-float drop-shadow-[0_0_8px_rgba(230,200,151,0.6)]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-black tracking-wider text-[#E6C897] uppercase">{t("brandTitle")}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-ping" />
                <span className="text-xs sm:text-sm text-neon-cyan font-mono tracking-widest font-black uppercase">{t("aiKpopCamp")}</span>
              </div>
              <h1 className="text-base sm:text-xl md:text-2xl font-black text-slate-100 tracking-tight mt-1">
                {t("headerTitle")}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#CFA764] bg-slate-950/80 text-[#E6C897] font-black text-sm hover:bg-[#CFA764]/10 transition-all shadow-[0_0_10px_rgba(207,167,100,0.15)] cursor-pointer"
              >
                <span>{lang}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2.5 w-32 rounded-xl bg-slate-950 border border-[#CFA764]/40 shadow-2xl p-1.5 z-50 flex flex-col gap-1 backdrop-blur-xl">
                    {(["KOR", "ENG", "JPN", "CHN", "VIE", "IDN"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                          lang === l
                            ? "bg-[#CFA764] text-slate-950"
                            : "text-[#E6C897] hover:bg-[#CFA764]/15"
                        }`}
                      >
                        {l === "KOR" && "🇰🇷 KOR"}
                        {l === "ENG" && "🇺🇸 ENG"}
                        {l === "JPN" && "🇯🇵 JPN"}
                        {l === "CHN" && "🇨🇳 CHN"}
                        {l === "VIE" && "🇻🇳 VIE"}
                        {l === "IDN" && "🇮🇩 IDN"}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* --- TOAST ALERTS (NO-PRINT) --- */}
      {toastMessage && (
        <div className="no-print fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-slate-950 via-[#1e293b] to-slate-950 text-slate-100 border border-neon-pink/30 px-6 py-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
            <span className="text-xl text-neon-pink animate-float">✨</span>
            <p className="flex-1 text-sm sm:text-base font-black leading-normal text-slate-200">
              {toastMessage}
            </p>
            <button onClick={() => setToastMessage(null)} className="text-slate-500 hover:text-slate-300">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* --- Trainee Profile HUD (NO-PRINT) --- */}
      <section className="no-print max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-9">
        <div className="bg-gradient-to-r from-slate-900 via-[#1e293b] to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-l from-neon-pink/5 to-transparent pointer-events-none -z-10" />
          
          {/* Trainee Card */}
          <div className="flex items-center gap-6.5 w-full lg:w-auto">
            <div className="relative group/profile">
              <div className="w-20 h-20 sm:w-25 sm:h-25 rounded-2xl bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-cyan p-0.5 shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 hover:rotate-2 hover:glow-pink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/iu_profile.png" 
                  alt="아이유 프로필" 
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover/profile:scale-105"
                />
              </div>
              <span className="absolute bottom-[-4px] right-[-4px] bg-neon-cyan text-[#0f172a] text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-full border-2 border-[#0f172a] animate-pulse">
                🇰🇷
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3.5 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-100">{t("traineeName")}</h2>
                <span className="text-xs sm:text-sm bg-neon-pink/15 text-neon-pink px-3 py-1 rounded border border-neon-pink/20 font-black uppercase tracking-wider">{t("traineeClass")}</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-400 font-semibold mt-2.5 lg:whitespace-nowrap">{t("traineeTrack")}</p>
            </div>
          </div>

          {/* Core Trainee Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full lg:w-auto text-center divide-x divide-slate-850">
            <div className="px-2 sm:px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2 whitespace-nowrap">{t("hudHours")}</span>
              <strong className="text-lg sm:text-xl md:text-2xl font-black text-neon-pink whitespace-nowrap">{t("hudHoursValue")}</strong>
            </div>
            <div className="px-2 sm:px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2 whitespace-nowrap">{t("hudHomework")}</span>
              <strong className="text-lg sm:text-xl md:text-2xl font-black text-neon-cyan whitespace-nowrap">{progressPercent}%</strong>
            </div>
            <div className="px-2 sm:px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2 whitespace-nowrap">{t("hudAudition")}</span>
              <strong className="text-lg sm:text-xl md:text-2xl font-black text-white flex items-center justify-center gap-2 whitespace-nowrap">
                {t("hudCampDay")} <span className="w-3 h-3 rounded-full bg-neon-pink animate-ping" />
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* --- Trainee Main 5-Tab Navigation (NO-PRINT) --- */}
      <nav className="no-print max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-7">
        <div className="bg-slate-900/60 border border-slate-800/80 p-2 rounded-2xl grid grid-cols-2 md:grid-cols-5 gap-3.5 shadow-2xl">
          
          <button
            onClick={() => setActiveTab("training")}
            className={`group py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 shadow-sm border ${
              activeTab === "training"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white border-neon-pink/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-[1.03] -translate-y-0.5"
                : "bg-slate-950/40 border-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-850/60 hover:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <Calendar className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-300 ${activeTab === "training" ? "text-white" : "text-neon-pink/70 group-hover:text-neon-pink"}`} />
            <span>{t("tabPlanner")}</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`group py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 shadow-sm border ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white border-neon-pink/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-[1.03] -translate-y-0.5"
                : "bg-slate-950/40 border-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-850/60 hover:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <Video className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-300 ${activeTab === "ai" ? "text-white" : "text-neon-cyan/70 group-hover:text-neon-cyan animate-pulse"}`} />
            <span>{t("tabFeedback")}</span>
          </button>

          <button
            onClick={() => setActiveTab("curriculum")}
            className={`group py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 col-span-2 md:col-span-1 shadow-sm border ${
              activeTab === "curriculum"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white border-neon-pink/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-[1.03] -translate-y-0.5"
                : "bg-slate-950/40 border-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-850/60 hover:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <BookOpen className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-300 ${activeTab === "curriculum" ? "text-white" : "text-[#CFA764]/70 group-hover:text-[#CFA764]"}`} />
            <span>{t("tabRoadmap")}</span>
          </button>

          <button
            onClick={() => setActiveTab("network")}
            className={`group py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 shadow-sm border ${
              activeTab === "network"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white border-neon-pink/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-[1.03] -translate-y-0.5"
                : "bg-slate-950/40 border-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-850/60 hover:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <MessageSquare className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-300 ${activeTab === "network" ? "text-white" : "text-neon-purple/70 group-hover:text-neon-purple"}`} />
            <span>{t("tabNetwork")}</span>
          </button>

          <button
            onClick={() => setActiveTab("portfolio")}
            className={`group py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 shadow-sm border ${
              activeTab === "portfolio"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white border-neon-pink/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-[1.03] -translate-y-0.5"
                : "bg-slate-950/40 border-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-850/60 hover:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <Award className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors duration-300 ${activeTab === "portfolio" ? "text-white" : "text-amber-400/70 group-hover:text-amber-400"}`} />
            <span>{t("tabPortfolio")}</span>
          </button>

        </div>
      </nav>

      {/* --- Trainee LMS Main Content Workspace --- */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* --- [탭 1] 나의 훈련 플래너 --- */}
        {activeTab === "training" && (
          <div className="no-print space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Daily Checklist Checklist */}
              <div className="lg:col-span-2 glassmorphism-card rounded-2xl p-7.5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-neon-pink" />
                    <h3 className="text-lg sm:text-xl font-black text-slate-100">{t("missionTitle")}</h3>
                  </div>
                  <span className="text-xs sm:text-sm text-neon-pink font-extrabold">{t("missionDesc")}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {timeline.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => toggleTimeline(item.id)}
                      className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-4 select-none ${
                        item.completed 
                          ? "bg-slate-900/30 border-slate-800/40 opacity-50" 
                          : "bg-[#1e293b]/40 border-slate-800 hover:border-neon-pink/40 hover:glow-pink bg-gradient-to-br from-slate-900/50 to-slate-950/50"
                      }`}
                    >
                      <div className="mt-1">
                        <div className={`w-5.5 h-5.5 rounded-md border flex items-center justify-center transition-all ${
                          item.completed 
                            ? "bg-gradient-to-tr from-neon-pink to-neon-purple border-transparent text-white" 
                            : "border-slate-700 text-transparent"
                        }`}>
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <span className={`text-xs sm:text-sm font-mono tracking-widest font-black uppercase ${
                          item.completed ? "text-slate-500" : "text-neon-cyan"
                        }`}>{item.time}</span>
                        <p className={`text-sm sm:text-base font-extrabold ${
                          item.completed ? "line-through text-slate-500 font-medium" : "text-slate-100"
                        }`}>{getTimelineTitle(item)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Motivation Widget */}
              <div className="lg:col-span-1 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-slate-950 border border-slate-850 rounded-2xl p-7.5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm sm:text-base text-neon-purple font-black uppercase tracking-wider">
                    <Star className="w-5 h-5 fill-neon-purple" />
                    <span>{t("weeklyMotivationTitle")}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-200">{t("weeklyMotivationHeader")}</h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300 italic">
                    {t("weeklyMotivationComment")}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-850 flex items-center gap-2 mt-6 text-xs sm:text-sm text-slate-500 font-extrabold">
                  <span>✍</span>
                  <span>{t("weeklyMotivationAuthor")}</span>
                </div>
              </div>

            </div>

            {/* Interactive Reservator Area */}
            <div className="glassmorphism-card rounded-2xl p-7.5 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <MapPin className="w-5.5 h-5.5 text-neon-cyan" />
                <h3 className="text-lg sm:text-xl font-black text-slate-100">{t("reservationTitle")}</h3>
                <span className="text-xs sm:text-sm text-slate-400 font-bold">{t("reservationDesc")}</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800/60 bg-slate-900/30">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50 text-slate-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                      <th className="p-4.5 sm:p-5.5">{t("thSpace")}</th>
                      <th className="p-4.5 sm:p-5.5 text-center">{t("thStatus")}</th>
                      <th className="p-4.5 sm:p-5.5">{t("thSlots")}</th>
                      <th className="p-4.5 sm:p-5.5 text-center">{t("thAction")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spaces.map((sp) => (
                      <tr key={sp.id} className="border-b border-slate-850 hover:bg-white/3 transition-colors">
                        <td className="p-4.5 sm:p-5.5 font-bold text-slate-200 flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            sp.id === 's1' ? 'bg-neon-pink' : sp.id === 's2' ? 'bg-neon-purple' : 'bg-neon-cyan'
                          }`} />
                          {sp.id === 's1' ? t('space1Name') : sp.id === 's2' ? t('space2Name') : t('space3Name')}
                        </td>
                        <td className="p-4.5 sm:p-5.5 text-center">
                          {sp.status === "매진" ? (
                            <span className="text-red-400 font-bold bg-red-950/20 px-2.5 py-1 rounded border border-red-900/30 text-xs sm:text-sm">{t("statusSoldOut")}</span>
                          ) : sp.status === "마감 임박" ? (
                            <span className="text-amber-400 font-bold bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/30 text-xs sm:text-sm">{t("statusClosing")} ({sp.count})</span>
                          ) : (
                            <span className="text-emerald-400 font-bold bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30 text-xs sm:text-sm">{t("statusAvailable")} ({sp.count})</span>
                          )}
                        </td>
                        <td className="p-4.5 sm:p-5.5 font-mono text-xs sm:text-sm">
                          {sp.slots.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5">
                              {sp.slots.map((sl) => (
                                <span key={sl} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-300">
                                  {sl}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-slate-500 font-bold">{t("noSlots")}</span>
                          )}
                        </td>
                        <td className="p-4.5 sm:p-5.5 text-center">
                          <button
                            onClick={() => handleOpenReservation(sp)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs font-black transition-all cursor-pointer"
                          >
                            {sp.status === "매진" ? t("btnWaitlist") : t("btnReserve")}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- [탭 3] 캠프 로드맵 & 분반 --- */}
        {activeTab === "curriculum" && (
          <div className="no-print space-y-10 animate-fade-in text-left">
            
            {/* 1. 캠프 방향성 & Oxford Humanities Flow */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-l from-neon-pink/8 to-transparent pointer-events-none -z-10" />
              
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-pink/15 text-neon-pink border border-neon-pink/25 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  <Flame className="w-4.5 h-4.5 text-neon-pink animate-float" />
                  <span>{t("curriculumBadge")}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 tracking-tight leading-tight">
                  {t("curriculumTitle")}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl">
                  {t("curriculumDesc")}
                </p>
              </div>

              {/* 일과 흐름 - 한 번에 (Connected Horizontal Chevron Flow) */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-neon-pink" />
                  {t("flowTitle")}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-3">
                  
                  {/* Step 1 */}
                  <div className="relative group overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e293b] to-slate-950 border border-neon-pink/20 hover:border-neon-pink/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all hover:scale-[1.02] hover:glow-pink">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black tracking-widest text-neon-pink uppercase">STEP 01</span>
                        <BookOpen className="w-5.5 h-5.5 text-neon-pink" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-100 group-hover:text-neon-pink transition-colors">
                        {t("step1Title")}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {t("step1Desc")}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>{t("step1Sub")}</span>
                      <ChevronRight className="w-4 h-4 text-neon-cyan animate-pulse" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e293b] to-slate-950 border border-neon-purple/20 hover:border-neon-purple/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all hover:scale-[1.02] hover:glow-purple">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black tracking-widest text-neon-purple uppercase">STEP 02</span>
                        <Sparkles className="w-5.5 h-5.5 text-neon-purple" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-100 group-hover:text-neon-purple transition-colors">
                        {t("step2Title")}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {t("step2Desc")}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>{t("step2Sub")}</span>
                      <ChevronRight className="w-4 h-4 text-neon-cyan animate-pulse" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group overflow-hidden bg-gradient-to-br from-slate-900 via-[#1e293b] to-slate-950 border border-neon-cyan/20 hover:border-neon-cyan/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all hover:scale-[1.02] hover:glow-cyan">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-black tracking-widest text-neon-cyan uppercase">STEP 03</span>
                        <Award className="w-5.5 h-5.5 text-neon-cyan animate-float" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-100 group-hover:text-neon-cyan transition-colors">
                        {t("step3Title")}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {t("step3Desc")}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>{t("step3Sub")}</span>
                      <ChevronRight className="w-4 h-4 text-neon-cyan animate-pulse" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 2. Self Discovery 4 Questions */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
                  {t("questionsTitle")}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  {t("questionsDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                
                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">{t("q1Title")}</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">{t("q1Text")}</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">{t("q2Title")}</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">{t("q2Text")}</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">{t("q3Title")}</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">{t("q3Text")}</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">{t("q4Title")}</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">{t("q4Text")}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. 8 Sessions — 주제 로드맵 & Creative Transfer */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🗣</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">{t("sessionsTitle")}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  {t("sessionsDesc")}
                </p>
              </div>

              {/* Sessions Roadmap Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5.5">
                
                {/* Left Side: Sessions 1~4 */}
                <div className="space-y-4">
                  
                  {/* Session 1 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 01</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session1Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session1Quote")}
                    </span>
                  </div>

                  {/* Session 2 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 02</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session2Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session2Quote")}
                    </span>
                  </div>

                  {/* Session 3 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 03</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session3Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session3Quote")}
                    </span>
                  </div>

                  {/* Session 4 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 04</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session4Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session4Quote")}
                    </span>
                  </div>

                </div>

                {/* Right Side: Sessions 5~8 */}
                <div className="space-y-4">
                  
                  {/* Session 5 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 05</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200 text-shadow-sm">{t("session5Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session5Quote")}
                    </span>
                  </div>

                  {/* Session 6 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 06</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session6Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session6Quote")}
                    </span>
                  </div>

                  {/* Session 7 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 07</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session7Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session7Quote")}
                    </span>
                  </div>

                  {/* Session 8 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 08</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">{t("session8Name")}</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      {t("session8Quote")}
                    </span>
                  </div>

                </div>

              </div>

              {/* Creative Transfer: Story -> Lyric */}
              <div className="space-y-5 pt-6 border-t border-slate-800">
                <h4 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
                  <span>💬</span>
                  {t("transferTitle")}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Card 1: Hook */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">{t("transferHook")}</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      {t("transferHookDesc")}
                    </p>
                  </div>

                  {/* Card 2: Verse */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">{t("transferVerse")}</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      {t("transferVerseDesc")}
                    </p>
                  </div>

                  {/* Card 3: Bridge */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">{t("transferBridge")}</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      {t("transferBridgeDesc")}
                    </p>
                  </div>

                  {/* Card 4: Tag */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">{t("transferTag")}</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      {t("transferTagDesc")}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* 4. 분반 운영 & 교사 배치 */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👥</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">{t("classesTitle")}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  {t("classesDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 수준별 분반 */}
                <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-7.5 space-y-6">
                  <h4 className="text-lg sm:text-xl font-black text-[#E6C897] border-b border-slate-800 pb-3">
                    {t("levelTitle")}
                  </h4>
                  <ul className="space-y-4.5 text-sm sm:text-base text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">{t("level1Key")}</strong> {t("level1Val")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">{t("level2Key")}</strong> {t("level2Val")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">{t("level3Key")}</strong> {t("level3Val")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">{t("level4Key")}</strong> {t("level4Val")}</span>
                    </li>
                  </ul>
                </div>

                {/* 교사 배치 */}
                <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-7.5 space-y-6">
                  <h4 className="text-lg sm:text-xl font-black text-[#E6C897] border-b border-slate-800 pb-3">
                    {t("matchingTitle")}
                  </h4>
                  <ul className="space-y-4.5 text-sm sm:text-base text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">{t("match1Key")}</strong> {t("match1Val")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">{t("match2Key")}</strong> {t("match2Val")}</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">{t("match3Key")}</strong> {t("match3Val")}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 5. K-pop Creative — 8 Subjects */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-neon-pink">🎵</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
                    {t("subjectsTitle")}
                  </h3>
                </div>
                <p className="text-base text-neon-cyan font-bold tracking-wide">
                  {t("subjectsSub")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* Subject 1 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 01</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub1Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub1Desc")}
                  </p>
                </div>

                {/* Subject 2 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 02</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub2Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub2Desc")}
                  </p>
                </div>

                {/* Subject 3 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 03</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub3Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub3Desc")}
                  </p>
                </div>

                {/* Subject 4 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 04</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub4Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub4Desc")}
                  </p>
                </div>

                {/* Subject 5 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 05</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub5Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub5Desc")}
                  </p>
                </div>

                {/* Subject 6 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 06</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub6Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub6Desc")}
                  </p>
                </div>

                {/* Subject 7 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 07</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub7Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub7Desc")}
                  </p>
                </div>

                {/* Subject 8 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 08</span>
                    <h4 className="text-lg font-black text-slate-200">{t("sub8Title")}</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    {t("sub8Desc")}
                  </p>
                </div>

              </div>
            </div>

            {/* 6. 🏁 결과물 (Deliverables Grid) */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-l from-neon-pink/5 to-transparent pointer-events-none -z-10" />
              
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏁</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
                  {t("delTitle")}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Performance Card */}
                <div className="relative rounded-2xl bg-[#121620] border border-[#CFA764]/20 p-6 sm:p-7 pt-9 flex flex-col justify-between hover:border-[#CFA764]/40 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-4 -right-2 bg-gradient-to-br from-[#E6C897] to-[#CFA764] text-slate-950 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-amber-950/20 transform rotate-6">
                    <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <h4 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight border-b border-slate-800 pb-3">{t("delPerformance")}</h4>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-bold">
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPerformance1")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPerformance2")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPerformance3")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPerformance4")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPerformance5")}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Humanities & English Card */}
                <div className="relative rounded-2xl bg-[#121620] border border-[#CFA764]/20 p-6 sm:p-7 pt-9 flex flex-col justify-between hover:border-[#CFA764]/40 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-4 -right-2 bg-gradient-to-br from-[#E6C897] to-[#CFA764] text-slate-950 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-amber-950/20 transform rotate-12">
                    <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <h4 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight border-b border-slate-800 pb-3">{t("delHumanities")}</h4>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-bold">
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delHumanities1")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delHumanities2")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delHumanities3")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delHumanities4")}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final Portfolio Package Card */}
                <div className="relative rounded-2xl bg-[#121620] border border-[#CFA764]/20 p-6 sm:p-7 pt-9 flex flex-col justify-between hover:border-[#CFA764]/40 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-4 -right-2 bg-gradient-to-br from-[#E6C897] to-[#CFA764] text-slate-950 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-amber-950/20 transform -rotate-6">
                    <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    <h4 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight border-b border-slate-800 pb-3">{t("delPortfolio")}</h4>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-bold">
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPortfolio1")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPortfolio2")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPortfolio3")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPortfolio4")}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-[#C8AB7B] text-lg leading-none">•</span>
                        <span>{t("delPortfolio5")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Creative Journal Workbook Card & Simulated Book Mockup */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                
                {/* Text Description */}
                <div className="space-y-5 text-left flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📖</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight leading-tight">
                      {t("workbookTitle")}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-bold">
                    {t("workbookDesc")}
                  </p>
                  
                  {/* Inner detailed breakdown grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4.5 rounded-2xl bg-[#121620] border border-slate-800 text-left hover:border-neon-pink/30 transition-colors">
                      <span className="text-[10px] font-mono font-black text-neon-pink uppercase block mb-1 tracking-wider">01 / ACTIVITY RECORD</span>
                      <span className="text-sm sm:text-base font-black text-slate-200">{t("workbookActivityTitle")}</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-normal">Creative Process Pages</span>
                    </div>
                    <div className="p-4.5 rounded-2xl bg-[#121620] border border-slate-800 text-left hover:border-neon-purple/30 transition-colors">
                      <span className="text-[10px] font-mono font-black text-neon-purple uppercase block mb-1 tracking-wider">02 / DAILY LOG</span>
                      <span className="text-sm sm:text-base font-black text-slate-200">{t("workbookDailyTitle")}</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-normal">Daily Reflection</span>
                    </div>
                    <div className="p-4.5 rounded-2xl bg-[#121620] border border-slate-800 text-left hover:border-neon-cyan/30 transition-colors">
                      <span className="text-[10px] font-mono font-black text-neon-cyan uppercase block mb-1 tracking-wider">03 / HOME REPORT</span>
                      <span className="text-sm sm:text-base font-black text-slate-200">{t("workbookParentTitle")}</span>
                      <span className="text-xs text-slate-400 block mt-1 leading-normal">Parent Page</span>
                    </div>
                  </div>
                </div>

                {/* CSS Realistic Book Cover Mockup */}
                <div className="flex-shrink-0 z-10 flex items-center justify-center p-4">
                  <div className="group relative">
                    {/* Spine Shadow for realistic 3D volume */}
                    <div className="absolute -inset-1 rounded-r-2xl bg-gradient-to-r from-black/85 to-transparent blur-md opacity-80 group-hover:opacity-90 group-hover:blur-lg transition-all duration-500 pointer-events-none" />
                    
                    {/* Main Book Cover */}
                    <div className="relative w-64 h-80 rounded-r-2xl bg-gradient-to-r from-[#0d162d] via-[#152243] to-[#121c38] shadow-[15px_15px_30px_rgba(0,0,0,0.55)] border-y border-r border-[#E6C897]/30 overflow-hidden flex flex-col justify-between p-6 select-none group-hover:shadow-[20px_20px_45px_rgba(0,0,0,0.65)] group-hover:scale-[1.03] transition-all duration-500">
                      {/* Leather Texture overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none" />
                      
                      {/* Book spine indent */}
                      <div className="absolute left-0 top-0 w-4.5 h-full bg-gradient-to-r from-black/60 via-white/5 to-black/45 border-r border-black/20" />
                      
                      {/* Gold embossed corner borders */}
                      <div className="absolute inset-3 border border-[#E6C897]/20 rounded-r-xl pointer-events-none" />
                      <div className="absolute inset-4 border border-[#E6C897]/10 rounded-r-lg pointer-events-none" />

                      {/* Shield Crest */}
                      <div className="mt-8 flex flex-col items-center justify-center space-y-3.5 z-10">
                        <div className="w-18 h-18 rounded-full border-2 border-[#E6C897]/40 flex items-center justify-center bg-[#0d162d] shadow-lg">
                          <svg className="w-12 h-12 text-[#E6C897]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8C12 8 28 4 32 4C36 4 52 8 52 8V32C52 46 36 58 32 60C28 58 12 46 12 32V8Z" stroke="#E6C897" strokeWidth="2.5" strokeLinejoin="round" />
                            <path d="M16 11C16 11 29 7.5 32 7.5C35 7.5 48 11 48 11V31C48 43 35 53.5 32 55.5C29 53.5 16 43 16 31V11Z" stroke="#E6C897" strokeWidth="1" strokeOpacity="0.4" />
                            <text x="32" y="37" fill="#E6C897" fontSize="20" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle" letterSpacing="1">KS</text>
                          </svg>
                        </div>
                        <span className="text-[10px] tracking-widest text-[#E6C897]/60 font-mono font-bold uppercase">KISAS</span>
                      </div>

                      {/* Ornate title */}
                      <div className="mb-6 text-center z-10">
                        <h5 className="font-serif text-[#E6C897] font-semibold text-lg leading-tight tracking-wide drop-shadow-md">
                          {t("bookCreativeJournal")}<br />{t("bookWorkbook")}
                        </h5>
                        <div className="w-12 h-0.5 bg-[#E6C897]/30 mx-auto mt-3" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 8. Creative Spirit Award Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#CFA764]/30 bg-gradient-to-r from-[#0b101d] via-[#141b2e] to-[#0b101d] p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:scale-[1.01] hover:shadow-amber-950/10 transition-all duration-300">
              {/* Leather Grain Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.12] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/35 pointer-events-none" />

              {/* Large Semi-transparent Engraved Trophy Graphic on the Right */}
              <div className="absolute right-4 md:right-10 bottom-0 top-0 flex items-center justify-end pointer-events-none opacity-[0.045] text-[#E6C897]">
                <svg className="w-56 h-56" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.88V18H5v2h14v-2h-2v-3.12c2.28-.4 4-2.44 4-4.88V7c0-1.1-.9-2-2-2zm-12 5V7h2v3c0 .55-.45 1-1 1s-1-.45-1-1zm10 0c0 .55-.45 1-1 1s-1-.45-1-1V7h2v3z" />
                </svg>
              </div>

              {/* Text Info */}
              <div className="space-y-4 max-w-2xl z-10 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <h3 className="font-serif text-2.5xl sm:text-3xl font-black text-[#E6C897] tracking-wide drop-shadow-md">
                    {t("awardTitle")}
                  </h3>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-bold">
                  {t("awardDesc")}
                </p>

                {/* Selection process details */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm sm:text-base text-slate-300 leading-normal font-bold">
                  <strong className="text-slate-100 flex-shrink-0">{t("awardSelection")}</strong>
                  <div className="flex flex-wrap items-center gap-2 text-[#E6C897]">
                    <span>{t("awardStep1")}</span>
                    <span className="text-slate-500 font-normal">➔</span>
                    <span>{t("awardStep2")}</span>
                    <span className="text-slate-500 font-normal">➔</span>
                    <span>{t("awardStep3")}</span>
                  </div>
                </div>

                <div className="pt-2 text-xs sm:text-sm text-slate-400 font-bold border-t border-slate-800">
                  {t("awardFootnote")}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* --- [탭 2] AI 피드백 & VOD --- */}
        {activeTab === "ai" && (
          <div className="no-print space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              <div className="lg:col-span-2 space-y-8">
                
                {/* Uploader */}
                <div className="glassmorphism-card rounded-2xl p-7.5 space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <UploadCloud className="w-6 h-6 text-neon-cyan" />
                    <h3 className="text-lg sm:text-xl font-black text-slate-100">{t("uploaderTitle")}</h3>
                  </div>

                  <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-7.5 text-center flex flex-col items-center justify-center gap-4 relative transition-all duration-355 ${
                      isDropActive 
                        ? "border-neon-cyan bg-neon-cyan/5 scale-[0.98]" 
                        : "border-slate-850 bg-slate-950/20 hover:border-slate-700/60"
                    }`}
                  >
                    <input 
                      type="file" 
                      accept="video/*" 
                      onChange={handleFileSelect} 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <UploadCloud className="w-10 h-10 text-neon-cyan animate-float" />
                    <div className="space-y-1.5">
                      <p className="text-sm sm:text-base font-black text-slate-200">{t("uploaderDragDrop")}</p>
                      <p className="text-xs sm:text-sm text-slate-400 font-bold">{t("uploaderFormats")}</p>
                    </div>
                  </div>

                  {uploadFile && (
                    <div className="bg-slate-950/60 border border-slate-850 p-4.5 rounded-xl flex items-center justify-between gap-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center text-xs sm:text-sm font-black text-neon-pink">MP4</div>
                        <div className="truncate">
                          <p className="text-sm sm:text-base font-black text-slate-200 truncate">{uploadFile.name}</p>
                          <p className="text-xs font-mono text-slate-500">{uploadFile.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xs sm:text-sm font-extrabold text-neon-pink font-mono">{uploadFile.progress}% 완료</span>
                          <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1.5">
                            <div className="h-full bg-neon-pink transition-all" style={{ width: `${uploadFile.progress}%` }} />
                          </div>
                        </div>
                        {uploadFile.completed && <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm flex items-center justify-center">✓</span>}
                      </div>
                    </div>
                  )}
                </div>

                {/* AI report */}
                {uploadFile?.completed && (
                  <div className="bg-gradient-to-r from-neon-pink/5 via-slate-900/90 to-neon-purple/5 border border-neon-pink/15 rounded-2xl p-7.5 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-3.5">
                        <Sparkles className="w-5.5 h-5.5 text-neon-pink animate-float" />
                        <h4 className="text-sm sm:text-base font-black text-neon-pink uppercase tracking-widest glow-text-pink">{t("aiTitle")}</h4>
                      </div>
                      <span className="text-xs sm:text-sm bg-neon-pink/20 text-neon-pink px-2.5 py-1 rounded-full border border-neon-pink/30 font-mono">HIGH-ACCURACY REPORT</span>
                    </div>

                    <blockquote className="text-sm sm:text-base leading-relaxed text-slate-200 border-l-2 border-neon-pink pl-4">
                      💡 {t("aiResult")}
                    </blockquote>

                    {/* VOD Recommendation */}
                    <div className="space-y-4 pt-2">
                      <h5 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">{t("vodTitle")}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl flex flex-col justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] hover:glow-pink transition-all group">
                          <div className="space-y-1.5">
                            <span className="text-xs bg-slate-900 border border-slate-800 text-neon-pink font-extrabold px-2 py-0.5 rounded">{t("vod1Title")}</span>
                            <p className="text-sm sm:text-base font-extrabold text-slate-200 group-hover:text-neon-pink transition-colors">{t("vod1Desc")}</p>
                            <p className="text-xs sm:text-sm text-slate-500">{t("vod1Sub")}</p>
                          </div>
                          <button
                            onClick={() => setActiveVOD({
                              title: t("vod1Desc"),
                              desc: t("vod1Desc") + " - " + t("vod1Sub"),
                              videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
                            })}
                            className="w-full py-2.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                          >
                            <Play className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> {t("btnStudy")}
                          </button>
                        </div>

                        <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl flex flex-col justify-between gap-4 hover:border-neon-purple/30 hover:scale-[1.01] hover:glow-purple transition-all group">
                          <div className="space-y-1.5">
                            <span className="text-xs bg-slate-900 border border-slate-800 text-neon-purple font-extrabold px-2 py-0.5 rounded">{t("vod2Title")}</span>
                            <p className="text-sm sm:text-base font-extrabold text-slate-200 group-hover:text-neon-purple transition-colors">{t("vod2Desc")}</p>
                            <p className="text-xs sm:text-sm text-slate-500">{t("vod2Sub")}</p>
                          </div>
                          <button
                            onClick={() => setActiveVOD({
                              title: t("vod2Desc"),
                              desc: t("vod2Desc") + " - " + t("vod2Sub"),
                              videoUrl: "https://www.w3schools.com/html/movie.mp4"
                            })}
                            className="w-full py-2.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                          >
                            <Play className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> {t("btnStudy")}
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Right 1 Col: Coach Feedbacks */}
              <div className="lg:col-span-1 space-y-4">
                <div className="glassmorphism-card rounded-2xl p-7.5 space-y-5">
                  <h4 className="text-sm sm:text-base font-black text-slate-400 uppercase tracking-widest">{t("coachFeedbackTitle")}</h4>
                  
                  <div className="space-y-3.5">
                    {/* Timestamp 1 */}
                    <div 
                      onClick={() => setActiveTimestamp(activeTimestamp === "t1" ? null : "t1")}
                      className={`p-4.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4.5 ${
                        activeTimestamp === "t1" 
                          ? "bg-neon-pink/10 border-neon-pink/30 glow-pink" 
                          : "bg-slate-950/40 border-slate-850 hover:border-slate-700/60"
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-mono font-black text-neon-pink bg-neon-pink/10 border border-neon-pink/20 px-2.5 py-0.5 rounded-lg">00:42</span>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-black text-slate-300">{t("ts1Author")}</span>
                          <p className="text-sm text-slate-400 truncate mt-1">{t("ts1Text")}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-4.5 h-4.5 text-slate-500 transition-transform ${activeTimestamp === 't1' ? 'rotate-180 text-neon-pink' : ''}`} />
                    </div>
                    {activeTimestamp === "t1" && (
                      <div className="bg-slate-950/90 border border-slate-850 rounded-xl p-5 text-sm text-slate-400 space-y-3 animate-fade-in">
                        <div className="w-full h-36 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-xs relative overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <circle cx="120" cy="50" r="12" stroke="#CFA764" strokeWidth="2.5" fill="none" className="animate-pulse" />
                            <line x1="120" y1="50" x2="190" y2="25" stroke="#CFA764" strokeWidth="1.5" strokeDasharray="4" />
                            <text x="120" y="32" fill="#CFA764" fontSize="10" fontWeight="bold">{t("ts1DetailTag")}</text>
                          </svg>
                          <span>{t("ts1DetailLabel")}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                          {t("ts1DetailDesc")}
                        </p>
                      </div>
                    )}

                    {/* Timestamp 2 */}
                    <div 
                      onClick={() => setActiveTimestamp(activeTimestamp === "t2" ? null : "t2")}
                      className={`p-4.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4.5 ${
                        activeTimestamp === "t2" 
                          ? "bg-neon-cyan/10 border-neon-cyan/30 glow-cyan" 
                          : "bg-slate-950/40 border-slate-850 hover:border-slate-700/60"
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-mono font-black text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 px-2.5 py-0.5 rounded-lg">01:15</span>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-black text-slate-300">{t("ts2Author")}</span>
                          <p className="text-sm text-slate-400 truncate mt-1">{t("ts2Text")}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-4.5 h-4.5 text-slate-500 transition-transform ${activeTimestamp === 't2' ? 'rotate-180 text-neon-cyan' : ''}`} />
                    </div>
                    {activeTimestamp === "t2" && (
                      <div className="bg-slate-950/90 border border-slate-850 rounded-xl p-5 text-sm text-slate-400 space-y-3 animate-fade-in">
                        <div className="w-full h-36 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-xs relative overflow-hidden">
                          <div className="flex items-end gap-1.5 h-10 w-40">
                            <div className="bg-neon-cyan h-4 w-2 rounded animate-pulse" />
                            <div className="bg-neon-cyan h-8 w-2 rounded animate-pulse" />
                            <div className="bg-neon-pink h-10 w-2 rounded animate-pulse" />
                            <div className="bg-neon-cyan h-6 w-2 rounded animate-pulse" />
                          </div>
                          <span className="text-xs absolute top-2 font-bold">{t("ts2DetailLabel")}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                          {t("ts2DetailDesc")}
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- [탭 3] 글로벌 네트워킹 --- */}
        {activeTab === "network" && (
          <div className="no-print space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Community Feed */}
              <div className="lg:col-span-2 glassmorphism-card rounded-2xl p-7.5 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <MessageSquare className="w-6 h-6 text-neon-purple" />
                  <h3 className="text-lg sm:text-xl font-black text-slate-100">{t("feedTitle")}</h3>
                </div>

                <div className="space-y-6">
                  {feeds.map((f) => (
                    <div key={f.id} className="bg-slate-950/40 border border-slate-850 p-6.5 rounded-xl space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <span className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-base shadow">
                            {f.avatar}
                          </span>
                          <div>
                            <span className="text-sm sm:text-base font-black text-slate-200">{f.author}</span>
                            <span className="text-xs text-slate-400 font-mono block mt-0.5">CAMP MEMBER • 15m ago</span>
                          </div>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                        "{getFeedContent(f.id, f.content)}"
                      </p>

                      <div className="flex items-center gap-5 pt-3 border-t border-slate-850/50">
                        <button 
                          onClick={() => handleLike(f.id)}
                          className={`flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            f.liked ? 'text-neon-pink scale-110' : 'text-slate-400 hover:text-neon-pink'
                          }`}
                        >
                          <Heart className={`w-4.5 h-4.5 ${f.liked ? 'fill-neon-pink' : ''}`} /> {t("feedLikes")} {f.likes}
                        </button>
                        <button 
                          onClick={() => toggleCommentsView(f.id)}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-neon-purple font-black uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-4.5 h-4.5" /> {t("feedComments")} {f.comments.length}
                        </button>
                      </div>

                      {f.showComments && (
                        <div className="space-y-4 pt-4 border-t border-slate-850/40 animate-fade-in">
                          <div className="space-y-3">
                            {f.comments.map((c) => (
                              <div key={c.id} className="bg-slate-950 border border-slate-900 p-4 rounded-xl text-sm">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="font-black text-slate-300 text-xs sm:text-sm">{c.author}</span>
                                  <span className="text-xs text-slate-500 font-mono">Just now</span>
                                </div>
                                <p className="text-slate-300 text-xs sm:text-sm font-medium">{getCommentText(c.id, c.text)}</p>
                              </div>
                            ))}
                          </div>

                          <form onSubmit={(e) => handleAddComment(f.id, e)} className="flex gap-3">
                            <input
                              type="text"
                              placeholder={t("commentPlaceholder")}
                              value={f.newCommentText}
                              onChange={(e) => handleCommentTextChange(f.id, e.target.value)}
                              className="flex-1 bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-pink transition-all"
                            />
                            <button
                              type="submit"
                              className="px-4.5 py-2.5 rounded-xl bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black transition-all cursor-pointer hover:scale-[1.02]"
                            >
                              {t("commentSubmit")}
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentoring Stream channel */}
              <div className="lg:col-span-1 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-slate-950 border border-slate-850 rounded-2xl p-7.5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-850 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-rose-600 text-white font-extrabold text-xs uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" /> Live
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-slate-200">{t("liveTitle")}</h4>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p className="font-black text-slate-200 leading-relaxed text-sm sm:text-base">
                    {t("liveSubtitle")}
                  </p>
                  
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                    <div className="flex justify-between border-b border-slate-850/50 pb-1.5">
                      <span className="text-slate-500 font-bold">{t("liveHostKey")}</span>
                      <strong className="text-slate-300 font-black">{t("liveHostVal")}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">{t("liveTimeKey")}</span>
                      <strong className="text-slate-300 font-black">{t("liveTimeVal")}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLiveAlertSubscribe}
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2.5 transition-all duration-300 border cursor-pointer ${
                    liveSubscribed
                      ? "bg-slate-950 border-slate-900 text-slate-500"
                      : "bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink hover:scale-[1.02]"
                  }`}
                >
                  <Bell className={`w-4.5 h-4.5 ${wiggleBell ? "animate-wiggle" : ""} ${liveSubscribed ? "fill-slate-500" : ""}`} />
                  {liveSubscribed ? t("liveBtnSubscribed") : t("liveBtnSub")}
                </button>
              </div>

            </div>
          </div>
        )}

        {/* --- [탭 4] 데뷔 포트폴리오 --- */}
        {activeTab === "portfolio" && (
          <div className="space-y-8 animate-fade-in text-left">
            
            {/* TRAINEE CV & PORTFOLIO HEADER (PRINT-ONLY) */}
            <div className="print-only hidden space-y-2 border-b border-slate-300 pb-4 text-center">
              <h2 className="text-xl font-bold text-slate-900 tracking-wide uppercase">{t("printTitle")}</h2>
              <h3 className="text-base font-black text-slate-900">{t("printSubtitle")}</h3>
              <p className="text-xs text-slate-600">{t("printMeta")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Radar charts and lists */}
              <div className="print-card lg:col-span-1 glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-6">
                <div className="no-print flex items-center gap-2.5 border-b border-slate-800 pb-4">
                  <Award className="w-5.5 h-5.5 text-neon-cyan" />
                  <h3 className="text-base sm:text-lg font-black text-slate-100">{t("portfolioReportTitle")}</h3>
                </div>

                <div className="flex justify-center p-4 bg-slate-950/20 border border-slate-900 rounded-2xl print-card">
                  <svg width="240" height="240" viewBox="0 0 200 200" className="w-full max-w-[240px] h-auto">
                    <polygon points="100,30 166,78 141,156 59,156 34,78" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" className="print-only border-slate-300" />
                    <polygon points="100,44 153,82 133,145 67,145 47,82" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <polygon points="100,58 139,87 124,133 76,133 61,87" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <polygon points="100,72 126,92 116,122 84,122 74,92" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <polygon points="100,86 113,97 108,111 92,111 87,97" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <line x1="100" y1="100" x2="100" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="100" y1="100" x2="166" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="100" y1="100" x2="141" y2="156" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="100" y1="100" x2="59" y2="156" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="100" y1="100" x2="34" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <polygon points={getRadarPath().replace('M ', '').replace(' Z', '').replace(/L/g, '')} fill="rgba(207, 167, 100, 0.35)" stroke="#CFA764" strokeWidth="2" className="transition-all duration-1000 ease-out" />
                    <circle cx="100" cy={100 - (dVal.vocal / 100) * 70} r="3" fill="#E6C897" />
                    <circle cx={cx + (dVal.dance / 100) * scale * 0.951} cy={cy + (dVal.dance / 100) * scale * (-0.309)} r="3" fill="#CFA764" />
                    <circle cx={cx + (dVal.visual / 100) * scale * 0.588} cy={cy + (dVal.visual / 100) * scale * 0.809} r="3" fill="#C8AB7B" />
                    <circle cx={cx + (dVal.attitude / 100) * scale * (-0.588)} cy={cy + (dVal.attitude / 100) * scale * 0.809} r="3" fill="#CFA764" />
                    <circle cx={cx + (dVal.fitness / 100) * scale * (-0.951)} cy={cy + (dVal.fitness / 100) * scale * (-0.309)} r="3" fill="#E6C897" />
                    <text x="100" y="18" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle" className="print-text">{t("radarVocal")}</text>
                    <text x="180" y="78" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="start" className="print-text">{t("radarDance")}</text>
                    <text x="152" y="174" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="start" className="print-text">{t("radarVisual")}</text>
                    <text x="44" y="174" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end" className="print-text">{t("radarAttitude")}</text>
                    <text x="20" y="78" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end" className="print-text">{t("radarFitness")}</text>
                  </svg>
                </div>

                <div className="space-y-3 text-sm sm:text-base pt-2">
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">{t("vocalScale")}</span>
                    <span className="font-extrabold text-slate-200 print-text">78 / 100 <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded ml-1">+15</span></span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">{t("danceScale")}</span>
                    <span className="font-extrabold text-slate-200 print-text">92 / 100 <span className="text-[10px] text-neon-pink font-bold bg-neon-pink/10 px-2 py-0.5 rounded ml-1">{t("danceBadge")}</span></span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">{t("visualScale")}</span>
                    <span className="font-extrabold text-slate-200 print-text">85 / 100</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">{t("attitudeScale")}</span>
                    <span className="font-extrabold text-slate-200 print-text">88 / 100</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400 font-bold print-text">{t("fitnessScale")}</span>
                    <span className="font-extrabold text-slate-200 print-text">70 / 100</span>
                  </div>
                </div>
              </div>

              {/* Before/After Split Videos */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Proof Videos */}
                <div className="print-card glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-6">
                  <div className="no-print flex items-center gap-2.5 border-b border-slate-800 pb-4">
                    <Video className="w-5.5 h-5.5 text-neon-pink" />
                    <h3 className="text-base sm:text-lg font-black text-slate-100">{t("beforeAfterTitle")}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center text-xs font-bold">
                    
                    <div className="bg-slate-950/60 border border-slate-850 rounded-xl overflow-hidden print-card transition-all hover:border-slate-700">
                      <div className="w-full h-40 sm:h-48 bg-[#0b0d12]/90 flex flex-col items-center justify-center text-slate-500 relative border-b border-slate-850/80 group">
                        <div className="w-12 h-12 rounded-full bg-slate-950/80 border border-slate-800 flex items-center justify-center absolute group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-slate-500 opacity-60 ml-0.5" />
                        </div>
                        <span className="text-[9px] bg-slate-950/90 text-slate-400 border border-slate-800 px-2 py-0.5 rounded absolute bottom-2.5 right-2.5 font-mono">01:30</span>
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[9px] text-slate-400">{t("beforeDesc")}</div>
                      </div>
                      <p className="p-3 text-slate-400 text-sm font-black print-text">{t("beforeLabel")}</p>
                    </div>

                    <div className="bg-slate-950/60 border border-[#CFA764]/20 hover:border-neon-pink/50 rounded-xl overflow-hidden print-card hover:scale-[1.01] hover:glow-pink transition-all">
                      <div className="w-full h-40 sm:h-48 bg-[#0b0d12]/90 flex flex-col items-center justify-center text-slate-500 relative border-b border-slate-850/80 group">
                        <div className="w-12 h-12 rounded-full bg-neon-pink/15 border border-neon-pink/45 flex items-center justify-center absolute group-hover:scale-110 transition-transform glow-pink">
                          <Play className="w-6 h-6 text-neon-pink ml-0.5 animate-pulse-ring" />
                        </div>
                        <span className="text-[9px] bg-slate-950/90 text-neon-cyan border border-slate-800 px-2 py-0.5 rounded absolute bottom-2.5 right-2.5 font-mono">01:45</span>
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-neon-pink/15 border border-neon-pink/25 text-[9px] text-neon-pink">{t("afterDesc")}</div>
                      </div>
                      <p className="p-3 text-neon-pink text-sm font-black print-text">{t("afterLabel")}</p>
                    </div>

                  </div>
                </div>

                {/* Trainer Opinion (Screen and Print) */}
                <div className="print-card glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-4">
                  <div className="no-print flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Star className="w-5.5 h-5.5 text-neon-purple fill-neon-purple/20" />
                    <h3 className="text-base sm:text-lg font-black text-slate-100">{t("opinionTitle")}</h3>
                  </div>
                  
                  <div className="print-only hidden space-y-2 border-b border-slate-300 pb-3 text-slate-900">
                    <h4 className="text-xs font-bold uppercase">{t("opinionPrint")}</h4>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 print-text leading-relaxed font-semibold">
                    {t("opinionContent")}
                  </p>
                  
                  <div className="text-right text-xs text-slate-500 font-bold mt-3 print-text">
                    {t("opinionSignature")}
                  </div>
                </div>

                {/* Certificate & Issuance button */}
                <div className="no-print glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-6">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/5 via-slate-950 to-amber-500/5 border border-amber-500/20 text-center space-y-3">
                    <Award className="w-8 h-8 text-amber-400 mx-auto animate-float" />
                    <span className="inline-block text-[10px] sm:text-xs bg-amber-500/20 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {t("certStatus")}
                    </span>
                    <p className="text-sm sm:text-base font-black text-slate-200">
                      {t("certDesc")}
                    </p>
                  </div>

                  {downloadProgress !== null ? (
                    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col items-center justify-center gap-3">
                      <span className="text-sm font-black text-neon-pink font-mono">
                        {t("btnPdfBuild").replace("{progress}", String(downloadProgress))}
                      </span>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan transition-all" style={{ width: `${downloadProgress}%` }} />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={handleDownloadProfile}
                      className="w-full py-4.5 rounded-xl font-black text-sm sm:text-base text-white border border-transparent cursor-pointer flex items-center justify-center gap-2 animate-shimmer text-shadow-sm hover:scale-[1.01] hover:glow-pink transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      {t("btnPdfDownload")}
                    </button>
                  )}
                </div>

              </div>

            </div>

            {/* KISAS Creative 5 Steps Timeline Component */}
            <div className="print-card glassmorphism-card rounded-3xl p-7.5 sm:p-10 space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Sparkles className="w-6 h-6 text-[#CFA764] animate-float" />
                <h3 className="text-lg sm:text-xl font-black text-slate-100">{t("creativeStepsTitle")}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative pt-4">
                {/* Horizontal line connector for desktop */}
                <div className="hidden md:block absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-25 -z-10" />

                {/* Step 1 */}
                <div className="bg-slate-950/40 border border-slate-850 p-5 rounded-2xl hover:border-neon-pink/30 hover:scale-[1.01] hover:shadow-lg transition-all group flex flex-col justify-between gap-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-black text-neon-pink">01</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/25">✓ 이수</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-100 group-hover:text-neon-pink transition-colors">{t("creativeStep1Title")}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{t("creativeStep1Desc")}</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-950/40 border border-slate-850 p-5 rounded-2xl hover:border-neon-purple/30 hover:scale-[1.01] hover:shadow-lg transition-all group flex flex-col justify-between gap-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-black text-neon-purple">02</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/25">✓ 이수</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-100 group-hover:text-neon-purple transition-colors">{t("creativeStep2Title")}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{t("creativeStep2Desc")}</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-950/40 border border-slate-850 p-5 rounded-2xl hover:border-neon-cyan/30 hover:scale-[1.01] hover:shadow-lg transition-all group flex flex-col justify-between gap-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-black text-neon-cyan">03</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/25">✓ 이수</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-100 group-hover:text-neon-cyan transition-colors">{t("creativeStep3Title")}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{t("creativeStep3Desc")}</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-950/40 border border-slate-850 p-5 rounded-2xl hover:border-amber-500/30 hover:scale-[1.01] hover:shadow-lg transition-all group flex flex-col justify-between gap-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-black text-amber-400">04</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/25">✓ 이수</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-100 group-hover:text-amber-450 transition-colors">{t("creativeStep4Title")}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{t("creativeStep4Desc")}</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-slate-950/40 border border-[#CFA764]/20 p-5 rounded-2xl hover:border-neon-pink/30 hover:scale-[1.01] hover:shadow-lg transition-all group flex flex-col justify-between gap-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-black text-[#E6C897]">05</span>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/25">✓ 이수</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-100 group-hover:text-[#E6C897] transition-colors">{t("creativeStep5Title")}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">{t("creativeStep5Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER (NO-PRINT) --- */}
      <footer className="no-print border-t border-slate-850 bg-slate-950/40 py-5 text-center text-[10px] text-slate-500">
        <p className="max-w-md mx-auto leading-normal">
          {t("footerText")}
        </p>
      </footer>

      {/* --- RESERVATION MODAL (NO-PRINT) --- */}
      {reservationModal && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 max-w-xs w-full rounded-2xl p-4.5 space-y-4 shadow-2xl relative">
            <button onClick={() => setReservationModal(null)} className="absolute top-4.5 right-4.5 text-slate-400 hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-0.5">
              <span className="text-[9px] text-neon-pink font-extrabold tracking-widest uppercase">{t("modalDesk")}</span>
              <h4 className="text-sm font-bold text-slate-100">{reservationModal.id === "s1" ? t("space1Name") : reservationModal.id === "s2" ? t("space2Name") : t("space3Name")} {t("modalTitle")}</h4>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">{t("modalTimeLabel")}</span>
              <div className="grid grid-cols-2 gap-2">
                {reservationModal.slots.map((sl) => (
                  <button
                    key={sl}
                    onClick={() => setSelectedSlot(sl)}
                    className={`py-2 rounded-lg border text-xs font-mono font-bold cursor-pointer transition-all ${
                      selectedSlot === sl
                        ? "bg-gradient-to-r from-neon-pink to-neon-purple border-transparent text-white glow-pink"
                        : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    {sl}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={confirmReservation}
              disabled={!selectedSlot}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-xs font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {t("modalSubmit")}
            </button>
          </div>
        </div>
      )}

      {/* --- VOD THEATER PLAY OVERLAY MODAL (NO-PRINT) --- */}
      {activeVOD && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-850 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl relative">
            <button onClick={() => setActiveVOD(null)} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-slate-300 hover:text-white">
              <X className="w-4 h-4" />
            </button>
            <div className="w-full aspect-video bg-black flex items-center justify-center relative">
              <video src={activeVOD.videoUrl} controls autoPlay className="w-full h-full object-contain" />
              <div className="absolute top-3 left-3 bg-neon-pink text-white text-[8px] font-black px-2 py-0.5 rounded tracking-widest uppercase">
                nextLMS VOD LEARNING
              </div>
            </div>
            <div className="p-4 space-y-1.5 bg-[#0f172a]">
              <h4 className="text-xs font-bold text-slate-100">{activeVOD.title}</h4>
              <p className="text-[11px] text-slate-400 leading-normal">{activeVOD.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
