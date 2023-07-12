import './hero.css'
export function Hero() {
    return (
        <header id="hero">
            <span className='heroTransition'></span>
            <div id="heroContent" className="spacing">
                <div id="title">
                    <h1 id='headline'>Como a “Era da IA” pode <br />
                        te deixar à frente de<br />
                        <span className='greenText'> 99% das pessoas </span></h1>
                    <h3 id='subtitle'>Mesmo que você nem saiba o que isso significa</h3>
                </div>
                <iframe
                    id="panda-4bac0538-2b4d-4d9b-b6c6-2279e8ada3e0"
                    src="https://player-vz-3402d372-721.tv.pandavideo.com.br/embed/?v=4bac0538-2b4d-4d9b-b6c6-2279e8ada3e0"
                    style={{ border: 'none' }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                    allowFullScreen={true}
                    className="vslVideo"
                />
            </div>
        </header>
    )
}