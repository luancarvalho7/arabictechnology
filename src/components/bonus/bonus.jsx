import { Cta } from '../cta/cta'
import './bonus.css'
export function Bonus() {
    return (
        <section id="bonus" >
            <div id="bonusText" className="sectionHeader">
                <h3 className="sectionMinTitle greenText">Bônus Exclusivo</h3>
                <h1 className="sectionMText">O Perigo das <br />
                    Inteligências Artificiais</h1>
                <p className="txtP">Garantindo hoje o Guia ChatGPT, você irá receber 2 incríveis BÔNUS: <br />
                    <strong>200 Prompts Avançados</strong> + <strong>JailBreaks</strong> de forma TOTALMENTE gratuita!</p>
            </div>
            <div id="bonusContent">
                <div id="bonusPicture">
                </div>
                <Cta mobilePrice={true}/>
            </div>
        </section>
    )
}