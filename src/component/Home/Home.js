import { use, useState } from "react";
import "../Home/Home.css"
import { TitleHome } from "../TitleHome/TitleHome";
import { PresHome } from "../PresHome/PresHome";
export function Home(){
    const [presHome, setPreshome] = useState(false);
    
    const changeAffichage = () =>{
        setPreshome(!presHome);
    }
    
    const affichage = presHome ? <PresHome change={changeAffichage}></PresHome> : <TitleHome change={changeAffichage}></TitleHome>

    return (
        <div className="home-content">
            <div className="first-content">
                {affichage}
            </div>

        </div>
    );
}