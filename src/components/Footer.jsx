import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>


      <footer className="footer-container">
      <div id="contact">
        <h1 className="whitetext">Contact Me</h1>
        <a className="hvr-icon-spin" href="https://www.linkedin.com/in/thanwarat-klinmala-19831117a/" target="_blank" rel="noreferrer"><i className="social-icon fab fa-linkedin hvr-icon"></i></a>
        <a className="hvr-icon-spin" href="https://www.instagram.com/alli.gather/" target="_blank" rel="noreferrer"><i className="social-icon fab fa-instagram hvr-icon"></i></a>
        <a className="hvr-icon-spin" href="https://github.com/alligel" target="_blank" rel="noreferrer"><i className="social-icon fab fa-github-square hvr-icon"></i></a>
        <a className="hvr-icon-spin" href="mailto:thanwarat.kml@gmail.com" target="_blank" rel="noreferrer"><i className="social-icon fas fa-envelope hvr-icon"></i></a>
        <p className="whitetext"> ⓒ Coyright {year} Thanwarat K.</p>
     
      </div>
      </footer>


    </div>
  );
}

export default Footer;