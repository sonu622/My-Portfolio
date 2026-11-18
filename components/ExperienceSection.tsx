'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { Typography } from 'antd';
import gsap from 'gsap';

const { Title, Paragraph } = Typography;

const experiences = [
    {
        year: 'May 2024 - Present',
        role: 'MERN Stack Developer',
        company: 'Sach Tech Private Limited, Mohali',
        description: 'Developing high-impact web platforms including VinTrac.ai and enterprise applications using React.js, Next.js, Node.js, and Express. Integrating Supabase and Firebase for backend services, deploying via AWS (S3 & Amplify), and executing manual testing and Playwright automation suites.',
    },
    {
        year: 'August 2023 - April 2024',
        role: 'MERN Stack Developer Intern',
        company: 'Future Finder',
        description: 'Mastered full-stack development within the MERN ecosystem, delivering responsive user interfaces, RESTful API endpoints, database schemas, and functional test coverage.',
    },
    {
        year: '2020 - 2024',
        role: 'B.Tech in CSE',
        company: 'St. Soldier Engineering College, Jalandhar',
        description: 'Graduated in Computer Science and Engineering with a strong focus on software engineering principles, full stack web development, data structures, and algorithms.',
    },
];

const ExperienceSection = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".exp-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                x: (i) => (i % 2 === 0 ? -100 : 100),
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power4.out",
            });

            gsap.from(".timeline-line", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
                height: 0,
                ease: "none",
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="py-24 bg-transparent" ref={container}>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Title level={2} className="text-glow mb-2" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                        My Journey
                    </Title>
                    <Paragraph className="text-gray-400 text-lg">
                        <span className="text-[#722ed2] font-semibold">2 Years of Professional Experience</span> in Full Stack & MERN Development
                    </Paragraph>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#722ed2] via-[#2e72d2] to-transparent opacity-30 md:block hidden" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`exp-item relative flex items-center md:justify-between w-full md:flex-row flex-col gap-8 md:gap-0`}>
                                <div className={`md:w-[45%] w-full ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                                    <div className="text-[#2e72d2] font-mono text-xl mb-2">{exp.year}</div>
                                    <Title level={4} style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</Title>
                                    <div className="text-[#722ed2] font-bold mb-4">{exp.company}</div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#722ed2] shadow-[0_0_15px_#722ed2] z-10 md:block hidden" />

                                <div className={`md:w-[45%] w-full glass-card p-6 rounded-2xl ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                                    <Paragraph className="text-gray-400 mb-0 italic">
                                        {exp.description}
                                    </Paragraph>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
