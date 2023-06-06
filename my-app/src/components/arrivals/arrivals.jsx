import './arrivals.css'
import Card from './../Card/Card.jsx'

const Arrivals = () => {
    return ( 
<section className="arrivals"> 
    <div className="conteiner">
        <div className="arrivals_header">
            <h2 className="title_2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals_cards">
            <div className="arrivals_card"><Card /></div>
            <div className="arrivals_card"><Card /></div>
            <div className="arrivals_card"><Card /></div>
        </div>
        
    </div>
</section>
     );
}
 
export default Arrivals;