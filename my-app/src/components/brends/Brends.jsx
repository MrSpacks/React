import './Brends.css'

import HM from './../../img/brands/HM.png'
import Amazon from './../../img/brands/Amazon.png'
import Lacoste from './../../img/brands/Lacoste.png'
import Levis from './../../img/brands/Levis.png'
import Obey from './../../img/brands/Obey.png'
import Shopify from './../../img/brands/Shopify.png'

const Brends = () => {
    return ( 
<section className="brends"> 
    <div className="conteiner">
        <ul className="brends_list">
            <li className="brnds_item"><a href="#!"><img src={HM} alt="" /></a></li>
            <li className="brnds_item"><a href="#!"><img src={Amazon} alt="" /></a></li>
            <li className="brnds_item"><a href="#!"><img src={Lacoste} alt="" /></a></li>
            <li className="brnds_item"><a href="#!"><img src={Levis} alt="" /></a></li>
            <li className="brnds_item"><a href="#!"><img src={Obey} alt="" /></a></li>
            <li className="brnds_item"><a href="#!"><img src={Shopify} alt="" /></a></li>
        </ul>
    </div>
</section> );}

export default Brends;