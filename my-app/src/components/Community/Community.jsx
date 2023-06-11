import './Community.css'
import MyForm from './../Form/Form.jsx'

const Community = () => {
    return ( 
        <section className="community">
            <div className="community_content">
                <div className="community_title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                <div className="community_text">Type your email down below and be young wild generation</div>
                <MyForm />
            </div>
        </section>
     );
}
 
export default Community;