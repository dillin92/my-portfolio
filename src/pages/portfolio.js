import React from 'react';
import image1 from '../../src/assets/cover/choovie.png';
import image2 from '../assets/cover/github.png';
import image3 from '../assets/cover/budget.png';
import Project from '../components/projects';


const projects = [
    {
        name:"Github Profile",
        href:"https://github.com/dillin92",
        img: image2
    },
    {
        name: "Choovie",
        href: "https://kmelissasantos.github.io/Choovie/",
        img: image1
    },
    {
        name: "Budget Tracker(PWA)",
        href: "https://budget-tracker92.herokuapp.com/",
        img: image3
    },
   

];

const Portfolio = () => {
    return(

    <div className="container d-inline-flex p-2 bd-highlight">
        <div className="row">
       
                <h1>PORTFOLIO</h1>
           
                {projects.map((project) => {
                return <Project className="col-sm-4" projectName={project.name} projectUrl={project.href} projectImg={project.img} />
            }) }
         
        
        </div>
    </div>
       

    )

}

export default Portfolio;

