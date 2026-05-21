export type Lang = "KOR" | "ENG" | "JPN" | "CHN" | "VIE" | "IDN";

export const translations: Record<string, Record<Lang, string>> = {
  brandTitle: {
    KOR: "KISAS — Find Your Sound",
    ENG: "KISAS — Find Your Sound",
    JPN: "KISAS — Find Your Sound",
    CHN: "KISAS — Find Your Sound",
    VIE: "KISAS — Find Your Sound",
    IDN: "KISAS — Find Your Sound"
  },
  aiKpopCamp: {
    KOR: "AI K-Pop 캠프",
    ENG: "AI K-Pop Camp",
    JPN: "AI K-Pop キャンプ",
    CHN: "AI K-Pop 训练营",
    VIE: "Trại K-Pop AI",
    IDN: "Kamp K-Pop AI"
  },
  headerTitle: {
    KOR: "세계 최초 AI 기반 K-pop Creator Camp 글로벌 K-Pop 인재 인큐베이팅 플랫폼",
    ENG: "World's First AI-Based K-pop Creator Camp Global K-Pop Talent Incubating Platform",
    JPN: "世界初AI基盤K-pop Creator Camp グローバルK-Pop人材インキュベーティングプラットフォーム",
    CHN: "世界首创基于AI的K-pop Creator Camp 全球K-Pop人才孵化平台",
    VIE: "Nền tảng Ươm mầm Tài năng K-Pop Toàn cầu Trại sáng tạo K-Pop dựa trên AI đầu tiên trên thế giới",
    IDN: "Platform Inkubasi Talenta K-Pop Global Kamp Kreator K-Pop Berbasis AI Pertama di Dunia"
  },
  statusNetwork: {
    KOR: "캠프 연계 온라인 사후 학습망 가동 중",
    ENG: "Camp-Linked Online Post-Learning Network Active",
    JPN: "キャンプ連携オンライン事後学習ネットワーク稼働中",
    CHN: "训练营关联在线后续学习网络运行中",
    VIE: "Mạng lưới tự học trực tuyến liên kết trại đang hoạt động",
    IDN: "Jaringan Pembelajaran Mandiri Online Terkoneksi Kamp Aktif"
  },
  traineeName: {
    KOR: "연습생 Miya",
    ENG: "Trainee Miya",
    JPN: "研修生 Miya",
    CHN: "练习生 Miya",
    VIE: "Học viên Miya",
    IDN: "Trainee Miya"
  },
  traineeClass: {
    KOR: "Week 2 수료반",
    ENG: "Week 2 Graduate Class",
    JPN: "Week 2 修了クラス",
    CHN: "Week 2 结业班",
    VIE: "Lớp tốt nghiệp Tuần 2",
    IDN: "Kelas Kelulusan Minggu 2"
  },
  traineeTrack: {
    KOR: "국적: 일본 (Japan) • KISAS 글로벌 데뷔 트랙 코스 이수 중",
    ENG: "Nationality: Japan • KISAS Global Debut Track Course in Progress",
    JPN: "国籍：日本 (Japan) • KISASグローバルデ비ュートラックコース履修中",
    CHN: "国籍：日本 (Japan) • KISAS全球出道特训课程进行中",
    VIE: "Quốc tịch: Nhật Bản (Japan) • Đang học Khóa đào tạo Ra mắt Toàn cầu KISAS",
    IDN: "Kewarganegaraan: Jepang (Japan) • Sedang Menjalani Kelas Jalur Debut Global KISAS"
  },
  hudHours: {
    KOR: "누적 훈련 시간",
    ENG: "Cumulative Hours",
    JPN: "累計トレーニング時間",
    CHN: "累计训练时间",
    VIE: "Số giờ tích lũy",
    IDN: "Akumulasi Jam Latihan"
  },
  hudHoursValue: {
    KOR: "42.5 시간",
    ENG: "42.5 Hours",
    JPN: "42.5 時間",
    CHN: "42.5 小时",
    VIE: "42.5 giờ",
    IDN: "42.5 Jam"
  },
  hudHomework: {
    KOR: "오늘 과제 달성",
    ENG: "Today's Task Rate",
    JPN: "本日の課題達成率",
    CHN: "今日任务达成",
    VIE: "Hoàn thành hôm nay",
    IDN: "Pencapaian Hari Ini"
  },
  hudAudition: {
    KOR: "캠프 참여기간",
    ENG: "Camp Duration",
    JPN: "キャンプ参加期間",
    CHN: "训练营参与期",
    VIE: "Thời gian tham gia trại",
    IDN: "Periode Partisipasi Kamp"
  },
  hudCampDay: {
    KOR: "3일차",
    ENG: "Day 3",
    JPN: "3日目",
    CHN: "第3天",
    VIE: "Ngày 3",
    IDN: "Hari Ke-3"
  },
  tabPlanner: {
    KOR: "나의 훈련 플래너",
    ENG: "My Training Planner",
    JPN: "マ이트レーニングプランナー",
    CHN: "我的训练企划",
    VIE: "Kế hoạch huấn luyện",
    IDN: "Perencana Latihan Saya"
  },
  tabFeedback: {
    KOR: "AI 피드백 & VOD",
    ENG: "AI Feedback & VOD",
    JPN: "AIフィードバック & VOD",
    CHN: "AI反馈与视频课程",
    VIE: "Phản hồi AI & VOD",
    IDN: "Umpan Balik AI & VOD"
  },
  tabRoadmap: {
    KOR: "캠프 로드맵 & 분반",
    ENG: "Camp Roadmap & Classes",
    JPN: "キャンプロードマップ & クラス",
    CHN: "特训营路线图与分班",
    VIE: "Lộ trình & Phân lớp",
    IDN: "Peta Jalan Kamp & Kelas"
  },
  tabNetwork: {
    KOR: "글로벌 네트워킹",
    ENG: "Global Networking",
    JPN: "グローバルネットワーキング",
    CHN: "全球社群网络",
    VIE: "Mạng lưới toàn cầu",
    IDN: "Jejaring Global"
  },
  tabPortfolio: {
    KOR: "데뷔 포트폴리오",
    ENG: "Debut Portfolio",
    JPN: "デビューポートフォリオ",
    CHN: "出道作品集",
    VIE: "Hồ sơ nghệ sĩ ra mắt",
    IDN: "Portofolio Debut"
  },
  missionTitle: {
    KOR: "오늘의 데뷔 미션 코스 (Daily Homework)",
    ENG: "Today's Debut Mission Course (Daily Homework)",
    JPN: "本日のデビューミッションコース (Daily Homework)",
    CHN: "今日出道任务课程 (Daily Homework)",
    VIE: "Khóa học Nhiệm vụ Ra mắt Hôm nay (Bài tập hàng ngày)",
    IDN: "Kelas Misi Debut Hari Ini (Tugas Harian)"
  },
  missionDesc: {
    KOR: "체크 시 완료율이 실시간 반영됩니다",
    ENG: "Checking items updates progress in real-time",
    JPN: "チェックすると達成率이リアルタイムで反映されます",
    CHN: "勾选任务将实时更新完成进度",
    VIE: "Đánh dấu chọn sẽ cập nhật tỷ lệ hoàn thành theo thời gian thực",
    IDN: "Mencentang tugas akan memperbarui kemajuan secara real-time"
  },
  weeklyMotivationTitle: {
    KOR: "Weekly Trainer Mentoring",
    ENG: "Weekly Trainer Mentoring",
    JPN: "Weekly Trainer Mentoring",
    CHN: "Weekly Trainer Mentoring",
    VIE: "Weekly Trainer Mentoring",
    IDN: "Weekly Trainer Mentoring"
  },
  weeklyMotivationHeader: {
    KOR: "디렉터의 주간 격려 코멘트",
    ENG: "Director's Weekly Encouragement",
    JPN: "ディレクターの週間激励コメント",
    CHN: "总监每周鼓励评语",
    VIE: "Nhận xét khích lệ hàng tuần của Giám đốc",
    IDN: "Komentar Penyemangat Mingguan Direktur"
  },
  weeklyMotivationComment: {
    KOR: `"Miya, 지난 보컬 분석에서 비강 쪽 호흡 압박이 높았는데, VOD 코스를 수강하며 이번 주 업로드 과제에서 턱 근육 긴장을 푸는 노력이 훌륭히 돋보였어! 댄스 코어도 조금만 더 끌어올리자!"`,
    ENG: `"Miya, although vocal pressure near the nasal cavity was high in last week's analysis, your effort in releasing jaw tension in this week's uploaded assignment through VOD study was outstanding! Let's work on your dance core a bit more!"`,
    JPN: `"Miya、前回のボーカル分析で鼻腔側の呼吸圧が高かったのですが、VODコースを受講し、今週의アップロード課題で顎の筋肉の緊張をほぐす努力が素晴らしく見えました！ダンスの体幹ももう少し引き上げましょう！"`,
    CHN: `"Miya，在上次声乐分析中，你的鼻腔呼吸压力偏高。但通过学习视频课程，你在本周上传的作业中努力放松下巴肌肉的表现非常出色！让我们把舞蹈核心力量也再提升一点！"`,
    VIE: `"Miya, trong phân tích thanh nhạc trước, áp lực thở phía khoang mũi của em hơi cao, nhưng qua việc học VOD, nỗ lực thả lỏng cơ hàm trong bài tập tải lên tuần này đã nổi bật rất tuyệt vời! Hãy cố gắng đẩy cao thể lực cốt lõi vũ đạo thêm một chút nhé!"`,
    IDN: `"Miya, meskipun tekanan napas di sekitar rongga hidungmu cukup tinggi pada analisis vokal lalu, usahamu merilekskan otot rahang pada tugas minggu ini lewat belajar VOD sangat luar biasa! Mari tingkatkan kekuatan inti tarianmu sedikit lagi!"`
  },
  weeklyMotivationAuthor: {
    KOR: "KISAS 수석 보컬 디렉터 지니 (Jiny)",
    ENG: "Genie (Jiny), KISAS Chief Vocal Director",
    JPN: "KISAS 首席ボーカルディレクター ジニー (Jiny)",
    CHN: "KISAS 首席声乐总监 吉妮 (Jiny)",
    VIE: "Giám đốc Thanh nhạc trưởng KISAS Jiny",
    IDN: "Genie (Jiny), Direktur Vokal Utama KISAS"
  },
  timelineDance: {
    KOR: "🕺 K-Pop 댄스 타이틀 안무 클래스 (A 스튜디오)",
    ENG: "🕺 K-Pop Dance Title Choreography Class (Studio A)",
    JPN: "🕺 K-Popダンスタイトル振付クラス (スタジオA)",
    CHN: "🕺 K-Pop舞蹈主打歌编舞课 (A录影棚)",
    VIE: "🕺 Lớp vũ đạo bài hát chủ đề K-Pop (Phòng thu A)",
    IDN: "🕺 Kelas Koreografi Lagu Utama Tari K-Pop (Studio A)"
  },
  timelineVocal: {
    KOR: "🎤 보컬 개인 레슨 & 발성 교정 (C 룸)",
    ENG: "🎤 Vocal Private Lesson & Vocal Correction (Room C)",
    JPN: "🎤 ボーカル個人レッスン & 発声矯正 (ルームC)",
    CHN: "🎤 声乐个人私教与发声矫正 (C室)",
    VIE: "🎤 Lớp thanh nhạc cá nhân & Sửa phát âm (Phòng C)",
    IDN: "🎤 Les Vokal Privat & Koreksi Teknik Vokal (Ruang C)"
  },
  timelineAI: {
    KOR: "🤖 AI 보이스 스타일 분석 및 음역대 측정",
    ENG: "🤖 AI Voice Style Analysis & Vocal Range Measurement",
    JPN: "🤖 AIボイススタイル分析および音域測定",
    CHN: "🤖 AI声线风格分析与音域测定",
    VIE: "🤖 Phân tích phong cách giọng AI & Đo âm vực",
    IDN: "🤖 Analisis Gaya Suara AI & Pengukuran Rentang Vokal"
  },
  timelineCamera: {
    KOR: "📸 데뷔 프로필 개인 컷 촬영 (스튜디오 B)",
    ENG: "📸 Debut Profile Solo Shot Photo Shoot (Studio B)",
    JPN: "📸 デビュープロフィール個人カット撮影 (スタジオB)",
    CHN: "📸 出道个人形象照拍摄 (B摄影棚)",
    VIE: "📸 Chụp ảnh hồ sơ ra mắt cá nhân (Phòng chụp B)",
    IDN: "📸 Sesi Foto Profil Debut Solo (Studio B)"
  },
  timelineReservedPrefix: {
    KOR: "🔑 [자율 예약 확정]",
    ENG: "🔑 [Self-Reservation Confirmed]",
    JPN: "🔑 [自主予約確定]",
    CHN: "🔑 [自主预约确认]",
    VIE: "🔑 [Đã xác nhận đặt chỗ]",
    IDN: "🔑 [Konfirmasi Reservasi Mandiri]"
  },
  timelineReservedSuffix: {
    KOR: "전용 세션",
    ENG: "Private Session",
    JPN: "専用セッション",
    CHN: "专属时间段",
    VIE: "Phiên riêng tư",
    IDN: "Sesi Khusus"
  },
  reservationTitle: {
    KOR: "캠프 연계 자율 연습 공간 및 1:1 세션 매칭",
    ENG: "Camp-Linked Practice Spaces & 1:1 Matching Sessions",
    JPN: "キャンプ連携自主練習スペース & 1:1セッションマッチング",
    CHN: "特训营关联自主练习室与1:1专属课程预约",
    VIE: "Không gian tự luyện tập liên kết trại & Khớp phiên 1:1",
    IDN: "Ruang Latihan Terkoneksi Kamp & Pencocokan Sesi 1:1"
  },
  reservationDesc: {
    KOR: "(단기 오프라인 연계 실시간 잔여석 예약)",
    ENG: "(Real-Time Booking for Short-Term Offline Camp Slots)",
    JPN: "(短期オフライン連携リアルタイム残席予約)",
    CHN: "(短期线下联动实时余位预约)",
    VIE: "(Đặt chỗ theo thời gian thực liên kết trại ngoại tuyến ngắn hạn)",
    IDN: "(Reservasi Sisa Slot Real-Time untuk Kamp Luring Singkat)"
  },
  thSpace: {
    KOR: "연습 공간 / 멘토링 프로그램",
    ENG: "Practice Space / Mentoring Program",
    JPN: "練習スペース / メンタープログラム",
    CHN: "练习空间 / 导师项目",
    VIE: "Không gian luyện tập / Chương trình cố vấn",
    IDN: "Ruang Latihan / Program Mentoring"
  },
  thStatus: {
    KOR: "잔여 석 현황",
    ENG: "Available Seats",
    JPN: "残席状況",
    CHN: "余位情况",
    VIE: "Tình trạng chỗ trống",
    IDN: "Status Sisa Slot"
  },
  thSlots: {
    KOR: "예약 가능 타임슬롯",
    ENG: "Available Time Slots",
    JPN: "予約可能タイムスロット",
    CHN: "可预约时间段",
    VIE: "Khung giờ có thể đặt",
    IDN: "Slot Waktu yang Tersedia"
  },
  thAction: {
    KOR: "동작",
    ENG: "Action",
    JPN: "動作",
    CHN: "操作",
    VIE: "Thao tác",
    IDN: "Tindakan"
  },
  space1Name: {
    KOR: "댄스 연습실 (A룸)",
    ENG: "Dance Practice Room (Room A)",
    JPN: "ダンス練習室 (Aルーム)",
    CHN: "舞蹈练习室 (A室)",
    VIE: "Phòng tập nhảy (Phòng A)",
    IDN: "Ruang Latihan Tari (Ruang A)"
  },
  space2Name: {
    KOR: "보컬 트레이닝 전문 룸",
    ENG: "Vocal Training Professional Room",
    JPN: "ボーカルトレーニング専門ルーム",
    CHN: "声乐特训专业教室",
    VIE: "Phòng đào tạo thanh nhạc chuyên nghiệp",
    IDN: "Ruang Pelatihan Vokal Profesional"
  },
  space3Name: {
    KOR: "1:1 원포인트 기획사 멘토링",
    ENG: "1:1 One-Point Agency Mentoring",
    JPN: "1:1ワンポイント事務所メンターリング",
    CHN: "1:1娱乐经纪公司直通指导",
    VIE: "Cố vấn một điểm 1:1 từ Công ty giải trí",
    IDN: "Mentoring Agensi 1:1 Satu Poin"
  },
  statusSoldOut: {
    KOR: "매진 (대기)",
    ENG: "Sold Out (Waitlist)",
    JPN: "満席 (キャンセル待ち)",
    CHN: "已满 (排队)",
    VIE: "Đã hết (Chờ)",
    IDN: "Habis (Antre)"
  },
  statusClosing: {
    KOR: "마감 임박",
    ENG: "Almost Full",
    JPN: "残りわずか",
    CHN: "即将截止",
    VIE: "Sắp hết",
    IDN: "Hampir Penuh"
  },
  statusAvailable: {
    KOR: "예약 가능",
    ENG: "Available",
    JPN: "予約可能",
    CHN: "可预约",
    VIE: "Có thể đặt",
    IDN: "Tersedia"
  },
  noSlots: {
    KOR: "슬롯 없음",
    ENG: "No Slots Available",
    JPN: "スロットなし",
    CHN: "暂无时间段",
    VIE: "Không có khung giờ",
    IDN: "Tidak Ada Slot"
  },
  btnWaitlist: {
    KOR: "대기 신청",
    ENG: "Waitlist",
    JPN: "キャンセル待ち申請",
    CHN: "申请排队",
    VIE: "Đăng ký chờ",
    IDN: "Daftar Tunggu"
  },
  btnReserve: {
    KOR: "예약하기",
    ENG: "Book Now",
    JPN: "予約する",
    CHN: "立即预约",
    VIE: "Đặt chỗ",
    IDN: "Pesan Sekarang"
  },
  curriculumBadge: {
    KOR: "Oxford-style Humanities K-Pop Camp",
    ENG: "Oxford-style Humanities K-Pop Camp",
    JPN: "Oxford-style Humanities K-Pop Camp",
    CHN: "Oxford-style Humanities K-Pop Camp",
    VIE: "Oxford-style Humanities K-Pop Camp",
    IDN: "Oxford-style Humanities K-Pop Camp"
  },
  curriculumTitle: {
    KOR: "생각의 깊이가 만드는 독창적인 K-Pop 창작",
    ENG: "Unique K-Pop Creation Made by the Depth of Thought",
    JPN: "思考の深さが作り出す独創的なK-Pop創作",
    CHN: "由思想深度铸就的独创性K-Pop创制",
    VIE: "Sự sáng tạo K-Pop độc đáo được tạo nên từ chiều sâu suy nghĩ",
    IDN: "Kreasi K-Pop Unik yang Diciptakan dari Kedalaman Berpikir"
  },
  curriculumDesc: {
    KOR: "이 캠프는 Oxford-style 인문학 기반 K-pop Creator Camp입니다. 인문학이 생각의 깊이를 만들고, 그 생각이 K-pop 창작으로 표현되며, AI 기술이 창작의 문턱을 한껏 낮춥니다.",
    ENG: "This camp is an Oxford-style Humanities-based K-pop Creator Camp. Humanities create the depth of thought, that thought is expressed through K-pop creation, and AI technology significantly lowers the barrier to creation.",
    JPN: "このキャンプはOxford-styleの人文学に基づいたK-pop Creator Campです。人文学が思考の深さを作り出し、その思考がK-popの創作として表現され、AI技術が創作のハードルを大幅に下げます。",
    CHN: "本特训营是基于牛津大学人文学风格风格的K-pop创作营。人文学构筑思想深度，思想通过K-pop创作得以表达，而AI技术则将创作门槛大幅降低。",
    VIE: "Trại này là Trại sáng tạo K-pop dựa trên Nhân văn kiểu Oxford. Nhân văn tạo nên chiều sâu suy nghĩ, suy nghĩ đó được thể hiện qua sáng tạo K-pop, và công nghệ AI giúp giảm đáng kể rào cản sáng tạo.",
    IDN: "Kamp ini merupakan Kamp Kreator K-pop berbasis Humaniora gaya Oxford. Humaniora menciptakan kedalaman berpikir, pemikiran tersebut diekspresikan lewat kreasi K-pop, dan teknologi AI menurunkan hambatan berkreasi."
  },
  flowTitle: {
    KOR: "일과 흐름 — 한 번에",
    ENG: "Daily Flow — At a Glance",
    JPN: "一日の流れ — 一目でわかる",
    CHN: "日程流转 — 一览无遗",
    VIE: "Luồng công việc hàng ngày — Tóm tắt",
    IDN: "Alur Harian — Sekilas"
  },
  step1Title: {
    KOR: "인문학 영어 가사 작사",
    ENG: "Humanities English Songwriting",
    JPN: "人文学英語歌詞作詞",
    CHN: "人文学英文歌词撰写",
    VIE: "Viết lời bài hát tiếng Anh nhân văn",
    IDN: "Penulisan Lirik Bahasa Inggris Humaniora"
  },
  step1Desc: {
    KOR: "옥스퍼드 스타일의 인문학 클래스 토론을 통해 깊은 성찰을 거치고, 자신만의 스토리를 녹여낸 영어 가사를 손수 집필합니다.",
    ENG: "Through Oxford-style humanities class discussions, undergo deep reflection and write your own English lyrics melting with your personal stories.",
    JPN: "オックスフォードスタイルの人文学クラスの討論を通じて深い省察を経た後、自分だけのストーリーを溶け込ませた英語の歌詞を自ら執筆します。",
    CHN: "通过牛津风格的人文学堂研讨，在深切感悟与思索之后，亲手创作融入个人独特故事的英文歌词。",
    VIE: "Thông qua các cuộc thảo luận lớp học nhân văn kiểu Oxford, trải qua sự suy ngẫm sâu sắc và tự tay viết lời bài hát tiếng Anh lồng ghép câu chuyện của chính bạn.",
    IDN: "Melalui diskusi kelas humaniora gaya Oxford, lalui refleksi mendalam dan tulis lirik bahasa Inggris Anda sendiri yang memadukan kisah pribadi."
  },
  step1Sub: {
    KOR: "Humanities & Lyrics",
    ENG: "Humanities & Lyrics",
    JPN: "Humanities & Lyrics",
    CHN: "Humanities & Lyrics",
    VIE: "Humanities & Lyrics",
    IDN: "Humanities & Lyrics"
  },
  step2Title: {
    KOR: "AI 창작곡 작곡 & 융합",
    ENG: "AI Original Song Composition & Fusion",
    JPN: "AI創作曲作曲 & 融合",
    CHN: "AI原创曲作曲与融合",
    VIE: "Sáng tác & Dung hòa bài hát AI",
    IDN: "Komposisi & Fusi Lagu Orisinal AI"
  },
  step2Desc: {
    KOR: "완성된 깊이 있는 스토리에 최첨단 생성 AI 작곡 인큐베이팅 도구를 접목해, 나만의 오리지널 멜로디와 사운드 트랙을 완벽하게 빌드합니다.",
    ENG: "Integrate cutting-edge generative AI composition incubating tools into completed deep stories, perfectly building your own original melody and sound track.",
    JPN: "完成した深みのあるストーリーに最先端の生成AI作曲インキュベーティングツールを融合させ、自分だけのオリジナルメロディーとサウンドトラックを完璧に構築します。",
    CHN: "在饱含思想深度的故事框架中，接入前沿生成式AI作曲孵化工具，完美打造独一无二的专属主旋律与音乐伴奏轨。",
    VIE: "Tích hợp các công cụ ươm mầm sáng tác AI sáng tạo tiên tiến nhất vào những câu chuyện sâu sắc đã hoàn thành, xây dựng hoàn hảo giai điệu và bản nhạc gốc của riêng bạn.",
    IDN: "Integrasikan alat inkubasi komposisi AI generatif mutakhir ke dalam kisah mendalam yang telah selesai, membangun melodi dan trek suara orisinal Anda sendiri dengan sempurna."
  },
  step2Sub: {
    KOR: "AI Songwriting",
    ENG: "AI Songwriting",
    JPN: "AI Songwriting",
    CHN: "AI Songwriting",
    VIE: "AI Songwriting",
    IDN: "AI Songwriting"
  },
  step3Title: {
    KOR: "무대 실연 & 최종 쇼케이스",
    ENG: "Stage Performance & Final Showcase",
    JPN: "ステージ実演 & 最終ショーケース",
    CHN: "舞台实演与最终展示秀",
    VIE: "Biểu diễn sân khấu & Showcase cuối cùng",
    IDN: "Pertunjukan Panggung & Showcase Akhir"
  },
  step3Desc: {
    KOR: "직접 쓰고 만든 창작곡 보컬 녹음과 메이저 기획사 K-Pop 안무 트레이닝 및 커버 퍼포먼스를 융합하여 웅장한 파이널 데뷔 무대를 완성합니다.",
    ENG: "Fuse vocal recording of your self-written original song with major agency K-Pop choreography training and cover performance to complete a grand final debut stage.",
    JPN: "自ら書いて作った創作曲のボーカルレコーディングと、大手事務所のK-Popダンスレッスンおよびカバーパフォーマンスを融合させ、雄大なファイナルデビュー公演を完成させます。",
    CHN: "融合自创曲声乐录音、知名经纪公司K-Pop编舞练习及翻跳展示，共同呈献震撼华丽的终极出道处女秀。",
    VIE: "Hòa quyện bản ghi âm thanh nhạc bài hát gốc tự viết với khóa đào tạo vũ đạo K-Pop từ công ty lớn và phần trình diễn cover để hoàn thành sân khấu ra mắt hoành tráng cuối cùng.",
    IDN: "Padukan rekaman vokal lagu orisinal yang Anda tulis sendiri dengan pelatihan koreografi K-Pop agensi besar serta pertunjukan cover untuk menyelesaikan panggung debut akhir yang megah."
  },
  step3Sub: {
    KOR: "Grand Showcase",
    ENG: "Grand Showcase",
    JPN: "Grand Showcase",
    CHN: "Grand Showcase",
    VIE: "Grand Showcase",
    IDN: "Grand Showcase"
  },
  questionsTitle: {
    KOR: "Self Discovery 4 Questions",
    ENG: "Self Discovery 4 Questions",
    JPN: "Self Discovery 4 Questions",
    CHN: "Self Discovery 4 Questions",
    VIE: "Self Discovery 4 Questions",
    IDN: "Self Discovery 4 Questions"
  },
  questionsDesc: {
    KOR: "이 캠프의 중심 질문 — 캠프 기간 내내 성찰하며 답을 내리는 핵심 물음들",
    ENG: "Central questions of this camp — core inquiries to reflect on and answer throughout the camp",
    JPN: "このキャンプの中心的な問い — キャンプ期間を通じて省察し、答えを導き出す核心的な質問",
    CHN: "特训营的核心课题 — 贯穿整个活动期间，值得反复揣摩体悟并交出答卷的灵魂叩问",
    VIE: "Các câu hỏi trung tâm của trại này — những thắc mắc cốt lõi cần suy ngẫm và trả lời trong suốt thời gian diễn ra trại",
    IDN: "Pertanyaan sentral kamp ini — pertanyaan inti untuk direnungkan dan dijawab sepanjang kamp"
  },
  q1Title: {
    KOR: "Question 01",
    ENG: "Question 01",
    JPN: "Question 01",
    CHN: "Question 01",
    VIE: "Question 01",
    IDN: "Question 01"
  },
  q1Text: {
    KOR: "내가 어떤 음악을 좋아하는가?",
    ENG: "What kind of music do I like?",
    JPN: "私はどのような音楽が好きなのか？",
    CHN: "我究竟喜欢什么样的音乐？",
    VIE: "Tôi thích thể loại âm nhạc nào?",
    IDN: "Musik seperti apa yang saya sukai?"
  },
  q2Title: {
    KOR: "Question 02",
    ENG: "Question 02",
    JPN: "Question 02",
    CHN: "Question 02",
    VIE: "Question 02",
    IDN: "Question 02"
  },
  q2Text: {
    KOR: "어떤 사운드와 스타일에 끌리는가?",
    ENG: "What sounds and styles am I drawn to?",
    JPN: "どのようなサウンドやスタイルに惹かれるのか？",
    CHN: "我被什么样的声音与风格所吸引？",
    VIE: "Tôi bị thu hút bởi âm thanh và phong cách nào?",
    IDN: "Suara dan gaya seperti apa yang menarik perhatian saya?"
  },
  q3Title: {
    KOR: "Question 03",
    ENG: "Question 03",
    JPN: "Question 03",
    CHN: "Question 03",
    VIE: "Question 03",
    IDN: "Question 03"
  },
  q3Text: {
    KOR: "내가 잘하는 것은 무엇인가?",
    ENG: "What am I good at?",
    JPN: "私が得意なことは何なのか？",
    CHN: "我的特长与优势是什么？",
    VIE: "Tôi giỏi điều gì?",
    IDN: "Apa yang saya kuasai dengan baik?"
  },
  q4Title: {
    KOR: "Question 04",
    ENG: "Question 04",
    JPN: "Question 04",
    CHN: "Question 04",
    VIE: "Question 04",
    IDN: "Question 04"
  },
  q4Text: {
    KOR: "내가 표현하고 싶은 감정은 무엇인가?",
    ENG: "What emotions do I want to express?",
    JPN: "私が表現したい感情は何なのか？",
    CHN: "我想要抒发与传递的情感是什么？",
    VIE: "Tôi muốn thể hiện những cảm xúc nào?",
    IDN: "Emosi apa yang ingin saya ekspresikan?"
  },
  sessionsTitle: {
    KOR: "8 Sessions — 주제 로드맵",
    ENG: "8 Sessions — Topic Roadmap",
    JPN: "8 Sessions — テーマロードマップ",
    CHN: "8 Sessions — 主题路线图",
    VIE: "8 Sessions — Lộ trình chủ đề",
    IDN: "8 Sesi — Peta Jalan Tema"
  },
  sessionsDesc: {
    KOR: "인문학적 성찰과 오디션 기획을 연계하는 차세대 KISAS 훈련 로드맵 코스입니다.",
    ENG: "A next-generation KISAS training roadmap course connecting humanities reflection with audition planning.",
    JPN: "人文学的省察とオーディション企画を連携させる次世代のKISASトレーニングロードマップコースです。",
    CHN: "将人文学省察与选秀筹划有机结合的次世代KISAS培育规划课程。",
    VIE: "Khóa học lộ trình huấn luyện KISAS thế hệ tiếp theo liên kết sự suy ngẫm nhân văn với lập kế hoạch thử giọng.",
    IDN: "Kelas peta jalan latihan KISAS generasi berikutnya yang menghubungkan refleksi humaniora dengan perencanaan audisi."
  },
  session1Name: {
    KOR: "1. Identity Seminar",
    ENG: "1. Identity Seminar",
    JPN: "1. Identity Seminar",
    CHN: "1. Identity Seminar",
    VIE: "1. Identity Seminar",
    IDN: "1. Identity Seminar"
  },
  session1Quote: {
    KOR: '"아무도 보지 않을 때 나는 누구인가?"',
    ENG: '"Who am I when no one is watching?"',
    JPN: '"誰も見ていない時の私は誰なのか？"',
    CHN: '"在无人关注的时刻，真实的我是怎样的？"',
    VIE: '"Tôi là ai khi không có ai đang nhìn?"',
    IDN: '"Siapa diri saya saat tidak ada yang melihat?"'
  },
  session2Name: {
    KOR: "2. Voice & Authenticity",
    ENG: "2. Voice & Authenticity",
    JPN: "2. Voice & Authenticity",
    CHN: "2. Voice & Authenticity",
    VIE: "2. Voice & Authenticity",
    IDN: "2. Voice & Authenticity"
  },
  session2Quote: {
    KOR: '"인공지능 시대에 내 목소리를 진정성 있게 만드는 것은 무엇인가?"',
    ENG: '"What makes my voice authentic in an AI era?"',
    JPN: '"人工知能時代に私の声を真に価値あるものにするものは何か？"',
    CHN: '"在人工智能时代，是什么让我的歌声充满真实温度？"',
    VIE: '"Điều gì làm cho giọng hát của tôi chân thực trong kỷ nguyên AI?"',
    IDN: '"Apa yang membuat suara saya autentik di era AI?"'
  },
  session3Name: {
    KOR: "3. Self-love & Boundaries",
    ENG: "3. Self-love & Boundaries",
    JPN: "3. Self-love & Boundaries",
    CHN: "3. Self-love & Boundaries",
    VIE: "3. Self-love & Boundaries",
    IDN: "3. Self-love & Boundaries"
  },
  session3Quote: {
    KOR: '"자기 사랑과 이기심의 경계는 어디인가?"',
    ENG: '"Where is the line between self-love and selfishness?"',
    JPN: '"自己愛と利己心の境界はどこにあるのか？"',
    CHN: '"自爱与自私自利的界线究竟在哪里？"',
    VIE: '"Ranh giới giữa yêu bản thân và ích kỷ là gì?"',
    IDN: '"Di mana garis batas antara mencintai diri sendiri dan keegoisan?"'
  },
  session4Name: {
    KOR: "4. Connection Seminar",
    ENG: "4. Connection Seminar",
    JPN: "4. Connection Seminar",
    CHN: "4. Connection Seminar",
    VIE: "4. Connection Seminar",
    IDN: "4. Connection Seminar"
  },
  session4Quote: {
    KOR: '"왜 우리는 서로가 필요한가?"',
    ENG: '"Why do we need each other?"',
    JPN: '"なぜ私たちは互いを必要とするのか？"',
    CHN: '"我们为什么需要彼此的支持与依靠？"',
    VIE: '"Tại sao chúng ta cần có nhau?"',
    IDN: '"Mengapa kita saling membutuhkan?"'
  },
  session5Name: {
    KOR: "5. Values & Legacy + Songwriting",
    ENG: "5. Values & Legacy + Songwriting",
    JPN: "5. Values & Legacy + Songwriting",
    CHN: "5. Values & Legacy + Songwriting",
    VIE: "5. Values & Legacy + Songwriting",
    IDN: "5. Values & Legacy + Songwriting"
  },
  session5Quote: {
    KOR: '"나는 무엇을 위해 굳건히 설 것인가?"',
    ENG: '"What will I stand for?"',
    JPN: '"私は何のために確固たる信念を持つのか？"',
    CHN: '"我将为了什么样的信念与追求而奋斗立足？"',
    VIE: '"Tôi sẽ đại diện cho điều gì?"',
    IDN: '"Apa yang akan saya pertahankan?"'
  },
  session6Name: {
    KOR: "6. Ethics & Empathy Debate",
    ENG: "6. Ethics & Empathy Debate",
    JPN: "6. Ethics & Empathy Debate",
    CHN: "6. Ethics & Empathy Debate",
    VIE: "6. Ethics & Empathy Debate",
    IDN: "6. Ethics & Empathy Debate"
  },
  session6Quote: {
    KOR: '"동의하지 않으면서도 누군가를 존중할 수 있는가?"',
    ENG: '"Can you respect someone without agreeing?"',
    JPN: '"同意せずとも誰かを尊重することはできるか？"',
    CHN: '"在持有不同政见或观点时，我们能否依然尊重对方？"',
    VIE: '"Bạn có thể tôn trọng ai đó mà không cần đồng ý với họ không?"',
    IDN: '"Bisakah Anda menghormati seseorang tanpa menyetujuinya?"'
  },
  session7Name: {
    KOR: "7. Writing Workshop",
    ENG: "7. Writing Workshop",
    JPN: "7. Writing Workshop",
    CHN: "7. Writing Workshop",
    VIE: "7. Writing Workshop",
    IDN: "7. Writing Workshop"
  },
  session7Quote: {
    KOR: "에세이 파이널 & 가사 주석 클래스",
    ENG: "Essay Final & Lyric Commentary",
    JPN: "エッセイファイナル & 歌詞解説クラス",
    CHN: "论文终稿定稿与歌词阐释沙龙",
    VIE: "Hoàn thiện bài luận & Thảo luận lời bài hát",
    IDN: "Final Esai & Pembahasan Lirik"
  },
  session8Name: {
    KOR: "8. Pitch Video Workshop",
    ENG: "8. Pitch Video Workshop",
    JPN: "8. Pitch Video Workshop",
    CHN: "8. Pitch Video Workshop",
    VIE: "8. Pitch Video Workshop",
    IDN: "8. Pitch Video Workshop"
  },
  session8Quote: {
    KOR: "60초 메시지 비디오 촬영",
    ENG: "60-second Message Video",
    JPN: "60秒メッセージ動画撮影",
    CHN: "60秒个人宣言自备录像录制",
    VIE: "Video thông điệp 60 giây",
    IDN: "Video Pesan 60 Detik"
  },
  transferTitle: {
    KOR: "Creative Transfer: Story ➔ Lyric",
    ENG: "Creative Transfer: Story ➔ Lyric",
    JPN: "Creative Transfer: Story ➔ Lyric",
    CHN: "Creative Transfer: Story ➔ Lyric",
    VIE: "Creative Transfer: Story ➔ Lyric",
    IDN: "Creative Transfer: Story ➔ Lyric"
  },
  transferHook: {
    KOR: "HOOK",
    ENG: "HOOK",
    JPN: "HOOK",
    CHN: "HOOK",
    VIE: "HOOK",
    IDN: "HOOK"
  },
  transferHookDesc: {
    KOR: "핵심 질문의 가장 강한 한 줄",
    ENG: "The strongest single line from core questions",
    JPN: "核心となる問いの最も力強い一行",
    CHN: "核心命题中最具冲击力的一句歌词",
    VIE: "Dòng đơn giản mạnh mẽ nhất từ các câu hỏi cốt lõi",
    IDN: "Satu baris terkuat dari pertanyaan inti"
  },
  transferVerse: {
    KOR: "VERSE",
    ENG: "VERSE",
    JPN: "VERSE",
    CHN: "VERSE",
    VIE: "VERSE",
    IDN: "VERSE"
  },
  transferVerseDesc: {
    KOR: "텍스트 이미지를 구체적 장면으로",
    ENG: "Turn text images into specific scenes",
    JPN: "テキストイメージを具体的な場面へ",
    CHN: "将文字概念转化为具象的心境与画面",
    VIE: "Biến hình ảnh văn bản thành những cảnh cụ thể",
    IDN: "Ubah citra teks menjadi adegan tertentu"
  },
  transferBridge: {
    KOR: "BRIDGE",
    ENG: "BRIDGE",
    JPN: "BRIDGE",
    CHN: "BRIDGE",
    VIE: "BRIDGE",
    IDN: "BRIDGE"
  },
  transferBridgeDesc: {
    KOR: "전환 문장으로 결단·희망 표출",
    ENG: "Express resolve and hope via transition sentences",
    JPN: "転換の一句で決意や希望を表現",
    CHN: "通过铺垫与过渡句抒发决意与希冀",
    VIE: "Thể hiện quyết tâm và hy vọng qua các câu chuyển tiếp",
    IDN: "Ekspresikan tekad dan harapan lewat kalimat transisi"
  },
  transferTag: {
    KOR: "TAG",
    ENG: "TAG",
    JPN: "TAG",
    CHN: "TAG",
    VIE: "TAG",
    IDN: "TAG"
  },
  transferTagDesc: {
    KOR: "관객에게 던지는 궁극적 질문",
    ENG: "Ultimate question thrown to the audience",
    JPN: "観客に投げかける究極の問い",
    CHN: "向现场听众抛出的终极灵魂之问",
    VIE: "Câu hỏi tối hậu dành cho khán giả",
    IDN: "Pertanyaan pamungkas yang diajukan ke penonton"
  },
  classesTitle: {
    KOR: "분반 운영 & 강사진 안내",
    ENG: "Class Operations & Faculty Guide",
    JPN: "クラス運営 & 講師陣の紹介",
    CHN: "科学分班运行与豪华导师配置指南",
    VIE: "Hoạt động phân lớp & Hướng dẫn giảng viên",
    IDN: "Operasional Kelas & Panduan Staf Pengajar"
  },
  classesDesc: {
    KOR: "참가자 개개인의 영어 수준, 음악적 배경을 입체적으로 진단해 맞춤형 멘토 배치를 실현합니다.",
    ENG: "Realize customized mentor matching by multi-dimensionally diagnosing each participant's English level and musical background.",
    JPN: "参加者一人一人のお英語力や音楽的背景を立体的に診断し、一人一人に最適化されたメンターの配置を実現します。",
    CHN: "全方位、立体化评估每位成员的英语表达水平与音乐底子，打造科学定制化的导师匹配方案。",
    VIE: "Thực hiện việc ghép cố vấn tùy chỉnh bằng cách chẩn đoán đa chiều trình độ tiếng Anh và nền tảng âm nhạc của mỗi người tham gia.",
    IDN: "Wujudkan pencocokan mentor yang disesuaikan dengan mendiagnosis tingkat bahasa Inggris dan latar belakang musik setiap peserta secara multidimensi."
  },
  levelTitle: {
    KOR: "수준별 분반 운영",
    ENG: "Level-Based Class Operations",
    JPN: "レベル別クラス運営",
    CHN: "因材施教级别分班",
    VIE: "Vận hành lớp học theo trình độ",
    IDN: "Operasional Kelas Berdasarkan Tingkat"
  },
  level1Key: {
    KOR: "모집 및 교육 대상:",
    ENG: "Target Audience:",
    JPN: "募集および教育対象：",
    CHN: "招募与培养对象：",
    VIE: "Đối tượng tuyển sinh & đào tạo:",
    IDN: "Target Peserta Latihan:"
  },
  level1Val: {
    KOR: "중1 ~ 고1 글로벌 예비 아티스트 지망생",
    ENG: "G7 to G10 global prospective artist aspirants",
    JPN: "中学1年〜高校1年のグローバル予備アーティスト志望生",
    CHN: "初一至高一全球预备艺人练习生志向者",
    VIE: "Học sinh lớp 7 đến lớp 10 có nguyện vọng trở thành nghệ sĩ toàn cầu",
    IDN: "Siswa SMP Kelas 1 hingga SMA Kelas 1 calon artis global"
  },
  level2Key: {
    KOR: "소수정예 클래스 편성:",
    ENG: "Elite Small-Group Setup:",
    JPN: "少数精鋭クラス編成：",
    CHN: "小班制精英课程配置：",
    VIE: "Sắp xếp lớp học nhỏ tinh anh:",
    IDN: "Pengaturan Kelas Kecil Elit:"
  },
  level2Val: {
    KOR: "최종 12개 분반 구성 (반당 철저한 5명 소수인원 밀착 케어)",
    ENG: "Final 12 classes formed (Strict 5-student limit per class for close care)",
    JPN: "最終12クラス編成 (1クラスあたり徹底した5人の少数員密着ケア)",
    CHN: "最终分为12个小组（每组严控在5人以内，实行高频次密着跟踪指导）",
    VIE: "Tạo thành 12 lớp học cuối cùng (Giới hạn nghiêm ngặt 5 học viên mỗi lớp để chăm sóc sát sao)",
    IDN: "12 kelas akhir terbentuk (Batas ketat 5 siswa per kelas untuk bimbingan intensif)"
  },
  level3Key: {
    KOR: "과학적 매칭:",
    ENG: "Scientific Matching:",
    JPN: "科学的マッチング：",
    CHN: "科学合理分配：",
    VIE: "Ghép lớp khoa học:",
    IDN: "Pencocokan Ilmiah:"
  },
  level3Val: {
    KOR: "강사진이 직접 영어 수준, 음악 경험, 장르별 흥미도를 분석해 맞춤 분반 배정",
    ENG: "Faculty directly analyzes English level, music experience, and genre interest for customized class placement",
    JPN: "講師陣が直接英語レベル、音楽経験、ジャンル別興味度を分析してオーダーメイドクラスに配属",
    CHN: "导师团直接依据个人英语对话水平、声乐经验及流派偏好进行多维度评估并指定分班",
    VIE: "Giảng viên trực tiếp phân tích trình độ tiếng Anh, kinh nghiệm âm nhạc và sở thích thể loại để xếp lớp phù hợp",
    IDN: "Staf pengajar langsung menganalisis tingkat bahasa Inggris, pengalaman musik, dan minat genre untuk penempatan kelas yang disesuaikan"
  },
  level4Key: {
    KOR: "글로벌 학습 보조:",
    ENG: "Global Learning Support:",
    JPN: "グローバル学習補助：",
    CHN: "全球化学习辅助：",
    VIE: "Hỗ trợ học tập toàn cầu:",
    IDN: "Dukungan Pembelajaran Global:"
  },
  level4Val: {
    KOR: "각 분반별 음악 창작 수준에 맞는 프레임 문장 및 Sentence Starters 가이드 제공",
    ENG: "Provides framed sentences and Sentence Starters guides tailored to each class's creative level",
    JPN: "各クラスの音楽創作レベルに合わせたフレーム文章とSentence Startersガイドを提供",
    CHN: "针对每个小组特有的音乐创制进度，提供配套的框架句式与Sentence Starters入门指导",
    VIE: "Cung cấp các mẫu câu khung và hướng dẫn Sentence Starters phù hợp với trình độ sáng tạo của mỗi lớp",
    IDN: "Menyediakan kalimat kerangka dan panduan Sentence Starters yang disesuaikan dengan tingkat kreatif setiap kelas"
  },
  matchingTitle: {
    KOR: "디렉터 및 교사 매칭 배치",
    ENG: "Director & Teacher Matching Placement",
    JPN: "ディレクターおよび教師マッチング配置",
    CHN: "导师与助教优化组对配置",
    VIE: "Bố trí ghép cặp Giám đốc & Giáo viên",
    IDN: "Penempatan Pencocokan Direktur & Guru"
  },
  match1Key: {
    KOR: "Native Teachers:",
    ENG: "Native Teachers:",
    JPN: "Native Teachers：",
    CHN: "Native Teachers：",
    VIE: "Native Teachers:",
    IDN: "Native Teachers:"
  },
  match1Val: {
    KOR: "Oxford-style 영어 인문 고전 독해 및 작사 원어 직강 에디션 운영",
    ENG: "Conducts Oxford-style English classics reading and songwriting lectures by native speakers",
    JPN: "オックスフォードスタイルの英語人文学古典読解および作詞のネイティブ直講エディションを運営",
    CHN: "开设牛津风格的英文经典导读及作词课，由外籍导师进行纯正地道的全英直授授课",
    VIE: "Tổ chức các bài giảng về đọc tác phẩm kinh điển nhân văn tiếng Anh và sáng tác lời bài hát kiểu Oxford bởi người bản xứ",
    IDN: "Menyelenggarakan kuliah membaca karya klasik humaniora bahasa Inggris gaya Oxford dan penulisan lirik oleh penutur asli"
  },
  match2Key: {
    KOR: "Bilingual Teachers:",
    ENG: "Bilingual Teachers:",
    JPN: "Bilingual Teachers：",
    CHN: "Bilingual Teachers：",
    VIE: "Bilingual Teachers:",
    IDN: "Bilingual Teachers:"
  },
  match2Val: {
    KOR: "이중언어(영어/한국어/일본어) 기반 음악 수업 공동 운영 및 빈틈없는 학습 코칭 피드백",
    ENG: "Co-runs music classes based on bilingual/trilingual communication (English/Korean/Japanese) with meticulous coaching feedback",
    JPN: "バイリンガル（英語/韓国語/日本語）に基づく音楽授業を共同運営し、隙のない学習コーチングフィードバックを提供",
    CHN: "多语种（英语/韩语/日语）联合教学，实现无缝衔接的课后督导与细节纠正回馈",
    VIE: "Đồng tổ chức các lớp học âm nhạc dựa trên giao tiếp song ngữ/tam ngữ (Anh/Hàn/Nhật) với phản hồi huấn luyện tỉ mỉ",
    IDN: "Menjalankan kelas musik bersama berdasarkan komunikasi dwibahasa/tribahasa (Inggris/Korea/Jepang) dengan umpan balik bimbingan yang teliti"
  },
  match3Key: {
    KOR: "TA (Teaching Assistant):",
    ENG: "TA (Teaching Assistant):",
    JPN: "TA (Teaching Assistant)：",
    CHN: "TA (Teaching Assistant)：",
    VIE: "TA (Trợ giảng):",
    IDN: "TA (Asisten Pengajar):"
  },
  match3Val: {
    KOR: "1:1 매칭으로 실시간 작성한 에세이 및 일일 과제 저널 개별 첨삭 멘토링 케어",
    ENG: "1:1 matching for real-time proofreading and personalized feedback on essay drafting and daily reflection journals",
    JPN: "1:1マッチングでリアルタイムに作成したエッセイおよび毎日の課題ジャーナルの個別添削メンターリングケアを実施",
    CHN: "配备1:1专属助教，针对现场编写的随笔散文及日记档案提供定制化的一对一修改辅导",
    VIE: "Ghép cặp 1:1 để sửa lỗi thời gian thực và nhận xét cá nhân hóa về bài luận và nhật ký phản chiếu hàng ngày",
    IDN: "Pencocokan 1:1 untuk koreksi real-time dan umpan balik pribadi pada draf esai dan jurnal refleksi harian"
  },
  subjectsTitle: {
    KOR: "K-pop Creative — 8 Subjects",
    ENG: "K-pop Creative — 8 Subjects",
    JPN: "K-pop Creative — 8 Subjects",
    CHN: "K-pop Creative — 8 Subjects",
    VIE: "K-pop Creative — 8 Subjects",
    IDN: "K-pop Creative — 8 Subjects"
  },
  subjectsSub: {
    KOR: "Find Your Sound — 옥스퍼드 인문 기반 나만의 고유한 사운드를 찾는 8대 창작 교과과정",
    ENG: "Find Your Sound — 8 Creative Curriculums to Find Your Unique Sound Based on Oxford Humanities",
    JPN: "Find Your Sound — オックスフォード人文学に基づく自分だけの独自のサウンドを見つける8大創作カリキュラム",
    CHN: "Find Your Sound — 探寻专属于你原创声音的牛津人文风格8大核心创作主修课",
    VIE: "Find Your Sound — 8 giáo trình sáng tạo để tìm ra âm thanh độc đáo của bạn dựa trên Nhân văn Oxford",
    IDN: "Find Your Sound — 8 Kurikulum Kreatif untuk Menemukan Suara Unik Anda Berdasarkan Humaniora Oxford"
  },
  sub1Title: {
    KOR: "K-pop Master Class",
    ENG: "K-pop Master Class",
    JPN: "K-pop Master Class",
    CHN: "K-pop Master Class",
    VIE: "K-pop Master Class",
    IDN: "K-pop Master Class"
  },
  sub1Desc: {
    KOR: "김형석 메인 프로듀서의 히트곡 구조 및 멜로디 테크닉 작곡 패턴 완전 정밀 해부",
    ENG: "Precision anatomy of hit song structures and melodic composition patterns by Main Producer Hyung-suk Kim",
    JPN: "キム・ヒョンソクメインプロデューサーのヒット曲の構造およびメロディーテクニック作曲パターンの完全精密解剖",
    CHN: "特邀主制作人金亨锡亲自拆解经典名曲架构及高级旋律谱曲技巧的干货分享",
    VIE: "Phân tích cấu trúc bài hát nổi tiếng và kỹ thuật sáng tác giai điệu bởi Nhà sản xuất chính Hyung-suk Kim",
    IDN: "Bedah mendalam struktur lagu hit dan pola komposisi melodi oleh Produser Utama Hyung-suk Kim"
  },
  sub2Title: {
    KOR: "Artist Foundation",
    ENG: "Artist Foundation",
    JPN: "Artist Foundation",
    CHN: "Artist Foundation",
    VIE: "Artist Foundation",
    IDN: "Artist Foundation"
  },
  sub2Desc: {
    KOR: "서로 다른 개성의 팀 매칭 구성, 보컬/댄스 기획사 오디션 코치 포지션 빌드업",
    ENG: "Matching teams with diverse personalities, building vocal/dance positions coached for agency auditions",
    JPN: "異なる個性を持つチームのマッチング構成、ボーカル/ダンス事務所オーディションコーチのポジションビル드アップ",
    CHN: "打乱并优化团队性格匹配度，进行符合主流公司选人标准的声乐/舞蹈专项担当规划与定位",
    VIE: "Ghép đội với tính cách đa dạng, xây dựng vị trí thanh nhạc/vũ đạo được hướng dẫn cho các buổi thử giọng",
    IDN: "Mencocokkan tim dengan beragam kepribadian, membangun posisi vokal/tari untuk audisi agensi"
  },
  sub3Title: {
    KOR: "AI Song Building",
    ENG: "AI Song Building",
    JPN: "AI Song Building",
    CHN: "AI Song Building",
    VIE: "AI Song Building",
    IDN: "AI Song Building"
  },
  sub3Desc: {
    KOR: "AI 음악 작곡 프롬프트 엔지니어링 및 취향 기반 사운드 융합 기술 훈련",
    ENG: "AI music composition prompt engineering and taste-based sound fusion technology training",
    JPN: "AI音楽作曲プロンプトエンジニアリングおよび好みに基づいたサウンド融合技術トレーニング",
    CHN: "学习利用AI编曲提示词工程化输出，及基于个人音乐审美偏好的混合音效调和实操训练",
    VIE: "Kỹ thuật viết câu lệnh sáng tác nhạc AI và đào tạo công nghệ dung hòa âm thanh theo thị hiếu",
    IDN: "Rekayasa perintah komposisi musik AI dan pelatihan teknologi fusi suara berbasis selera"
  },
  sub4Title: {
    KOR: "Choreography & Cover",
    ENG: "Choreography & Cover",
    JPN: "Choreography & Cover",
    CHN: "Choreography & Cover",
    VIE: "Choreography & Cover",
    IDN: "Choreography & Cover"
  },
  sub4Desc: {
    KOR: "기획사 수석 댄서들의 밀착 지도를 통한 고화질 K-Pop 안무 트레이닝 및 퍼포먼스",
    ENG: "High-definition K-Pop choreography training and performance coached closely by agency chief dancers",
    JPN: "事務所の首席ダンサーたちによる密着指導を通じた高画質K-Popダンスレッスンおよびパフォーマンス",
    CHN: "接受娱乐公司首席编舞导师的手把手纠偏，进行超清规格的K-Pop代表性舞蹈动作练习与展示",
    VIE: "Đào tạo vũ đạo K-Pop chất lượng cao và trình diễn dưới sự hướng dẫn sát sao của các vũ công trưởng công ty",
    IDN: "Pelatihan koreografi K-Pop berkualitas tinggi dan pertunjukan di bawah bimbingan penari utama agensi"
  },
  sub5Title: {
    KOR: "Production Studio",
    ENG: "Production Studio",
    JPN: "Production Studio",
    CHN: "Production Studio",
    VIE: "Production Studio",
    IDN: "Production Studio"
  },
  sub5Desc: {
    KOR: "레코딩 전문 스튜디오 부스에서 개인 창작곡 보컬 트랙 녹음 및 프로페셔널 마스터링",
    ENG: "Recording personal original song vocal tracks in professional studio booths and professional mastering",
    JPN: "レコーディング専門スタジオブースでの個人創作曲のボーカルトラック収録およびプロフェッショナルマスタリング",
    CHN: "步入高配专业灌音棚录音室，录制独唱音轨，并由专业混音师团队进行高品质母带后期处理",
    VIE: "Ghi âm các bản nhạc thanh nhạc bài hát gốc cá nhân trong phòng thu chuyên nghiệp và hoàn thiện chuyên nghiệp",
    IDN: "Merekam trek vokal lagu orisinal pribadi di stan studio profesional dan mastering profesional"
  },
  sub6Title: {
    KOR: "Stage Performance",
    ENG: "Stage Performance",
    JPN: "Stage Performance",
    CHN: "Stage Performance",
    VIE: "Stage Performance",
    IDN: "Stage Performance"
  },
  sub6Desc: {
    KOR: "웅장한 대공연장 기준 최적의 무대 동선 및 관객을 매료하는 표현력 훈련",
    ENG: "Optimal stage blocking for grand concert venues and training expressive skills to captivate audiences",
    JPN: "壮大な大劇場基準での最適なステージ動線および観客を魅了する表現力のトレーニング",
    CHN: "针对万人级大舞台标准的超广角走位编排，与旨在俘获并带动台下观众情绪的即兴舞台表现力练习",
    VIE: "Sắp xếp sân khấu tối ưu cho các địa điểm hòa nhạc lớn và đào tạo kỹ năng biểu cảm để thu hút khán giả",
    IDN: "Bloking panggung optimal untuk tempat konser besar dan pelatihan keterampilan ekspresif untuk memikat penonton"
  },
  sub7Title: {
    KOR: "Visual & Guest Session",
    ENG: "Visual & Guest Session",
    JPN: "Visual & Guest Session",
    CHN: "Visual & Guest Session",
    VIE: "Visual & Guest Session",
    IDN: "Visual & Guest Session"
  },
  sub7Desc: {
    KOR: "창작 곡 비주얼 머천다이징 디자인 및 메이저 기획사 연예 전문가 초빙 강연",
    ENG: "Visual merchandising design for original songs and special lectures by major entertainment agency experts",
    JPN: "創作曲のビジュアルマーチャンダイジングデザインおよび大手事務所の芸能専門家招請による特別講義",
    CHN: "主导自创曲配套周边物料的视觉包装设计，并聆听顶级演艺策划大咖的行业公开讲座",
    VIE: "Thiết kế visual merchandising cho bài hát gốc và các bài giảng đặc biệt từ chuyên gia công ty giải trí lớn",
    IDN: "Desain visual merchandising untuk lagu orisinal dan kuliah khusus oleh pakar agensi hiburan besar"
  },
  sub8Title: {
    KOR: "Final Showcase",
    ENG: "Final Showcase",
    JPN: "Final Showcase",
    CHN: "Final Showcase",
    VIE: "Final Showcase",
    IDN: "Final Showcase"
  },
  sub8Desc: {
    KOR: "창작곡 라이브 프레젠테이션, 댄스 커버 퍼포먼스 및 웅장한 Grand Finale 피날레",
    ENG: "Original song live presentation, dance cover performance, and grand finale stage",
    JPN: "創作曲のライブプレゼンテーション、ダンスカバーパフォーマンスおよび壮大なGrand Finaleフィナーレ",
    CHN: "自制曲Live开麦展示、经典舞蹈翻跳，以及携手全体特训伙伴同台呈现的盛大谢幕狂欢",
    VIE: "Trình bày trực tiếp bài hát gốc, trình diễn vũ đạo cover và sân khấu khép lại hoành tráng",
    IDN: "Presentasi langsung lagu orisinal, pertunjukan cover tarian, dan panggung penutup yang megah"
  },
  delTitle: {
    KOR: "결과물",
    ENG: "Deliverables",
    JPN: "成果物",
    CHN: "特训产出物",
    VIE: "Sản phẩm đầu ra",
    IDN: "Hasil Karya"
  },
  delPerformance: {
    KOR: "Performance",
    ENG: "Performance",
    JPN: "Performance",
    CHN: "Performance",
    VIE: "Performance",
    IDN: "Performance"
  },
  delPerformance1: {
    KOR: "창작곡 프레젠테이션 영상",
    ENG: "Original Song Presentation Video",
    JPN: "創作曲プレゼンテーション映像",
    CHN: "自创曲概念解说及呈现影像",
    VIE: "Video thuyết trình bài hát gốc",
    IDN: "Video Presentasi Lagu Orisinal"
  },
  delPerformance2: {
    KOR: "K-pop 커버 퍼포먼스 영상",
    ENG: "K-pop Cover Performance Video",
    JPN: "K-popカバーパフォーマンス映像",
    CHN: "K-pop代表作舞蹈翻跳影像",
    VIE: "Video trình diễn cover K-pop",
    IDN: "Video Pertunjukan Cover K-pop"
  },
  delPerformance3: {
    KOR: "AI 창작곡",
    ENG: "AI Original Song",
    JPN: "AI創作曲",
    CHN: "AI辅助原创单曲",
    VIE: "Bài hát gốc AI",
    IDN: "Lagu Orisinal AI"
  },
  delPerformance4: {
    KOR: "보컬 녹음",
    ENG: "Vocal Recording",
    JPN: "ボーカル収録トラック",
    CHN: "高质量录音棚人声音轨",
    VIE: "Bản ghi âm giọng hát",
    IDN: "Rekaman Vokal"
  },
  delPerformance5: {
    KOR: "공연 사진",
    ENG: "Stage Performance Photos",
    JPN: "公演写真スナップ",
    CHN: "现场公演舞台艺术照",
    VIE: "Ảnh biểu diễn sân khấu",
    IDN: "Foto Pertunjukan Panggung"
  },
  delHumanities: {
    KOR: "Humanities & English",
    ENG: "Humanities & English",
    JPN: "Humanities & English",
    CHN: "Humanities & English",
    VIE: "Humanities & English",
    IDN: "Humanities & English"
  },
  delHumanities1: {
    KOR: "팀별 English Lyrics 1곡",
    ENG: "1 Team English Lyric Song",
    JPN: "チーム別English Lyrics 1曲",
    CHN: "小组专属全英文歌词一首",
    VIE: "1 bài hát lời tiếng Anh theo nhóm",
    IDN: "1 Lagu Lirik Bahasa Inggris Tim"
  },
  delHumanities2: {
    KOR: "개인 Essay 1편",
    ENG: "1 Personal Essay",
    JPN: "個人Essay 1編",
    CHN: "个人独立人文散文一篇",
    VIE: "1 bài luận cá nhân",
    IDN: "1 Esai Pribadi"
  },
  delHumanities3: {
    KOR: "60초 Pitch Video 1편",
    ENG: "1 60-Second Pitch Video",
    JPN: "60秒Pitch Video 1編",
    CHN: "60秒个人宣言自荐影像一部",
    VIE: "1 video giới thiệu bản thân 60 giây",
    IDN: "1 Video Pitching 60 Detik"
  },
  delHumanities4: {
    KOR: "개인 Lyrics Asset Bank",
    ENG: "Personal Lyrics Asset Bank",
    JPN: "個人Lyrics Asset Bank",
    CHN: "个人专属词库素材银行",
    VIE: "Ngân hàng tài sản lời nhạc cá nhân",
    IDN: "Bank Aset Lirik Pribadi"
  },
  delPortfolio: {
    KOR: "Final Portfolio Package",
    ENG: "Final Portfolio Package",
    JPN: "Final Portfolio Package",
    CHN: "Final Portfolio Package",
    VIE: "Final Portfolio Package",
    IDN: "Final Portfolio Package"
  },
  delPortfolio1: {
    KOR: "Showcase video",
    ENG: "Showcase video",
    JPN: "Showcase video",
    CHN: "Showcase video",
    VIE: "Showcase video",
    IDN: "Showcase video"
  },
  delPortfolio2: {
    KOR: "Photo",
    ENG: "Photo",
    JPN: "Photo",
    CHN: "Photo",
    VIE: "Photo",
    IDN: "Photo"
  },
  delPortfolio3: {
    KOR: "Creative Journal Workbook",
    ENG: "Creative Journal Workbook",
    JPN: "Creative Journal Workbook",
    CHN: "Creative Journal Workbook",
    VIE: "Creative Journal Workbook",
    IDN: "Creative Journal Workbook"
  },
  delPortfolio4: {
    KOR: "Certificate",
    ENG: "Certificate",
    JPN: "Certificate",
    CHN: "Certificate",
    VIE: "Certificate",
    IDN: "Certificate"
  },
  delPortfolio5: {
    KOR: "Mentor feedback",
    ENG: "Mentor feedback",
    JPN: "Mentor feedback",
    CHN: "Mentor feedback",
    VIE: "Mentor feedback",
    IDN: "Mentor feedback"
  },
  workbookTitle: {
    KOR: "Creative Journal Workbook",
    ENG: "Creative Journal Workbook",
    JPN: "Creative Journal Workbook",
    CHN: "Creative Journal Workbook",
    VIE: "Creative Journal Workbook",
    IDN: "Creative Journal Workbook"
  },
  workbookDesc: {
    KOR: "수업 연동 활동 기록(Creative Process Pages 10종) + 매일 성찰 기록(Daily Reflection) + 학부모 안내(Parent Page). 캠프 종료 시 개인 창작 포트폴리오로 제공됩니다.",
    ENG: "Class activity logs (10 Creative Process Pages) + Daily reflection logs (Daily Reflection) + Parent guidance (Parent Page). Provided as a personal creative portfolio upon camp completion.",
    JPN: "授業連動活動記録(Creative Process Pages 10種) + 毎日の省察記録(Daily Reflection) + 保護者向け案内(Parent Page)。キャンプ終了時に個人創作ポートフォリオとして提供されます。",
    CHN: "课堂关联创作日志（10套创意流程页）+ 日常内心省察随笔（每日反思日志）+ 家长互动页板（家长页）。特训营圆满结束后，作为个人独立作品集交付。",
    VIE: "Nhật ký hoạt động lớp học (10 trang quy trình sáng tạo) + Nhật ký suy ngẫm hàng ngày (Daily Reflection) + Hướng dẫn dành cho phụ huynh (Parent Page). Được cung cấp dưới dạng hồ sơ sáng tạo cá nhân khi kết thúc trại.",
    IDN: "Catatan aktivitas kelas (10 Halaman Proses Kreatif) + Catatan refleksi harian (Daily Reflection) + Panduan orang tua (Parent Page). Diberikan sebagai portofolio kreatif pribadi saat kamp selesai."
  },
  workbookActivityTitle: {
    KOR: "활동 기록 10종",
    ENG: "10 Class Activity Logs",
    JPN: "活動記録10種",
    CHN: "10套创意流程记录",
    VIE: "10 hoạt động được ghi lại",
    IDN: "10 Catatan Aktivitas Kelas"
  },
  workbookDailyTitle: {
    KOR: "매일 성찰 기록",
    ENG: "Daily Reflection Logs",
    JPN: "毎日の省察記録",
    CHN: "每日反思日志",
    VIE: "Nhật ký suy ngẫm hàng ngày",
    IDN: "Catatan Refleksi Harian"
  },
  workbookParentTitle: {
    KOR: "학부모 안내",
    ENG: "Parent Guidance Page",
    JPN: "保護者向け案内",
    CHN: "家长互动页板",
    VIE: "Trang thông tin phụ huynh",
    IDN: "Halaman Panduan Orang Tua"
  },
  bookCreativeJournal: {
    KOR: "Creative Journal",
    ENG: "Creative Journal",
    JPN: "Creative Journal",
    CHN: "Creative Journal",
    VIE: "Creative Journal",
    IDN: "Creative Journal"
  },
  bookWorkbook: {
    KOR: "Workbook",
    ENG: "Workbook",
    JPN: "Workbook",
    CHN: "Workbook",
    VIE: "Workbook",
    IDN: "Workbook"
  },
  awardTitle: {
    KOR: "Creative Spirit Award",
    ENG: "Creative Spirit Award",
    JPN: "Creative Spirit Award",
    CHN: "Creative Spirit Award",
    VIE: "Creative Spirit Award",
    IDN: "Creative Spirit Award"
  },
  awardDesc: {
    KOR: "캠프 기간 동안 가장 창의적인 도전과 성장을 보여준 참가자에게 수여.",
    ENG: "Awarded to the participant who demonstrated the most creative challenge and growth during the camp.",
    JPN: "キャンプ期間中、最も創造的な挑戦と成長を見せてくれた参加者に授与されます。",
    CHN: "隆重颁发给在集训期间，展现出最具先锋创意精神与蜕变成长的成员。",
    VIE: "Trao tặng cho học viên thể hiện thử thách và sự phát triển sáng tạo nhất trong suốt thời gian diễn ra trại.",
    IDN: "Diberikan kepada peserta yang menunjukkan tantangan dan pertumbuhan paling kreatif selama kamp."
  },
  awardSelection: {
    KOR: "선정 방식:",
    ENG: "Selection Process:",
    JPN: "選考方法：",
    CHN: "评选方式：",
    VIE: "Phương thức bình chọn:",
    IDN: "Proses Pemilihan:"
  },
  awardStep1: {
    KOR: "참가자 익명 추천",
    ENG: "Anonymous Trainee Vote",
    JPN: "参加者の匿名推薦",
    CHN: "学员匿名举荐",
    VIE: "Học viên đề cử ẩn danh",
    IDN: "Rekomendasi Anonim Peserta"
  },
  awardStep2: {
    KOR: "교사 관찰",
    ENG: "Faculty Observation",
    JPN: "講師による観察",
    CHN: "助教团实时观察评定",
    VIE: "Giảng viên quan sát",
    IDN: "Pengamatan Guru"
  },
  awardStep3: {
    KOR: "운영진 최종 선정",
    ENG: "Final Executive Board Selection",
    JPN: "運営陣による最終決定",
    CHN: "组委会官方核定确认",
    VIE: "Ban tổ chức chốt kết quả",
    IDN: "Pemilihan Akhir Panitia"
  },
  awardFootnote: {
    KOR: "성적이 아닌 태도와 성장을 인정합니다.",
    ENG: "We recognize attitude and growth, not just grades.",
    JPN: "成績ではなく、姿勢や成長を評価します。",
    CHN: "相比单纯的分数，我们更看重求学的态度与蜕变步伐。",
    VIE: "Chúng tôi công nhận thái độ và sự phát triển, không chỉ là điểm số.",
    IDN: "Kami mengapresiasi sikap dan pertumbuhan, bukan hanya nilai."
  },
  uploaderTitle: {
    KOR: "글로벌 멀티미디어 업로더 (연습 영상 제출)",
    ENG: "Global Multimedia Uploader (Submit Practice Videos)",
    JPN: "グローバルマルチメディアアップローダー (練習動画提出)",
    CHN: "全球多媒体作业上传器 (练习影像提报)",
    VIE: "Bộ tải lên đa phương tiện toàn cầu (Nộp video luyện tập)",
    IDN: "Pengunggah Multimedia Global (Kirim Video Latihan)"
  },
  uploaderDragDrop: {
    KOR: "[ 📂 드래그 앤 드롭 또는 파일 선택 ]",
    ENG: "[ 📂 Drag & Drop or Click to Select File ]",
    JPN: "[ 📂 ドラッグ＆ドロップまたはファイル選択 ]",
    CHN: "[ 📂 拖拽文件至此区域或点击以选择文件 ]",
    VIE: "[ 📂 Kéo thả hoặc Click để chọn file ]",
    IDN: "[ 📂 Seret & Lepaskan atau Klik untuk Memilih File ]"
  },
  uploaderFormats: {
    KOR: "지원 포맷: MP4, MOV, AVI (최대 2GB 글로벌 고속 업로드 지원)",
    ENG: "Supported Formats: MP4, MOV, AVI (Max 2GB Global High-Speed Upload)",
    JPN: "対応形式：MP4, MOV, AVI (最大2GBグローバル高速アップロード対応)",
    CHN: "支持格式：MP4, MOV, AVI（最大支持2GB全球加速上传）",
    VIE: "Định dạng hỗ trợ: MP4, MOV, AVI (Hỗ trợ tải lên tốc độ cao toàn cầu tối đa 2GB)",
    IDN: "Format Didukung: MP4, MOV, AVI (Unggah Cepat Global Maks 2GB Didukung)"
  },
  aiTitle: {
    KOR: "🤖 KISAS AI 분석 결과 및 VOD 맞춤 추천",
    ENG: "🤖 KISAS AI Diagnosis & Tailored VOD Recommendations",
    JPN: "🤖 KISAS AI分析結果およびVODカスタム推薦",
    CHN: "🤖 KISAS AI量化评定报告与VOD自选精细课匹配",
    VIE: "🤖 Kết quả phân tích AI KISAS & Khuyến nghị VOD tùy chỉnh",
    IDN: "🤖 Hasil Analisis AI KISAS & Rekomendasi VOD yang Disesuaikan"
  },
  aiResult: {
    KOR: "AI 진단 결과: 현재 안무 영상 분석 결과, '표현력'과 '시선 처리'는 매우 우수하나 1분 15초 구간의 '골반 각도 및 바운스 제어'에서 중심축이 흔들림이 감지되었습니다.",
    ENG: "AI Diagnosis: Current choreography analysis shows excellent 'expressiveness' and 'gaze control'. However, center axis instability was detected during the 'pelvis angle and bounce control' segment at 1:15.",
    JPN: "AI診断結果：現在のダンス映像分析の結果、「表現力」と「指線処理」は非常に優秀ですが、1分15秒区間の「骨盤角度およびバウンス制御」において中心軸の揺れが検出されました。",
    CHN: "AI评测细节：分析当前舞蹈姿态后显示，“艺术感染力”与“眼神视线落点”表现杰出。但在1分15秒左右的“骨盆倾斜角与Bounce弹动控制”段落中，检测到身体重心轴出现轻微位移摆动。",
    VIE: "Chẩn đoán AI: Phân tích vũ đạo hiện tại cho thấy 'khả năng biểu cảm' và 'kiểm soát ánh nhìn' tuyệt vời. Tuy nhiên, sự mất ổn định của trục trung tâm đã được phát hiện trong phần 'góc chậu và kiểm soát độ nảy' ở 1:15.",
    IDN: "Diagnosis AI: Analisis koreografi saat ini menunjukkan 'ekspresi' dan 'kontrol pandangan mata' yang sangat baik. Namun, ketidakstabilan poros tengah terdeteksi selama segmen 'sudut pelvis dan kontrol pantulan' pada menit 1:15."
  },
  vodTitle: {
    KOR: "📺 당신을 위한 AI 맞춤형 추천 트레이닝 콘텐츠",
    ENG: "📺 AI Custom-Recommended Training Content for You",
    JPN: "📺 あなたのためのAIパーソナライズ推薦トレーニングコンテンツ",
    CHN: "📺 专门为您推送的AI专属定制进阶视频课程",
    VIE: "📺 Nội dung huấn luyện tùy chỉnh được đề xuất bằng AI dành cho bạn",
    IDN: "📺 Konten Latihan Rekomendasi AI yang Disesuaikan untuk Anda"
  },
  vod1Title: {
    KOR: "VOD 1",
    ENG: "VOD 1",
    JPN: "VOD 1",
    CHN: "VOD 1",
    VIE: "VOD 1",
    IDN: "VOD 1"
  },
  vod1Desc: {
    KOR: "🕺 골반 코어 밸런스를 잡는 10가지 하체 루틴",
    ENG: "🕺 10 Lower Body Routines for Pelvic Core Balance",
    JPN: "🕺 骨盤体幹バランスを整える10の下半身ルーティン",
    CHN: "🕺 改善下肢中轴平衡与骨盆核心稳定的10套基础流派动作",
    VIE: "🕺 10 bài tập thân dưới giúp cân bằng cốt lõi vùng chậu",
    IDN: "🕺 10 Rutinitas Tubuh Bagian Bawah untuk Keseimbangan Inti Pelvis"
  },
  vod1Sub: {
    KOR: "대형기획사 특강 (25분)",
    ENG: "Special Agency Lecture (25 min)",
    JPN: "大手事務所特別講座 (25分)",
    CHN: "顶尖娱乐经纪公司内部课 (25分钟)",
    VIE: "Bài giảng đặc biệt từ công ty lớn (25 phút)",
    IDN: "Kuliah Khusus Agensi Terkemuka (25 mnt)"
  },
  vod2Title: {
    KOR: "VOD 2",
    ENG: "VOD 2",
    JPN: "VOD 2",
    CHN: "VOD 2",
    VIE: "VOD 2",
    IDN: "VOD 2"
  },
  vod2Desc: {
    KOR: "🎵 타이틀곡 2절 브레이크 파트 다운 바운스 완벽 가이드",
    ENG: "🎵 Perfect Guide to Down-Bounce in Title Song Verse 2 Break Part",
    JPN: "🎵 タイトル曲2番ブレイクパートダウンバウンス完全ガイド",
    CHN: "🎵 主打歌第二小节Break Break段落Down Bounce降重心要领剖析",
    VIE: "🎵 Hướng dẫn hoàn hảo về Down-Bounce ở phần Break của Verse 2 bài hát chủ đề",
    IDN: "🎵 Panduan Sempurna Down-Bounce di Bagian Istirahat Bait 2 Lagu Utama"
  },
  vod2Sub: {
    KOR: "KISAS 수석 안무팀 (40분)",
    ENG: "KISAS Chief Choreography Team (40 min)",
    JPN: "KISAS 首席振付チーム (40分)",
    CHN: "KISAS 骨干导师编舞组亲自授课 (40分钟)",
    VIE: "Đội ngũ vũ đạo trưởng KISAS (40 phút)",
    IDN: "Tim Koreografi Utama KISAS (40 mnt)"
  },
  btnStudy: {
    KOR: "수강하기",
    ENG: "Study Now",
    JPN: "受講する",
    CHN: "立即学习",
    VIE: "Học ngay",
    IDN: "Belajar Sekarang"
  },
  coachFeedbackTitle: {
    KOR: "💬 코치진 타임스탬프 피드백",
    ENG: "💬 Coach Timestamp Feedbacks",
    JPN: "💬 講師陣のタイムスタンプフィードバック",
    CHN: "💬 导师团带时间戳的细节逐帧纠偏反馈",
    VIE: "💬 Phản hồi đính kèm mốc thời gian của cố vấn",
    IDN: "💬 Umpan Balik Stempel Waktu dari Tim Pelatih"
  },
  ts1Author: {
    KOR: "🗣 홍길동 댄스 마스터",
    ENG: "🗣 Coach Hong (Dance Master)",
    JPN: "🗣 ホン・ギルドンダンスマスター",
    CHN: "🗣 洪吉童 舞蹈导师",
    VIE: "🗣 Bậc thầy vũ đạo Hong Gil-dong",
    IDN: "🗣 Master Tari Hong Gil-dong"
  },
  ts1Text: {
    KOR: "손끝 에너지가 흐려져요.",
    ENG: "Energy at the fingertips fades out.",
    JPN: "指先のエネルギーが薄れています。",
    CHN: "指尖延伸感与力量爆发力有所流失。",
    VIE: "Năng lượng ở đầu ngón tay đang nhạt dần.",
    IDN: "Energi di ujung jari memudar."
  },
  ts1DetailTag: {
    KOR: "손끝 시선 일치",
    ENG: "Align fingertip and gaze",
    JPN: "指先と視線の調整",
    CHN: "视线需牢牢锁定指尖",
    VIE: "Đồng bộ đầu ngón tay và ánh nhìn",
    IDN: "Sejajarkan ujung jari dan pandangan mata"
  },
  ts1DetailLabel: {
    KOR: "[ Miya.mp4 00:42 안무 드로잉선 ]",
    ENG: "[ Miya.mp4 00:42 Choreography Drawing Line ]",
    JPN: "[ Miya.mp4 00:42 振付描画ライン ]",
    CHN: "[ Miya.mp4 00:42 肢体角度辅导线 ]",
    VIE: "[ Miya.mp4 00:42 Đường vẽ vũ đạo ]",
    IDN: "[ Miya.mp4 00:42 Garis Gambar Koreografi ]"
  },
  ts1DetailDesc: {
    KOR: "시선을 손가락 끝으로 고정하여 손 에너지가 연장되도록 거울 고정 훈련을 수행하십시오.",
    ENG: "Fix your gaze on your fingertips and perform mirror-holding training so that fingertip energy is fully extended.",
    JPN: "視線を指先に固定し、指先のエネルギーが十分に拡張されるよう鏡を利用した固定練習を行ってください。",
    CHN: "练习时眼睛需聚焦于指尖，通过照镜固定训练，确保末端力量完全延展释放。",
    VIE: "Cố định ánh nhìn của bạn vào các đầu ngón tay và thực hiện bài tập trước gương để năng lượng ở đầu ngón tay được mở rộng hoàn toàn.",
    IDN: "Fokuskan pandangan Anda pada ujung jari dan lakukan latihan di depan cermin agar energi ujung jari terentang sepenuhnya."
  },
  ts2Author: {
    KOR: "🗣 지니 보컬 디렉터",
    ENG: "🗣 Coach Jiny (Vocal Director)",
    JPN: "🗣 ジニーボーカルディレクター",
    CHN: "🗣 吉妮 声乐总监",
    VIE: "🗣 Giám đốc thanh nhạc Jiny",
    IDN: "🗣 Direktur Vokal Jiny"
  },
  ts2Text: {
    KOR: "고음 턱 관절 압박 감지.",
    ENG: "Jaw tension detected in high notes.",
    JPN: "高音域で顎関節の圧迫を検出。",
    CHN: "高音段下巴关节处负荷紧绷感被捕获。",
    VIE: "Phát hiện cơ hàm bị căng cứng khi hát nốt cao.",
    IDN: "Ketegangan rahang terdeteksi pada nada tinggi."
  },
  ts2DetailLabel: {
    KOR: "고음 성대 압박 피크 스펙트럼",
    ENG: "High-Note Vocal Cord Pressure Peak Spectrum",
    JPN: "高音域声帯圧迫ピークスペクトル",
    CHN: "高音声带负荷峰值频谱图",
    VIE: "Biểu đồ đỉnh áp lực dây thanh quản khi hát nốt cao",
    IDN: "Spektrum Puncak Tekanan Pita Suara Nada Tinggi"
  },
  ts2DetailDesc: {
    KOR: "연구개를 크게 열고 턱 관절 하단 힘을 완전히 소거하는 수직 확장 발성을 훈련하십시오.",
    ENG: "Open your soft palate widely and train vertical expansion vocalization that completely eliminates the lower jaw joint tension.",
    JPN: "軟口蓋を大きく開き、顎関節下部の力を完全に抜いた垂直拡張発声を練習してください。",
    CHN: "请充分打开软腭，积极消除下颌多余紧绷感，进行垂直共鸣腔体扩张发声的练习。",
    VIE: "Mở rộng vòm miệng mềm và luyện giọng mở rộng theo chiều dọc để loại bỏ hoàn toàn sự căng thẳng của khớp hàm dưới.",
    IDN: "Buka langit-langit lunak Anda lebar-lebar dan latih vokalisasi ekspansi vertikal yang sepenuhnya menghilangkan ketegangan sendi rahang bawah."
  },
  feedTitle: {
    KOR: "클래스 독점 폐쇄형 피드 (Community Feed)",
    ENG: "Class-Exclusive Private Feed (Community Feed)",
    JPN: "クラス独占非公開フィード (Community Feed)",
    CHN: "班级专属限时闭合讨论墙 (Community Feed)",
    VIE: "Bảng tin riêng tư dành riêng cho lớp (Community Feed)",
    IDN: "Umpan Pribadi Eksklusif Kelas (Community Feed)"
  },
  feedLikes: {
    KOR: "응원",
    ENG: "Support",
    JPN: "応援",
    CHN: "打call",
    VIE: "Cổ vũ",
    IDN: "Dukungan"
  },
  feedComments: {
    KOR: "댓글",
    ENG: "Comments",
    JPN: "コメント",
    CHN: "评论",
    VIE: "Bình luận",
    IDN: "Komentar"
  },
  commentPlaceholder: {
    KOR: "동기에게 응원과 피드백 댓글을 남기세요...",
    ENG: "Leave support and feedback comments for your peers...",
    JPN: "同期に送る応援やフィードバックのコメントを入力してください...",
    CHN: "给朝夕相处的同窗留下鼓励或建设性的小建议吧...",
    VIE: "Để lại lời bình luận cổ vũ và phản hồi cho bạn bè...",
    IDN: "Tinggalkan komentar penyemangat dan umpan balik untuk rekan Anda..."
  },
  commentSubmit: {
    KOR: "등록",
    ENG: "Post",
    JPN: "登録",
    CHN: "发布",
    VIE: "Gửi",
    IDN: "Kirim"
  },
  feed1Content: {
    KOR: "캠프 끝나고 도쿄로 돌아간 Miya! 보컬 연습 열심히 하고 있어? 내가 보낸 안무 피드백 영상 체크해 봐! 😊",
    ENG: "Miya who went back to Tokyo after the camp! Are you practicing singing hard? Check out the choreography feedback video I sent you! 😊",
    JPN: "キャンプが終わって東京に戻ったMiya！ボーカルの練習頑張ってる？私が送ったダンスのフィードバック動画チェックしてみて！😊",
    CHN: "集训营落幕后回到东京的Miya！有在认真练声吗？记得查收我刚给你发的编舞改进比对录像哦！😊",
    VIE: "Miya đã quay lại Tokyo sau trại! Em đang luyện giọng chăm chỉ chứ? Hãy kiểm tra video phản hồi vũ đạo anh gửi nhé! 😊",
    IDN: "Miya yang kembali ke Tokyo setelah kamp! Apakah kamu berlatih vokal dengan giat? Periksa video umpan balik koreografi yang saya kirimkan! 😊"
  },
  feed1Comment: {
    KOR: "두 분의 협동 시너지가 오디션 평가에 매우 긍정적입니다!",
    ENG: "The collaborative synergy between you two is highly positive for audition evaluations!",
    JPN: "お二人の協同シナジーは、オーディション評価において非常に好影響です！",
    CHN: "你们两位展现出的合作默契与协同效益，在选秀评审中将获得极大青睐与加分！",
    VIE: "Sự kết hợp ăn ý giữa hai bạn rất tích cực cho các đánh giá thử giọng!",
    IDN: "Sinergi kolaboratif antara kalian berdua sangat positif untuk penilaian audisi!"
  },
  feed2Content: {
    KOR: "정민! 대시보드 커뮤니티 채널에 내 오늘 자 보컬 커버 올렸어. 트레이너 쌤이 라이브 때 봐주셨으면 좋겠다! 🎤🎶",
    ENG: "Jung-min! I uploaded my vocal cover of the day to the dashboard community channel. Hope the trainer checks it during the live session! 🎤🎶",
    JPN: "ジョンミン！ダッシュボードコミュニティチャンネルに私の今日のボーカルカバー動画をアップしたよ。トレーナーの先生がライブ配信で見てくれるといいな！🎤🎶",
    CHN: "正民！我已经在仪表盘的班级版块上传了今天的声乐翻唱Demo。真的超希望带课导师能在之后的直播答疑里指点一下！🎤🎶",
    VIE: "Jung-min! Mình đã tải lên bản cover giọng hát hôm nay lên kênh cộng đồng dashboard rồi. Mong thầy huấn luyện sẽ xem nó trong buổi live! 🎤🎶",
    IDN: "Jung-min! Saya mengunggah cover vokal saya hari ini ke saluran komunitas dasbor. Berharap guru pelatih memeriksanya saat sesi siaran langsung! 🎤🎶"
  },
  feed2Comment: {
    KOR: "와 Miya! 고음 부분 힘 빠지는 거 완전 해결됐네 대박!!",
    ENG: "Wow Miya! You totally solved the loss of power in high notes, amazing!!",
    JPN: "わあMiya！高音部分で息が抜ける問題が完全に解消されたね、すごい！！",
    CHN: "天哪Miya！以前唱高音发虚漏气的问题完全被纠正过来了，好厉害！！",
    VIE: "Oa Miya! Lỗi hụt hơi ở nốt cao đã được giải quyết hoàn toàn rồi, tuyệt quá!!",
    IDN: "Wah Miya! Kamu benar-benar mengatasi hilangnya kekuatan pada nada tinggi, luar biasa!!"
  },
  liveTitle: {
    KOR: "정기 글로벌 라이브 멘토링",
    ENG: "Regular Global Live Mentoring",
    JPN: "定期グローバルライブメンターリング",
    CHN: "高频次全球直播导师解惑",
    VIE: "Buổi cố vấn phát sóng trực tiếp toàn cầu định kỳ",
    IDN: "Mentoring Siaran Langsung Global Rutin"
  },
  liveSubtitle: {
    KOR: '"메이저 기획사 오디션 합격을 위한 비공개 Q&A 및 실시간 모니터링"',
    ENG: '"Private Q&A & Real-Time Monitoring for Major Agency Audition Success"',
    JPN: '"大手事務所オーディション合格のための非公開Q&Aおよびリアルタイムモニタリング"',
    CHN: '"旨在冲刺大牌公司选秀通关的内部加密答疑与实时面授监控"',
    VIE: '"Hỏi đáp riêng tư & Theo dõi thời gian thực để đỗ thử giọng công ty lớn"',
    IDN: '"Tanya Jawab Tertutup & Pemantauan Real-Time untuk Kelulusan Audisi Agensi Besar"'
  },
  liveHostKey: {
    KOR: "호스트",
    ENG: "Host",
    JPN: "ホスト",
    CHN: "主讲人",
    VIE: "Người điều hành",
    IDN: "Pemandu Sesi"
  },
  liveHostVal: {
    KOR: "KISAS 김철수 수석디렉터",
    ENG: "Chul-soo Kim, KISAS Chief Director",
    JPN: "KISAS キム・チョルス首席ディレクター",
    CHN: "KISAS 金哲洙 首席艺术总监",
    VIE: "Giám đốc trưởng KISAS Chul-soo Kim",
    IDN: "Chul-soo Kim, Direktur Utama KISAS"
  },
  liveTimeKey: {
    KOR: "일정",
    ENG: "Schedule",
    JPN: "日程",
    CHN: "具体时段",
    VIE: "Thời gian",
    IDN: "Jadwal"
  },
  liveTimeVal: {
    KOR: "5월 28일 오후 8시 (KST)",
    ENG: "May 28 at 8:00 PM (KST)",
    JPN: "5月28日 午後8時 (KST)",
    CHN: "5月28日 晚间8点整 (KST)",
    VIE: "20:00 ngày 28 tháng 5 (KST)",
    IDN: "28 Mei pukul 20.00 (KST)"
  },
  liveBtnSub: {
    KOR: "라이브 알림 신청하기",
    ENG: "Get Live Session Notification",
    JPN: "ライブ通知を申請する",
    CHN: "预约直播开播提醒",
    VIE: "Đăng ký thông báo live",
    IDN: "Daftar Notifikasi Siaran Langsung"
  },
  liveBtnSubscribed: {
    KOR: "알림 신청 완료 (해제)",
    ENG: "Notification Active (Cancel)",
    JPN: "通知設定済み (解除)",
    CHN: "已设置提醒 (取消)",
    VIE: "Đã bật thông báo (Hủy)",
    IDN: "Notifikasi Aktif (Batal)"
  },
  toastLiveSubscribed: {
    KOR: "🔔 라이브 알림 완료! Q&A 생중계 시작 30분 전 보이스 알림이 발송됩니다.",
    ENG: "🔔 Notification set! A voice alert will be sent 30 minutes before the Q&A live broadcast.",
    JPN: "🔔 通知設定完了！Q&Aライブ配信開始30分前にボイス通知をお送りします。",
    CHN: "🔔 预约设置成功！Q&A在线答疑直播开播前30分钟，系统将向您发送语音提示。",
    VIE: "🔔 Đã đặt thông báo! Âm thanh nhắc nhở sẽ được gửi 30 phút trước khi bắt đầu live hỏi đáp.",
    IDN: "🔔 Notifikasi aktif! Pengingat suara akan dikirim 30 menit sebelum siaran langsung Tanya Jawab dimulai."
  },
  toastLiveUnsubscribed: {
    KOR: "🔕 라이브 멘토링 알림 예약이 해제되었습니다.",
    ENG: "🔕 Live mentoring session alert has been canceled.",
    JPN: "🔕 ライブメンターリングの通知設定が解除されました。",
    CHN: "🔕 已成功取消该场次导师辅导课的直播预约提醒。",
    VIE: "🔕 Đã hủy đặt thông báo buổi cố vấn phát sóng trực tiếp.",
    IDN: "🔕 Pengingat sesi mentoring siaran langsung telah dibatal."
  },
  printTitle: {
    KOR: "KISAS x nextLMS AI K-Pop Camp",
    ENG: "KISAS x nextLMS AI K-Pop Camp",
    JPN: "KISAS x nextLMS AI K-Pop Camp",
    CHN: "KISAS x nextLMS AI K-Pop Camp",
    VIE: "KISAS x nextLMS AI K-Pop Camp",
    IDN: "KISAS x nextLMS AI K-Pop Camp"
  },
  printSubtitle: {
    KOR: "공식 아티스트 정밀 평가 성장 포트폴리오 및 오디션 제출용 프로필",
    ENG: "Official Artist Multi-Dimension Assessment Growth Portfolio & Audition Profile",
    JPN: "公式アーティスト精密評価成長ポートフォリオおよびオーディション提出用プロフィール",
    CHN: "学员综合素养精细评估追踪档案及娱乐公司选秀提报专用作品集",
    VIE: "Hồ sơ phát triển đánh giá nghệ sĩ chính thức & Hồ sơ thử giọng chuyên nghiệp",
    IDN: "Portofolio Pertumbuhan Penilaian Artis Resmi & Profil Audisi Khusus"
  },
  printMeta: {
    KOR: "발급번호: KISAS-2026-0521M • 발급일자: 2026. 05. 21 • 훈련생명: Miya (일본)",
    ENG: "No: KISAS-2026-0521M • Date: May 21, 2026 • Trainee: Miya (Japan)",
    JPN: "発行番号：KISAS-2026-0521M • 発行日：2026.05.21 • 研修生名：Miya (日本)",
    CHN: "归档编号：KISAS-2026-0521M • 日期：2026.05.21 • 学员姓名：Miya (日本)",
    VIE: "Mã số: KISAS-2026-0521M • Ngày cấp: 21.05.2026 • Học viên: Miya (Nhật Bản)",
    IDN: "Nomor: KISAS-2026-0521M • Tanggal: 21 Mei 2026 • Trainee: Miya (Jepang)"
  },
  portfolioReportTitle: {
    KOR: "아티스트 성장 역량 리포트",
    ENG: "Artist Core Competency Assessment Report",
    JPN: "アーティスト成長能力評価レポート",
    CHN: "练习生综合潜能与专业维度成长报告",
    VIE: "Báo cáo Đánh giá Năng lực Cốt lõi Nghệ sĩ",
    IDN: "Laporan Penilaian Kompetensi Inti Artis"
  },
  radarVocal: {
    KOR: "보컬 (Vocal)",
    ENG: "Vocal",
    JPN: "ボーカル (Vocal)",
    CHN: "声乐演绎 (Vocal)",
    VIE: "Thanh nhạc (Vocal)",
    IDN: "Vokal (Vocal)"
  },
  radarDance: {
    KOR: "댄스 (Dance)",
    ENG: "Dance",
    JPN: "ダンス (Dance)",
    CHN: "舞蹈张力 (Dance)",
    VIE: "Vũ đạo (Dance)",
    IDN: "Tari (Dance)"
  },
  radarVisual: {
    KOR: "비주얼 (Visual)",
    ENG: "Visual",
    JPN: "ビジュアル (Visual)",
    CHN: "外在表现 (Visual)",
    VIE: "Visual (Visual)",
    IDN: "Visual (Visual)"
  },
  radarAttitude: {
    KOR: "스타성 (Attitude)",
    ENG: "Star Quality (Attitude)",
    JPN: "スター性 (Attitude)",
    CHN: "舞台气场 (Attitude)",
    VIE: "Khí chất (Attitude)",
    IDN: "Pesona Bintang (Attitude)"
  },
  radarFitness: {
    KOR: "체력 (Fitness)",
    ENG: "Fitness/Core",
    JPN: "体力 (Fitness)",
    CHN: "体能储值 (Fitness)",
    VIE: "Thể lực (Fitness)",
    IDN: "Kebugaran/Inti (Fitness)"
  },
  vocalScale: {
    KOR: "🎙 보컬 (Vocal)",
    ENG: "🎙 Vocal",
    JPN: "🎙 ボーカル (Vocal)",
    CHN: "🎙 声乐演绎 (Vocal)",
    VIE: "🎙 Thanh nhạc (Vocal)",
    IDN: "🎙 Vokal (Vocal)"
  },
  danceScale: {
    KOR: "💃 댄스 (Dance)",
    ENG: "💃 Dance",
    JPN: "💃 ダンス (Dance)",
    CHN: "💃 舞蹈张力 (Dance)",
    VIE: "💃 Vũ đạo (Dance)",
    IDN: "💃 Tari (Dance)"
  },
  visualScale: {
    KOR: "📸 비주얼 (Visual)",
    ENG: "📸 Visual",
    JPN: "📸 ビジュアル (Visual)",
    CHN: "📸 外在表现 (Visual)",
    VIE: "📸 Visual (Visual)",
    IDN: "📸 Visual (Visual)"
  },
  attitudeScale: {
    KOR: "🌟 스타성 (Attitude)",
    ENG: "🌟 Star Quality (Attitude)",
    JPN: "🌟 スター性 (Attitude)",
    CHN: "🌟 舞台气场 (Attitude)",
    VIE: "🌟 Khí chất (Attitude)",
    IDN: "🌟 Pesona Bintang (Attitude)"
  },
  fitnessScale: {
    KOR: "🏋 체력/코어 (Fitness)",
    ENG: "🏋 Fitness/Core",
    JPN: "🏋 体力/体幹 (Fitness)",
    CHN: "🏋 体能/核心力量 (Fitness)",
    VIE: "🏋 Thể lực/Cơ cốt lõi (Fitness)",
    IDN: "🏋 Kebugaran/Inti (Fitness)"
  },
  danceBadge: {
    KOR: "최고",
    ENG: "Max",
    JPN: "最高",
    CHN: "封顶",
    VIE: "Max",
    IDN: "Maks"
  },
  beforeAfterTitle: {
    KOR: "Before & After 성과 증명 비디오 플레이어",
    ENG: "Before & After Performance Proof Video Player",
    JPN: "Before & After 成果証明ビデオプレイヤー",
    CHN: "训练营前/后蜕变效果实证视频播放组件",
    VIE: "Trình phát video chứng minh hiệu suất Trước & Sau",
    IDN: "Pemutar Video Bukti Kinerja Sebelum & Sesudah Latihan"
  },
  beforeLabel: {
    KOR: "DAY 1: 최초 평가 영상",
    ENG: "DAY 1: Initial Assessment Video",
    JPN: "DAY 1：初回評価映像",
    CHN: "DAY 1：开班初始水平考核影像",
    VIE: "NGÀY 1: Video đánh giá đầu tiên",
    IDN: "HARI 1: Video Penilaian Awal"
  },
  beforeDesc: {
    KOR: "Day 1 최초 입소 보컬 테스트",
    ENG: "Day 1 Initial Camp Admission Vocal Test",
    JPN: "Day 1 入所時の初回ボーカルテスト",
    CHN: "入营第一天初始歌喉基准线评测",
    VIE: "Kiểm tra thanh nhạc ngày đầu tiên vào trại",
    IDN: "Uji Vokal Penerimaan Kamp Hari Pertama"
  },
  afterLabel: {
    KOR: "DAY 14: 파이널 무대 수료",
    ENG: "DAY 14: Final Showcase Graduation",
    JPN: "DAY 14：ファイナルステージ修了映像",
    CHN: "DAY 14：毕业舞台终极汇报影像",
    VIE: "NGÀY 14: Sân khấu tốt nghiệp cuối cùng",
    IDN: "HARI 14: Wisuda Showcase Akhir"
  },
  afterDesc: {
    KOR: "Day 14 파이널 무대 수료 영상",
    ENG: "Day 14 Final Debut Stage Graduation Video",
    JPN: "Day 14 ファイナルデビュー舞台修了映像",
    CHN: "集训第14天毕业汇报大合唱及独唱音画",
    VIE: "Video tốt nghiệp sân khấu ra mắt ngày 14",
    IDN: "Video Wisuda Panggung Debut Akhir Hari 14"
  },
  opinionTitle: {
    KOR: "🗣 담당 디렉터 코치진 최종 의견 리포트",
    ENG: "🗣 Director & Faculty Final Assessment Report",
    JPN: "🗣 担当ディレクター・講師陣の最終意見レポート",
    CHN: "🗣 导师团主客观考核定性评语总结报告",
    VIE: "🗣 Báo cáo Nhận xét Đánh giá Cuối cùng của Cố vấn",
    IDN: "🗣 Laporan Penilaian Akhir Direktur & Staf Pengajar"
  },
  opinionPrint: {
    KOR: "🗣 담당 디렉터 코치진 최종 의견",
    ENG: "🗣 Director & Faculty Final Opinion",
    JPN: "🗣 担当ディレクター・講師陣の最終意見",
    CHN: "🗣 负责导师及助教团官方结业寄语",
    VIE: "🗣 Nhận xét Cuối cùng của Cố vị & Giảng viên",
    IDN: "🗣 Opini Akhir Direktur & Staf Pengajar"
  },
  opinionContent: {
    KOR: `"연습생 Miya는 지난 14일간의 집중 KISAS 오프라인 트레이닝 캠프 수료 및 일본 귀국 후 LMS를 이용한 사후 1:1 트레이닝에 적극 참여하였습니다. 특히 보컬 파트 연구개 상하 확보를 통한 F5~G5 구간 성대 긴장도 제어가 비약적으로 발전했으며, 댄스 파트는 현재 K-Pop 메이저 데뷔에 적합한 탄탄한 하체 밸런스를 입증하여 오디션 합격 가능성이 매우 높음을 강력히 보증합니다."`,
    ENG: `"Trainee Miya completed the intensive 14-day KISAS offline training camp and has actively participated in post-camp 1:1 training via the LMS after returning to Japan. Particularly in vocals, her control over vocal fold tension in the F5-G5 range by opening the soft palate vertically has progressed dramatically. In dance, she demonstrated solid lower-body balance suited for a major K-Pop debut, strongly warranting a very high chance of passing auditions."`,
    JPN: `"研修生Miyaは、過去14日間の集中KISASオフラインキャンプを修了し、日本に帰国後もLMSを利用した事後1:1オンラインレッスンに非常に熱心に参加しました。特に歌唱において、軟口蓋の上下スペースの確保によるF5〜G5音域の声帯緊張コントロール能力が飛躍的に成長しました。ダンスでは、現在のK-Popメジャーデビューに求められる極めて安定した下半身の軸バランスを実証し、各社のオーディションに合格する可能性が非常に高いことを強く保証します。"`,
    CHN: `"练习生Miya在顺利通过为期14天的高强度线下KISAS封闭式实训营后，回到日本仍积极利用LMS平台开展远端1:1纠音辅导。在声乐领域，通过上下打开软腭的物理发声腔体调整，使其在F5~G5高音阶的声带拉伸控制度上取得了飞跃性的实质突破；舞蹈层面则展现出极具职业化水准的腰腹核心与底盘稳定性，与当前K-Pop大型娱乐厂牌严苛的选秀录用标准深度契合，我们一致坚定看好其具备极高的出道胜出概率。"`,
    VIE: `"Học viên Miya đã hoàn thành trại huấn luyện ngoại tuyến KISAS tập trung trong 14 ngày qua và tích cực tham gia huấn luyện 1:1 sau trại qua LMS sau khi trở về Nhật Bản. Đặc biệt về thanh nhạc, khả năng kiểm soát độ căng của dây thanh quản trong phạm vi F5-G5 bằng cách mở rộng vòm miệng mềm theo chiều dọc đã tiến bộ vượt bậc. Về vũ đạo, cô đã chứng tỏ sự thăng bằng thân dưới vững chắc rất phù hợp để ra mắt K-Pop chính thức, bảo đảm cơ hội đỗ thử giọng cực kỳ cao."`,
    IDN: `"Trainee Miya menyelesaikan kamp latihan luring intensif KISAS selama 14 hari dan telah berpartisipasi aktif dalam latihan 1:1 pasca-kamp via LMS setelah kembali ke Jepang. Terutama pada vokal, kontrol ketegangan pita suara pada rentang F5-G5 dengan membuka langit-langit lunak secara vertikal berkembang sangat pesat. Pada tarian, ia menunjukkan keseimbangan tubuh bagian bawah kokoh yang sangat cocok untuk debut K-Pop skala besar, sangat menjamin peluang kelulusan audisi yang tinggi."`
  },
  opinionSignature: {
    KOR: "— KISAS 글로벌 아티스트 심사위원 및 수석 코치진 일동",
    ENG: "— KISAS Global Artist Jury & Chief Coaching Faculty",
    JPN: "— KISAS グローバルアーティスト審査員および首席コーチ陣一同",
    CHN: "— KISAS 全球艺人评委会及全体骨干导师团",
    VIE: "— Hội đồng Giám khảo Nghệ sĩ Toàn cầu & Toàn thể Giảng viên Trưởng KISAS",
    IDN: "— Dewan Juri Artis Global & Seluruh Staf Pengajar Utama KISAS"
  },
  certStatus: {
    KOR: "🔒 블록체인 위변조 방지 인증 수료증 발급 완료",
    ENG: "🔒 Blockchain-Secured Certified Tamper-Proof Certificate Issued",
    JPN: "🔒 ブロックチェーン改ざん防止認証済修了証発行完了",
    CHN: "🔒 联盟链防伪存证结业资质证书已核发备案",
    VIE: "🔒 Đã cấp Chứng chỉ Đào tạo Chống giả mạo được bảo mật bằng Blockchain",
    IDN: "🔒 Sertifikat Anti-Pemalsuan Aman Blockchain Telah Diterbitkan"
  },
  certDesc: {
    KOR: "KISAS 공식 K-Pop 인큐베이팅 캠프 디지털 수료증",
    ENG: "KISAS Official K-Pop Incubating Camp Digital Certificate",
    JPN: "KISAS公式K-Popイン큐베ーティングキャンプデジタル修了証",
    CHN: "KISAS官方K-Pop创意与表演特训营结业凭证",
    VIE: "Chứng nhận Kỹ thuật số Trại Ươm mầm K-Pop Chính thức KISAS",
    IDN: "Sertifikat Digital Kamp Inkubasi K-Pop Resmi KISAS"
  },
  btnPdfBuild: {
    KOR: "기획사 제출용 포트폴리오 빌드 중... ({progress}%)",
    ENG: "Building Agency-Submission Portfolio... ({progress}%)",
    JPN: "事務所提出用ポートフォリオ構築中... ({progress}%)",
    CHN: "正在生成娱乐经纪公司专用格式作品集... ({progress}%)",
    VIE: "Đang tạo Hồ sơ nộp cho Công ty Giải trí... ({progress}%)",
    IDN: "Membangun Portofolio Pengajuan Agensi... ({progress}%)"
  },
  btnPdfDownload: {
    KOR: "[ 📄 기획사 제출용 디지털 프로필 PDF 다운로드 ]",
    ENG: "[ 📄 Download Digital Profile PDF for Agency Submission ]",
    JPN: "[ 📄 事務所提出用デジタルプロフィールPDFダウンロード ]",
    CHN: "[ 📄 导出选秀专用电子履历数字档案PDF ]",
    VIE: "[ 📄 Tải xuống PDF Hồ sơ Số nộp cho Công ty Giải trí ]",
    IDN: "[ 📄 Unduh PDF Profil Digital untuk Pengajuan Agensi ]"
  },
  footerText: {
    KOR: "© 2026 KISAS x nextLMS. World's 1st AI K-Pop Camp Hybrid LMS. 본 포털은 단기 캠프 종료 후 글로벌 지망생들의 1:1 트레이닝과 성장을 사후 관리하는 특화 패키지 솔루션 데모입니다.",
    ENG: "© 2026 KISAS x nextLMS. World's 1st AI K-Pop Camp Hybrid LMS. This portal is a specialized package solution demo for managing post-camp 1:1 training and growth of global aspirants after the short-term camp ends.",
    JPN: "© 2026 KISAS x nextLMS. World's 1st AI K-Pop Camp Hybrid LMS. 本ポータルは、短期キャンプ終了後のグローバル志望生たちの1:1レッスンと成長を継続管理する特化型パッケージソリューションのデモです。",
    CHN: "© 2026 KISAS x nextLMS. 全球首家AI K-Pop混合式LMS。本系统为短期集训圆满结束后，针对海内外预备艺人的后继日常1:1精准追踪与技能成长而定制的专属演示版本。",
    VIE: "© 2026 KISAS x nextLMS. Trại K-Pop AI Hybrid LMS đầu tiên trên thế giới. Cổng thông tin này là bản demo giải pháp trọn gói chuyên dụng để quản lý huấn luyện 1:1 sau trại và sự phát triển của các học viên toàn cầu sau khi trại kết thúc.",
    IDN: "© 2026 KISAS x nextLMS. LMS Hibrida Kamp K-Pop AI Pertama di Dunia. Portal ini merupakan demo solusi paket khusus untuk mengelola latihan 1:1 pasca-kamp dan pertumbuhan calon artis global setelah kamp berakhir."
  },
  modalDesk: {
    KOR: "TRAINING DESK",
    ENG: "TRAINING DESK",
    JPN: "TRAINING DESK",
    CHN: "TRAINING DESK",
    VIE: "TRAINING DESK",
    IDN: "TRAINING DESK"
  },
  modalTitle: {
    KOR: "세션 매칭",
    ENG: "Session Matching",
    JPN: "セッションマッチング",
    CHN: "专属课席预约",
    VIE: "Khớp phiên học",
    IDN: "Pencocokan Sesi"
  },
  modalTimeLabel: {
    KOR: "원하는 예약 시간대",
    ENG: "Preferred Time Slot",
    JPN: "希望する予約時間帯",
    CHN: "选择合适的空闲时段",
    VIE: "Khung giờ ưu tiên đặt",
    IDN: "Slot Waktu Pilihan"
  },
  modalSubmit: {
    KOR: "확인 및 일정 플래닝 완료",
    ENG: "Confirm & Complete Planning",
    JPN: "確認および計画完了",
    CHN: "确认并添加至我的日程",
    VIE: "Xác nhận & Hoàn tất kế hoạch",
    IDN: "Konfirmasi & Selesaikan Rencana"
  },
  toastWaitlist: {
    KOR: "이 연습 구역은 현재 매진되었습니다. 1:1 대기 리스트에 추가되었습니다.",
    ENG: "This practice zone is currently fully booked. You have been added to the 1:1 waitlist.",
    JPN: "この練習エリアは現在満室です。1:1キャンセル待ちリストに追加されました。",
    CHN: "当前练习室空余座席已售罄。已将您自动归入1:1排队候选队列中。",
    VIE: "Khu vực luyện tập này hiện đã hết chỗ. Bạn đã được thêm vào danh sách chờ 1:1.",
    IDN: "Area latihan ini sedang penuh. Anda telah ditambahkan ke daftar tunggu 1:1."
  },
  toastReserveSuccess: {
    KOR: "자율 훈련 일정이 성공적으로 플래닝되었습니다!",
    ENG: "practice schedule has been successfully planned!",
    JPN: "自主トレーニング日程が正常に登録されました！",
    CHN: "课外练歌练舞日程已成功同步至您的小我计划表！",
    VIE: "lịch tự luyện tập đã được lên kế hoạch thành công!",
    IDN: "jadwal latihan mandiri telah berhasil direncanakan!"
  },
  toastUploadSuccess: {
    KOR: "업로드 완료 및 KISAS AI 발성/골반 축 교정 분석이 완료되었습니다.",
    ENG: "uploaded successfully! KISAS AI vocal & pelvic axis correction analysis has been completed.",
    JPN: "のアップロードが完了し、KISAS AIによる発声・骨盤軸補정分析が完了しました。",
    CHN: "上传成功！KISAS AI声乐发声与骨盆重心轴纠偏测评已全部完成。",
    VIE: "đã tải lên thành công! Phân tích hiệu chỉnh giọng hát & trục khung chậu của KISAS AI đã hoàn thành.",
    IDN: "berhasil diunggah! Analisis koreksi vokal & poros pelvis KISAS AI telah selesai."
  }
};
