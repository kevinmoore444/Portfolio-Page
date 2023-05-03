import React from 'react'
import Project_Item from '../Components/Project_Item'
import "../Styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
        <div className='projectList'>
          {ProjectList.map((project, idx) => {
            return (
            <Project_Item id={idx} name={project.name} image={project.image}/>
            )
          }
          )}
        </div>
    </div>
  )
}

export default Projects