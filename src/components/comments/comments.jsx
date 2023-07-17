import { Cmnt } from './cmnt'
import './comments.css'
import commentsData from '../../assets/data/comments.json';
export function Comments() {
    return (
        <>
            <section id="comments" className='spacing'>
                <h2 className='fc-heading'>{commentsData.length} comentários</h2>
                {commentsData.map((current, index) => <Cmnt key={index} {...current} />)}
            </section>
            <p className="cmntsAdvice">*Estes comentários foram extraídos do Facebook e por isso não é possível interagir através desta página.</p>
        </>
    )
}