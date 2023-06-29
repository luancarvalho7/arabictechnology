import './hero.css'
export function Hero() {
    return (
        <header id="hero">
            <span className='heroTransition'></span>
            <div id="heroContent" className="spacing">
                <div id="title">
                    <h1 id='headline'>Como a “Era da IA” pode <br />
                        te deixar a frente de<br />
                        <span className='greenText'> 99% das pessoas </span></h1>
                    <h3 id='subtitle'>Mesmo que você nem saiba o que isso significa</h3>
                </div>
                <iframe src="https://www.youtube.com/embed/tZ-ddbLFiSE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='vslVideo'></iframe>
            </div>
        </header>
    )
}