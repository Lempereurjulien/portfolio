import './PresHome.css'

export function PresHome(props){
    return (
        <div className='preshome-content'>
            <div className='title-content'>
                <div className='title'>
                    <div className='titre'>Julien Lempereur</div>
                </div>
                <div className='title-resum'>
                    Développeur full-stack, possédant différentes compétences dans l'informatique.
                </div>
            </div>
            <div className='infos-content'>
                <div className='infos-title'>
                    <div className='bold titre'>Infos</div>
                </div>
                <div className='infos-text'>
            Attiré par l'informatique en général, j'adore découvrir de nouvelles technologies et essayer de les appliquer dans ma vie quotidienne. Mes études supérieurs m'ont permis d'assouvir cette soif de connaissance en m'apportant différentes vision dans l'informatique. Je suis une personne très curieux qui adore apprendre de nouvelle chose.
                </div>
            </div>
            <div className='reseaux-content'>
            <a href='https://www.linkedin.com/in/julien-lempereur-306166204' target='_blank'>Linkedin</a>
            <a href=''>CV</a>
            </div>
            <div onClick={props.change}>Retour</div>
        </div>
    );
}