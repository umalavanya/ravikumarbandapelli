import React from "react" ;
import "./index.css" ;
import Profile from "./assets/images/profile.png" ;



function Header(){
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="Profile" height="10%" width="10%"/>Ravi Kumar Bandapelli</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/images/profile.jpg" alt="profile picture" /> </span>
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse " id="navbarResponsive">
                <ul class="navbar-nav ">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About me</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Research Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#publications">Publications</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#proceedings">Proceedings</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#posters">Poster Presentations</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#talks">Talks</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#photogalery">Photo Galery</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contactinfo">Contact</a></li>
                    
                </ul>
            </div>
            </nav>
        </div>
        
 )
    
}


export default Header ;