import { useStates } from './utilities/states';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ProductList() {

  let s = useStates('main');


  return <Container className="productList">
    <Row><Col><h1>Products</h1></Col></Row>
    {s.products.map(({ id, name, description, price }) =>
      <Row className="product" key={id}>
        <Card>
          <Col xxl="12">
            <h3>{name}</h3>
          </Col>
          <Col xxl="12">
            <p>{description}</p>
          </Col>
          <Col xxl="12">
            <p><b>Price:</b> ${price}</p>
          </Col>
        </Card>
      </Row>
    )}
  </Container>
}