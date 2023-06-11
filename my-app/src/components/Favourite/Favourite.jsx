import './Favourite.css'
import Card from './../Card/Card.jsx'
import promo01Img from './../../img/images/promo-01.jpg'
import promo02Img from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return ( 
<section className="favourite"> 
    <div className="conteiner">
        <div className="favourite_header">
            <h2 className="title_2">Young’s Favourite</h2>
        </div>
        <div className="arrivals_cards">
            <div className="arrivals_card"><Card title="Trending on instagram" img={promo01Img} /></div>
            <div className="arrivals_card"><Card title="All Under $40" img={promo02Img} /></div>
        </div>
        
    </div>
</section>
     );
}
 
export default Favourite;