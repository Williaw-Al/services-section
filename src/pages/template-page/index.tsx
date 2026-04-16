import { motion } from "motion/react"
import { Link, useParams } from "react-router"
import Button from "react-bootstrap/Button"
import { TemplateCarousel } from "../../components/template-carousel"

import "../../assets/styles/template-page.css"


export const TemplatePage = () => {
    const { id } = useParams()

    return (
        <motion.div className="templates-section"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 2000, transition: { duration: 0.2 } }} >

            <div className="template-container">
                <TemplateCarousel templateId={id} />

                {id === "0" && (
                    <div className="template-page-description">
                        <h1>Modelo Marmitas da Vivó</h1>
                        <p>Uma página com um ar aconchegante e familiar. Mesmo sendo uma página simples, consegue entregar todas as informações mais relevantes ao cliente de forma rápida e otimizada para diferentes navegadores.</p>
                    </div>
                )}

                {id === "1" && (
                    <div className="template-page-description">
                        <h1>Modelo Cabelos Glamurosos</h1>
                        <p>Essa página se foca em apresentar os serviços ofertados, podendo evoluir consideravelmente com as necessidades do negócio. Podemos adicionar seções para cada serviço, produto, dica ou blog. Muito bom para usar em conjunto com as redes sociais.</p>
                    </div>
                )}

                {id === "2" && (
                    <div className="template-page-description">
                        <h1>Modelo Goulart</h1>
                        <p>Um site muito mais robusto, onde cada seção tem sua própria página para se destacar. Utiliza tecnologias mais avançadas para fornecer um design mais moderno e profissional. Pode servir como base para muitas boas ideias e oportunidades de surpreender o cliente.</p>
                    </div>
                )}
            </div>


            <Link to="/modelos-sites">
                <Button variant="primary" size='lg' className='btn-cta-form models-btn'>
                    <div className='btn-motion' />
                    Ver mais modelos de páginas
                </Button>
            </Link>

        </motion.div>
    )
}