export function Canswr({awPfp, awName, awText, awTime,}){
    return(
        <div className="canswr">
        <img src={awPfp}></img>
        <div className="mc-content">
            <h3 className="fb-name blue-fb clickable-fb">{awName}</h3>
            <p className="fb-cmnt"> {awText}
            </p>
            <div className="fb-c-info">
                <h3 className="fbci-stylish blue-fb clickable-fb">Curtir</h3>
                <p>·</p>
                <h3 className="fbci-stylish blue-fb clickable-fb">Responder</h3>
                <p>·</p>
                <h3 className="fbci-stylish fbci-time ">{awTime}</h3>
            </div>
        </div>
    </div>
    )
}