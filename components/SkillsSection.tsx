'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { Typography } from 'antd';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import {
    CodeOutlined,
    AntDesignOutlined,
    Html5Outlined,
    DesktopOutlined,
    ThunderboltOutlined,
    BlockOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const skills = [
    { name: 'Next.js', icon: <DesktopOutlined />, color: '#ffffff' },
    { name: 'React', icon: <CodeOutlined />, color: '#61dafb' },
    { name: 'Ant Design', icon: <AntDesignOutlined />, color: '#0170fe' },
    { name: 'GSAP', icon: <ThunderboltOutlined />, color: '#88ce02' },
    { name: 'TailwindCSS', icon: <Html5Outlined />, color: '#38bdf8' },
    { name: 'Three.js', icon: <BlockOutlined />, color: '#ffffff' },
];

const SkillsSection = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-card-3d", {
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 80%",
                },
                rotateX: 45,
                z: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="py-24 bg-transparent text-white" ref={container}>
            <div className="container mx-auto px-4 max-w-6xl">
                <Title level={2} className="text-center mb-20 text-glow" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                    Tech Architecture
                </Title>

                <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, translateZ: 20 }}
                            className="skill-card-3d glass-card p-10 rounded-2xl flex flex-col items-center text-center group cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div
                                className="text-6xl mb-6 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(114,46,209,0.8)]"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <div className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white">
                                {skill.name}
                            </div>
                            <div className="mt-4 w-12 h-1 bg-[#722ed2]/40 rounded-full group-hover:w-24 group-hover:bg-[#722ed2] transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
