'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Button, Typography, Flex } from 'antd';
import { ArrowRightOutlined, RocketOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { RoughNotation } from "react-rough-notation";
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
    const comp = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-title-line", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                skewY: 7,
            })
                .from(".hero-desc", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.5");
        }, comp);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!titleRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / 40;
        const y = (clientY - innerHeight / 2) / 40;

        gsap.to(".hero-parallax", {
            rotateY: x,
            rotateX: -y,
            duration: 1,
            ease: "power2.out",
        });
    };

    return (
        <div
            ref={comp}
            className="h-screen flex items-center justify-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <Flex vertical align="center" justify="center" className="relative z-10 text-center max-w-5xl px-4 perspective-text">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#722ed2] text-sm font-semibold tracking-wide"
                >
                    <span className="w-2 h-2 rounded-full bg-[#722ed2] animate-pulse" />
                    2+ Years of Work Experience
                </motion.div>

                <motion.div
                    ref={titleRef}
                    className="hero-parallax"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="overflow-hidden">
                        <Title level={1} className="hero-title-line text-glow" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: 0, lineHeight: 1.2, fontWeight: 800 }}>
                            Hi, I&apos;m a <span className="text-[#722ed2]">Full Stack</span>
                        </Title>
                    </div>
                    <div className="overflow-hidden mb-4">
                        <Title level={1} className="hero-title-line" style={{ color: 'transparent', WebkitTextStroke: '2px #fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: 0, lineHeight: 1.2, fontWeight: 800 }}>
                            MERN Stack Developer
                        </Title>
                    </div>
                </motion.div>

                <div className="hero-desc mt-6 max-w-2xl">
                    <Paragraph className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Crafting <RoughNotation type="highlight" show={true} color="rgba(114, 46, 210, 0.4)" animationDuration={1000} strokeWidth={2} padding={10}><span className="text-white font-bold relative z-10 px-1">scalable full-stack solutions</span></RoughNotation> with modern MERN architecture, robust backend APIs, AWS cloud deployment, and automated testing.
                    </Paragraph>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="mt-10 relative z-50 flex gap-6"
                >
                    <Button
                        type="primary"
                        size="large"
                        className="active:scale-95 transition-transform h-14 px-10 text-lg font-bold rounded-xl bg-[#722ed2] hover:!bg-[#9254de] border-none flex items-center gap-2 shadow-[0_0_30px_rgba(114,46,209,0.4)]"
                        icon={<RocketOutlined />}
                        href="#projects"
                    >
                        Explore My Work
                    </Button>
                    <Button
                        type="default"
                        ghost
                        size="large"
                        style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}
                        className="active:scale-95 transition-transform h-14 px-10 text-lg font-bold rounded-xl hover:!border-[#722ed2] hover:!text-[#ffffff] flex items-center gap-2 bg-white/5 backdrop-blur-md"
                        icon={<ArrowRightOutlined style={{ color: '#ffffff' }} />}
                        href="#contact"
                    >
                        <span style={{ color: '#ffffff' }}>Let&apos;s Connect</span>
                    </Button>
                </motion.div>
            </Flex>

            {/* Subtle Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#722ed2]/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2e72d2]/10 blur-[150px] rounded-full pointer-events-none" />
        </div>
    );
};

export default HeroSection;
