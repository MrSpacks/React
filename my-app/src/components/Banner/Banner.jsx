import './Banner.css'
import promoImg from './../../img/images/promo-img.jpg'

const Banner = () => {
    return ( 
        <div className="banner_content">
        <img src={promoImg} alt="Promo" className="banner_img" />
        <div className="banner_text">
            <h2 className="banner_title">
            <span>PAYDAY</span> SALE NOW
            </h2>
            <p className="banner_subtitle">Spend minimal $100 get 30% off voucher code for your next purchase</p>
            <h4 className="banner_date">1 June - 10 June 2021</h4>
            <p className="banner_subtitle">*Terms & Conditions apply</p>
            <a href="#!" className="rpomo_btn">Shop Now</a>
        </div>

    </div>
     );
}
 
export default Banner;