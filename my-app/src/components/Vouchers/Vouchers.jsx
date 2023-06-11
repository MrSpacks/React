import './Vouchers.css'
import vouchersImg from './../../img/images/vouchers-img.png'
import store01Img from './../../img/icons/app-store.png'
import store02Img from './../../img/icons/google-play.png'


const Vouchers = () => {
    return ( 
<section className="vouchers"> 
        <div className="conteiner">
            <div className="vouchers_content">
                <div className="vouchers_texts">
                    <div className="vouchers_title">DOWNLOAD APP & GET THE VOUCHER!</div>
                    <p className="vouchers_text">Get 30% off for first transaction using Rondovision mobile app for now.</p>
                    <div className="vouchers_stores">
                    <img src={store01Img} alt="" className="vouchers_store" />
                    <img src={store02Img} alt="" className="vouchers_store" />
                    </div>
                </div>
                <img className='vouchers_img' src={vouchersImg} alt="" />
            </div>
        </div>
    
</section>
     );
}
 
export default Vouchers;