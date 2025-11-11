import { motion } from "motion/react"
import { Link } from "react-router"

import dealAvatar from "../../assets/images/shaking-hands-avatar.webp"
import '../../assets/styles/contact.css'
import ContactForm from "../../components/contact-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
    function handleWhatsappButton(): void {
        console.log('olá');
        
    }

    return (
        <motion.div className="contact-session"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 2000, transition: { duration: 0.2 } }}
        >
            <div className="contact-img-container">
                <img src={dealAvatar} alt="Aperto de mãos" title="Aperto de mãos" />
                <ContactForm />
            </div>

            <h2>Ou me chama pelo <span className="whatsapp-span">WhatsApp</span>!</h2>
            <button className="whatsapp-button" onClick={handleWhatsappButton}>
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp</button>

        <Link to="/teu-espaco-virtual">Teste</Link>

        </motion.div>
    )
}