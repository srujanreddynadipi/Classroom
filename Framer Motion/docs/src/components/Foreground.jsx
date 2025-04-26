import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Foreground() {
    const ref = useRef(null);
    
    const data = [
        {
            desc: "this is the going to shown in the cards this is the going to shown in the cards",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTittle: "Download Now ", tagColor: "Green" },
        },
        {
            desc: "this is the lorem this is the going to shown in the cards text",
            fileSize: ".4md",
            close: true,
            tag: { isOpen: true, tagTittle: "Download Now ", tagColor: "blue" },
        },
        {
            desc: "this is the lorem this is the going to shown in the cards this is the going to shown in the cardstext",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTittle: "Download Now ", tagColor: "Green" },
        },
    ];
    
    return (
        <div 
            ref={ref} 
            className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
        >
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;