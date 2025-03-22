import { useState } from "react";
import "../Home/Home.css"
export function Home(){

    const teste =() =>{
        alert("work")
    }
    return (
        <div className="home-content">
            <div className="title-content">
                {/* <div className="home-title">
                <div className="title">
                Bienvenue sur le portfolio de Lempereur Julien
                </div>
                <div className="button" onClick={teste}>Qui je suis ?</div>
                </div> */}
                <div className="pres-title">
                <div className="title">
                Bienvenue sur le portfolio de Lempereur Julien
                </div>
                <div className="button" onClick={teste}>Qui je suis ?</div>
                </div>
            </div>

        </div>
    );
}