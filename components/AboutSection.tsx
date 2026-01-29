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
                                I&apos;m a <RoughNotation type="circle" show={true} color="#2e72d1" padding={8} animationDelay={1000}>passionate developer</RoughNotation> who loves building things for the web.
                                With a strong foundation in modern technologies like React, Next.js, and Ant Design,
                                I create seamless and attractive user experiences.
                            </Paragraph>
                            <Paragraph className="text-gray-300 text-lg leading-relaxed">
                                When I&apos;m not coding, I&apos;m exploring new design trends or learning about the latest tech.
                                I believe in minimizing complexity while maximizing impact.
                            </Paragraph>
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
