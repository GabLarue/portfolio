import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/loader.tsx'
import Carousel from '../components/carousel.tsx'
import Project from '../types/project.ts'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
})

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([])

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

    return (
        <>
            <AnimatePresence>
                {projects.length > 0 ? <Carousel key={"carousel"} projects={projects} /> : <Loader key={"loader"} />}
            </AnimatePresence>
        </>
    )
}

export default ProjectsPage;