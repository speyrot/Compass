// src/components/Dashboard.js
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';

function Dashboard() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={4}>Widget 1</Col>
          <Col md={4}>Widget 2</Col>
          <Col md={4}>Widget 3</Col>
        </Row>
        <Row>
          <Col md={6}>Widget 4</Col>
          <Col md={6}>Widget 5</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
