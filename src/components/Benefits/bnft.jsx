import onePercent from '../../assets/svgs/onePercent.svg'
import productivity from '../../assets/svgs/productivity.svg'
import infinityL from '../../assets/svgs/infinityL.svg'
import zeroPro from '../../assets/svgs/zeroPro.svg'
import eraAi from '../../assets/svgs/eraAi.svg'

const icons = [
    onePercent,
    productivity,
    infinityL,
    zeroPro,
    eraAi,
]

export function Bnft({id, icon, title, text}) {

    console.log(id)

    return (
        <div className="bnft">
            <img src={icons[id-1]} alt="" />
            <h1 className='bt-Title'>{title}</h1>
            <p className='bt-P'>{text}</p>
        </div>
    )
}