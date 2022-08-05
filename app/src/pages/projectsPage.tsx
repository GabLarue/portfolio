import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProjectCard from '../components/projectCard.tsx'

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
            <div className='project-cards-container'>
                {projects.map(p => <ProjectCard project={p} />)}
            </div>
        )
    }

    return (
        <div>
            <span>Projects are being fetch ...</span>
        </div>
    )
}

export default ProjectsPage;