import { useState } from 'react';
import data from '../Data/crew.json'
import Staff from './Staff';

function Crew(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const crew = data.crew;//aqui los estoy trayendo del json
    props.setBackground("crew");//aqui estoy cambiando la imagen de fondo respecto al tamañno de la pagina

    const activeList = (key) => {
        // esto mueve el texto
        const slides = document.querySelector(".crew-slides");
        slides.style.transform = `translateX(${key * -25}%)`;
        setActiveIndex(key);

        // esto cambia la imagen del planeta
        const image = document.querySelector('.crew img');
        setTimeout(() => { image.src = require(`../images/${crew[key].image_path}`); }, 200);
    }


    return (
        <main className="crew">
            <div className="content">
                <div className="title"><span className="page-num">02 </span>Meet your crew</div>
                <section>
                    <div className="crew-slider">
                        <div className='crew-slides'>
                            {crew.map((crew, index) =>
                                <Staff key={index} name={crew.name} job={crew.job} description={crew.description}></Staff>
                            )}
                        </div>
                    </div>

                </section>
                <div className="slider">
                    <div onClick={() => activeList(0)} className={activeIndex === 0 ? "active-crew circle" : "circle"}></div>
                    <div onClick={() => activeList(1)} className={activeIndex === 1 ? "active-crew circle" : "circle"}></div>
                    <div onClick={() => activeList(2)} className={activeIndex === 2 ? "active-crew circle" : "circle"}></div>
                    <div onClick={() => activeList(3)} className={activeIndex === 3 ? "active-crew circle" : "circle"}></div>
                </div>
                <div className="img-container"><img src={require("../images/crew1.webp")} alt="crew" /></div>
            </div>
        </main>
    );
}

export default Crew;