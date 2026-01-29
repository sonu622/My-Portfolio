'use client';

import React from 'react';
import { Layout, Flex } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '3rem 1rem' }}>
            <Flex vertical align="center" gap="middle">
                <div className="text-2xl font-bold tracking-wide">PORTFOLIO</div>

                <Flex gap="large" className="text-2xl">
                    <a href="https://github.com/sonu622" target="_blank" rel="noopener noreferrer" className="hover:text-[#722ed1] transition-colors"><GithubOutlined /></a>
                    <a href="#" className="hover:text-[#722ed1] transition-colors"><LinkedinOutlined /></a>
                    <a href="#" className="hover:text-[#722ed1] transition-colors"><TwitterOutlined /></a>
                    <a href="mailto:sonupal99082@gmail.com" className="hover:text-[#722ed1] transition-colors"><MailOutlined /></a>
                </Flex>

                <div className="text-gray-500 mt-4">
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </div>
            </Flex>
        </AntFooter>
    );
};

export default Footer;
