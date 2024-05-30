import React from "react" ;
import "./index.css" ;
import Profile from "./assets/images/profile.png" ;



function Header(){
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="Profile" height="10%" width="10%"/>
                </span>
                </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            
            </nav>
        </div>
        
 )
    
}


export default Header ;