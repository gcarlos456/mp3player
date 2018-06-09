//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import Play from '@fortawesome/fontawesome-free-solid/faPlay';
import Stop from '@fortawesome/fontawesome-free-solid/faPause';
import Rewind from '@fortawesome/fontawesome-free-solid/faStepBackward';
import Forward from '@fortawesome/fontawesome-free-solid/faStepForward';

fontawesome.config = {
  autoReplaceSvg: 'nest'
};

fontawesome.library.add(
    Play,
    Stop,
    Rewind,
    Forward
    
    
);


//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components

import {Player} from './component/musicplayer.jsx';

//render your react application
ReactDOM.render(
    <Player />,
    document.querySelector('#app')
);

