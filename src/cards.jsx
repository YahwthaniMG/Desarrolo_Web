import React from 'react'; 



function Card(props){
    if (props.color===1){
    return(
        <body class="App-body">
            <div class="contenedor">
                <div class="card">
                    <div class="orden">
                        <div class="card-body">
                            <div class="card-body-item">
                                <img class="img_Pers" src={props.img} alt="random" />
                                    <div class="texto">
                                        <h2 class="card-title"> {props.name}</h2>
                                            <div class="datos">
                                            <div>
                                                <p id="subtitulo"> Number Phone:</p> 
                                                <p> {props.phone}</p>
                                            </div>
                                            <div>
                                                <p id="space">_</p>
                                            </div>
                                            <div>
                                                <p id="subtitulo">Address Email:</p> 
                                                <p>{props.email}</p>
                                            </div>
                                            <div>
                                                <p id="space">_</p>
                                            </div>
                                            <div>
                                                <p id="subtitulo">Birth:</p>  
                                                <p>{props.born}</p>
                                            </div>
                                            <div>
                                                <p id="space">_</p>
                                            </div>
                                            <div>
                                                <p id="subtitulo">Death:</p>
                                                <p>{props.murio}</p>
                                            </div>
                                            <div>
                                                <p id="space">_</p>
                                            </div>
                                            <div>
                                                <p id="subtitulo">Basic Description:</p>
                                                <p>{props.descrip}</p>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
    }
    
    else if (props.color===2){
        return(
            <body class="App-body">
                <div class="contenedor">
                    <div class="card1">
                        <div class="orden">
                            <div class="card-body">
                                <div class="card-body-item">
                                    <img class="img_Pers" src={props.img} alt="random" />
                                        <div class="texto">
                                            <h2 class="card-title"> {props.name}</h2>
                                                <div class="datos">
                                                <div>
                                                    <p id="subtitulo"> Number Phone:</p> 
                                                    <p> {props.phone}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Address Email:</p> 
                                                    <p>{props.email}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Birth:</p>  
                                                    <p>{props.born}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Death:</p>
                                                    <p>{props.murio}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Basic Description:</p>
                                                    <p>{props.descrip}</p>
                                                    <div>
                                                        <p id="space">_</p>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }

    else if (props.color===3){
        return(
            <body class="App-body">
                <div class="contenedor">
                    <div class="card2">
                        <div class="orden">
                            <div class="card-body">
                                <div class="card-body-item">
                                    <img class="img_Pers" src={props.img} alt="random" />
                                        <div class="texto">
                                            <h2 class="card-title"> {props.name}</h2>
                                                <div class="datos">
                                                <div>
                                                    <p id="subtitulo"> Number Phone:</p> 
                                                    <p> {props.phone}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Address Email:</p> 
                                                    <p>{props.email}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Birth:</p>  
                                                    <p>{props.born}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Death:</p>
                                                    <p>{props.murio}</p>
                                                </div>
                                                <div>
                                                    <p id="space">_</p>
                                                </div>
                                                <div>
                                                    <p id="subtitulo">Basic Description:</p>
                                                    <p>{props.descrip}</p>
                                                    <div>
                                                        <p id="space">_</p>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }

}

export default Card;