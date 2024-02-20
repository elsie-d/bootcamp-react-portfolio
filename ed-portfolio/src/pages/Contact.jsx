import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../styles/contact.css'

export default function Contact() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


    return (
      <Container className="contactPage">
      <Row>
        <Col>
        <h2>Stay in touch</h2>
        <p>Drop a message, I'll respond in a timeley maner.</p>

        <Container>
      <Row>
        <Col>
        &nbsp; 
        </Col>
        </Row>
        </Container>




        <Container>
      <Row>
        <Col className="form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue="Joe"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="email@address.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3}
        required
        />
         <Form.Control.Feedback type="invalid">
              Don't forget to enter your message.
         </Form.Control.Feedback>
      </Form.Group>
        
      </Row>
     
      <Button type="submit" className="formBtn">Submit form</Button>
    </Form>

    </Col>
      </Row>
      </Container>
      </Col>
      </Row>
      </Container>
    );
  }