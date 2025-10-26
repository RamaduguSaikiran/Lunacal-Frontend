import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, GripVertical, Plus, ArrowLeft, ArrowRight } from 'lucide-react';

const initialImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
  'https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
  'https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715',
];

const GallerySection: React.FC = () => {
  const [images, setImages] = useState<string[]>(initialImages);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleAddImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageSrc = URL.createObjectURL(file);
      setImages(prevImages => [...prevImages, newImageSrc]);
      setTimeout(() => {
        scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
      }, 100);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -200 : 200;
    scrollContainerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-widget rounded-2xl p-4 sm:p-6 shadow-neumorphic-inset flex gap-4">
      <div className="flex flex-col gap-4 text-brand-text-secondary">
        <HelpCircle size={20} />
        <GripVertical size={20} />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-brand-text-primary">Gallery</h3>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddImageClick}
              className="flex items-center gap-2 text-sm bg-brand-widget text-brand-text-secondary px-4 py-2 rounded-full shadow-neumorphic-outset hover:shadow-neumorphic-inset transition-all duration-300"
            >
              <Plus size={16} />
              Add Image
            </motion.button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => scroll('left')} className="p-2 rounded-full bg-brand-widget shadow-neumorphic-outset hover:shadow-neumorphic-inset transition-all duration-300">
              <ArrowLeft size={16} className="text-brand-text-secondary" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => scroll('right')} className="p-2 rounded-full bg-brand-widget shadow-neumorphic-outset hover:shadow-neumorphic-inset transition-all duration-300">
              <ArrowRight size={16} className="text-brand-text-secondary" />
            </motion.button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-32 h-32"
            >
              <img src={src} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
