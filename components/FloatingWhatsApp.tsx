'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/918729004969?text=Hi%20Sonu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[999] flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-all duration-300 group border border-white/20"
            title="Chat directly on WhatsApp"
        >
            <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline font-bold tracking-wide">Quick Chat</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        </motion.a>
    );
};

export default FloatingWhatsApp;
