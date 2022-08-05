import React from 'react'
import ProjectTags from './projectTags.tsx'

type ProjectCardPropr = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardPropr) => {
    return(
        <div className='project-card'>
            <span className='project-name'>{project.title}</span>
            <span className='client-name'>{project.client}</span>
            <ProjectTags tags={project.tags}/>
        </div>
    )
}

export default ProjectCard