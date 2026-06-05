import Card from 'react-bootstrap/Card';

function BodyCards({customColor, textColor, title, content}) {
  return(
    <Card 
      style={{
        backgroundColor: `${customColor}`,
        color: `${textColor}`
      }}
      className='h-100 w-100'>
      <Card.Body>
        <Card.Title className='card-title text-center p-2'>{title}</Card.Title>
        <Card.Text className='card-text text-center'>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BodyCards;