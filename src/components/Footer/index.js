import React from 'react';


const Footer = () => {
    return(
        <footer id="contact">
          <div className="card text-center">
            <div className="card-header">
              Contact Info
            </div>
            <div className="card-body">
           
              <ul>
                <li className="list-inline-item"> <a href="dillin970@gmail.com"><strong>Email</strong></a></li>
                <li className="list-inline-item"><a href="github.com/dillin92"><strong>Github</strong></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/dillin-helsley-821668208/"><strong> LinkedIn</strong></a></li>
                <li className="list-inline-item"><a href="https://docs.google.com/document/d/1173qKNAcMAK2DSqXaIpOXIwnJHs8PlvX7bFnYA6UWjQ/edit?usp=sharing"><strong>Resume (Google Doc)</strong></a></li>
              </ul>
            </div>

            <div className="card-footer text-muted">
              <h2>Thank you for taking the time to peruse my portfolio</h2>
              <h3 className="sincerely"><br/>Sincerely- Dillin Helsley</h3>
            </div>
          </div>
          
      </footer>
    )
}

export default Footer;