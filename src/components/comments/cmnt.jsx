import { Canswr } from "./cmnt-answer";

export function Cmnt({cmntPfp, cmntName, cmntText, cmntTime, cmntAnswers}) {
    return (
        <div className="cmntWrapper">
            <div className="mainCmnt">
                <img src={cmntPfp} className="cmntPfp"></img>
                <div className="mc-content">
                    <h3 className="fb-name blue-fb clickable-fb">{cmntName}</h3>
                    <p className="fb-cmnt"> {cmntText}
                    </p>
                    <div className="fb-c-info">
                        <h3 className="fbci-stylish blue-fb clickable-fb">Curtir</h3>
                        <p>·</p>
                        <h3 className="fbci-stylish blue-fb clickable-fb">Responder</h3>
                        <p>·</p>
                        <h3 className="fbci-stylish fbci-time ">{cmntTime}</h3>
                    </div>
                </div>
            </div>
            <div className="cmntAnswers">
                {cmntAnswers.map( (current, index) => <Canswr
                key={index}
                awPfp={current.awPfp}
                awName={current.awName}
                awText={current.awText}
                awTime={current.awTime}
                />)}
            </div>
        </div>
    )
}