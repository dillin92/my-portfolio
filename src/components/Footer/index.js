import React from 'react';


const Footer = () => {
    return(
        <footer id="footer">
          <div class="card text-center">
            <div class="card-header">
              Contact Info
            </div>
            <div class="card-body">
              <h5 class="card-title">Email</h5>
              <p class="card-text">If you need to reach me with any questions...</p>
              <ul>
                <li className="list-inline-item"><strong>Email:</strong> <a href="#">dillin970@gmail.com</a></li>
                <li className="list-inline-item"><strong>Github:</strong> <a href="#">github.com/dillin92</a></li>
                <li className="list-inline-item"><strong>LinkedIn:</strong> <a href="#">https://www.linkedin.com/in/dillin-helsley-821668208/</a></li>
              </ul>
            </div>

            <div class="card-footer text-muted">
              <h2>Thank you for taking the time to peruse my portfolio</h2>
              <h3 class="sincerely"><br/>Sincerely- Dillin Helsley</h3>
            </div>
          </div>
      </footer>
    )
}

export default Footer;