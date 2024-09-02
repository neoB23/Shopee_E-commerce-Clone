import React, { useState, useEffect } from 'react';
import Hero from './landingpage/Hero';
import BelowHeader from './landingpage/BelowHeader';
// import Shoes from './landingpage/shoes'

function Landing() {
    return(
        <div> 
            <BelowHeader/>
            <Hero/>
            {/* <Shoes/> */}
        </div>
    );
}

export default Landing;