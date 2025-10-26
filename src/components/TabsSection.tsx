import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, GripVertical } from 'lucide-react';
import { cn } from '../lib/utils';

type Tab = 'About Me' | 'Experiences' | 'Recommended';

const tabContent = {
  'About Me': "Hello! I’m Sai Kiran, a passionate front-end developer excited about crafting modern, interactive, and accessible web experiences. I love turning creative ideas into clean, responsive interfaces using React, Next.js, and Tailwind CSS. I enjoy solving real-world problems through code and continuously exploring new design systems, animations, and UI trends. Outside of coding, I like learning about product design and improving user experience workflows. This project reflects my dedication to building intuitive and visually appealing web applications.",
  'Experiences': "Over the past few years, I’ve worked on several academic and personal projects focused on full-stack and front-end development. My experience includes building responsive interfaces with React and Next.js, integrating APIs, and implementing features like dynamic rendering, image uploaders, and smooth animations. I’ve collaborated with small teams on open-source and college projects, which strengthened my skills in version control, debugging, and agile workflows. I’m continuously learning how to make UIs faster, cleaner, and more scalable.",
  'Recommended': "For anyone passionate about front-end development, I highly recommend exploring “Refactoring UI” by Adam Wathan and Steve Schoger — it’s an incredible guide on practical design principles for developers. I also suggest following “Frontend Mentor” and “Dev.to” for community projects and code challenges. These platforms have helped me refine my coding style, learn new frameworks, and stay updated with the latest in web development.",
};

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('About Me');

  return (
    <div className="bg-brand-widget rounded-2xl p-4 sm:p-6 shadow-neumorphic-inset flex gap-4">
      <div className="flex flex-col gap-4 text-brand-text-secondary">
        <HelpCircle size={20} />
        <GripVertical size={20} />
      </div>
      <div className="w-full">
        <div className="bg-brand-dark rounded-full p-1 flex items-center shadow-neumorphic-inset-sm mb-4">
          {(['About Me', 'Experiences', 'Recommended'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'w-full rounded-full py-2 text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none',
                activeTab === tab
                  ? 'text-white shadow-neumorphic-inset-sm bg-brand-dark'
                  : 'text-brand-text-secondary hover:bg-white/5'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="h-40 overflow-y-auto custom-scrollbar pr-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-brand-text-secondary text-sm leading-relaxed"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
