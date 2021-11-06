import React from 'react';
import image1 from '../../src/assets/cover/choovie.png';
import image2 from '../assets/cover/github.png';
import image3 from '../assets/cover/budget.png';
import image4 from '../assets/cover/whatchaeatin.png';
import image5 from '../assets/cover/justnoodlin.png';
import Project from '../components/projects';



const projects = [
    {
        name:"Github Profile",
        href:"https://github.com/dillin92",
        img: image2,
        tech:"Github"
    },
    {
        name: "Choovie",
        href: "https://kmelissasantos.github.io/Choovie/",
        img: image1,
        tech: "Javascript, CSS, HTML"
    },
    {
        name: "Budget Tracker(PWA)",
        href: "https://budget-tracker92.herokuapp.com/",
        img: image3,
        tech: "Javascript, CSS, Node.js, MongoDB, mongoose"
    },
    {
        name: "Whatcha Eatin(REACT APP)",
        href: "http://whatcha-eatin.herokuapp.com/",
        img: image4,
        tech: "Javascript, React JS, Heroku"
    },
    {
        name: "Just Noodlin(Wordpress Blogsite)",
        href: "https://justnoodlin.org",
        img: image5,
        tech: "Wordpress, Elementor"
    }
];

const Portfolio = () => {
    return(

    <div className="container d-inline-flex p-2 bd-highlight" >
        <div className="row" >
       
                <h1 style={{ backgroundColor: "#999"}}>PORTFOLIO</h1>

                        {projects.map((project) => {
                         return <Project className="" projectName={project.name} projectUrl={project.href} projectImg={project.img} projectTech={project.tech} />
                    }) }
        
        </div>

    </div>
       

    )

}




export default Portfolio;

