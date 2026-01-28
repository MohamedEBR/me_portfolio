import React from 'react';
import { motion } from 'framer-motion';

const NeovimWrapper = ({ children, filename, insertMode = false, totalLines = 20 }) => {
    const lines = Array.from({ length: totalLines }, (_, i) => i + 1);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-5xl mx-auto bg-[#1a1b26] rounded-md overflow-hidden shadow-2xl border border-[#414868] font-mono text-sm md:text-base mb-12"
        >
            {/* Top Bar / Tab Bar */}
            <div className="bg-[#16161e] text-[#a9b1d6] px-4 py-2 flex items-center text-xs border-b border-[#1f2335]">
                <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
                </div>
                <div className="ml-4 bg-[#1f2335] px-3 py-1 rounded-t-sm flex items-center">
                    <span className="text-[#7aa2f7] mr-2"></span>
                    <span>{filename}</span>
                    <span className="ml-2 text-[#565f89]">x</span>
                </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex relative">
                {/* Line Gutter */}
                <div className="bg-[#16161e] text-[#565f89] px-3 py-4 text-right select-none min-h-[300px] border-r border-[#1f2335] hidden sm:block">
                    {/* Render line numbers dynamically based on height would be hard, just render enough */}
                    {lines.map(line => (
                        <div key={line} className="leading-relaxed opacity-50">{line}</div>
                    ))}
                    <div className="leading-relaxed opacity-50">~</div>
                    <div className="leading-relaxed opacity-50">~</div>
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-6 w-full text-[#a9b1d6] leading-relaxed relative bg-[#1a1b26]">
                    {children}
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-[#16161e] text-[#a9b1d6] text-xs flex items-center justify-between font-bold">
                <div className="flex">
                    <div className={`${insertMode ? 'bg-[#9ece6a] text-[#1a1b26]' : 'bg-[#7aa2f7] text-[#1a1b26]'} px-3 py-1 uppercase`}>
                        {insertMode ? 'INSERT' : 'NORMAL'}
                    </div>
                    <div className="bg-[#3b4261] px-3 py-1 text-[#a9b1d6]">
                        git::main
                    </div>
                    <div className="bg-[#16161e] px-3 py-1 text-[#a9b1d6]">
                        {filename}
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#16161e] px-3 py-1">
                        utf-8
                    </div>
                    <div className="bg-[#3b4261] px-3 py-1 text-[#a9b1d6]">
                        javascript
                    </div>
                    <div className={`${insertMode ? 'bg-[#9ece6a] text-[#1a1b26]' : 'bg-[#7aa2f7] text-[#1a1b26]'} px-3 py-1`}>
                        100%
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NeovimWrapper;
