import React from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    duration:2000
});

function Landingscreen() {
    return (
        <div className="row landing">
            <div className="col-md-12 text-center">

            <h2 data-aos='zoom-in' style={{fontSize:'150px'}}>SkyRooms</h2>
            <marquee direction="right" scrollamount="10"><h1 data-aos='zoom-out'>"There is only one boss. The Guest."</h1></marquee>

            <Link to="/home">
            <button data-aos='zoom-in' className="btn btn-primary">Get Started</button>
            </Link>
            

            </div>
        </div>
    )
}

export default Landingscreen
