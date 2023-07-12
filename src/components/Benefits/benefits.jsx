import { Bnft } from "./bnft";
import './benefits.css'
import data from '../../assets/data/benefits.json'



export function Benefits() {
    return (
        <section id="benefits" className="spacing">
            <div id="benefitsText" className="sectionHeader">
                <h3 className="sectionMinTitle greenText">VANTAGENS</h3>
                <h1 className="sectionMText">Benefícios</h1>
                <p className="txtP">A Inteligência Artificial está evoluindo a uma velocidade nunca antes vista. Este é o momento de ouro. A sua chance de dominá-la é agora, mas pode não durar por muito tempo...</p>
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