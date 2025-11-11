import { motion } from "motion/react"

import siteShowcase from "../../assets/images/site-showcase.webp"
import '../../assets/styles/done.css'
import { LinkReturnHome } from "../../components/link-return-home"

export const Done = () => {
    return (
        <motion.div className="done-section"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2, transition: { duration: 0.2 } }}
        >
            <div className="image-container">
                <img src={siteShowcase} alt="O teu site" title="O teu site em breve" />
            </div>

            <h1>O teu passo para uma Presença Digital mais forte foi dado!</h1>
            <h2>Agora é só esperar que entrarei em contato em até 24 horas! </h2>

            <LinkReturnHome show={true} />
        </motion.div>
    )
}