import React from 'react';
import dillyIllyin from '../../assets/cover/dillyillyin.jpg'

const About = () => {
    return(
        <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={dillyIllyin} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className="my-2">
        <p>
                  Hello, My name is Dillin Helsley. Im 28 years old and I live in Muncie, Indiana. I have 3 beautiful kids and I am happily engaged with another baby on the way! I currently work for a grocery distribution center for Wal-Mart stores as an order selector. I am currently enrolled in Butler Universities Executive Coding Bootcamp. I am eagerly anticipating the day that I enter into the field of web development.
                  In my free time I love to play music, mainly guitar,vocals, and trumpet but I can also play banjo, violin, piano, tuba, and little bit of drums. I have been a performing artist for about 10 years now. I have organized and promoted music events. I have been on the radio locally and have performed with national acts. Music has given me many memorable experiences!</p>
  
        </div>
      </section>

    )
}

export default About;