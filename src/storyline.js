import React from 'react';

import Scroller from './components/scroll/index';


const story = <p>
    Your team was testing out a new flying machine that you had built. <br/>
    Something went wrong and you crash landed inside this tower. <br/>
    You flew in through a window but need to find a way to escape. <br/>
    Split up and look for clues. <br/>
    You might learn about a new way to get out of the tower and find your way home.
</p>

class Storyline extends React.Component{
    render(){
        return(
            <div>
                 <Scroller scrollText={story}/>
                 <a href='/teamGame'><button>Got it!</button></a>
            </div>)
    }
}

export default Storyline;