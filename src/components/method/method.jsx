import { Mcard } from './mCard'
import './method.css'
export function Method() {

    const data = [
        {
            id: 1,
            title: "Primeiro Contato",
            text: "Você vai conhecer o ChatGPT, a ferramenta que está revolucionando nosso mundo. Mesmo que Inteligência Artificial pareça complexa, aqui o complexo vai parecer simples. Você aprenderá a criar diálogos, fazer perguntas e usar o ChatGPT corretamente. Este é seu primeiro passo para se tornar um mestre da IA."
        },
        {
            id: 2,
            title: "Dominando o ChatGPT",
            text: "Agora é hora de ir além. Aqui você vai descobrir dicas, truques e táticas avançadas que vão mudar a o jeito que você usa o ChatGPT. Você vai aprender a automatizar tarefas e aumentar sua produtividade. Este é o momento em que você começa a ver o verdadeiro poder do ChatGPT na prática."
        },
        {
            id: 3,
            title: "1%",
            text: "Aqui é onde o ouro realmente está, você vai ficar por dentro do que apenas 1% dos usuários de Inteligência Artificial sabem. Para encontrar esses segredos foi necessário mais de um SEMESTRE vasculhando todos os cantos da internet. Apenas as técnicas mais avançadas e os mínimos detalhes que realmente funcionam se estão aqui."
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