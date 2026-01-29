'use client';

import React, { useState } from 'react';
import { Button, Drawer, Flex } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'fixed',
                top: 0,
                zIndex: 1000,
                width: '100%',
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0 2rem',
                height: '64px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <motion.div
                className="logo text-xl font-bold text-white tracking-widest cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Dev.SONU
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="relative text-white/80 transition-colors font-medium group py-2"
                    >
                        <span className="relative z-10 group-hover:text-[#722ed1] transition-colors">{item.label}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#722ed1] transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
                className="md:hidden"
                type="text"
                icon={<MenuOutlined style={{ color: 'white', fontSize: '1.5rem' }} />}
                onClick={showDrawer}
            />

            {/* Mobile Drawer */}
            <Drawer
                title={<span className="text-white">Menu</span>}
                placement="right"
                onClose={onClose}
                open={open}
                styles={{
                    header: { borderBottom: '1px solid #333', background: '#050505' },
                    body: { background: '#050505' },
                    mask: { backdropFilter: 'blur(5px)' }
                }}
                closeIcon={<span style={{ color: 'white' }}>x</span>}
            >
                <Flex vertical gap="large">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                onClick={onClose}
                                className="text-lg font-medium text-white hover:text-[#722ed1] transition-colors block py-2"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </Flex>
            </Drawer>
        </motion.header>
    );
};

export default Navbar;
