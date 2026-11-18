'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import gsap from 'gsap';
import { RoughNotation } from "react-rough-notation";
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const AboutSection = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-section py-20 bg-[#050505] text-white overflow-hidden" ref={container}>
            <div className="container mx-auto px-4 max-w-6xl">
                <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} md={12}>
                        <div className="about-content">
                            <Title level={2} style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
                                <RoughNotation type="underline" show={true} color="#722ed1" strokeWidth={3}>About Me</RoughNotation>
                            </Title>
                            <Paragraph className="text-gray-300 text-lg leading-relaxed">
                                I&apos;m a <RoughNotation type="circle" show={true} color="#2e72d1" padding={8} animationDelay={1000}>MERN Stack Developer</RoughNotation> with <span className="text-white font-semibold">2 years of professional work experience</span> building robust, high-performance, and end-to-end web applications.
                            </Paragraph>
                            <Paragraph className="text-gray-300 text-lg leading-relaxed">
                                My expertise spans across the entire product lifecycle: architecting responsive user interfaces with <span className="text-white font-medium">React, Next.js, and Tailwind CSS</span>, engineering secure, scalable backend services with <span className="text-[#722ed2] font-medium">Node.js, Express, MongoDB, Supabase & Firebase</span>, deploying on <span className="text-[#2e72d2] font-medium">AWS (S3 & Amplify)</span>, and guaranteeing software reliability through thorough <span className="text-white font-medium">manual testing and Playwright automation</span>.
                            </Paragraph>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-xl font-bold text-[#722ed2]">2+ Years</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Experience</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                    <div className="text-xl font-bold text-[#2e72d2]">MERN & Cloud</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Full Stack</div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                                    <div className="text-xl font-bold text-white">QA & DevOps</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Testing & AWS</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div className="about-content glass-card p-2 rounded-[2.5rem] overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_30px_rgba(114,46,209,0.2)] bg-white/5 mx-auto w-fit">
                            <div className="relative rounded-[2rem] overflow-hidden bg-black/40">
                                <Image
                                    src="/sonu_photo.jpeg"
                                    alt="Sonu"
                                    width={300}
                                    height={400}
                                    className="object-contain block"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#050505] to-transparent opacity-60 pointer-events-none" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default AboutSection;
