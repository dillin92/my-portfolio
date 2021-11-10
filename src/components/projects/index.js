import React from 'react';


const Project  = ({projectName,projectUrl,projectImg,projectTech}) => {
    return (


    <div className="card" style={{ textAlign:"center", display: "inherit", display: "inline-flex", padding: "20px", backgroundColor: "black", color: "limegreen" , margin: "2px"}} >
          <h3 className="card-title">{projectName}</h3>
        <img src={projectImg} className="card-img-top" style={{ borderRadius: "28%", marginTop: "10px", position: "static", boxShadow:"0 0 10px 5px white" }}></img>
          
      <div className="card-body">
          
          <h2>Project Technology:</h2>
            <h3 className="text-sm font-medium text-gray-900">{projectTech}</h3>
          
          <a href={projectUrl} className="btn btn-primary" style={{ display: "inline", position: "relative", margin:"20px"}}>Go to Project!</a>
      </div>

    </div>
      
    )
}

export default Project;