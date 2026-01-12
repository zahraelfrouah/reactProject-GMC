import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  const cardsData = [
    {
      id: 1,
      title: 'Card One',
      text: 'This is the first card content.',
      image: 'https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg',
    },
    {
      id: 2,
      title: 'Card Two',
      text: 'This is the second card content.',
      image: 'https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg',
    },
    {
      id: 3,
      title: 'Card Three',
      text: 'This is the third card content.',
      image: 'https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg',
    },
  ];

  return (
    <div className="d-flex gap-3 justify-content-center ">
      {cardsData.map((card) => (
        <Card key={card.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card.image} />
          
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default KitchenSinkExample;
