import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

/**
 * File Card Component
 * @param {Object} props - Component props
 * @param {Object} props.data - File data containing description, size, close status, and tag info
 * @param {Object} props.reference - React ref for drag constraints
 */
const Card = ({ data, reference }) => {
    const { desc, fileSize, close, tag } = data;
    
    // Determine tag background color class
    const tagColorClass = tag?.tagColor === "blue" ? "bg-blue-600" : "bg-green-600";
    
    return (
        <motion.div 
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden cursor-grab active:cursor-grabbing"
        >
            {/* File icon */}
            <div className="mb-2">
                <FaRegFileAlt size="1.5em" />
            </div>
            
            {/* File description */}
            <p className="py-2 text-sm leading-tight font-semibold">{desc}</p>
            
            {/* Footer section */}
            <div className="absolute bottom-0 left-0 w-full">
                {/* File size and action button */}
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5 className="text-sm">{fileSize}</h5>
                    <button 
                        className="w-7 h-7 flex justify-center items-center bg-zinc-600 rounded-full hover:bg-zinc-500 transition-colors"
                        aria-label={close ? "Close" : "Download"}
                    >
                        {close ? <IoClose /> : <LuDownload size="1em" />}
                    </button>
                </div>
                
                {/* Optional tag section */}
                {tag?.isOpen && (
                    <div className={`w-full py-4 ${tagColorClass} flex items-center justify-center`}>
                        <h3 className="text-sm font-semibold">{tag.tagTittle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;