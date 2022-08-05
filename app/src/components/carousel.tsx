import React, { useEffect, useState } from 'react'
import Project from '../types/project.ts'
import ProjectCard from './projectCard.tsx'
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'

type CarouselProps = {
    projects: Project[];
}

const Carousel = ({projects}: CarouselProps) => {
    const [selectedProject, setSelectedProject] = useState<number>(0)
    const [canNext, setCanNext] = useState<boolean>(projects.length > 1)
    const [canPrevious, setCanPrevious] = useState<boolean>(false)

    const handleNext = () => {
        if (selectedProject < projects.length -1) {
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
        if (selectedProject >= projects.length -1) {
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
        <div className='carousel'>
            <button className={`navigation-arrow ${!canPrevious && 'disabled'}`} onClick={handlePrevious} disabled={!canPrevious}><ArrowLeft/></button>
            <ProjectCard project={projects[selectedProject]} />
            <button className={`navigation-arrow ${!canNext && 'disabled'}`} onClick={handleNext} disabled={!canNext}><ArrowRight /></button>
        </div>
    )
}

export default Carousel;