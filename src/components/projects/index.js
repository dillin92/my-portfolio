import React from 'react';


const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (


    <div className="grid grid-cols-10 h-7" >
          <h2 className="font-serif">{projectName}</h2>
          <a href={projectUrl}> <img src={projectImg} href={projectUrl} className="card-img-top"></img></a>
         
          
      <div className="card-body">
          
          <h3>Project Technology:</h3>
            <h4>{projectTech}</h4>
          
          
      </div>

    </div>

    

      
    )
}

export default Project;