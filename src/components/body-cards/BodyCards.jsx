import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function BodyCards() {
  return(
    <section className="bg-white">
      <Container className="d-flex bg-black justify-content-between p-5">
        <Card style={{width: '30%'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width: '30%'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width: '30%'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default BodyCards;