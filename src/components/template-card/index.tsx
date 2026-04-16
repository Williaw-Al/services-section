import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

interface TemplateCardProps {
  image: string,
  templateId: string
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ image, templateId }) => {
  return (
    <Card border="success" className='template-card' >
      <Link to={`/modelos-sites/${templateId}`}>
        <Card.Img src={image} title='Ver a página' />
      </Link>
    </Card>
  )
}