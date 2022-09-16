import React, { useEffect, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'
import { AnimatePresence, motion } from 'framer-motion';

type CarouselProps = {
    projects: Project[];
}

const Carousel = ({ projects }: CarouselProps) => {
    const [selectedProject, setSelectedProject] = useState<number>(0)
    const [canNext, setCanNext] = useState<boolean>(projects.length > 1)
    const [canPrevious, setCanPrevious] = useState<boolean>(false)

    const handleNext = () => {
        if (selectedProject < projects.length - 1) {
            setSelectedProject(selectedProject + 1)
        }
    }

    const handlePrevious = () => {
        if (selectedProject === 0) {
            return;
        }
        setSelectedProject(selectedProject - 1)
        return;
    }

    useEffect(() => {
        if (selectedProject >= projects.length - 1) {
            setCanNext(false)
        } else {
            setCanNext(true)
        }

        if (selectedProject <= 0) {
            setCanPrevious(false)
        } else {
            setCanPrevious(true)
        }

        console.log(`selected project is: ${selectedProject}`)
    }, [selectedProject])

    return (
        <motion.div
            key="carousel-container"
            className='carousel h-screen w-screen flex justify-center items-center'
            transition={{
                duration: 2
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='flex flex-row gap-1'>
                <motion.div key="carousel-child-1" className='h-[200px] w-[400px]'>
                    <img className='project-image terciary left' src="https://imageio.forbes.com/specials-images/imageserve/608b2c043bf4a70fd3a674dc/Google-HDR--with-Bracketing-example-/0x0.jpg?format=jpg&crop=2482,1397,x0,y221,safe&width=960" />
                </motion.div>
                <motion.div key="carousel-child-2" className='h-[200px] w-[400px]'>
                    <img className='project-image terciary left' src="https://imageio.forbes.com/specials-images/imageserve/608b2c043bf4a70fd3a674dc/Google-HDR--with-Bracketing-example-/0x0.jpg?format=jpg&crop=2482,1397,x0,y221,safe&width=960" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Carousel;
