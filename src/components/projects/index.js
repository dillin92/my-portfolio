import React from 'react';


const Project  = ({projectName,projectUrl,projectImg}) => {
    return (
        <article className="my-5">
          <h2>{projectName}</h2>
          <a href={projectUrl}><img src={projectImg}></img></a>
        </article>
    )
}

export default Project;