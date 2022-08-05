import React from 'react'

type ProjectTagsProps = {
    tags: string[]
}

const ProjectTags = ({tags}: ProjectTagsProps) => {
    console.log(tags)

    return(
        <div className='project-tags-container'>
            {tags.map(t => {
                console.log(t)
                return <span className='project-tag'>{t}</span>
            })}
        </div>
    )
}

export default ProjectTags
