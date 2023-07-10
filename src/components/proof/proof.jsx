import './proof.css'

export function Proof() {
    return (
        <section id="proof" className="spacing">
            <div id="proofText" className="sectionHeader">
                <h3 className="sectionMinTitle greenText">O FUTURO</h3>
                <h1 className="sectionMText">O Perigo das <br />
                    Inteligências Artificiais</h1>
                <p className="txtP">Estamos no começo de uma nova revolução, a “Era da Inteligência Artificial”. Veja ao lado alguns dos mais influentes do mundo da tecnologia com medo do poder da IA. </p>
            </div>
            <div id="proofContent">
                <iframe className="video"  src="https://www.youtube.com/embed/q0CudmsQSWs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>
    )
}