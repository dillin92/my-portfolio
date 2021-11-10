import React from 'react';
import dillyIllyin from '../../assets/cover/dillyillyin.jpg';

const About = () => {
    return(
        <section className="my-5 grey" style={{ width: "100%",margin: 5, padding: 0, fontFamily: 'cursive', boxSizing: "border-box" , textAlign: "center"}}>

          <h1 id="about">Who am I?</h1>
          <img src={dillyIllyin} className="my-2"  alt="cover" />

          <div className="my-2">

          
          <p>
                    Hello, My name is Dillin Helsley. Im 28 years old and I live in Muncie, Indiana. I have 3 beautiful kids and I am happily engaged with another baby on the way! I currently work for a grocery distribution center for Wal-Mart stores as an order selector. I am currently enrolled in Butler Universities Executive Coding Bootcamp. I am eagerly anticipating the day that I enter into the field of web development.
                    In my free time I love to play music, mainly guitar,vocals, and trumpet but I can also play banjo, violin, piano, tuba, and little bit of drums. I have been a performing artist for about 10 years now. I have organized and promoted music events. I have been on the radio locally and have performed with national acts. Music has given me many memorable experiences!</p>
    
          </div>

          <div id="resume">
            <h1>Resume</h1>
            <iframe src="https://onedrive.live.com/embed?cid=9138818616C25594&resid=9138818616C25594%21295620&authkey=ANWaET0ER74EJ4Y&em=2" width="476px" height="700px" frameborder="0" scrolling="no"></iframe>
        </div>
          
      </section>

    )
}

export default About;