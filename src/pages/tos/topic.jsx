export function Topic({topic, text}){
    return(
        <div className="tosTopic">
            <h1 className="greenText">{topic}</h1>
            <p>{text}</p>
        </div>
    )
}