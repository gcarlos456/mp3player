import React from 'react';


export class Player extends React.Component{
     constructor(){
        super();
        this.state = {
   

        };
    }
    
    render(){
        return (
            <div className= 'player'>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio -<span  className='nameSong'> cnkcn</span></li>
                    <li className="list-group-item">Dapibus ac facilisis in -<span  className='nameSong'> cnkcn</span></li>
                    <li className="list-group-item">Morbi leo risus<span  className='nameSong'> cnkcn</span></li>
                    
                </ul>
               

                <div className="navbar">
                    <i className="fas fa-step-backward fa-3x"></i>
                    <i className="fas fa-play fa-4x"></i>
                    <i className="fas fa-step-backward fa-3x"></i>
                </div>          
            </div>
        );
    }
}