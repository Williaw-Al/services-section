import { TemplateCard } from "../template-card";

import card1 from "../../assets/images/template-marmitas-vivo.webp"
import card2 from "../../assets/images/template-cabelos-glamurosos.webp"
import card3 from "../../assets/images/template-goulart.webp"

export const TemplatesContainer = () => {
  return (
    <div className="templates-container">
      <TemplateCard image={card1} />
      <TemplateCard image={card2} />
      <TemplateCard image={card3} />
    </div>
  )
};