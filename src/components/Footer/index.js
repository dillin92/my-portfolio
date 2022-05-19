import React from 'react';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import {SiGooglesheets}from "react-icons/si";
import { AboutMeP, FooterContainer, ContactInfoA, ContactInfoUl, ContactInfoLi } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer id="contact" key="footer-container">


        <AboutMeP>
                    Hello, My name is Dillin Helsley. Im 29 years old and I live in Muncie, Indiana. I have 4 beautiful kids and I am happily engaged! I currently work at a grocery distribution center for Wal-Mart stores as an order filler. I am a graduate of Butler University's Executive Coding Bootcamp. I am eagerly anticipating the day that I enter into the field of web development.
                    In my free time I love to play music, mainly guitar,vocals, and trumpet but I can also play banjo, violin, piano, tuba, and little bit of drums. I have been a performing artist for about 10 years now. I have organized and promoted music events. I have been on the radio locally and have performed with national acts. Music has given me many memorable experiences!
        </AboutMeP> 


       <ContactInfoUl>    
          <ContactInfoLi><ContactInfoA href="dillin970@gmail.com"><BsFillEnvelopeOpenFill/><strong>Email</strong></ContactInfoA></ContactInfoLi> 
          <ContactInfoLi> <ContactInfoA href="github.com/dillin92"><AiFillGithub></AiFillGithub><strong>Github</strong></ContactInfoA></ContactInfoLi>
          <ContactInfoLi><AiFillLinkedin/><ContactInfoA href="https://www.linkedin.com/in/dillin-helsley-821668208/"><strong> LinkedIn</strong></ContactInfoA></ContactInfoLi>
          <ContactInfoLi><SiGooglesheets/><ContactInfoA href="https://docs.google.com/document/d/1173qKNAcMAK2DSqXaIpOXIwnJHs8PlvX7bFnYA6UWjQ/edit?usp=sharing"><strong>Resume</strong></ContactInfoA></ContactInfoLi>
          <ContactInfoLi><SiGooglesheets/><ContactInfoA href="https://docs.google.com/document/d/1HGTv3ACzvQicD-w5alnNf9xP751mZBhjhxpjLS_xJuc/edit?usp=sharing"><strong>Letter of Recommendation</strong></ContactInfoA></ContactInfoLi>
      </ContactInfoUl>

        


    </FooterContainer>
  )
}

export default Footer;