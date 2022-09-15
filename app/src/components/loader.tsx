import { AnimatePresence, motion, useMotionValue, useTime, useTransform } from 'framer-motion';
import React from 'react'

const Loader = () => {
    return (
        <AnimatePresence>
            <motion.div
                transition={{
                    duration: 2,
                    type: "easeInOut"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-screen h-screen flex justify-center items-center gap-2'>
                <motion.div
                    transition={{
                        y: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeOut"
                        },
                        opacity: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    animate={{ y: "-114%", opacity: [0.8, 1] }}
                    className="bg-[#165954] w-[20px] h-[20px] rounded-full" />
                <motion.div
                    transition={{
                        delay: 0.15,
                        y: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeOut"
                        },
                        opacity: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    animate={{ y: "-107%", opacity: [0.8, 1] }}
                    className="bg-[#165954] w-[20px] h-[20px] rounded-full" />
                <motion.div
                    transition={{
                        delay: 0.3,
                        y: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeOut"
                        },
                        opacity: {
                            duration: 0.6,
                            yoyo: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    animate={{ y: "-112%", opacity: [0.8, 1] }}
                    className="bg-[#165954] w-[20px] h-[20px] rounded-full" />
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;

