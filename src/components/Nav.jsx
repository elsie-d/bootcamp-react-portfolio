// About Me, Portfolio, Contact, and Resume sections.


// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/nav.css'
//import Navbar from './UI/navBar';

function NavBar () {
  return  (

    <Container>
    <Row className='nav'>
      <Col><NavLink to="/" className='navLink'>About</NavLink></Col>
      <Col><NavLink to="/portfolio" className='navLink'>Portfolio</NavLink></Col>
      <Col><NavLink to="/contact" className='navLink'>Contact</NavLink></Col>
      <Col><NavLink to="/resume" className='navLink'>Resume</NavLink></Col>
      
    </Row>
    
  </Container>

  )
}

export default NavBar
