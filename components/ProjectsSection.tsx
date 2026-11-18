'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Tag, Button, Modal, Card } from 'antd';
import {
    GithubOutlined,
    LinkOutlined,
    ExpandAltOutlined,
    GlobalOutlined,
    ThunderboltOutlined,
    SafetyCertificateOutlined,
    CloudServerOutlined
} from '@ant-design/icons';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

interface Project {
    title: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    gradient: string;
    link: string;
    repo: string;
    image?: string;
}

const projects: Project[] = [
    {
        title: 'VinTrac.ai',
        description: "The industry's first VIN-based fuel intelligence platform built exclusively for automotive dealerships.",
        fullDescription: "VinTrac is the industry's first VIN-based fuel intelligence platform built exclusively for automotive dealerships. Purpose-built for dealership operations, VinTrac replaces handwritten fuel logs, manual approvals, and disconnected workflows with a modern, mobile-first platform that tracks every fuel transaction by VIN. From request to reconciliation, every gallon is verified, documented, and visible in real time.",
        tags: ['Next.js', 'React', 'Tailwind CSS', 'AWS', 'Playwright', 'AI Platform'],
        gradient: 'from-[#059669] to-[#10b981]',
        link: 'https://www.vintrac.ai/',
        repo: 'https://github.com/sonu622',
        image: '/vintrac.png'
    },
    {
        title: 'WatchDock Admin Panel',
        description: 'Responsive movie streaming and discovery platform inspired by Netflix.',
        fullDescription: 'WatchDock is a responsive movie streaming and discovery platform inspired by Netflix. It allows users to explore trending movies, search titles, view detailed movie information, and enjoy a smooth, app-like browsing experience.\n\nThe project focuses on performance, clean UI, REST API data flow, and real-world full-stack architecture deployed via AWS Amplify.',
        tags: ['MERN Stack', 'Firebase', 'AWS Amplify', 'Redux Toolkit', 'Postman'],
        gradient: 'from-[#1e293b] to-[#334155]',
        link: 'https://maindev.det5kwz75d70l.amplifyapp.com/',
        repo: 'https://github.com/sonu622',
        image: '/watchdock_admin.png'
    },
    {
        title: 'Sunday Supper Landing Page',
        description: 'Immersive, high-converting landing page for a community-driven meal marketplace.',
        fullDescription: "Sunday Supper is a high-performance landing page designed for a community-driven marketplace that connects local diners with home-cooked meals made by talented home chefs and local culinary experts in your neighborhood.\n\nDiscover the joy of home-cooked meals made by local chefs. Sunday Supper brings families and friends together over warm, heartfelt dishes — just like you'd enjoy around your own dinner table.",
        tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Deployment'],
        gradient: 'from-[#ff4d4f] to-[#f5222d]',
        link: 'https://www.sundaysuppereats.com',
        repo: 'https://github.com/sonu622',
        image: '/sunday_supper.png'
    },
    {
        title: 'Stylistic™️',
        description: 'Your personal stylist in your pocket providing effortless fashion recommendations.',
        fullDescription: "Discover confidence through style with Stylistic™️. From personalized color analysis to body shape insights, we'll guide you toward outfits that feel authentically you. No more guessing—just effortless recommendations that simplify shopping and elevate your everyday look.",
        tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'AWS', 'Playwright'],
        gradient: 'from-[#6a11cb] to-[#2575fc]',
        link: 'https://getstylistic.com',
        repo: 'https://github.com/sonu622',
        image: '/stylistic.png'
    },
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Pause Lenis smooth-scroll when modal is open so the modal can scroll natively
    useEffect(() => {
        if (isModalOpen) {
            window.lenis?.stop();
        } else {
            window.lenis?.start();
        }
        return () => {
            window.lenis?.start();
        };
    }, [isModalOpen]);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <>
            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="project-card-3d relative w-full rounded-3xl overflow-hidden glass-card group cursor-pointer border border-white/10 hover:border-[#722ed2]/50 transition-all duration-300 p-6 flex flex-col justify-between"
            >
                {/* Background subtle tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

                {/* Dedicated Screenshot View at Top of Card */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-6 shadow-xl group-hover:border-[#722ed2]/40 transition-all duration-500">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            priority={index === 0}
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono text-sm">
                            No Preview Available
                        </div>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                        <Tag color="purple" bordered={false} className="bg-[#722ed2] text-white font-bold px-3 py-1 rounded-lg m-0 shadow-lg">
                            Project 0{index + 1}
                        </Tag>
                    </div>
                </div>

                {/* Content Area Below Image */}
                <div className="flex flex-col flex-1 justify-between">
                    <div>
                        <Title level={3} style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '0.75rem', fontWeight: 800 }}>
                            {project.title}
                        </Title>

                        <Paragraph className="text-gray-300 text-base mb-4 line-clamp-2">
                            {project.description}
                        </Paragraph>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            icon={<ExpandAltOutlined />}
                            className="glass-btn flex-1 bg-white/10 border-white/20 text-white rounded-xl h-12 font-medium hover:!border-[#722ed2] hover:!text-white"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Details
                        </Button>
                        <Button href={project.repo} target="_blank" icon={<GithubOutlined />} className="glass-btn bg-white/10 border-white/20 text-white rounded-xl h-12 px-4 hover:!border-[#722ed2]" />
                        <Button href={project.link} target="_blank" icon={<LinkOutlined />} className="glass-btn bg-[#722ed2] hover:!bg-[#9254de] text-white rounded-xl h-12 px-4 border-none shadow-[0_0_15px_rgba(114,46,210,0.4)]" />
                    </div>
                </div>
            </motion.div>

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                width={860}
                centered
                destroyOnClose
                style={{
                    background: '#0d0d12',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '24px',
                    padding: '24px',
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95)',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                }}
                styles={{
                    body: {
                        padding: 0,
                    },
                    header: {
                        background: 'transparent',
                        borderBottom: 'none',
                    },
                    mask: {
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(0, 0, 0, 0.8)',
                    },
                }}
                closeIcon={<span style={{ color: 'white', fontSize: '1.25rem' }}>✕</span>}
            >
                {/* Scrollable Container with data-lenis-prevent so inner scroll is 100% enabled */}
                <div
                    data-lenis-prevent="true"
                    onWheel={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}
                    className="flex flex-col gap-4 text-white max-h-[calc(90vh-50px)] overflow-y-auto pr-2 custom-scrollbar"
                >
                    {/* Header Card using AntD Card */}
                    <Card
                        className="glass-card border-white/10 rounded-2xl bg-white/[0.02]"
                        styles={{ body: { padding: '16px 20px' } }}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Tag color="purple" bordered={false} className="bg-[#722ed2] text-white font-bold px-3 py-0.5 rounded-lg text-xs m-0">
                                        Project 0{index + 1}
                                    </Tag>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                                        Case Study & Details
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">
                                    {project.title}
                                </h2>
                            </div>
                            <div className="flex gap-2">
                                {project.repo && (
                                    <Button
                                        href={project.repo}
                                        target="_blank"
                                        icon={<GithubOutlined />}
                                        className="bg-white/5 border-white/15 text-white hover:!border-[#722ed2] hover:!text-white rounded-xl h-10 px-3.5"
                                    >
                                        Code
                                    </Button>
                                )}
                                <Button
                                    type="primary"
                                    href={project.link}
                                    target="_blank"
                                    icon={<LinkOutlined />}
                                    className="bg-[#722ed2] hover:!bg-[#9254de] border-none font-semibold text-white rounded-xl h-10 px-4 shadow-[0_0_15px_rgba(114,46,210,0.4)]"
                                >
                                    Live Demo
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Screenshot Card using AntD Card */}
                    {project.image && (
                        <Card
                            className="border-white/10 rounded-2xl overflow-hidden bg-black/60 shadow-2xl"
                            styles={{ body: { padding: 0 } }}
                        >
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    unoptimized
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white hover:text-white flex items-center gap-1.5 hover:bg-black transition-all shadow-lg"
                                >
                                    <GlobalOutlined /> Visit Live
                                </a>
                            </div>
                        </Card>
                    )}

                    {/* AntD Card 1: Project Overview */}
                    <Card
                        className="glass-card border-white/10 rounded-2xl bg-white/[0.02]"
                        title={
                            <span className="text-[#722ed2] font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                <ThunderboltOutlined /> Project Overview & Purpose
                            </span>
                        }
                        styles={{
                            header: { borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'transparent', minHeight: '44px', padding: '12px 20px' },
                            body: { padding: '16px 20px' }
                        }}
                    >
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-0 whitespace-pre-line font-normal">
                            {project.fullDescription || project.description}
                        </p>
                    </Card>

                    {/* AntD Card 2: Tech Stack & Architecture */}
                    <Card
                        className="glass-card border-white/10 rounded-2xl bg-white/[0.02]"
                        title={
                            <span className="text-[#2e72d2] font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                <CloudServerOutlined /> Technologies & Architecture
                            </span>
                        }
                        styles={{
                            header: { borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'transparent', minHeight: '44px', padding: '12px 20px' },
                            body: { padding: '16px 20px' }
                        }}
                    >
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Tag
                                    key={tag}
                                    color="purple"
                                    bordered={false}
                                    className="text-xs font-mono font-medium px-3 py-1 rounded-xl bg-[#722ed2]/20 text-[#d3adf7] border border-[#722ed2]/30 m-0"
                                >
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </Card>

                    {/* AntD Card 3: Engineering Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <Card
                            className="glass-card border-white/10 rounded-xl bg-white/[0.02]"
                            styles={{ body: { padding: '14px 16px' } }}
                        >
                            <div className="text-[#722ed2] text-xl mb-1.5">
                                <ThunderboltOutlined />
                            </div>
                            <div className="text-sm font-bold text-white mb-0.5">Performance & UI</div>
                            <div className="text-xs text-gray-400">Responsive mobile-first layout with smooth interactions.</div>
                        </Card>

                        <Card
                            className="glass-card border-white/10 rounded-xl bg-white/[0.02]"
                            styles={{ body: { padding: '14px 16px' } }}
                        >
                            <div className="text-[#2e72d2] text-xl mb-1.5">
                                <CloudServerOutlined />
                            </div>
                            <div className="text-sm font-bold text-white mb-0.5">Cloud Deployment</div>
                            <div className="text-xs text-gray-400">Deployed and hosted on cloud infrastructure with CI/CD.</div>
                        </Card>

                        <Card
                            className="glass-card border-white/10 rounded-xl bg-white/[0.02]"
                            styles={{ body: { padding: '14px 16px' } }}
                        >
                            <div className="text-[#10b981] text-xl mb-1.5">
                                <SafetyCertificateOutlined />
                            </div>
                            <div className="text-sm font-bold text-white mb-0.5">Reliability & QA</div>
                            <div className="text-xs text-gray-400">Tested thoroughly via automated and manual test cases.</div>
                        </Card>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-end gap-3 pt-3 pb-1 border-t border-white/10 sticky bottom-0 bg-[#0d0d12]/95 backdrop-blur-md z-20">
                        <Button
                            className="bg-white/5 border-white/15 text-white hover:!border-white/30 rounded-xl h-11 px-6"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </Button>
                        <Button
                            type="primary"
                            href={project.link}
                            target="_blank"
                            icon={<LinkOutlined />}
                            className="bg-[#722ed2] hover:!bg-[#9254de] border-none font-semibold text-white rounded-xl h-11 px-6 shadow-[0_0_20px_rgba(114,46,210,0.5)]"
                        >
                            Open Live Demo
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 bg-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
                <Title level={2} className="text-center mb-20 text-glow" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                    Immersive Works
                </Title>

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
