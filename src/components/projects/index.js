import React from 'react';
import { ProjectBubble, ProjectImage, ProjectContainer, ProjectName, ProjectTech } from './ProjectElements';

const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
    <ProjectContainer>
          <ProjectName>{projectName}</ProjectName>

          <ProjectBubble href={projectUrl}> <ProjectImage src={projectImg} alt="magnificently coded masterpieces"/></ProjectBubble>  

      <ProjectTech>      
          <h3>Project Technology:</h3>
          <h4>{projectTech}</h4>
      </ProjectTech>

    </ProjectContainer>     
    )
}

export default Project;