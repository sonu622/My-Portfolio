'use client';

import React, { useRef, useLayoutEffect, useState } from 'react';
import { Typography } from 'antd';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { AntDesignOutlined } from '@ant-design/icons';
import {
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiSupabase,
    SiFirebase,
    SiPostman,
    SiReact,
    SiNextdotjs,
    SiTailwindcss
} from 'react-icons/si';
import {
    FaAws,
    FaCloudUploadAlt,
    FaCheckDouble,
    FaServer
} from 'react-icons/fa';

const { Title, Paragraph } = Typography;

const PlaywrightIcon = ({ color }: { color?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="1em"
        height="1em"
        style={{ color }}
    >
        <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85c-.995 3.715-4.27 10.874-10.42 9.227c-6.15-1.65-5.407-9.487-4.412-13.201c.46-1.716.934-2.94 1.305-3.694c.42-.853.846-.289 1.815.523c.684.573 2.41 1.791 5.011 2.488s4.706.506 5.583.352c1.245-.219 1.897-.494 1.834.455m-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539l-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354c.677.118 2.3.261 4.308-.28a11.3 11.3 0 0 0 2.41-.956q-.087.295-.17.61c-.433 1.618-.827 4.055-.632 6.426c-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z"/>
    </svg>
);

interface Skill {
    name: string;
    category: 'Backend' | 'AWS & Deployment' | 'Testing & QA' | 'Frontend';
    icon: React.ReactNode;
    color: string;
    description: string;
}

const skills: Skill[] = [
    // Backend Skills
    { name: 'Node.js', category: 'Backend', icon: <SiNodedotjs />, color: '#68a063', description: 'Asynchronous event-driven backend architecture' },
    { name: 'Express.js', category: 'Backend', icon: <SiExpress />, color: '#ffffff', description: 'RESTful API routing, middleware & controllers' },
    { name: 'MongoDB', category: 'Backend', icon: <SiMongodb />, color: '#47a248', description: 'NoSQL database modeling & Mongoose schemas' },
    { name: 'Supabase', category: 'Backend', icon: <SiSupabase />, color: '#3ecf8e', description: 'Real-time backend, Postgres database & Auth services' },
    { name: 'Firebase', category: 'Backend', icon: <SiFirebase />, color: '#ffca28', description: 'Firestore, real-time database & backend services' },
    { name: 'RESTful APIs', category: 'Backend', icon: <FaServer />, color: '#818cf8', description: 'Scalable endpoint architecture, JWT auth & CRUD' },

    // AWS & Deployment
    { name: 'AWS Cloud', category: 'AWS & Deployment', icon: <FaAws />, color: '#ff9900', description: 'AWS S3, AWS Amplify, EC2 & cloud infrastructure' },
    { name: 'CI/CD & Deployment', category: 'AWS & Deployment', icon: <FaCloudUploadAlt />, color: '#38bdf8', description: 'Production builds, server configuration & live deployment' },

    // Testing & QA
    { name: 'Playwright', category: 'Testing & QA', icon: <PlaywrightIcon color="#45ba4b" />, color: '#45ba4b', description: 'Automated end-to-end browser & user flow testing' },
    { name: 'Manual Testing', category: 'Testing & QA', icon: <FaCheckDouble />, color: '#10b981', description: 'Functional QA, edge case validation & test case design' },
    { name: 'Postman API Testing', category: 'Testing & QA', icon: <SiPostman />, color: '#ff6c37', description: 'Automated endpoint testing, collections & mock APIs' },

    // Frontend Skills
    { name: 'React.js', category: 'Frontend', icon: <SiReact />, color: '#61dafb', description: 'Component architecture, custom hooks & state management' },
    { name: 'Next.js', category: 'Frontend', icon: <SiNextdotjs />, color: '#ffffff', description: 'Full-stack SSR, SSG, routing & server actions' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <SiTailwindcss />, color: '#38bdf8', description: 'Responsive, modern UI styling & fluid utility design' },
    { name: 'Ant Design', category: 'Frontend', icon: <AntDesignOutlined />, color: '#0170fe', description: 'Enterprise UI design system & accessible layouts' },
];

const categories = ['All', 'Backend', 'AWS & Deployment', 'Testing & QA', 'Frontend'] as const;

const SkillsSection = () => {
    const container = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skills-header", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const filteredSkills = activeTab === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    return (
        <section id="skills" className="py-24 bg-transparent text-white" ref={container}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="skills-header text-center mb-14">
                    <Title level={2} className="text-glow mb-2" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                        Tech Architecture & Skills
                    </Title>
                    <Paragraph className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Full-stack proficiency across MERN, Supabase, Firebase, AWS cloud deployment, and Playwright automation & manual testing.
                    </Paragraph>

                    {/* Filter Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => {
                            const isActive = activeTab === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? 'bg-[#722ed2] text-white shadow-[0_0_20px_rgba(114,46,210,0.5)] border-transparent scale-105'
                                            : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="skill-card-3d glass-card p-6 rounded-2xl flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-[#722ed2]/50 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className="text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(114,46,210,0.8)]"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {skill.category}
                                        </span>
                                    </div>
                                    <div className="text-xl font-bold tracking-tight text-white mb-2">
                                        {skill.name}
                                    </div>
                                    <p className="text-sm text-gray-400 leading-snug">
                                        {skill.description}
                                    </p>
                                </div>
                                <div className="mt-5 w-10 h-1 bg-[#722ed2]/30 rounded-full group-hover:w-full group-hover:bg-[#722ed2] transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;