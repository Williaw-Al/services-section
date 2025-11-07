import { Link } from "react-router"
import { TemplateCard } from "../../components/template-card"
import { TemplatesContainer } from "../../components/templates-container"

import { motion } from "motion/react"
import avatarFundo from "../../assets/images/templates-avatar.webp"

import "../../assets/styles/templates.css"

export const Templates = () => {
    return (
        <motion.div className="templates-section"
        initial={{x: 100}}
        animate={{x: 0}}
        exit={{x: 2000, transition: {duration: 0.2}}} >

            <div className="templates-avatar-bg-container">
                <img src={avatarFundo} alt="Avatar mostrando os modelos das páginas" />
            </div>
            <Link to="/">Clique em mim para voltar</Link>
            <TemplatesContainer visibleCount={2}>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
            </TemplatesContainer>
        </motion.div>
    )
}