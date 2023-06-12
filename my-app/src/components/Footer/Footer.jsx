import './Footer.css'
import fbImg from './../../img/socials/fb.svg'
import inImg from './../../img/socials/in.svg'
import instImg from './../../img/socials/inst.svg'
import twImg from './../../img/socials/tw.svg'

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="conteiner">
                <div className="footer_content">
                    <div className="footer_socials">
                        <h2 className="social_title">FASHION</h2>
                        <p className="social_text">Complete your style with awesome <br/> clothes from us.</p>
                        <div className="social_icon">
                            <img src={fbImg} alt="" />
                            <img src={inImg} alt="" />
                            <img src={instImg} alt="" />
                            <img src={twImg} alt="" />
                        </div>
                    </div>
                    <div className="footer_links">
                        <div className="footer_collumn-links">
                            <h2 >Company</h2>
                            <a href="#!">About</a>
                            <a href="#!">Contact us</a>
                            <a href="#!">Support</a>
                            <a href="#!">Careers</a>

                        </div>
                        <div className="footer_collumn-links">
                            <h2 >Quick Link</h2>
                            <a href="#!">Share Location</a>
                            <a href="#!">Orders Tracking</a>
                            <a href="#!">Size Guide</a>
                            <a href="#!">FAQs</a>
                        </div>
                        <div className="footer_collumn-links">
                            <h2 >Legal</h2>
                            <a href="#!">Terms & conditions</a>
                            <a href="#!">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;