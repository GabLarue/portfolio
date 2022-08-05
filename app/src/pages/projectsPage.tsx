import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProjectCard from '../components/projectCard.tsx'
import Loader from '../components/loader.tsx'
import Carousel  from '../components/carousel.tsx'
import Project from '../types/project.ts'

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type":"application/json"
    }
})

const ProjectsPage = () => {
    const [ projects, setProjects ] = useState<Project[]>([])

    useEffect(() => {
        try {
            http.get(`/projects`)
            .then(response => {
                setProjects(response.data)
                return response.data
            })
        } catch (error) {
            alert(error)
        } 
    })

    if (projects.length > 0) {
        return (
            <Carousel projects={projects}/>
            // <div className='project-cards-container'>
            //     {projects.map(p => <ProjectCard project={p} />)}
            // </div>
        )
    }

    return (
        <Loader/>
    )
}

export default ProjectsPage;