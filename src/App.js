import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'; //Pal usestate del modal
import { AiFillCaretLeft, AiFillCaretRight, AiFillPlusCircle } from "react-icons/ai";
import { Navbar, Container, Row, Col, Button, Table, Modal, Form, Badge } from 'react-bootstrap';


function App() {

  const [lgShow, setLgShow] = useState(false);

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
            <Button variant="success" size="lg" className="float-right border border-primary" onClick={() => setLgShow(true)}>
              Agregar Cita
            </Button>
          </Col>
          <Col>
            <Button variant="success" size="lg" onClick={() => setLgShow(true)}>
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

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="AgregarCita" centered>
        <Modal.Header closeButton>
          <Modal.Title id="AgregarCita">
            Agregar cita
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container>
            <Row>
              <Col>

                <Form>
                  <Form.Group>

                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" />
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                      Fecha:
                    </Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                      <option value="0">Hoy</option>
                      <option value="1">Ayer</option>
                      <option value="2">Mañana</option>
                    </Form.Control>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                      Hora:
                    </Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                      <option value="0">10:30 A.M.</option>
                      <option value="1">11:00 A.M.</option>
                      <option value="2">11:30 A.M.</option>
                    </Form.Control>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                      Servicio:
                    </Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                      <option value="0">Masaje</option>
                      <option value="1">Chocoterapia</option>
                    </Form.Control>

                  </Form.Group>
                </Form>

                <Button variant="secondary" size="sm"><AiFillPlusCircle size="1.2em" /> Añadir servicio </Button>{' '}

              </Col>
              <Col style={{ background: "#999999" }}>
                <h2>
                  <Badge variant="warning">RESUMEN</Badge>
                </h2>

                <Table bordered hover variant="dark" responsive>
                  <tbody>
                    <tr>
                      <td>Chocoterapia</td>
                      <td>$600</td>
                    </tr>
                  </tbody>
                </Table>

              </Col>
            </Row>
          </Container>

          <h2>
            <Badge variant="success" className="float-right">Total: $600</Badge>
          </h2>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark">Guardar Cita</Button>
          <Button variant="secondary">Cancelar</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
