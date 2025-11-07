import { TemplateCard } from "../../components/template-card"
import { TemplatesContainer } from "../../components/templates-container"


export const Templates = () => {
    return (
        <>
            <TemplatesContainer visibleCount={4}>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
                <TemplateCard/>
            </TemplatesContainer>
        </>
    )
}