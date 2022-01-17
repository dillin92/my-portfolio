import React from 'react';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import {SiGooglesheets}from "react-icons/si";
import { AboutMeP, FooterContainer, ContactInfoA, ContactInfoUl, ContactInfoLi } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer key="footer-container">


        <AboutMeP>
                    Hello, My name is Dillin Helsley. Im 29 years old and I live in Muncie, Indiana. I have 4 beautiful kids and I am happily engaged! I currently work at a grocery distribution center for Wal-Mart stores as an order filler. I am a graduate of Butler University's Executive Coding Bootcamp. I am eagerly anticipating the day that I enter into the field of web development.
                    In my free time I love to play music, mainly guitar,vocals, and trumpet but I can also play banjo, violin, piano, tuba, and little bit of drums. I have been a performing artist for about 10 years now. I have organized and promoted music events. I have been on the radio locally and have performed with national acts. Music has given me many memorable experiences!
        </AboutMeP> 


       <ContactInfoUl>    
          <ContactInfoLi><ContactInfoA href="dillin970@gmail.com"><BsFillEnvelopeOpenFill/><strong>Email</strong></ContactInfoA></ContactInfoLi> 
          <ContactInfoLi> <ContactInfoA href="github.com/dillin92"><AiFillGithub></AiFillGithub><strong>Github</strong></ContactInfoA></ContactInfoLi>
          <ContactInfoLi><AiFillLinkedin/><ContactInfoA href="https://www.linkedin.com/in/dillin-helsley-821668208/"><strong> LinkedIn</strong></ContactInfoA></ContactInfoLi>
          <ContactInfoLi><SiGooglesheets/><ContactInfoA href="https://docs.google.com/document/d/1173qKNAcMAK2DSqXaIpOXIwnJHs8PlvX7bFnYA6UWjQ/edit?usp=sharing"><strong>Resume</strong></ContactInfoA></ContactInfoLi>
      </ContactInfoUl>

        


    </FooterContainer>
  )
}

// const Footer = () => {
//     return(
//         <footer id="contact">
//           <div className="card text-center">
//             <div className="card-header">
//               Contact Info
//             </div>
//             <div className="card-body">
           
//               <ul>
//                 <li> <a href="dillin970@gmail.com"><strong>Email</strong></a></li>
//                 <li><a href="github.com/dillin92"><strong>Github</strong></a></li>
//                 <li><a href="https://www.linkedin.com/in/dillin-helsley-821668208/"><strong> LinkedIn</strong></a></li>
//                 <li><a href="https://docs.google.com/document/d/1173qKNAcMAK2DSqXaIpOXIwnJHs8PlvX7bFnYA6UWjQ/edit?usp=sharing"><strong>Resume (Google Doc)</strong></a></li>
//               </ul>
//             </div>

//             <div className="card-footer text-muted">
//               <h2>Thank you for taking the time to peruse my portfolio</h2>
//               <h3 className="sincerely"><br/>Sincerely- Dillin Helsley</h3>
//             </div>
//           </div>
          
//       </footer>
//     )
// }

export default Footer;