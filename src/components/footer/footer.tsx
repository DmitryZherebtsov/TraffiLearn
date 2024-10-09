import "./footer.css"
import { main_assets } from "../../assets/assets"

const footer = () => {
  return (
    <div className="footer">
        
        <div>
            <img className="logo" src={main_assets.logo} alt="" />
        </div>

        <div className="social_media">
            <h3 className="footer_title">Join us on social media:</h3>
            <div className="social_links">
                <img src={main_assets.facebook} alt="" />
                <img src={main_assets.instagram} alt="" />
                <img src={main_assets.youtube} alt="" />
                <img src={main_assets.github} alt="" />
                <img src={main_assets.linkedin} alt="" />
            </div>
        </div>

        <div className="contact_us">
            <h3 className="footer_title">Contact us:</h3>
            <div className="social_links">
                <img src={main_assets.google} alt="" />
                <img src={main_assets.phone} alt="" />
            </div>
        </div>

    </div>
  )
}

export default footer