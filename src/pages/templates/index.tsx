import { Link } from "react-router"
import { TemplatesContainer } from "../../components/templates-container"

import { motion } from "motion/react"
import avatarFundo from "../../assets/images/templates-avatar.webp"

import "../../assets/styles/templates.css"
import { ActionButton } from "../../components/action-button"

export const Templates = () => {
    return (
        <motion.div className="templates-section"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 2000, transition: { duration: 0.2 } }} >

            <Link to="/" className="return-button">
                Clique em mim para voltar
            </Link>

            <div className="templates-avatar-bg-container">
                <img src={avatarFundo} alt="Avatar mostrando os modelos das páginas" />
                <TemplatesContainer />
            </div>

            <h1>Encontre o modelo certo para o teu site!</h1>
            <p>Podemos explorar também no HTML5 UP, Freebiesbug, StyleShout no Tooplate.</p>

            <ActionButton>Quero o meu Espaço Virtual</ActionButton>

        </motion.div>
    )
}