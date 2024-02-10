import { Bnft } from "./bnft";
import './benefits.css'
import data from '../../assets/data/benefits.json'



export function Benefits() {
    return (
        <section id="benefits" className="spacing">
            <div id="benefitsText" className="sectionHeader">
                <h3 className="sectionMinTitle greenText">EXCLUSIVO</h3>
                <h1 className="sectionMText">Beneficios </h1>
                <p className="txtP">Descubre la suite de beneficios diseñados para aquellos que no se conforman con participar, sino que juegan para ganar.</p>
            </div>
            <div id="benefitsContent">
                {data.map(current => <Bnft
                key={current.id}
                id={current.id}
                title={current.title}
                text={current.text}/>)}
            </div>
        </section>
    )
}