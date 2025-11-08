import Card from 'react-bootstrap/Card';

interface TemplateCardProps {
  data?: {
    title: string;
    description: string;
  };
}

export const TemplateCard: React.FC<TemplateCardProps> = () => {
  return (
    <Card border="success" className='template-card' >
      <Card.Img src="https://placehold.co/500x500" title='Ver a página' />
    </Card>
  )
}