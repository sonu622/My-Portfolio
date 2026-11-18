'use client';

import React from 'react';
import { Layout, Flex } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '3.5rem 1rem' }}>
            <Flex vertical align="center" gap="middle" className="max-w-4xl mx-auto">
                <div className="text-2xl font-bold tracking-wide">SONU | MERN STACK DEVELOPER</div>
                <div className="text-sm text-gray-400">Full Stack Web Architecture • AWS Deployment • Manual & Automation Testing</div>

                {/* Direct Contact Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300 my-2">
                    <a
                        href="mailto:sonupal99082@gmail.com"
                        className="flex items-center gap-2 hover:text-[#722ed1] transition-colors"
                    >
                        <MailOutlined className="text-[#722ed1]" /> sonupal99082@gmail.com
                    </a>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <a
                        href="tel:8729004969"
                        className="flex items-center gap-2 hover:text-[#722ed1] transition-colors"
                    >
                        <PhoneOutlined className="text-[#2e72d2]" /> +91 8729004969
                    </a>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="flex items-center gap-2 text-gray-400">
                        <EnvironmentOutlined className="text-[#10b981]" /> Mohali, Punjab, India
                    </span>
                </div>

                {/* Social & Contact Icons */}
                <Flex gap="large" className="text-2xl mt-1">
                    <a
                        href="https://github.com/sonu622"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#722ed1] transition-colors"
                        title="GitHub"
                    >
                        <GithubOutlined />
                    </a>
                    <a
                        href="https://linkedin.com/in/sonu99082"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#722ed1] transition-colors"
                        title="LinkedIn"
                    >
                        <LinkedinOutlined />
                    </a>
                    <a
                        href="tel:8729004969"
                        className="hover:text-[#722ed1] transition-colors"
                        title="Call +91 8729004969"
                    >
                        <PhoneOutlined />
                    </a>
                    <a
                        href="mailto:sonupal99082@gmail.com"
                        className="hover:text-[#722ed1] transition-colors"
                        title="Email sonupal99082@gmail.com"
                    >
                        <MailOutlined />
                    </a>
                </Flex>

                <div className="text-gray-500 mt-4 text-xs">
                    © {new Date().getFullYear()} Sonu Pal. All rights reserved.
                </div>
            </Flex>
        </AntFooter>
    );
};

export default Footer;