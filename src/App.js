import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Navbar, Container, Row, Col, Button, Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar bg="warning" variant="primary">
        <Navbar.Brand><h2>Administrador de Masajes Web</h2></Navbar.Brand>
      </Navbar>

      <Container fluid style={{ backgroundColor: "SILVER" }} className="pt-3">
        <Row >
          <Col>

            <Container fluid style={{ backgroundColor: "#000000" }}>
              <Row>
                <Col className="float-left">
                  <Button variant="dark" className="float-left">
                    <AiFillCaretLeft size="1em" />
                  </Button>
                </Col>
                <Col><h3 style={{ color: "#999999" }}>Fecha</h3></Col>
                <Col>
                  <Button variant="dark" className="float-right">
                    <AiFillCaretRight size="1em" />
                  </Button>
                </Col>
              </Row>
            </Container>

            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Servicio</th>
                  <th>Hora</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>04/11/2020</td>
                  <td>Masaje</td>
                  <td>10:30 A.M.</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>04/11/2020</td>
                  <td>Masaje</td>
                  <td>10:30 A.M.</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>04/11/2020</td>
                  <td>Masaje</td>
                  <td>10:30 A.M.</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </Table>

          </Col>
        </Row>

      </Container>

      <Container fluid style={{ backgroundColor: "SILVER" }} className="pt-3 border border-top" >
      <Row>
          <Col > 
            <Button variant="success" size="lg" className="float-right border border-primary">
              Agregar Cita
            </Button>
          </Col>                
          <Col>
            <Button variant="success" size="lg" >
              Modificar Cita
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="lg" className="float-left" >
              Eliminar Cita
            </Button>
          </Col>
        </Row>
      </Container>    

    </div>
  );
}

export default App;
