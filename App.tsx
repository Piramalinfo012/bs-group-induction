
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Clock, HeartHandshake,
  Factory, Activity, CalendarDays, UserCheck, 
  Coffee, Utensils, Box, Cpu, Timer, Target, Eye, 
  Award, Briefcase, CreditCard, Laptop, HelpCircle,
  MapPin, Milestone, TrendingUp, Users, HardHat,
  Database, Zap, Flame, Globe, Layers, Settings, User,
  Compass, Navigation, Calendar, ShieldAlert, Lock, Network
} from 'lucide-react';
import { INDUCTION_DATA, INDUCTION_FLOW_DAY_1, DEPARTMENTS } from './data';

// --- Ultra-Smooth Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 50, 
    opacity: 0, 
    scale: 0.9,
    rotateX: -15,
    z: -100
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    rotateX: 0,
    z: 0,
    transition: { 
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};

// --- Specialized 3D/Animated Models ---

const CorporatePillar3D = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12" style={{ perspective: '2000px' }}>
    <motion.div 
      animate={{ rotateY: 360, y: [0, -15, 0] }}
      transition={{ rotateY: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      className="relative w-48 h-48 md:w-56 md:h-56"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-white border-[6px] border-orange-600/10 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl" style={{ transform: 'translateZ(28px)' }}>
        <img src="https://i.ibb.co/hxLDF92j/Screenshot-2026-02-16-221710.png" alt="BS Logo" className="w-[85%] h-auto relative z-10" />
      </div>
      <div className="absolute inset-0 bg-neutral-900 border-[6px] border-orange-600 rounded-xl flex flex-col items-center justify-center" style={{ transform: 'rotateY(180deg) translateZ(28px)' }}>
        <h3 className="text-white font-black heading-font text-2xl tracking-[0.2em]">STEEL</h3>
      </div>
    </motion.div>
  </div>
);

const DirectorProfile3D = () => (
  <div className="relative w-64 h-80 md:w-80 md:h-[30rem] flex items-center justify-center" style={{ perspective: '1500px' }}>
    <motion.div variants={itemVariants} className="relative w-full h-full rounded-[3rem] bg-neutral-900 border-4 border-orange-600/30 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center pt-10">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-orange-500 bg-neutral-800 flex items-center justify-center overflow-hidden">
          <img src="https://i.ibb.co/wNRn0gp3/Screenshot-2026-02-16-225917.png" alt="Ashish Agrawal" className="w-full h-full object-cover" />
        </div>
        <div className="mt-8 text-center px-6">
          <h3 className="text-white font-black text-2xl heading-font leading-tight">ASHISH<br/><span className="text-orange-600">AGRAWAL</span></h3>
          <p className="text-neutral-400 font-black uppercase text-[10px] tracking-[0.4em] mt-6">Managing Director</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const DigitalCore3D = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
    <motion.div 
      animate={{ rotateY: 360, rotateX: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-32 md:w-48 md:h-48"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 border-4 border-orange-500/30 rounded-xl" style={{ transform: 'translateZ(60px)' }} />
      <div className="absolute inset-0 border-4 border-orange-500/30 rounded-xl" style={{ transform: 'rotateY(90deg) translateZ(60px)' }} />
      <div className="absolute inset-0 border-4 border-orange-500/30 rounded-xl" style={{ transform: 'rotateX(90deg) translateZ(60px)' }} />
      
      <div className="absolute inset-0 bg-orange-600/10 backdrop-blur-sm border-2 border-orange-400/50 rounded-lg flex items-center justify-center shadow-[0_0_50px_rgba(255,100,0,0.4)]" style={{ transform: 'translateZ(30px)' }}>
        <Cpu size={40} className="text-orange-400 animate-pulse" />
      </div>
    </motion.div>
    
    {/* Orbiting Binary Ring 1 */}
    <motion.div 
      animate={{ rotateZ: 360, rotateX: 45 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-orange-500/20 border-dashed"
      style={{ transformStyle: 'preserve-3d' }}
    >
       <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-orange-500 font-mono">10110</div>
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-orange-500 font-mono">01001</div>
    </motion.div>

    {/* Orbiting Binary Ring 2 */}
    <motion.div 
      animate={{ rotateZ: -360, rotateY: 45 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-orange-300/10 border-dotted"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[10px] md:text-xs text-orange-400 font-mono">1</div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10px] md:text-xs text-orange-400 font-mono">0</div>
    </motion.div>
  </div>
);

const ServerBlock3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      animate={{ rotateY: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-40 md:w-40 md:h-52 bg-neutral-900 border-2 border-orange-500/50 rounded-xl flex flex-col items-center justify-between py-4 shadow-[0_0_30px_rgba(255,77,0,0.2)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {[...Array(5)].map((_, i) => (
         <div key={i} className="w-24 md:w-32 h-2 bg-orange-600/20 rounded-full animate-pulse" />
      ))}
      <div className="absolute inset-0 bg-orange-500/10 rounded-xl" style={{ transform: 'translateZ(-20px)' }} />
      <div className="absolute inset-0 bg-orange-500/10 rounded-xl" style={{ transform: 'translateZ(20px)' }} />
    </motion.div>
  </div>
);

const CoinStack3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      animate={{ rotateY: 360, rotateX: 10 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-32 md:w-40 md:h-40"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {[0, 15, 30].map((y, i) => (
        <div key={i} className="absolute inset-0 rounded-full border-4 border-orange-500 bg-neutral-900 flex items-center justify-center text-orange-500 font-bold text-2xl" style={{ transform: `translateY(${-y}px) rotateX(90deg)` }}>
          ₹
        </div>
      ))}
    </motion.div>
  </div>
);

const GearAssembly3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute">
      <Settings size={120} className="text-orange-600" />
    </motion.div>
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute">
      <Settings size={80} className="text-neutral-700" />
    </motion.div>
  </div>
);

const DocumentStack3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      animate={{ rotateY: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-32 h-40 md:w-40 md:h-52 bg-white text-black p-4 rounded-lg shadow-2xl flex flex-col gap-2"
      style={{ transform: 'rotateZ(-5deg)' }}
    >
      <div className="h-2 w-2/3 bg-neutral-300 rounded" />
      <div className="h-2 w-full bg-neutral-200 rounded" />
      <div className="h-2 w-full bg-neutral-200 rounded" />
      <div className="absolute top-0 right-0 p-2"><div className="w-4 h-4 bg-orange-600 rounded-full" /></div>
    </motion.div>
  </div>
);

const VisionGlobe3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      animate={{ rotateY: 360, rotateX: 15 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-orange-500/30"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {[0, 45, 90, 135].map((deg, i) => (
        <div key={i} className="absolute inset-0 rounded-full border border-orange-500/20" style={{ transform: `rotateY(${deg}deg)` }} />
      ))}
      <div className="absolute inset-0 rounded-full border border-orange-500/20" style={{ transform: 'rotateX(90deg)' }} />
      <div className="absolute inset-0 rounded-full bg-orange-600/10 backdrop-blur-sm" />
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-orange-500/40" />
      
      <motion.div 
         animate={{ rotate: -360 }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute -inset-4 border border-dashed border-orange-400/20 rounded-full"
      />
    </motion.div>
  </div>
);

const MissionTarget3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      initial={{ rotateX: 40, rotateZ: -10 }}
      animate={{ rotateZ: 350 }} 
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
       {[1, 2, 3].map((i) => (
         <div key={i} className="absolute rounded-full border-4 border-orange-500/30 shadow-[0_0_15px_rgba(255,77,0,0.1)]" 
              style={{ 
                width: `${100 - i * 20}%`, 
                height: `${100 - i * 20}%`,
                transform: `translateZ(${i * 10}px)` 
              }} 
         />
       ))}
       <div className="absolute w-4 h-4 bg-orange-600 rounded-full shadow-[0_0_20px_#ff4d00]" style={{ transform: 'translateZ(40px)' }} />
       
       <motion.div 
         animate={{ z: [100, 40] }}
         transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
         className="absolute w-2 h-16 bg-white w-1"
         style={{ transform: 'rotateX(90deg) translateY(-50%)' }}
       />
    </motion.div>
  </div>
);

const TeamSynergy3D = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center" style={{ perspective: '1000px' }}>
    <motion.div 
      animate={{ rotateY: 360, rotateZ: 10 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
      style={{ transformStyle: 'preserve-3d' }}
    >
       {/* Central Core */}
       <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-orange-600 rounded-full shadow-[0_0_30px_#ff4d00]" style={{ transform: 'translateZ(0)' }} />
       
       {/* Orbiting Ring 1 */}
       <motion.div 
         animate={{ rotateX: 360 }}
         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
         className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-orange-500/30"
         style={{ transformStyle: 'preserve-3d' }}
       >
         <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2" />
       </motion.div>

       {/* Orbiting Ring 2 */}
       <motion.div 
         animate={{ rotateY: 360 }}
         transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
         className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-orange-500/20"
         style={{ transformStyle: 'preserve-3d' }}
       >
         <div className="absolute top-1/2 right-0 w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_10px_orange] translate-x-1/2 -translate-y-1/2" />
       </motion.div>
       
       {/* Orbiting Ring 3 */}
       <motion.div 
         animate={{ rotateZ: 360 }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full border border-orange-500/10 border-dashed"
         style={{ transformStyle: 'preserve-3d' }}
       >
         <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-neutral-200 rounded-full -translate-x-1/2 translate-y-1/2" />
       </motion.div>
    </motion.div>
  </div>
);

const Footer3D = () => (
  <div className="relative flex flex-col items-center justify-center py-8" style={{ perspective: '800px' }}>
    <p className="text-sm md:text-lg text-neutral-500 font-bold uppercase tracking-[0.4em] mb-6">Designed & Developed By</p>
    <motion.div 
      className="relative"
      initial={{ rotateX: 20 }}
      animate={{ rotateX: [20, 0, 20], rotateY: [-10, 10, -10] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
       {/* Extrusion Layers */}
       {[...Array(8)].map((_, i) => (
         <h3 key={i} className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-orange-900 absolute top-0 left-0 select-none" 
             style={{ transform: `translateZ(-${i * 2}px)`, opacity: 0.5 }}>
           DEEPAK <span className="text-orange-800">SAHU</span>
         </h3>
       ))}
       
       {/* Front Layer */}
       <h3 className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-white relative z-10"
           style={{ transform: 'translateZ(1px)', textShadow: '0 0 20px rgba(255,77,0,0.6)' }}>
         DEEPAK <span className="text-orange-500">SAHU</span>
       </h3>
       
       {/* Reflection/Glow */}
       <div className="absolute -inset-4 bg-orange-500/10 blur-xl rounded-full" style={{ transform: 'translateZ(-50px) scale(1.5)' }} />
    </motion.div>
  </div>
);

const SlideHeader = ({ sub, title }: { sub: string, title: string }) => (
  <motion.div variants={itemVariants} className="mb-8 md:mb-12">
    <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} transition={{ duration: 0.8 }} className="h-1 bg-orange-600 mb-4 md:mb-6" />
    <p className="text-orange-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-2">{sub}</p>
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black heading-font uppercase text-white tracking-tighter leading-[1.1]">{title}</h2>
  </motion.div>
);

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 21;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
        if (index !== activeSlide) setActiveSlide(index);
      }
    };
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeSlide]);

  const slideContent = useMemo(() => [
    { type: 'hero' }, { type: 'message' }, { type: 'history' }, { type: 'vision' }, { type: 'mission' },
    { type: 'business_verticals' }, { type: 'org_structure' }, { type: 'day1_flow_list' },
    { type: 'detail', ...INDUCTION_FLOW_DAY_1[0], icon: <Users />, sub: "Phase 01" },
    { type: 'detail', ...INDUCTION_FLOW_DAY_1[1], icon: <UserCheck />, sub: "Phase 02" },
    { type: 'detail', ...INDUCTION_FLOW_DAY_1[2], icon: <Factory />, sub: "Phase 03" },
    { type: 'detail', ...INDUCTION_FLOW_DAY_1[3], icon: <Briefcase />, sub: "Phase 04" },
    { type: 'lunch' }, { type: 'policy_attendance' }, { type: 'policy_leave' },
    { type: 'policy_conduct' }, { type: 'financial_payroll' }, { type: 'financial_benefits' },
    { type: 'tea' }, { type: 'it_systems' }, { type: 'qa_feedback' }, { type: 'thank_you' }
  ], []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-white relative">
      {/* Progress Counter */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-end gap-2 heading-font">
        <span className="text-3xl md:text-5xl font-black text-orange-500">{(activeSlide + 1).toString().padStart(2, '0')}</span>
        <span className="text-neutral-600 font-bold mb-1 md:mb-2 text-xs md:text-base">/ {totalSlides}</span>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,77,0,0.08),_transparent_80%)]" />
      </div>

      <div ref={containerRef} className="snap-container h-full w-full scroll-smooth">
        {slideContent.map((slide, i) => (
          <section key={i} className="snap-slide relative flex items-center justify-center p-6 md:p-20 overflow-hidden">
            <motion.div 
              variants={containerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }} 
              className="max-w-6xl w-full relative z-10"
              style={{ willChange: "opacity, transform", perspective: "1000px" }}
            >
              {/* SLIDE: HERO */}
              {slide.type === 'hero' && (
                <div className="text-center flex flex-col items-center">
                  <motion.p variants={itemVariants} className="text-orange-500 font-black uppercase tracking-[0.8em] text-[10px] md:text-sm mb-6 opacity-80">ESTABLISHED LEGACY • RAIGARH</motion.p>
                  <motion.div variants={itemVariants}><CorporatePillar3D /></motion.div>
                  <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-9xl font-black heading-font leading-[0.9] tracking-tighter mb-8 text-white uppercase">MAKING <br /> <span className="text-orange-600">STRENGTH.</span></motion.h1>
                  <motion.div variants={itemVariants} className="space-y-4">
                    <p className="text-xl md:text-3xl text-white font-light uppercase tracking-[0.3em]">WELCOME TO THE <span className="font-black text-orange-500">FAMILY.</span></p>
                  </motion.div>
                </div>
              )}

              {/* SLIDE: MD MESSAGE */}
              {slide.type === 'message' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div>
                    <SlideHeader sub="Leadership Perspective" title="MD Message" />
                    <motion.div variants={itemVariants} className="space-y-10">
                      <p className="text-xl md:text-3xl lg:text-4xl italic text-neutral-200 leading-tight font-light">"{INDUCTION_DATA.mdMessage.text}"</p>
                      <div className="pt-8 border-t border-neutral-800">
                        <p className="text-2xl md:text-4xl font-black heading-font">{INDUCTION_DATA.mdMessage.name}</p>
                        <p className="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mt-3">{INDUCTION_DATA.mdMessage.title}</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className="flex justify-center"><DirectorProfile3D /></motion.div>
                </div>
              )}

              {/* SLIDE: HISTORY */}
              {slide.type === 'history' && (
                <div>
                  <SlideHeader sub="The Evolution" title="Our Legacy" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {INDUCTION_DATA.timeline.map((t, idx) => (
                      <motion.div key={idx} variants={itemVariants} className="p-8 h-56 md:h-64 bg-neutral-900/60 rounded-[2.5rem] border border-white/5 hover:border-orange-500/50 transition-all flex flex-col justify-between shadow-xl">
                        <span className="text-4xl font-black text-orange-500 block">{t.year}</span>
                        <p className="text-[11px] text-neutral-300 font-black uppercase tracking-wider leading-relaxed">{t.event}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: VISION MISSION */}
              {/* SLIDE: VISION */}
              {slide.type === 'vision' && (
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 p-8">
                  <motion.div variants={itemVariants} className="flex-shrink-0">
                     <VisionGlobe3D />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <SlideHeader sub="Future Focus" title="Our Vision" />
                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-4xl">
                      {INDUCTION_DATA.vision}
                    </motion.p>
                  </div>
                </div>
              )}

              {/* SLIDE: MISSION */}
              {slide.type === 'mission' && (
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 p-8">
                  <motion.div variants={itemVariants} className="flex-shrink-0">
                     <MissionTarget3D />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <SlideHeader sub="Our Commitment" title="Our Mission" />
                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-4xl">
                      {INDUCTION_DATA.mission}
                    </motion.p>
                  </div>
                </div>
              )}

              {/* SLIDE: BUSINESS VERTICALS */}
              {slide.type === 'business_verticals' && (
                <div>
                  <SlideHeader sub="Strategic Reach" title="Verticals" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {INDUCTION_DATA.businessVerticals.map((v, idx) => (
                      <motion.div key={idx} variants={itemVariants} className="p-10 bg-neutral-900/60 rounded-[3rem] border border-white/5 group hover:bg-orange-600/10 transition-all">
                        <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all"><Factory /></div>
                        <h4 className="text-white font-black uppercase mb-4 tracking-widest">{v.title}</h4>
                        <p className="text-neutral-500 text-xs leading-relaxed">{v.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: ORG STRUCTURE */}
              {slide.type === 'org_structure' && (
                <div>
                  <SlideHeader sub="Functional Map" title="Departments" />
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEPARTMENTS.map((dept, idx) => (
                      <motion.div key={idx} variants={itemVariants} className="p-8 bg-neutral-900/40 rounded-[2rem] border border-white/5 flex flex-col items-center text-center">
                         <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mb-4"><Users size={20} /></div>
                         <h4 className="text-white font-black text-[10px] uppercase tracking-widest">{dept.name}</h4>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE: DAY 1 FLOW */}
              {slide.type === 'day1_flow_list' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div>
                     <SlideHeader sub="The Roadmap" title="Day 01 Agenda" />
                     <p className="text-neutral-400 text-xl font-light">A synchronized journey to integrate you into the core DNA of BS Sponge.</p>
                   </div>
                   <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-4 scrollbar-hide">
                     {INDUCTION_FLOW_DAY_1.map((item, idx) => (
                       <motion.div key={idx} variants={itemVariants} className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl flex items-center gap-6">
                         <span className="text-orange-500 font-black text-xs w-24">{item.time}</span>
                         <span className="text-white font-bold uppercase text-xs tracking-wider">{item.session}</span>
                       </motion.div>
                     ))}
                   </div>
                </div>
              )}

              {/* SLIDE: DETAIL (ORIENTATIONS) */}
              {slide.type === 'detail' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7">
                    <SlideHeader sub={slide.sub || "Orientation"} title={slide.session || ""} />
                    <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-neutral-300 font-light leading-snug mb-16">{slide.description}</motion.p>
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-6 p-6 bg-orange-600/10 border border-orange-500/20 rounded-[2rem]">
                      <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white"><UserCheck /></div>
                      <div>
                         <p className="text-[9px] text-neutral-500 font-black uppercase tracking-[0.4em]">Speaker</p>
                         <p className="text-white font-black uppercase">{slide.conductedBy}</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-[5rem] bg-neutral-900 border-8 border-orange-500/20 flex items-center justify-center text-orange-600">
                      {
                        slide.sub === "Phase 03" ? <GearAssembly3D /> : 
                        slide.sub === "Phase 01" ? <TeamSynergy3D /> :
                        React.cloneElement(slide.icon as React.ReactElement, { size: 120, strokeWidth: 1 })
                      }
                    </div>
                  </motion.div>
                </div>
              )}

              {/* SLIDE: LUNCH & TEA */}
              {['lunch', 'tea'].includes(slide.type) && (
                <div className="text-center">
                   <motion.div variants={itemVariants} className="flex justify-center mb-12">
                     {slide.type === 'lunch' ? <Utensils size={120} className="text-orange-500" /> : <Coffee size={120} className="text-orange-500" />}
                   </motion.div>
                   <motion.h2 variants={itemVariants} className="text-7xl md:text-9xl font-black heading-font tracking-tighter uppercase mb-10">
                      {slide.type === 'lunch' ? 'LUNCH' : 'TEA'} <br/><span className="text-orange-600">{slide.type === 'lunch' ? 'BREAK.' : 'RECHARGE.'}</span>
                   </motion.h2>
                   <motion.div variants={itemVariants} className="inline-block px-12 py-6 bg-white text-black font-black text-2xl uppercase tracking-[0.3em] rounded-full">
                      {slide.type === 'lunch' ? '01:30 PM' : '03:15 PM'}
                   </motion.div>
                </div>
              )}

              {/* SLIDE: ATTENDANCE */}
              {slide.type === 'policy_attendance' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                   <div>
                     <SlideHeader sub="Discipline" title="Attendance" />
                     <div className="space-y-4">
                       {INDUCTION_DATA.policies.attendance.guidelines.map((g, idx) => (
                         <motion.div key={idx} variants={itemVariants} className="p-6 bg-neutral-900/60 rounded-2xl border-l-4 border-orange-600 flex items-center gap-6">
                            <Clock className="text-orange-500" />
                            <p className="text-neutral-300 font-medium">{g}</p>
                         </motion.div>
                       ))}
                     </div>
                   </div>
                   <motion.div variants={itemVariants} className="flex justify-center">
                     <DocumentStack3D />
                   </motion.div>
                </div>
              )}

              {/* SLIDE: LEAVE */}
              {slide.type === 'policy_leave' && (
                <div>
                  <SlideHeader sub="Welfare" title="Leave Benefits" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <motion.div variants={itemVariants} className="p-10 bg-neutral-900/60 rounded-[3rem] border border-white/5">
                        <CalendarDays className="text-orange-500 mb-6" size={40} />
                        <h4 className="text-white font-black uppercase mb-4 tracking-widest">Casual Leave</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">{INDUCTION_DATA.policies.leave.casual[0]}</p>
                     </motion.div>
                     <motion.div variants={itemVariants} className="p-10 bg-neutral-900/60 rounded-[3rem] border border-white/5">
                        <HeartHandshake className="text-orange-500 mb-6" size={40} />
                        <h4 className="text-white font-black uppercase mb-4 tracking-widest">Marriage</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">{INDUCTION_DATA.policies.leave.marriage[0]}</p>
                     </motion.div>
                     <motion.div variants={itemVariants} className="p-10 bg-orange-600 text-black rounded-[3rem]">
                        <CreditCard className="mb-6" size={40} />
                        <h4 className="font-black uppercase mb-4 tracking-widest">Encashment</h4>
                        <p className="font-bold text-sm leading-relaxed">{INDUCTION_DATA.policies.leave.encashment.formula}</p>
                     </motion.div>
                  </div>
                </div>
              )}

              {/* SLIDE: CONDUCT */}
              {slide.type === 'policy_conduct' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <motion.div variants={itemVariants} className="p-12 bg-neutral-900/80 rounded-[4rem] border-l-8 border-green-500">
                      <ShieldCheck className="text-green-500 mb-8" size={60} />
                      <h4 className="text-white font-black text-2xl uppercase mb-8 tracking-widest">The DO's</h4>
                      <ul className="space-y-4">
                        {INDUCTION_DATA.policies.codeOfConduct.dos.map((item, idx) => (
                          <li key={idx} className="flex gap-4 text-neutral-400 font-medium"><span>•</span> {item}</li>
                        ))}
                      </ul>
                   </motion.div>
                   <motion.div variants={itemVariants} className="p-12 bg-neutral-900/80 rounded-[4rem] border-l-8 border-red-500">
                      <ShieldAlert className="text-red-500 mb-8" size={60} />
                      <h4 className="text-white font-black text-2xl uppercase mb-8 tracking-widest">The DON'Ts</h4>
                      <ul className="space-y-4">
                        {INDUCTION_DATA.policies.codeOfConduct.donts.map((item, idx) => (
                          <li key={idx} className="flex gap-4 text-neutral-400 font-medium"><span>•</span> {item}</li>
                        ))}
                      </ul>
                   </motion.div>
                </div>
              )}

              {/* SLIDE: PAYROLL */}
              {slide.type === 'financial_payroll' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <SlideHeader sub="Compensation" title="Payroll" />
                    <motion.p variants={itemVariants} className="text-2xl md:text-4xl text-neutral-300 font-light leading-snug mb-12">
                      Reliability is our hallmark. Salaries are credited by the <span className="text-orange-500 font-black italic">7th of every month</span>.
                    </motion.p>
                  </div>
                  <motion.div variants={itemVariants} className="flex justify-center">
                    <CoinStack3D />
                  </motion.div>
                </div>
              )}

              {/* SLIDE: BENEFITS */}
              {slide.type === 'financial_benefits' && (
                <div>
                  <SlideHeader sub="Social Security" title="Benefits" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {['EPF & ESIC', 'Group Insurance', 'Child Education'].map((item, idx) => (
                       <motion.div key={idx} variants={itemVariants} className="p-10 bg-neutral-900/60 rounded-[3.5rem] border border-white/5 h-80 flex flex-col justify-between">
                          <h4 className="text-2xl font-black uppercase tracking-wider">{item}</h4>
                          <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-black"><Award size={24} /></div>
                       </motion.div>
                     ))}
                  </div>
                </div>
              )}

              {/* SLIDE: IT SYSTEMS */}
              {slide.type === 'it_systems' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                   <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ top: -100, left: `${Math.random() * 100}%`, opacity: 0 }}
                          animate={{ top: '100%', opacity: [0, 1, 0] }}
                          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                          className="absolute text-orange-500/30 font-mono text-xs select-none"
                        >
                          {Math.random() > 0.5 ? '1' : '0'}
                        </motion.div>
                      ))}
                   </div>
                   <motion.div variants={itemVariants} className="flex justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent blur-3xl rounded-full" />
                      <DigitalCore3D />
                   </motion.div>
                   <div>
                     <SlideHeader sub="Digital Core" title="IT Ecosystem" />
                     <div className="space-y-6">
                        <motion.div variants={itemVariants} className="p-8 bg-neutral-900 rounded-[2rem] border border-white/5">
                           <h4 className="text-orange-500 font-black uppercase mb-2">ERP Access</h4>
                           <p className="text-neutral-400">Streamlined workflow management through our centralized ERP system.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="p-8 bg-neutral-900 rounded-[2rem] border border-white/5">
                           <h4 className="text-orange-500 font-black uppercase mb-2">Cyber Security</h4>
                           <p className="text-neutral-400">Robust protocols to safeguard company and employee data privacy.</p>
                        </motion.div>
                     </div>
                   </div>
                </div>
              )}

              {/* SLIDE: QA FEEDBACK */}
              {slide.type === 'qa_feedback' && (
                <div className="text-center">
                   <motion.div variants={itemVariants} className="mb-12"><HelpCircle size={120} className="text-orange-500 mx-auto" /></motion.div>
                   <motion.h2 variants={itemVariants} className="text-6xl md:text-9xl font-black heading-font tracking-tighter uppercase mb-10">ANY <span className="text-orange-600">DOUBTS?</span></motion.h2>
                   <motion.p variants={itemVariants} className="text-2xl text-neutral-400 font-light uppercase tracking-[0.2em]">Open dialogue is the catalyst for growth.</motion.p>
                </div>
              )}

              {/* SLIDE: THANK YOU */}
              {slide.type === 'thank_you' && (
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center h-full justify-center py-4 md:py-8">
                  <div className="flex-1 flex flex-col items-center justify-center scale-90 md:scale-100 origin-center">
                    <motion.div variants={itemVariants} className="mb-6 md:mb-8 p-4 md:p-6 bg-white/10 rounded-[2.5rem] backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-[0_0_80px_rgba(255,77,0,0.15)]">
                      <img src="https://i.ibb.co/hxLDF92j/Screenshot-2026-02-16-221710.png" alt="Company Logo" className="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,77,0,0.6)]" />
                    </motion.div>
                    <motion.div variants={itemVariants}><HeartHandshake size={60} className="text-orange-500 mb-4 opacity-40" /></motion.div>
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black heading-font tracking-tighter uppercase leading-[0.8] mb-6">THANK <span className="text-orange-600">YOU.</span></motion.h2>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-500 font-black uppercase tracking-[0.5em] mb-8 opacity-60">B. S. SPONGE PRIVATE LIMITED</motion.p>
                    <motion.button variants={itemVariants} whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }} whileTap={{ scale: 0.95 }} onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })} className="px-8 md:px-12 py-4 md:py-6 rounded-[2rem] bg-orange-600 text-black font-black text-lg md:text-xl uppercase tracking-[0.4em] shadow-[0_0_60px_rgba(255,77,0,0.3)] transition-all">Restart Tour</motion.button>
                  </div>
                  <motion.div variants={itemVariants} className="mt-8 md:mt-12 w-full pt-6 border-t border-white/5 flex flex-col items-center scale-90 md:scale-100">
                    <Footer3D />
                  </motion.div>
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </div>

      <style>{`
        .snap-container { 
          scroll-snap-type: y mandatory; 
          overflow-y: scroll; 
          height: 100vh; 
          scroll-behavior: smooth; 
          scrollbar-width: none;
        }
        .snap-slide { 
          scroll-snap-align: start; 
          height: 100vh; 
          width: 100%; 
          position: relative; 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .snap-container::-webkit-scrollbar { display: none; }
        .preserve-3d { transform-style: preserve-3d; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </main>
  );
};

export default App;
