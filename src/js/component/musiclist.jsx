import React from 'react';


export class Player extends React.Component{
     constructor(){
        super();
        this.state = {
          
        };
    }
    
    render(){
        return (
            <div className= 'player container'>
                <div className='row'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio -<span  className='nameSong'> cnkcn</span></li>
                        <li className="list-group-item">Dapibus ac facilisis in -<span  className='nameSong'> cnkcn</span></li>
                        <li className="list-group-item">Morbi leo risus<span  className='nameSong'> cnkcn</span></li>
                    
                    </ul>
                </div>
            </div>
        );
    }
}