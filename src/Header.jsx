import React from "react" ;
import "./index.css" ;
import Profile from "./assets/images/profile.png" ;



function Header(){
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Profile} height="10%" width="10%"/>Ravi Kumar Bandapelli</span>
             </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
                <ul className="navbar-nav ">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About me</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Research Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#publications">Publications</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#proceedings">Proceedings</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#posters">Poster Presentations</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#talks">Talks</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#photogalery">Photo Galery</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contactinfo">Contact</a></li>
                    
                </ul>
            </div>
            </nav>
        </div>
        
 )
    
}


export default Header ;