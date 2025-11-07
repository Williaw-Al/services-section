import Card from 'react-bootstrap/Card';

interface TemplateCardProps {
  data?: {
    title: string;
    description: string;
    // adicione outros campos conforme necessário
  };
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ data }) => {
    return (
        <Card border="success" style={{ width: '18rem', pointerEvents: 'none' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {data?.title}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}