import React from 'react';
import './style.css';

import Sample from './images/sample.jpg'; 
import Image1 from './images/img1.png';
import Image2 from './images/img2.png';
import Image3 from './images/img3.png';
import Image4 from './images/img4.png';
import Image5 from './images/img5.png';

class Polaroids extends React.Component{
    render(){
        return(
        <div>
            <center>
        <div className="polaroid-images">
        <a href="" title="Leaan" ><img height="200" src={Image3} alt="Cave" title="Cave" /></a>
        <a href="" title="Learn"><img height="200" src={Image4} alt="Island" title="Island" /></a>
        <a href="" title="Explore"><img height="200" src={Image2} alt="Islands Forest" title="Islands Forest" /></a>
        <a href="" title="Collaborate"><img height="200" src={Image5} alt="Cave" title="Cave" /></a>
        <a href="" title="Learn"><img height="200" src={Image1} alt="Island" title="Island" /></a>
        
        </div>
    </center>
    </div>);

    };
}

export default Polaroids;