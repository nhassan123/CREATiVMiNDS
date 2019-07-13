
import React from 'react';
import './Game.css';


const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;


class Diego extends React.Component{
    render(){
        return(
            <div><img src="characters/Diego.png" style={{width:"10%", marginBottom:10}}/></div>
        );
    }
}

class Game extends React.Component {



    render() {
       return (
            <div>
                <div className="tower" style={{width: WIDTH, height:HEIGHT}}>   
                    <Diego/>


                    
                </div>

            </div>
        );
    }
}


export default Game;


