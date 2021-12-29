import React from 'react';


const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
    <div style= {{height: "250px", width: "350px", display: "inline-block", margin: "20px"}}>
          <h2 style={{textAlign: "center",padding: "50px",marginRight: "130px"}} className="font-serif">{projectName}</h2>
          <a href={projectUrl}> <img  style={{borderRadius: "28%",
  position: "static",
  marginRight: "125px",
  boxShadow: "0 0 10px 5px white"}}src={projectImg} href={projectUrl} className="card-img-top"></img></a>         
      <div className="card-body">
          
          <h3>Project Technology:</h3>
          <h4>{projectTech}</h4>
          
          
      </div>

    </div>     
    )
}

export default Project;