import './arrivals.css'
import Card from './../Card/Card.jsx'
import cat01Img from './../../img/categories/cat-01.jpg'
import cat02Img from './../../img/categories/cat-02.jpg'
import cat03Img from './../../img/categories/cat-03.jpg'

const Arrivals = () => {
    return ( 
<section className="arrivals"> 
    <div className="conteiner">
        <div className="arrivals_header">
            <h2 className="title_2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals_cards">
            <div className="arrivals_card"><Card title="Hoodies & Sweetshirt" img={cat01Img} /></div>
            <div className="arrivals_card"><Card title="Coats & Parkas" img={cat02Img} /></div>
            <div className="arrivals_card"><Card title="Tees & T-Shirt" img={cat03Img} /></div>
        </div>
        
    </div>
</section>
     );
}
 
export default Arrivals;