import { motion } from "motion/react"
import { Link } from "react-router"

import dealAvatar from "../../assets/images/shaking-hands-avatar.webp"
import '../../assets/styles/contact.css'
import ContactForm from "../../components/contact-form"

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
            <Link to="/" className="return-button">
                Clique em mim para voltar
            </Link>

            <div className="contact-img-container">
                <img src={dealAvatar} alt="Aperto de mãos" title="Aperto de mãos" />
                <ContactForm />
            </div>

            <h2>Ou me chama pelo WhatsApp!</h2>
            <button className="whatsapp-button" onClick={handleWhatsappButton}>WhatsApp</button>

        <Link to="/teu-espaco-virtual">Teste</Link>

        </motion.div>
    )
}