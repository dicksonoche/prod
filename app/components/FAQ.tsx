import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        height: 'auto',
        transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => setIsOpen(!isOpen);
    return (
        <motion.div className="faq-item" variants={itemVariants} initial="closed" animate={isOpen ? "open" : "closed"}>
            <motion.button className="faq-question" whileTap={{ scale: 0.97 }} onClick={toggleFAQ}>
                {question}
                <motion.div variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }} transition={{ duration: 0.2 }} style={{ originY: 0.55 }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.div>
            </motion.button>
            <motion.div className="faq-answer">{isOpen && <p>{answer}</p>}</motion.div>
        </motion.div>
    )
}

export default FAQ