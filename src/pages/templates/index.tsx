import { TemplatesContainer } from "../../components/templates-container"
import { Card } from "react-bootstrap"

import { motion } from "motion/react"
import avatarFundo from "../../assets/images/templates-avatar.webp"
import highlightTemplate from "../../assets/images/template-showbis.webp"

import "../../assets/styles/templates.css"
import { ActionButton } from "../../components/action-button"


export const Templates = () => {
    return (
        <motion.div className="templates-section"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 2000, transition: { duration: 0.2 } }} >

            <div className="templates-avatar-bg-container">
                <img src={avatarFundo} alt="Avatar mostrando os modelos das páginas" />
                <TemplatesContainer />
            </div>

            <h1>Encontre o modelo certo para o teu site!</h1>
            <h3>Último projeto: Página ShowBis Itaqui</h3>

            <Card border="success" className='template-card' >
                <a href="https://showbisitaqui.vercel.app" target="_blank">
                    <Card.Img src={highlightTemplate} title='Ver a página da ShowBis' />
                </a>
            </Card>


            <p>Outros lugares que podemos explorar modelos:
                <a href="https://www.siteinspire.com/" target="_blank"> SiteInspire</a>,
                <a href="https://www.templatemonster.com/" target="_blank"> TemplateMonster</a>,
                <a href="https://www.pinterest.com/search/pins/?q=landing%20pages&rs=typed" target="_blank"> Pinterest</a>,
                <a href="https://html5up.net/" target="_blank"> HTML5 UP</a>,
                <a href="https://freebiesbug.com/" target="_blank"> Freebiesbug</a>,
                <a href="https://www.styleshout.com/" target="_blank"> StyleShout</a>,
                <a href="https://tooplate.com/" target="_blank"> Tooplate</a>.
            </p>
            <p>Traga suas próprias referências para usar como base!</p>

            <ActionButton>Quero o meu Espaço Virtual</ActionButton>

        </motion.div>
    )
}
