import React from 'react';


const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (
      <div className="card" style={{ textAlign:"center", backgroundColor: "rgb(104, 103, 103, 0.85)"}} >
        <img src={projectImg} className="card-img-top" style={{ borderRadius: "28%", marginTop: "10px", position: "static", boxShadow:"0 0 10px 5px white" }}></img>
          
        <div className="card-body">
          <h3 className="card-title">{projectName}</h3>
          <ul>Project Technology
            <li className="text-sm font-medium text-gray-900">{projectTech}</li>
          </ul>
          <a href={projectUrl} className="btn btn-primary" style={{ display: "inline", position: "relative", margin:"20px"}}>Go to Project!</a>
        </div>
      </div>
    )
}

export default Project;