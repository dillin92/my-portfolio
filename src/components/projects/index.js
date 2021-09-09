import React from 'react';


const Project  = ({projectName,projectUrl,projectImg}) => {
    return (
      
      <div class="card">
            <h5 class="card-header">{projectName}</h5>
        <div class="card-body">
          <img src={projectImg}></img>
          <a href={projectUrl} class="btn btn-primary">Go to Project!</a>
        </div>
      </div>
    )
}

export default Project;