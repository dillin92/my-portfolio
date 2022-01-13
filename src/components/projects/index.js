import React from 'react';
import { ProjectBubble, ProjectImage, ProjectContainer, ProjectName } from './ProjectElements';

const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
    <ProjectContainer style= {{ display: "inline-block", margin: "20px"}}>
          <ProjectName style={{textAlign: "center", padding: "50px",marginRight: "130px"}} className="font-serif">{projectName}</ProjectName>

          <ProjectBubble href={projectUrl}> <ProjectImage src={projectImg} alt="magnificently coded masterpieces"/></ProjectBubble>  

      <div className="card-body">      
          <h3>Project Technology:</h3>
          <h4>{projectTech}</h4>
      </div>

    </ProjectContainer>     
    )
}

export default Project;