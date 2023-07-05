export function Mcard({ number, title, text }) {

    const isThird = number == 3
    return (
        <div className={`mCard ${isThird ? "Card-hl" : ""}`}>
            <h3 className="greenText">
                FASE {number}
            </h3>
            <h1>
                {title}
            </h1>
            <p className="txtPPP">
                {text}
            </p>
        </div>
    )
}