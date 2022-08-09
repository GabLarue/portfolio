import React from 'react'
import ProjectTags from './projectTags.tsx'

type ProjectCardProp = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProp) => {
    return(
        <div className='project-card'>
            <span className='project-name'><b>{project.title}</b></span>
            <span className='client-name'>{project.client}</span>
            <ProjectTags tags={project.tags}/>
        </div>
    )
}

export default ProjectCard