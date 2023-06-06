import './promo.css'
import promoImg from './../../img/images/header-img.jpg'

const Promo = () => {
    return ( 
        <section className="promo"> 
            <div className="conteiner">
                <div className="promo_content">
                    <div className="promo_text">
                        <h1 className="promo_title">
                            <span className='hight_light'><span>LET’S</span></span>
                            <span>EXPLORE</span> 
                            <span className='hight_light--yellow'><span>UNIQUE</span></span> 
                            CLOTHES.</h1>
                        <p className="promo_disc">Live for Influential and Innovative fashion!</p>
                        <div className="promo_btn-wrapper">
                            <a href="#!" className="rpomo_btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo_img"><img src={promoImg} alt="Promo" /></div>
                </div>
            </div>
        </section>
     );
}
 
export default Promo;