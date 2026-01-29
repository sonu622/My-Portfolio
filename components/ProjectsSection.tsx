'use client';

import React, { useState } from 'react';
import { Typography, Tag, Button, Modal } from 'antd';
import { GithubOutlined, LinkOutlined, ExpandAltOutlined } from '@ant-design/icons';
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
        title: 'WatchDock Admin Panel',
        description: 'Responsive movie streaming and discovery platform inspired by Netflix.',
        fullDescription: 'WatchDock is a responsive movie streaming and discovery platform inspired by Netflix. It allows users to explore trending movies, search titles, view detailed movie information, and enjoy a smooth, app-like browsing experience.\n\nThe project focuses on performance, clean UI, and real-world frontend architecture, making it a production-ready React application.',
        tags: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Ant Design'],
        gradient: 'from-[#1e293b] to-[#334155]',
        link: 'https://maindev.det5kwz75d70l.amplifyapp.com/',
        repo: 'https://github.com/sonu622',
        image: '/watchdock_admin.png'
    },
    {
        title: 'Sunday Supper Landing Page',
        description: 'Immersive, high-converting landing page for a community-driven meal marketplace.',
        fullDescription: "Sunday Supper is a high-performance landing page designed for a community-driven marketplace that connects local diners with home-cooked meals made by talented home chefs and local culinary experts in your neighborhood.\n\nDiscover the joy of home-cooked meals made by local chefs. Sunday Supper brings families and friends together over warm, heartfelt dishes — just like you'd enjoy around your own dinner table.",
        tags: ['React', 'Tailwind CSS', 'Marketplace', 'Ant Design'],
        gradient: 'from-[#ff4d4f] to-[#f5222d]',
        link: 'https://www.sundaysuppereats.com',
        repo: 'https://github.com/sonu622',
        image: '/sunday_supper.png'
    },
    {
        title: 'Stylistic™️',
        description: 'Your personal stylist in your pocket providing effortless fashion recommendations.',
        fullDescription: "Discover confidence through style with Stylistic™️. From personalized color analysis to body shape insights, we'll guide you toward outfits that feel authentically you. No more guessing—just effortless recommendations that simplify shopping and elevate your everyday look.",
        tags: ['React', 'Next.js', 'Tailwind CSS', 'AI Stylist'],
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

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
                className="project-card-3d relative w-full h-[450px] rounded-3xl overflow-hidden glass-card group cursor-pointer"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                {project.image && (
                    <div className="absolute inset-0 z-0 p-6 flex flex-col justify-start bg-black/40">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-90" />
                    </div>
                )}

                <div className="relative z-10 p-8 h-full flex flex-col justify-end" style={{ transform: 'translateZ(50px)' }}>
                    <Tag color="purple" bordered={false} className="w-fit mb-4 bg-[#722ed2] text-white font-bold px-3 py-1 rounded-lg">
                        Project 0{index + 1}
                    </Tag>

                    <Title level={3} style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>
                        {project.title}
                    </Title>

                    <Paragraph className="text-gray-300 text-lg mb-6 line-clamp-2">
                        {project.description}
                    </Paragraph>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono uppercase tracking-wider bg-white/10 px-2 py-1 rounded border border-white/5 text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Button
                            icon={<ExpandAltOutlined />}
                            className="glass-btn flex-1 bg-white/10 border-white/20 text-white rounded-xl h-12"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Details
                        </Button>
                        <Button href="https://github.com/sonu622" target="_blank" icon={<GithubOutlined />} className="glass-btn bg-white/10 border-white/20 text-white rounded-xl h-12 px-4" />
                        <Button href={project.link} target="_blank" icon={<LinkOutlined />} className="glass-btn bg-white/10 border-white/20 text-white rounded-xl h-12 px-4" />
                    </div>
                </div>
            </motion.div>

            <Modal
                title={project.title}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="repo" href={project.repo} target="_blank" icon={<GithubOutlined />}>GitHub</Button>,
                    <Button key="live" type="primary" href={project.link} target="_blank" icon={<LinkOutlined />}>Live Demo</Button>
                ]}
                width={700}
                styles={{
                    body: { background: '#141414', color: '#fff' },
                    header: { background: '#141414', borderBottom: '1px solid #303030' },
                    mask: { backdropFilter: 'blur(4px)' }
                }}
            >
                <div className="py-4">
                    {project.image && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black/50">
                            <Image src={project.image} alt={project.title} fill className="object-contain" />
                        </div>
                    )}
                    <Title level={4} style={{ color: '#fff' }}>Overview</Title>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        {project.fullDescription || project.description}
                    </Paragraph>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <Tag key={tag} color="purple">{tag}</Tag>
                        ))}
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

                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
