import React from 'react';
import image1 from '../../src/assets/cover/choovie.png';
import image2 from '../assets/cover/github.png';
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
    }
];

const Portfolio = () => {
    return(
        <section className="portfolio">
            <h1>PORTFOLIO</h1>
          {projects.map((project) => {
              return <Project projectName={project.name} projectUrl={project.href} projectImg={project.img} />
          }) }
          
        </section>

    )

}

export default Portfolio;

