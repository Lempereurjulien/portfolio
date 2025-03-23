import "./TitleHome.css"

export function TitleHome(props){
    return (
        <div className="pres-title">
                <div className="title-home titre">
                Bienvenue sur le portfolio de Lempereur Julien
                </div>
                <div className="button" onClick={props.change}>Qui je suis ?</div>
                </div>
    );
}