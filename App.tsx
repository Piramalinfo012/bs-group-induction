
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
import { INDUCTION_DATA, INDUCTION_FLOW_DAY_1, DEPARTMENTS } from './data';

// --- Types ---

// Added explicit type for slide properties to fix property access errors in map
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

// Added explicit Variants type to avoid inference issues with cubic-bezier arrays
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

// Added explicit Variants type to fix ease: number[] assignability error
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

  // Explicitly typed the slides array to SlideProps[] to solve heterogeneous property access errors
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
      {/* HUD Counter */}
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
              {/* HERO */}
              {slide.type === 'hero' && (
                <div className="text-center flex flex-col items-center">
                  <motion.p variants={fadeUpVariants} className="text-orange-500 font-black uppercase tracking-[1em] text-[10px] md:text-xs mb-10 opacity-70">ESTABLISHED LEGACY • RAIGARH</motion.p>
                  <motion.div variants={fadeUpVariants}><CorporatePillar3D /></motion.div>
                  <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-8xl lg:text-[9rem] font-black heading-font leading-[0.85] tracking-tighter mb-10 uppercase">
                    MAKING <br /> <span className="text-orange-600">STRENGTH.</span>
                  </motion.h1>
                </div>
              )}

              {/* MD MESSAGE */}
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

              {/* HISTORY */}
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

              {/* VISION MISSION */}
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

              {/* ORIENTATION DETAIL */}
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
                      {/* Added type assertion and checks for React.cloneElement to fix prop errors */}
                      {slide.icon && React.isValidElement(slide.icon) && React.cloneElement(slide.icon as React.ReactElement<any>, { size: 140, strokeWidth: 1 })}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* ATTENDANCE */}
              {slide.type === 'policy_attendance' && (
                <div>
                  <SectionTitle sub="Governance" title="Attendance" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-6">
                       {INDUCTION_DATA.policies.attendance.guidelines.map((g, idx) => (
                         <motion.div key={idx} variants={fadeUpVariants} className="p-8 bg-neutral-900/60 rounded-[2.5rem] border-l-8 border-orange-600 flex items-center gap-6">
                            <Clock className="text-orange-500 shrink-0" />
                            <p className="text-neutral-300 font-medium text-lg">{g}</p>
                         </motion.div>
                       ))}
                     </div>
                     <motion.div variants={fadeUpVariants} className="flex justify-center items-center">
                        <div className="w-80 h-80 rounded-full border-[12px] border-neutral-800 relative flex items-center justify-center">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-1.5 h-32 bg-orange-600 origin-bottom bottom-1/2 rounded-full" />
                          <Clock size={120} className="text-white opacity-10" />
                        </div>
                     </motion.div>
                  </div>
                </div>
              )}

              {/* LEAVE */}
              {slide.type === 'policy_leave' && (
                <div>
                  <SectionTitle sub="Welfare" title="Leave Policy" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <motion.div variants={fadeUpVariants} className="p-10 bg-neutral-900 rounded-[3rem] border border-white/5">
                        <CalendarDays className="text-orange-500 mb-8" size={50} />
                        <h4 className="text-2xl font-black uppercase mb-4">Casual</h4>
                        <p className="text-neutral-400">{INDUCTION_DATA.policies.leave.casual[0]}</p>
                     </motion.div>
                     <motion.div variants={fadeUpVariants} className="p-10 bg-neutral-900 rounded-[3rem] border border-white/5">
                        <HeartHandshake className="text-orange-500 mb-8" size={50} />
                        <h4 className="text-2xl font-black uppercase mb-4">Marriage</h4>
                        <p className="text-neutral-400">{INDUCTION_DATA.policies.leave.marriage[0]}</p>
                     </motion.div>
                     <motion.div variants={fadeUpVariants} className="p-10 bg-orange-600 text-black rounded-[3rem]">
                        <CreditCard className="mb-8" size={50} />
                        <h4 className="text-2xl font-black uppercase mb-4">Encashment</h4>
                        <p className="font-bold">{INDUCTION_DATA.policies.leave.encashment.formula}</p>
                     </motion.div>
                  </div>
                </div>
              )}

              {/* CONDUCT */}
              {slide.type === 'policy_conduct' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <motion.div variants={fadeUpVariants} className="p-12 bg-neutral-900/60 rounded-[4rem] border-l-8 border-green-500">
                      <ShieldCheck className="text-green-500 mb-8" size={60} />
                      <h4 className="text-3xl font-black uppercase mb-8">The DO's</h4>
                      <ul className="space-y-4">
                        {INDUCTION_DATA.policies.codeOfConduct.dos.map((item, idx) => (
                          <li key={idx} className="flex gap-4 text-neutral-400 text-lg"><span>•</span> {item}</li>
                        ))}
                      </ul>
                   </motion.div>
                   <motion.div variants={fadeUpVariants} className="p-12 bg-neutral-900/60 rounded-[4rem] border-l-8 border-red-500">
                      <ShieldAlert className="text-red-500 mb-8" size={60} />
                      <h4 className="text-3xl font-black uppercase mb-8">The DON'Ts</h4>
                      <ul className="space-y-4">
                        {INDUCTION_DATA.policies.codeOfConduct.donts.map((item, idx) => (
                          <li key={idx} className="flex gap-4 text-neutral-400 text-lg"><span>•</span> {item}</li>
                        ))}
                      </ul>
                   </motion.div>
                </div>
              )}

              {/* PAYROLL */}
              {slide.type === 'financial_payroll' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <SectionTitle sub="Compensation" title="Payroll" />
                    <motion.p variants={fadeUpVariants} className="text-3xl md:text-5xl text-neutral-200 font-light leading-snug">
                      Reliability. Salaries are credited by the <span className="text-orange-500 font-black italic">7th of every month</span>.
                    </motion.p>
                  </div>
                  <motion.div variants={fadeUpVariants} className="flex justify-center">
                    <div className="p-24 bg-orange-600 rounded-[5rem] text-black shadow-[0_40px_80px_rgba(255,77,0,0.3)]">
                      <CreditCard size={120} />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* IT SYSTEMS */}
              {slide.type === 'it_systems' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   <motion.div variants={fadeUpVariants} className="flex justify-center">
                      <Cpu size={240} className="text-orange-500 opacity-30" />
                   </motion.div>
                   <div>
                     <SectionTitle sub="Digital Hub" title="IT ecosystem" />
                     <div className="space-y-6">
                        <motion.div variants={fadeUpVariants} className="p-8 bg-neutral-900 rounded-[2.5rem] border border-white/5">
                           <h4 className="text-orange-500 font-black uppercase mb-2">ERP Access</h4>
                           <p className="text-neutral-400">Streamlined workflow management through centralized ERP logins.</p>
                        </motion.div>
                        <motion.div variants={fadeUpVariants} className="p-8 bg-neutral-900 rounded-[2.5rem] border border-white/5">
                           <h4 className="text-orange-500 font-black uppercase mb-2">Support</h4>
                           <p className="text-neutral-400">24/7 internal ticketing for all technical and digital assistance.</p>
                        </motion.div>
                     </div>
                   </div>
                </div>
              )}

              {/* BREAKS (LUNCH/TEA) */}
              {['lunch', 'tea', 'qa_feedback'].includes(slide.type) && (
                <div className="text-center">
                   <motion.div variants={fadeUpVariants} className="mb-12">
                     {slide.type === 'lunch' && <Utensils size={140} className="text-orange-500 mx-auto" />}
                     {slide.type === 'tea' && <Coffee size={140} className="text-orange-500 mx-auto" />}
                     {slide.type === 'qa_feedback' && <HelpCircle size={140} className="text-orange-500 mx-auto" />}
                   </motion.div>
                   <motion.h2 variants={fadeUpVariants} className="text-6xl md:text-[8rem] font-black heading-font tracking-tighter uppercase mb-6">
                      {slide.type === 'lunch' ? 'LUNCH BREAK' : slide.type === 'tea' ? 'TEA BREAK' : 'Q&A SESSION'}
                   </motion.h2>
                   <motion.p variants={fadeUpVariants} className="text-2xl text-neutral-500 font-light tracking-[0.4em] uppercase">
                      {slide.type === 'qa_feedback' ? 'Your Voice Matters' : 'Time to Recharge'}
                   </motion.p>
                </div>
              )}

              {/* THANK YOU */}
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
              {!['hero', 'message', 'history', 'vision_mission', 'detail', 'policy_attendance', 'policy_leave', 'policy_conduct', 'financial_payroll', 'it_systems', 'lunch', 'tea', 'qa_feedback', 'thank_you'].includes(slide.type) && (
                <div>
                   <SectionTitle sub="Organization" title={slide.type.replace('_', ' ')} />
                   <motion.p variants={fadeUpVariants} className="text-2xl text-neutral-400 font-light">Comprehensive mapping of the BS Group functional ecosystem.</motion.p>
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
