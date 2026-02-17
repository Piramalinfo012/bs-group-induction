
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ShieldCheck, Clock, HeartHandshake,
  Factory, Activity, CalendarDays, UserCheck, 
  Coffee, Utensils, Box, Cpu, Timer, Target, Eye, 
  Award, Briefcase, CreditCard, Laptop, HelpCircle,
  MapPin, Milestone, TrendingUp, Users, HardHat,
  Database, Zap, Flame, Globe, Layers, Settings, User,
  Compass, Navigation, Calendar, ShieldAlert, Lock, Network
} from 'lucide-react';
import { INDUCTION_DATA, INDUCTION_FLOW_DAY_1, DEPARTMENTS } from './data.ts';

// --- Types ---

interface SlideProps {
  type: string;
  session?: string;
  description?: string;
  conductedBy?: string;
  icon?: React.ReactNode;
  sub?: string;
  time?: string;
  isBreak?: boolean;
}

// --- Premium Animation Presets ---

const slideContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeUpVariants: Variants = {
  hidden: { 
    y: 60, 
    opacity: 0, 
    filter: 'blur(15px)',
    scale: 0.95 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    scale: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

// --- Specialized Visual Components ---

const CorporatePillar3D = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8" style={{ perspective: '2000px' }}>
    <motion.div 
      animate={{ rotateY: 360, y: [0, -15, 0] }}
      transition={{ 
        rotateY: { duration: 30, repeat: Infinity, ease: "linear" }, 
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
      }}
      className="relative w-48 h-48 md:w-60 md:h-60"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-white border-[8px] border-orange-600/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(255,77,0,0.15)]" style={{ transform: 'translateZ(30px)' }}>
        <img src="https://i.ibb.co/hxLDF92j/Screenshot-2026-02-16-221710.png" alt="BS Logo" className="w-[85%] h-auto relative z-10" />
      </div>
      <div className="absolute inset-0 bg-neutral-900 border-[8px] border-orange-600 rounded-2xl flex flex-col items-center justify-center" style={{ transform: 'rotateY(180deg) translateZ(30px)' }}>
        <h3 className="text-white font-black heading-font text-2xl tracking-[0.2em]">STEEL</h3>
      </div>
    </motion.div>
  </div>
);

const DirectorCard3D = () => (
  <div className="relative w-full max-w-sm h-[32rem] flex items-center justify-center" style={{ perspective: '1500px' }}>
    <motion.div variants={fadeUpVariants} className="relative w-full h-full rounded-[4rem] bg-neutral-900 border-4 border-orange-600/20 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center pt-12">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-orange-500 bg-neutral-800 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(255,77,0,0.3)]">
          <img src="https://i.ibb.co/wNRn0gp3/Screenshot-2026-02-16-225917.png" alt="MD" className="w-full h-full object-cover scale-110" />
        </div>
        <div className="mt-10 text-center px-8">
          <h3 className="text-white font-black text-3xl heading-font leading-tight tracking-tighter">ASHISH<br/><span className="text-orange-600">AGRAWAL</span></h3>
          <div className="h-1 w-12 bg-orange-600 mx-auto my-6" />
          <p className="text-neutral-400 font-black uppercase text-[10px] tracking-[0.6em]">Managing Director</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const SectionTitle = ({ sub, title }: { sub: string, title: string }) => (
  <motion.div variants={fadeUpVariants} className="mb-10 md:mb-16">
    <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} transition={{ duration: 1 }} className="h-1.5 bg-orange-600 mb-6" />
    <p className="text-orange-500 text-[11px] font-black uppercase tracking-[0.5em] mb-3">{sub}</p>
    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black heading-font uppercase text-white tracking-tighter leading-[1]">{title}</h2>
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

  const slides = useMemo<SlideProps[]>(() => [
    { type: 'hero' }, { type: 'message' }, { type: 'history' }, { type: 'vision_mission' },
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
      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex items-end gap-2 heading-font pointer-events-none">
        <motion.span 
          key={activeSlide}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-black text-orange-500"
        >
          {(activeSlide + 1).toString().padStart(2, '0')}
        </motion.span>
        <span className="text-neutral-700 font-bold mb-2 text-sm md:text-xl">/ {totalSlides}</span>
      </div>

      <div ref={containerRef} className="snap-container">
        {slides.map((slide, i) => (
          <section key={i} className="snap-slide p-6 md:p-20">
            <motion.div 
              variants={slideContainerVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-7xl w-full relative z-10"
            >
              {slide.type === 'hero' && (
                <div className="text-center flex flex-col items-center">
                  <motion.p variants={fadeUpVariants} className="text-orange-500 font-black uppercase tracking-[1em] text-[10px] md:text-xs mb-10 opacity-70">ESTABLISHED LEGACY • RAIGARH</motion.p>
                  <motion.div variants={fadeUpVariants}><CorporatePillar3D /></motion.div>
                  <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-8xl lg:text-[9rem] font-black heading-font leading-[0.85] tracking-tighter mb-10 uppercase">
                    MAKING <br /> <span className="text-orange-600">STRENGTH.</span>
                  </motion.h1>
                </div>
              )}

              {slide.type === 'message' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                  <div>
                    <SectionTitle sub="Leadership" title="MD Message" />
                    <motion.div variants={fadeUpVariants} className="space-y-12">
                      <p className="text-2xl md:text-4xl italic text-neutral-300 font-light leading-snug">"{INDUCTION_DATA.mdMessage.text}"</p>
                      <div className="pt-10 border-t border-neutral-800">
                        <p className="text-3xl md:text-5xl font-black heading-font">{INDUCTION_DATA.mdMessage.name}</p>
                        <p className="text-orange-500 font-black tracking-[0.4em] uppercase text-xs mt-4">{INDUCTION_DATA.mdMessage.title}</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div variants={fadeUpVariants} className="flex justify-center"><DirectorCard3D /></motion.div>
                </div>
              )}

              {slide.type === 'history' && (
                <div>
                  <SectionTitle sub="Timeline" title="Our Legacy" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {INDUCTION_DATA.timeline.map((t, idx) => (
                      <motion.div key={idx} variants={fadeUpVariants} className="p-10 h-64 md:h-72 bg-neutral-900/40 rounded-[3rem] border border-white/5 flex flex-col justify-between group">
                        <span className="text-5xl font-black text-orange-600">{t.year}</span>
                        <p className="text-xs text-neutral-400 font-black uppercase tracking-widest">{t.event}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'vision_mission' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div variants={fadeUpVariants} className="p-12 md:p-20 bg-neutral-900/30 rounded-[5rem] border border-white/5 text-center flex flex-col items-center">
                    <Globe size={100} className="text-orange-500 mb-10" />
                    <h3 className="text-3xl md:text-5xl font-black heading-font mb-8 uppercase">Vision</h3>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light">{INDUCTION_DATA.vision}</p>
                  </motion.div>
                  <motion.div variants={fadeUpVariants} className="p-12 md:p-20 bg-neutral-900/30 rounded-[5rem] border border-white/5 text-center flex flex-col items-center">
                    <Target size={100} className="text-orange-500 mb-10" />
                    <h3 className="text-3xl md:text-5xl font-black heading-font mb-8 uppercase">Mission</h3>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light">{INDUCTION_DATA.mission}</p>
                  </motion.div>
                </div>
              )}

              {slide.type === 'detail' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <SectionTitle sub={slide.sub || "Phase"} title={slide.session || ""} />
                    <motion.p variants={fadeUpVariants} className="text-2xl md:text-5xl text-neutral-200 font-light leading-snug mb-16">{slide.description}</motion.p>
                    <motion.div variants={fadeUpVariants} className="flex items-center gap-8 p-8 bg-orange-600/5 rounded-[3rem] border border-orange-500/10">
                      <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-black"><UserCheck size={32} /></div>
                      <div>
                         <p className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-2">Conducted By</p>
                         <p className="text-white font-black uppercase text-xl">{slide.conductedBy}</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div variants={fadeUpVariants} className="lg:col-span-5 flex justify-center">
                    <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-[5rem] bg-neutral-900 border-[10px] border-orange-600/10 flex items-center justify-center text-orange-600">
                      {slide.icon && React.isValidElement(slide.icon) && React.cloneElement(slide.icon as React.ReactElement<any>, { size: 140, strokeWidth: 1 })}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* ... other standard slide types ... */}

              {slide.type === 'thank_you' && (
                <div className="text-center flex flex-col items-center justify-center min-h-[80vh]">
                   <motion.div variants={fadeUpVariants} className="mb-12 p-12 bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(255,77,0,0.15)]">
                      <img src="https://i.ibb.co/hxLDF92j/Screenshot-2026-02-16-221710.png" alt="Logo" className="h-32 md:h-52 w-auto object-contain" />
                   </motion.div>
                   <motion.h2 variants={fadeUpVariants} className="text-7xl md:text-[10rem] font-black heading-font tracking-tighter uppercase leading-[0.8] mb-12 text-white">
                      THANK <span className="text-orange-600">YOU.</span>
                   </motion.h2>
                   <motion.button 
                    variants={fadeUpVariants}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="px-16 py-8 rounded-[2.5rem] bg-orange-600 text-black font-black text-xl uppercase tracking-[0.5em]"
                   >
                    Restart Tour
                   </motion.button>
                   <motion.p variants={fadeUpVariants} className="mt-16 text-lg text-orange-500/60 font-black uppercase tracking-[0.8em]">Developed By Deepak Sahu</p>
                </div>
              )}

              {/* FALLBACK FOR OTHERS */}
              {!['hero', 'message', 'history', 'vision_mission', 'detail', 'thank_you'].includes(slide.type) && (
                <div className="text-center py-20">
                  <SectionTitle sub="Session" title={slide.type.replace(/_/g, ' ')} />
                  <motion.p variants={fadeUpVariants} className="text-2xl text-neutral-400 font-light">
                    {slide.description || "Comprehensive mapping of the BS Group functional ecosystem."}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default App;
