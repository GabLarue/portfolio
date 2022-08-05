import React, {useEffect, useState} from 'react'
import axios from 'axios'

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type":"application/json"
    }
})

interface Project {
    id:string,
    title:string,
    client:string,
    tags: string[]
}

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
        return projects.map(p => <span key={p.id}>{p.title}</span>) 
    }

    return (
        <div>
            <span>Projects are being fetch ...</span>
        </div>
    )
}

export default ProjectsPage;