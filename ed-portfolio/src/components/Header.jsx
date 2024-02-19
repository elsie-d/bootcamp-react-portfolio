// Application has a single Header component that appears 
// on multiple pages, with a Navigation component within it 
// that’s used to conditionally render 
// About Me, Portfolio, Contact, and Resume sections.
import'../styles/header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './Nav';


function Header(){
return(

    <Container className='header'>
    <Row>
      <Col><h1>Elsie D</h1></Col>
      <Col><Nav /></Col>
    </Row>
  </Container>
    
);
}

export default Header;