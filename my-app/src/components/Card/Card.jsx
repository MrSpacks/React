import './Card.css'
import arrowImg from './../../img/icons/arrow.svg'
const Card = ({title,img}) => {

    return ( 
        <div>
            <img className='card_img' src={img} alt="" />
            <div className="card_body">
                <div className="card_text">
                    <div className="card_title">{title}</div>
                    <div className="card_subtitle">Explore Now!</div>
                </div>
                <div className="card_icon"><img src={arrowImg} alt="" /></div>
            </div>
        </div>
     );
}
 
export default Card ;