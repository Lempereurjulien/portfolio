import { useEffect, useState } from "react";
import "../Home/Home.css";
import { PresHome } from "../PresHome/PresHome";
import { TitleHome } from "../TitleHome/TitleHome";
export function Home(){
    const [presHome, setPreshome] = useState(false);
    const [swap, setSwap] = useState(false);

    useEffect(() => {
        if(swap){
            const timer = setTimeout(() => {
                setSwap(false);
            }, 500)
        }
    }, [swap])

    const changeAffichage = () =>{
        setPreshome(!presHome);
        setSwap(true)
    }
    
    const affichage = presHome ? <PresHome change={changeAffichage}></PresHome> : <TitleHome change={changeAffichage}></TitleHome>

    return (
        <div className={swap ? 'home-content-active' : 'home-content' }>
            <div className="first-content">
                {affichage}
            </div>
        </div>
    );
}