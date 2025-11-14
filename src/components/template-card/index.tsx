import Card from 'react-bootstrap/Card';

interface TemplateCardProps {
  image: string
}

export const TemplateCard: React.FC<TemplateCardProps> = ({image}) => {
  return (
    <Card border="success" className='template-card' >
      <Card.Img src={image} title='Ver a página' />
    </Card>
  )
}