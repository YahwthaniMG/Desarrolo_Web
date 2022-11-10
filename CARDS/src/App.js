
import './App.css';
import Card from './cards';


let names=["Nikola Tesla","John-117", "Jack the Ripper"];
let phones=["The cell phone didn't exist yet haha","11771100", "5 women confirmed"];
let emails=["nikolas.tesla@hotmail.com","Masterchief@spartan.com","JackRipper@murderer.com"];
let imagen=["tesla.jpeg","john.png","jack.webp"];
let nacimiento=["July 10, 1856","March 7, 2511; Eridanus II","Unknown"];
let fallecio=[" January 7, 1943","He did not die","Unknown"]
let descripcion=[]
descripcion[0]="He was a Serbian-born American inventor, electrical engineer, and mechanic who is best known for his contributions to the design of the modern alternating current (AC) electricity supply.";
descripcion[1]="He is a character and the main protagonist of the Halo video game series. SPARTAN-117 is one of the only Spartan soldiers from the SPARTAN-II or ORION-II project.";
descripcion[2]="It is the name given to an unidentified serial killer to whom at least five homicides are attributed in the London neighborhood of Whitechapel (East End) in 1888, and whose modus operandi was characterized by cuts in the throat, mutilations in the genital areas and abdominal pain, removal of organs and disfigurement of the face of women who were engaged in prostitution";


//1-> Blue 2-Green  3->Red  4->Yellow 5-White 6- Gray
let colors=[1,2,3]




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Find and create identity cards.
        </p>
    
      </header>
      <body>
        <Card name={names[0]} img={imagen[0]} email={emails[0]} phone={phones[0]} born={nacimiento[0]} murio={fallecio[0]}
          descrip={descripcion[0]} color={colors[0]}
        />
        <Card name={names[1]} img={imagen[1]} email={emails[1]} phone={phones[1]} born={nacimiento[1]} murio={fallecio[1]}
          descrip={descripcion[1]} color={colors[1]}
        />
        <Card name={names[2]} img={imagen[2]} email={emails[2]} phone={phones[2]} born={nacimiento[2]} murio={fallecio[2]}
          descrip={descripcion[2]} color={colors[2]}
        />
      </body>
    </div>
  );
}

export default App;

/*
<img src={logo} className="App-logo" alt="logo" />

import logo from './logo.svg';
*/