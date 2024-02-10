import { Mcard } from './mCard'
import './method.css'
export function Method() {

    const data = [
        {
            id: 1,
            title: "Iniciación en la Riqueza",
            text: "Comprende los principios fundamentales de la IA utilizados por la élite de Dubái. Comienza a pensar como un multimillonario."
        },
        {
            id: 2,
            title: "Redes Estratégicas",
            text: "Utiliza la IA para construir una red de jugadores de poder. Aprende a explotar las relaciones para tu beneficio personal."
        },
        {
            id: 3,
            title: "Dominación Total",
            text: "Implementa estrategias avanzadas de IA para un control total del mercado. Desarrolla una mentalidad inquebrantable y despiadada para la mejora continua."
        }

    ]
    return (
        <section id="method" className="spacing">
            <div id="methodText" className="sectionHeader">
                <h3 className="sectionMinTitle greenText">MÉTODO</h3>
                <h1 className="sectionMText">As 3 fases que irão mudar seu futuro...</h1>
            </div>
            <div className="methodContent">
                {data.map(
                    current => <Mcard
                        key={current.id}
                        number={current.id}
                        title={current.title}
                        text={current.text} />
                )}
            </div>
        </section>
    )
}