"use client";

import React, { useState, useEffect } from "react";
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
    name: "20260521_안무과제_댄스라인_Miya.mp4",
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
      content: "캠프 끝나고 도쿄로 돌아간 Miya! 보컬 연습 열심히 하고 있어? 내가 보낸 안무 피드백 영상 체크해 봐! 😊",
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
      author: "Miya (일본)",
      avatar: "🇯🇵",
      content: "정민! 대시보드 커뮤니티 채널에 내 오늘 자 보컬 커버 올렸어. 트레이너 쌤이 라이브 때 봐주셨으면 좋겠다! 🎤🎶",
      likes: 8,
      comments: [
        { id: "c2_1", author: "정민", text: "와 Miya! 고음 부분 힘 빠지는 거 완전 해결됐네 대박!!" }
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
      setToastMessage("이 연습 구역은 현재 매진되었습니다. 1:1 대기 리스트에 추가되었습니다.");
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
      type: "reserved"
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

    setToastMessage(`🎉 ${reservationModal.name} (${selectedSlot}) 자율 훈련 일정이 성공적으로 플래닝되었습니다!`);
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
          setToastMessage(`⚡ ${name} 업로드 완료 및 KISAS AI 발성/골반 축 교정 분석이 완료되었습니다.`);
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
            comments: [...f.comments, { id: `c_${Date.now()}`, author: "나 (연습생 Miya)", text: f.newCommentText.trim() }],
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
      setToastMessage("🔕 라이브 멘토링 알림 예약이 해제되었습니다.");
    } else {
      setLiveSubscribed(true);
      setToastMessage("🔔 라이브 알림 완료! Q&A 생중계 시작 30분 전 보이스 알림이 발송됩니다.");
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
            <div className="w-13 h-13 rounded-xl bg-gradient-to-tr from-neon-pink to-neon-purple flex items-center justify-center glow-pink animate-pulse-ring">
              <Flame className="w-6.5 h-6.5 text-white animate-float" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-sm sm:text-base font-black tracking-wider text-neon-pink uppercase">KISAS — Find Your Sound</span>
                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-ping" />
                <span className="text-xs sm:text-sm text-neon-cyan font-mono tracking-widest font-black uppercase">AI K-Pop Camp</span>
              </div>
              <h1 className="text-base sm:text-xl md:text-2xl font-black text-slate-100 tracking-tight mt-1">
                세계 최초 AI 기반 K-pop Creator Camp 차세대 LMS 포털
              </h1>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-5 py-2.5 rounded-xl text-sm font-semibold">
            <Wifi className="w-4.5 h-4.5 text-neon-cyan animate-pulse" />
            <span className="text-slate-350">캠프 연계 온라인 사후 학습망 가동 중</span>
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
            <div className="relative">
              <div className="w-20 h-20 sm:w-25 sm:h-25 rounded-2xl bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-cyan p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[#0f172a] flex items-center justify-center text-3xl sm:text-4xl font-bold">
                  👩‍🎤
                </div>
              </div>
              <span className="absolute bottom-[-4px] right-[-4px] bg-neon-cyan text-[#0f172a] text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-full border-2 border-[#0f172a]">
                🇯🇵
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3.5 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-100">연습생 Miya</h2>
                <span className="text-xs sm:text-sm bg-neon-pink/15 text-neon-pink px-3 py-1 rounded border border-neon-pink/20 font-black uppercase tracking-wider">Week 2 수료반</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 font-semibold mt-2.5">국적: 일본 (Japan) • KISAS 글로벌 데뷔 트랙 코스 이수 중</p>
            </div>
          </div>

          {/* Core Trainee Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full lg:w-auto text-center divide-x divide-slate-850">
            <div className="px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2">누적 훈련 시간</span>
              <strong className="text-xl sm:text-2xl md:text-3xl font-black text-neon-pink">42.5 시간</strong>
            </div>
            <div className="px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2">오늘 과제 달성</span>
              <strong className="text-xl sm:text-2xl md:text-3xl font-black text-neon-cyan">{progressPercent}%</strong>
            </div>
            <div className="px-4">
              <span className="text-xs sm:text-sm text-slate-450 font-black uppercase tracking-wider block mb-2">데뷔 오디션</span>
              <strong className="text-xl sm:text-2xl md:text-3xl font-black text-white flex items-center justify-center gap-2">
                D-7 <span className="w-3 h-3 rounded-full bg-neon-pink animate-ping" />
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
            className={`py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 ${
              activeTab === "training"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <Calendar className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>나의 훈련 플래너</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <Video className="w-5 h-5 sm:w-5.5 sm:h-5.5 animate-float" />
            <span>AI 피드백 & VOD</span>
          </button>

          <button
            onClick={() => setActiveTab("curriculum")}
            className={`py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 col-span-2 md:col-span-1 ${
              activeTab === "curriculum"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <BookOpen className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>캠프 로드맵 & 분반</span>
          </button>

          <button
            onClick={() => setActiveTab("network")}
            className={`py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 ${
              activeTab === "network"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <MessageSquare className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>글로벌 네트워킹</span>
          </button>

          <button
            onClick={() => setActiveTab("portfolio")}
            className={`py-4 sm:py-5.5 rounded-xl text-sm sm:text-base md:text-lg font-black transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-2.5 ${
              activeTab === "portfolio"
                ? "bg-gradient-to-r from-neon-pink to-neon-purple text-white glow-pink shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <Award className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            <span>데뷔 포트폴리오</span>
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
                    <h3 className="text-lg sm:text-xl font-black text-slate-100">오늘의 데뷔 미션 코스 (Daily Homework)</h3>
                  </div>
                  <span className="text-xs sm:text-sm text-neon-pink font-extrabold">체크 시 완료율이 실시간 반영됩니다</span>
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
                        }`}>{item.title}</p>
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
                    <span>Weekly Trainer Mentoring</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-200">디렉터의 주간 격려 코멘트</h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-300 italic">
                    "Miya, 지난 보컬 분석에서 비강 쪽 호흡 압박이 높았는데, VOD 코스를 수강하며 이번 주 업로드 과제에서 턱 근육 긴장을 푸는 노력이 훌륭히 돋보였어! 댄스 코어도 조금만 더 끌어올리자!"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-850 flex items-center gap-2 mt-6 text-xs sm:text-sm text-slate-500 font-extrabold">
                  <span>✍</span>
                  <span>KISAS 수석 보컬 디렉터 지니 (Jiny)</span>
                </div>
              </div>

            </div>

            {/* Interactive Reservator Area */}
            <div className="glassmorphism-card rounded-2xl p-7.5 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <MapPin className="w-5.5 h-5.5 text-neon-cyan" />
                <h3 className="text-lg sm:text-xl font-black text-slate-100">캠프 연계 자율 연습 공간 및 1:1 세션 매칭</h3>
                <span className="text-xs sm:text-sm text-slate-400 font-bold">(단기 오프라인 연계 실시간 잔여석 예약)</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800/60 bg-slate-900/30">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50 text-slate-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                      <th className="p-4.5 sm:p-5.5">연습 공간 / 멘토링 프로그램</th>
                      <th className="p-4.5 sm:p-5.5 text-center">잔여 석 현황</th>
                      <th className="p-4.5 sm:p-5.5">예약 가능 타임슬롯</th>
                      <th className="p-4.5 sm:p-5.5 text-center">동작</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spaces.map((sp) => (
                      <tr key={sp.id} className="border-b border-slate-850 hover:bg-white/3 transition-colors">
                        <td className="p-4.5 sm:p-5.5 font-bold text-slate-200 flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            sp.id === 's1' ? 'bg-neon-pink' : sp.id === 's2' ? 'bg-neon-purple' : 'bg-neon-cyan'
                          }`} />
                          {sp.name}
                        </td>
                        <td className="p-4.5 sm:p-5.5 text-center">
                          {sp.status === "매진" ? (
                            <span className="text-red-400 font-bold bg-red-950/20 px-2.5 py-1 rounded border border-red-900/30 text-xs sm:text-sm">매진 (대기)</span>
                          ) : sp.status === "마감 임박" ? (
                            <span className="text-amber-400 font-bold bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/30 text-xs sm:text-sm">마감 임박 ({sp.count})</span>
                          ) : (
                            <span className="text-emerald-400 font-bold bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30 text-xs sm:text-sm">예약 가능 ({sp.count})</span>
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
                            <span className="text-slate-500 font-bold">슬롯 없음</span>
                          )}
                        </td>
                        <td className="p-4.5 sm:p-5.5 text-center">
                          <button
                            onClick={() => handleOpenReservation(sp)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs font-black transition-all cursor-pointer"
                          >
                            {sp.status === "매진" ? "대기 신청" : "예약하기"}
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
                  <span>Oxford-style Humanities K-Pop Camp</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 tracking-tight leading-tight">
                  생각의 깊이가 만드는 독창적인 K-Pop 창작
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl">
                  이 캠프는 <strong className="text-neon-cyan font-black">Oxford-style 인문학 기반 K-pop Creator Camp</strong>입니다. <br className="hidden sm:inline" />
                  인문학이 생각의 깊이를 만들고, 그 생각이 K-pop 창작으로 표현되며, AI 기술이 창작의 문턱을 한껏 낮춥니다.
                </p>
              </div>

              {/* 일과 흐름 - 한 번에 (Connected Horizontal Chevron Flow) */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-neon-pink" />
                  일과 흐름 — 한 번에
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
                        인문학 영어 가사 작사
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        옥스퍼드 스타일의 인문학 클래스 토론을 통해 깊은 성찰을 거치고, 자신만의 스토리를 녹여낸 영어 가사를 손수 집필합니다.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>Humanities & Lyrics</span>
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
                        AI 창작곡 작곡 & 융합
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        완성된 깊이 있는 스토리에 최첨단 생성 AI 작곡 인큐베이팅 도구를 접목해, 나만의 오리지널 멜로디와 사운드 트랙을 완벽하게 빌드합니다.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>AI Songwriting</span>
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
                        무대 실연 & 최종 쇼케이스
                      </h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        직접 쓰고 만든 창작곡 보컬 녹음과 메이저 기획사 K-Pop 안무 트레이닝 및 커버 퍼포먼스를 융합하여 웅장한 파이널 데뷔 무대를 완성합니다.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-neon-cyan uppercase">
                      <span>Grand Showcase</span>
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
                  Self Discovery 4 Questions
                </h3>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  이 캠프의 중심 질문 — 캠프 기간 내내 성찰하며 답을 내리는 핵심 물음들
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                
                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">Question 01</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">내가 어떤 음악을 좋아하는가?</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">Question 02</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">어떤 사운드와 스타일에 끌리는가?</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">Question 03</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">내가 잘하는 것은 무엇인가?</p>
                  </div>
                </div>

                <div className="p-6.5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#161a24] to-slate-950 border border-[#CFA764]/25 hover:border-[#CFA764]/65 hover:scale-[1.01] hover:glow-pink transition-all flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl text-neon-pink">❓</span>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-neon-pink uppercase tracking-widest">Question 04</span>
                    <p className="text-lg sm:text-xl font-black text-[#E6C897] tracking-tight">내가 표현하고 싶은 감정은 무엇인가?</p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. 8 Sessions — 주제 로드맵 & Creative Transfer */}
            <div className="glassmorphism-card rounded-3xl p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🗣</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">8 Sessions — 주제 로드맵</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  인문학적 성찰과 오디션 기획을 연계하는 차세대 KISAS 훈련 로드맵 코스입니다.
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
                      <h4 className="text-base sm:text-lg font-black text-slate-200">1. Identity Seminar</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "Who am I when no one is watching?"
                    </span>
                  </div>

                  {/* Session 2 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 02</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">2. Voice & Authenticity</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "What makes my voice authentic in an AI era?"
                    </span>
                  </div>

                  {/* Session 3 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 03</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">3. Self-love & Boundaries</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "Where is the line between self-love and selfishness?"
                    </span>
                  </div>

                  {/* Session 4 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 04</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">4. Connection Seminar</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "Why do we need each other?"
                    </span>
                  </div>

                </div>

                {/* Right Side: Sessions 5~8 */}
                <div className="space-y-4">
                  
                  {/* Session 5 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 05</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200 text-shadow-sm">5. Values & Legacy + Songwriting</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "What will I stand for?"
                    </span>
                  </div>

                  {/* Session 6 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 06</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">6. Ethics & Empathy Debate</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      "Can you respect someone without agreeing?"
                    </span>
                  </div>

                  {/* Session 7 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 07</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">7. Writing Workshop</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      Essay Final & Lyric Commentary
                    </span>
                  </div>

                  {/* Session 8 */}
                  <div className="p-5.5 rounded-xl bg-slate-950/60 border border-slate-850 flex items-start justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] transition-all">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs sm:text-sm font-black text-neon-pink">Session 08</span>
                      <h4 className="text-base sm:text-lg font-black text-slate-200">8. Pitch Video Workshop</h4>
                    </div>
                    <span className="text-sm sm:text-base font-black text-slate-400 italic text-right max-w-[60%]">
                      60-second Message Video
                    </span>
                  </div>

                </div>

              </div>

              {/* Creative Transfer: Story -> Lyric */}
              <div className="space-y-5 pt-6 border-t border-slate-800">
                <h4 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
                  <span>💬</span>
                  Creative Transfer: Story ➔ Lyric
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Card 1: Hook */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">HOOK</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      핵심 질문의 <br />가장 강한 한 줄
                    </p>
                  </div>

                  {/* Card 2: Verse */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">VERSE</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      텍스트 이미지를 <br />구체적 장면으로
                    </p>
                  </div>

                  {/* Card 3: Bridge */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">BRIDGE</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      전환 문장으로 <br />결단·희망 표출
                    </p>
                  </div>

                  {/* Card 4: Tag */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-neon-pink/15 flex flex-col justify-between hover:border-neon-pink/40 hover:glow-pink transition-all">
                    <span className="text-sm sm:text-base font-black text-neon-pink tracking-widest uppercase">TAG</span>
                    <p className="text-base sm:text-lg font-black text-slate-200 mt-4 leading-snug">
                      관객에게 <br />던지는 궁극적 질문
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
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-100">분반 운영 & 강사진 안내</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-bold">
                  참가자 개개인의 영어 수준, 음악적 배경을 입체적으로 진단해 맞춤형 멘토 배치를 실현합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 수준별 분반 */}
                <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-7.5 space-y-6">
                  <h4 className="text-lg sm:text-xl font-black text-[#E6C897] border-b border-slate-800 pb-3">
                    수준별 분반 운영
                  </h4>
                  <ul className="space-y-4.5 text-sm sm:text-base text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">모집 및 교육 대상:</strong> 중1 ~ 고1 글로벌 예비 아티스트 지망생</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">소수정예 클래스 편성:</strong> 최종 12개 분반 구성 (반당 철저한 5명 소수인원 밀착 케어)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">과학적 매칭:</strong> 강사진이 직접 영어 수준, 음악 경험, 장르별 흥미도를 분석해 맞춤 분반 배정</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-slate-100">글로벌 학습 보조:</strong> 각 분반별 음악 창작 수준에 맞는 프레임 문장 및 Sentence Starters 가이드 제공</span>
                    </li>
                  </ul>
                </div>

                {/* 교사 배치 */}
                <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-7.5 space-y-6">
                  <h4 className="text-lg sm:text-xl font-black text-[#E6C897] border-b border-slate-800 pb-3">
                    디렉터 및 교사 매칭 배치
                  </h4>
                  <ul className="space-y-4.5 text-sm sm:text-base text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">Native Teachers:</strong> Oxford-style 영어 인문 고전 독해 및 작사 원어 직강 에디션 운영</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">Bilingual Teachers:</strong> 이중언어(영어/한국어/일본어) 기반 음악 수업 공동 운영 및 빈틈없는 학습 코칭 피드백</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-neon-pink mt-1">•</span>
                      <span><strong className="text-[#E6C897]">TA (Teaching Assistant):</strong> 1:1 매칭으로 실시간 작성한 에세이 및 일일 과제 저널 개별 첨삭 멘토링 케어</span>
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
                    K-pop Creative — 8 Subjects
                  </h3>
                </div>
                <p className="text-base text-neon-cyan font-bold tracking-wide">
                  Find Your Sound — 옥스퍼드 인문 기반 나만의 고유한 사운드를 찾는 8대 창작 교과과정
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* Subject 1 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 01</span>
                    <h4 className="text-lg font-black text-slate-200">K-pop Master Class</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    김형석 메인 프로듀서의 히트곡 구조 및 멜로디 테크닉 작곡 패턴 완전 정밀 해부
                  </p>
                </div>

                {/* Subject 2 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 02</span>
                    <h4 className="text-lg font-black text-slate-200">Artist Foundation</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    서로 다른 개성의 팀 매칭 구성, 보컬/댄스 기획사 오디션 코치 포지션 빌드업
                  </p>
                </div>

                {/* Subject 3 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 03</span>
                    <h4 className="text-lg font-black text-slate-200">AI Song Building</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    AI 음악 작곡 프롬프트 엔지니어링 및 취향 기반 사운드 융합 기술 훈련
                  </p>
                </div>

                {/* Subject 4 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 04</span>
                    <h4 className="text-lg font-black text-slate-200">Choreography & Cover</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    기획사 수석 댄서들의 밀착 지도를 통한 고화질 K-Pop 안무 트레이닝 및 퍼포먼스
                  </p>
                </div>

                {/* Subject 5 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 05</span>
                    <h4 className="text-lg font-black text-slate-200">Production Studio</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    레코딩 전문 스튜디오 부스에서 개인 창작곡 보컬 트랙 녹음 및 프로페셔널 마스터링
                  </p>
                </div>

                {/* Subject 6 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 06</span>
                    <h4 className="text-lg font-black text-slate-200">Stage Performance</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    웅장한 대공연장 기준 최적의 무대 동선 및 관객을 매료하는 표현력 훈련
                  </p>
                </div>

                {/* Subject 7 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 07</span>
                    <h4 className="text-lg font-black text-slate-200">Visual & Guest Session</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    창작 곡 비주얼 머천다이징 디자인 및 메이저 기획사 연예 전문가 초빙 강연
                  </p>
                </div>

                {/* Subject 8 */}
                <div className="p-6.5 rounded-2xl bg-[#11141e]/70 border border-slate-800 hover:border-neon-pink/40 hover:glow-pink transition-all flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black text-neon-pink uppercase tracking-widest">SUBJECT 08</span>
                    <h4 className="text-lg font-black text-slate-200">Final Showcase</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-semibold">
                    창작곡 라이브 프레젠테이션, 댄스 커버 퍼포먼스 및 웅장한 Grand Finale 피날레
                  </p>
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
                    <h3 className="text-lg sm:text-xl font-black text-slate-100">글로벌 멀티미디어 업로더 (연습 영상 제출)</h3>
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
                      <p className="text-sm sm:text-base font-black text-slate-200">[ 📂 드래그 앤 드롭 또는 파일 선택 ]</p>
                      <p className="text-xs sm:text-sm text-slate-400 font-bold">지원 포맷: MP4, MOV, AVI (최대 2GB 글로벌 고속 업로드 지원)</p>
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
                        <h4 className="text-sm sm:text-base font-black text-neon-pink uppercase tracking-widest glow-text-pink">🤖 KISAS AI 분석 결과 및 VOD 맞춤 추천</h4>
                      </div>
                      <span className="text-xs sm:text-sm bg-neon-pink/20 text-neon-pink px-2.5 py-1 rounded-full border border-neon-pink/30 font-mono">HIGH-ACCURACY REPORT</span>
                    </div>

                    <blockquote className="text-sm sm:text-base leading-relaxed text-slate-200 border-l-2 border-neon-pink pl-4">
                      💡 <strong>AI 진단 결과:</strong> 현재 안무 영상 분석 결과, <strong>'표현력'</strong>과 <strong>'시선 처리'</strong>는 매우 우수하나 1분 15초 구간의 <strong>'골반 각도 및 바운스 제어'</strong>에서 중심축이 흔들림이 감지되었습니다.
                    </blockquote>

                    {/* VOD Recommendation */}
                    <div className="space-y-4 pt-2">
                      <h5 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-widest">📺 당신을 위한 AI 맞춤형 추천 트레이닝 콘텐츠</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl flex flex-col justify-between gap-4 hover:border-neon-pink/30 hover:scale-[1.01] hover:glow-pink transition-all group">
                          <div className="space-y-1.5">
                            <span className="text-xs bg-slate-900 border border-slate-800 text-neon-pink font-extrabold px-2 py-0.5 rounded">VOD 1</span>
                            <p className="text-sm sm:text-base font-extrabold text-slate-200 group-hover:text-neon-pink transition-colors">🕺 골반 코어 밸런스를 잡는 10가지 하체 루틴</p>
                            <p className="text-xs sm:text-sm text-slate-500">대형기획사 특강 (25분)</p>
                          </div>
                          <button
                            onClick={() => setActiveVOD({
                              title: "골반 코어 밸런스를 잡는 10가지 하체 루틴",
                              desc: "대형 기획사 댄스 트레이너가 직접 알려주는, 댄스 중심축 안정화 및 하체 코어 단련 루틴 10가지.",
                              videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
                            })}
                            className="w-full py-2.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                          >
                            <Play className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> 수강하기
                          </button>
                        </div>

                        <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl flex flex-col justify-between gap-4 hover:border-neon-purple/30 hover:scale-[1.01] hover:glow-purple transition-all group">
                          <div className="space-y-1.5">
                            <span className="text-xs bg-slate-900 border border-slate-800 text-neon-purple font-extrabold px-2 py-0.5 rounded">VOD 2</span>
                            <p className="text-sm sm:text-base font-extrabold text-slate-200 group-hover:text-neon-purple transition-colors">🎵 타이틀곡 2절 브레이크 파트 다운 바운스 완벽 가이드</p>
                            <p className="text-xs sm:text-sm text-slate-500">KISAS 수석 안무팀 (40분)</p>
                          </div>
                          <button
                            onClick={() => setActiveVOD({
                              title: "타이틀곡 2절 브레이크 파트 다운 바운스 완벽 가이드",
                              desc: "메인 타이틀곡의 브레이크 댄스 파트 다운 바운스를 축이 흔들리지 않게 교정하는 정밀 테크닉 VOD.",
                              videoUrl: "https://www.w3schools.com/html/movie.mp4"
                            })}
                            className="w-full py-2.5 rounded-lg bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                          >
                            <Play className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> 수강하기
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
                  <h4 className="text-sm sm:text-base font-black text-slate-400 uppercase tracking-widest">💬 코치진 타임스탬프 피드백</h4>
                  
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
                          <span className="text-xs sm:text-sm font-black text-slate-300">🗣 홍길동 댄스 마스터</span>
                          <p className="text-sm text-slate-400 truncate mt-1">손끝 에너지가 흐려져요.</p>
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
                            <text x="120" y="32" fill="#CFA764" fontSize="10" fontWeight="bold">손끝 시선 일치</text>
                          </svg>
                          <span>[ Miya.mp4 00:42 안무 드로잉선 ]</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                          시선을 손가락 끝으로 고정하여 손 에너지가 연장되도록 거울 고정 훈련을 수행하십시오.
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
                          <span className="text-xs sm:text-sm font-black text-slate-300">🗣 지니 보컬 디렉터</span>
                          <p className="text-sm text-slate-400 truncate mt-1">고음 턱 관절 압박 감지.</p>
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
                          <span className="text-xs absolute top-2 font-bold">고음 성대 압박 피크 스펙트럼</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                          연구개를 크게 열고 턱 관절 하단 힘을 완전히 소거하는 수직 확장 발성을 훈련하십시오.
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
                  <h3 className="text-lg sm:text-xl font-black text-slate-100">클래스 독점 폐쇄형 피드 (Community Feed)</h3>
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
                        "{f.content}"
                      </p>

                      <div className="flex items-center gap-5 pt-3 border-t border-slate-850/50">
                        <button 
                          onClick={() => handleLike(f.id)}
                          className={`flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            f.liked ? 'text-neon-pink scale-110' : 'text-slate-400 hover:text-neon-pink'
                          }`}
                        >
                          <Heart className={`w-4.5 h-4.5 ${f.liked ? 'fill-neon-pink' : ''}`} /> 응원 {f.likes}
                        </button>
                        <button 
                          onClick={() => toggleCommentsView(f.id)}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-neon-purple font-black uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-4.5 h-4.5" /> 댓글 {f.comments.length}
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
                                <p className="text-slate-300 text-xs sm:text-sm font-medium">{c.text}</p>
                              </div>
                            ))}
                          </div>

                          <form onSubmit={(e) => handleAddComment(f.id, e)} className="flex gap-3">
                            <input
                              type="text"
                              placeholder="동기에게 응원과 피드백 댓글을 남기세요..."
                              value={f.newCommentText}
                              onChange={(e) => handleCommentTextChange(f.id, e.target.value)}
                              className="flex-1 bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-pink transition-all"
                            />
                            <button
                              type="submit"
                              className="px-4.5 py-2.5 rounded-xl bg-[#181d29] hover:bg-[#11141e] text-neon-pink border border-neon-pink/35 hover:border-neon-pink/75 hover:glow-pink text-xs sm:text-sm font-black transition-all cursor-pointer hover:scale-[1.02]"
                            >
                              등록
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
                    <h4 className="text-xs sm:text-sm font-black text-slate-200">정기 글로벌 라이브 멘토링</h4>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p className="font-black text-slate-200 leading-relaxed text-sm sm:text-base">
                    "메이저 기획사 오디션 합격을 위한 비공개 Q&A 및 실시간 모니터링"
                  </p>
                  
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
                    <div className="flex justify-between border-b border-slate-850/50 pb-1.5">
                      <span className="text-slate-500 font-bold">호스트</span>
                      <strong className="text-slate-300 font-black">KISAS 김철수 수석디렉터</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">일정</span>
                      <strong className="text-slate-300 font-black">5월 28일 오후 8시 (KST)</strong>
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
                  {liveSubscribed ? "알림 신청 완료 (해제)" : "라이브 알림 신청하기"}
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
              <h2 className="text-xl font-bold text-slate-900 tracking-wide uppercase">KISAS x nextLMS AI K-Pop Camp</h2>
              <h3 className="text-base font-black text-slate-900">공식 아티스트 정밀 평가 성장 포트폴리오 및 오디션 제출용 프로필</h3>
              <p className="text-xs text-slate-600">발급번호: KISAS-2026-0521M • 발급일자: 2026. 05. 21 • 훈련생명: Miya (일본)</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Radar charts and lists */}
              <div className="print-card lg:col-span-1 glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-6">
                <div className="no-print flex items-center gap-2.5 border-b border-slate-800 pb-4">
                  <Award className="w-5.5 h-5.5 text-neon-cyan" />
                  <h3 className="text-base sm:text-lg font-black text-slate-100">아티스트 성장 역량 리포트</h3>
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
                    <text x="100" y="18" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle" className="print-text">보컬 (Vocal)</text>
                    <text x="180" y="78" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="start" className="print-text">댄스 (Dance)</text>
                    <text x="152" y="174" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="start" className="print-text">비주얼 (Visual)</text>
                    <text x="44" y="174" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end" className="print-text">스타성 (Attitude)</text>
                    <text x="20" y="78" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="end" className="print-text">체력 (Fitness)</text>
                  </svg>
                </div>

                <div className="space-y-3 text-sm sm:text-base pt-2">
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">🎙 보컬 (Vocal)</span>
                    <span className="font-extrabold text-slate-200 print-text">78 / 100 <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded ml-1">+15</span></span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">💃 댄스 (Dance)</span>
                    <span className="font-extrabold text-slate-200 print-text">92 / 100 <span className="text-[10px] text-neon-pink font-bold bg-neon-pink/10 px-2 py-0.5 rounded ml-1">최고</span></span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">📸 비주얼 (Visual)</span>
                    <span className="font-extrabold text-slate-200 print-text">85 / 100</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/40">
                    <span className="text-slate-400 font-bold print-text">🌟 스타성 (Attitude)</span>
                    <span className="font-extrabold text-slate-200 print-text">88 / 100</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400 font-bold print-text">🏋 체력/코어 (Fitness)</span>
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
                    <h3 className="text-base sm:text-lg font-black text-slate-100">Before & After 성과 증명 비디오 플레이어</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center text-xs font-bold">
                    
                    <div className="bg-slate-950/60 border border-slate-850 rounded-xl overflow-hidden print-card transition-all hover:border-slate-700">
                      <div className="w-full h-40 sm:h-48 bg-[#0b0d12]/90 flex flex-col items-center justify-center text-slate-500 relative border-b border-slate-850/80 group">
                        <div className="w-12 h-12 rounded-full bg-slate-950/80 border border-slate-800 flex items-center justify-center absolute group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-slate-500 opacity-60 ml-0.5" />
                        </div>
                        <span className="text-[9px] bg-slate-950/90 text-slate-400 border border-slate-800 px-2 py-0.5 rounded absolute bottom-2.5 right-2.5 font-mono">01:30</span>
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[9px] text-slate-400">Day 1 최초 입소 보컬 테스트</div>
                      </div>
                      <p className="p-3 text-slate-400 text-sm font-black print-text">DAY 1: 최초 평가 영상</p>
                    </div>

                    <div className="bg-slate-950/60 border border-[#CFA764]/20 hover:border-neon-pink/50 rounded-xl overflow-hidden print-card hover:scale-[1.01] hover:glow-pink transition-all">
                      <div className="w-full h-40 sm:h-48 bg-[#0b0d12]/90 flex flex-col items-center justify-center text-slate-500 relative border-b border-slate-850/80 group">
                        <div className="w-12 h-12 rounded-full bg-neon-pink/15 border border-neon-pink/45 flex items-center justify-center absolute group-hover:scale-110 transition-transform glow-pink">
                          <Play className="w-6 h-6 text-neon-pink ml-0.5 animate-pulse-ring" />
                        </div>
                        <span className="text-[9px] bg-slate-950/90 text-neon-cyan border border-slate-800 px-2 py-0.5 rounded absolute bottom-2.5 right-2.5 font-mono">01:45</span>
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-neon-pink/15 border border-neon-pink/25 text-[9px] text-neon-pink">Day 14 파이널 무대 수료 영상</div>
                      </div>
                      <p className="p-3 text-neon-pink text-sm font-black print-text">DAY 14: 파이널 무대 수료</p>
                    </div>

                  </div>
                </div>

                {/* Trainer Opinion (Screen and Print) */}
                <div className="print-card glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-4">
                  <div className="no-print flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Star className="w-5.5 h-5.5 text-neon-purple fill-neon-purple/20" />
                    <h3 className="text-base sm:text-lg font-black text-slate-100">🗣 담당 디렉터 코치진 최종 의견 리포트</h3>
                  </div>
                  
                  <div className="print-only hidden space-y-2 border-b border-slate-300 pb-3 text-slate-900">
                    <h4 className="text-xs font-bold uppercase">🗣 담당 디렉터 코치진 최종 의견</h4>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 print-text leading-relaxed font-semibold">
                    "연습생 Miya는 지난 14일간의 집중 KISAS 오프라인 트레이닝 캠프 수료 및 일본 귀국 후 LMS를 이용한 사후 1:1 트레이닝에 적극 참여하였습니다. 특히 보컬 파트 연구개 상하 확보를 통한 F5~G5 구간 성대 긴장도 제어가 비약적으로 발전했으며, 댄스 파트는 현재 K-Pop 메이저 데뷔에 적합한 탄탄한 하체 밸런스를 입증하여 오디션 합격 가능성이 매우 높음을 강력히 보증합니다."
                  </p>
                  
                  <div className="text-right text-xs text-slate-500 font-bold mt-3 print-text">
                    — KISAS 글로벌 아티스트 심사위원 및 수석 코치진 일동
                  </div>
                </div>

                {/* Certificate & Issuance button */}
                <div className="no-print glassmorphism-card rounded-3xl p-7.5 sm:p-8 space-y-6">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/5 via-slate-950 to-amber-500/5 border border-amber-500/20 text-center space-y-3">
                    <Award className="w-8 h-8 text-amber-400 mx-auto animate-float" />
                    <span className="inline-block text-[10px] sm:text-xs bg-amber-500/20 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      🔒 블록체인 위변조 방지 인증 수료증 발급 완료
                    </span>
                    <p className="text-sm sm:text-base font-black text-slate-200">
                      KISAS 공식 K-Pop 인큐베이팅 캠프 디지털 수료증
                    </p>
                  </div>

                  {downloadProgress !== null ? (
                    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col items-center justify-center gap-3">
                      <span className="text-sm font-black text-neon-pink font-mono">
                        기획사 제출용 포트폴리오 빌드 중... ({downloadProgress}%)
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
                      [ 📄 기획사 제출용 디지털 프로필 PDF 다운로드 ]
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER (NO-PRINT) --- */}
      <footer className="no-print border-t border-slate-850 bg-slate-950/40 py-5 text-center text-[10px] text-slate-500">
        <p className="max-w-md mx-auto leading-normal">
          © 2026 KISAS x nextLMS. World's 1st AI K-Pop Camp Hybrid LMS.<br />
          본 포털은 단기 캠프 종료 후 글로벌 지망생들의 1:1 트레이닝과 성장을 사후 관리하는 특화 패키지 솔루션 데모입니다.
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
              <span className="text-[9px] text-neon-pink font-extrabold tracking-widest uppercase">TRAINING DESK</span>
              <h4 className="text-sm font-bold text-slate-100">{reservationModal.name} 세션 매칭</h4>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">원하는 예약 시간대</span>
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
              확인 및 일정 플래닝 완료
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
