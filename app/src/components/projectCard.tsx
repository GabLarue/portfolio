import React from 'react'
import ProjectTags from './projectTags.tsx'

type ProjectCardPropr = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardPropr) => {
    return(
        <div className='project-card'>
            <div className='project-image-container'>
            </div>
            <span>{project.id}</span>
            <span>{project.title}</span>
            <ProjectTags tags={project.tags}/>
        </div>
    )
}

export default ProjectCard