import React from 'react';
import { ProjectBubble, ProjectImage, ProjectContainer } from './ProjectElements';

const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
    <ProjectContainer style= {{height: "250px", width: "350px", display: "inline-block", margin: "20px"}}>
          <h2 style={{textAlign: "center", padding: "50px",marginRight: "130px"}} className="font-serif">{projectName}</h2>

          <ProjectBubble href={projectUrl}> <ProjectImage src={projectImg} alt="magnificently coded masterpieces"/></ProjectBubble>  

      <div className="card-body">      
          <h3>Project Technology:</h3>
          <h4>{projectTech}</h4>
      </div>

    </ProjectContainer>     
    )
}

export default Project;