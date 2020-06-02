import React from 'react';
import { Link } from 'react-router-dom';

import './aboutApp.scss';

function AboutApp() {
    return(
        <div className="about-app">
            <h1>ABOUT OUR APP</h1>
            <p>Bacon ipsum dolor amet proident ham veniam meatloaf dolore minim tenderloin non. Rump leberkas bresaola, fugiat laborum ham eu enim sunt beef ribs strip steak jerky ham hock. Nisi jowl qui labore flank veniam. Beef ribs capicola mollit laborum proident. Pastrami esse dolore incididunt ball tip buffalo occaecat boudin laborum pork tenderloin. Eiusmod aliqua kevin biltong commodo, jerky tongue kielbasa t-bone turkey. 
                Incididunt veniam brisket tail dolore. Sunt filet mignon jerky anim. Brisket elit salami, consectetur fatback aliquip short ribs. Pariatur est porchetta shank. Pork belly anim reprehenderit mollit qui. 
                Leberkas porchetta filet mignon boudin eu, elit shank burgdoggen cupidatat jowl. Eu elit excepteur, burgdoggen drumstick chicken leberkas eiusmod aute corned beef chislic capicola tempor prosciutto. Andouille esse brisket anim elit eiusmod ground round fatback ham hock meatball labore. Est consequat non chicken. Shoulder salami cupim, prosciutto velit corned beef burgdoggen occaecat incididunt cow chicken short ribs jerky duis. Tail velit ut non jowl pork loin. Ground round pig pastrami ut duis consequat chicken porchetta ex.
            </p>
            <button className="go-home__button"><Link to="/" className="link">GO HOME</Link></button>
        </div>
    )
}

export default AboutApp;