import React from 'react';


const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
      
      <div class="card">
            <h5 class="card-header">{projectName}</h5>
        <div class="card-body">
          <img src={projectImg}></img>
          <ul>Project Technology
            <li>{projectTech}</li>
          </ul>
          <a href={projectUrl} class="btn btn-primary">Go to Project!</a>
        </div>
      </div>
    )
}

export default Project;