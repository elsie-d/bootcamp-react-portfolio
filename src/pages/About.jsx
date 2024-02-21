import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/about.css'

export default function About() {
    return (


      <Container>
      <Row>
        <Col sm={4} className="imgCard">
        <Card style={{ backgroundColor: '#aabfb1' }}>
          <Card.Img variant="top" src="/src/assets/Elsie.png" className="img"/>
          <Card.Body>
            <Card.Title>Elsie Duarte</Card.Title>
            <Card.Text>
            <p className="quote">"Embrace the journey of becoming the person you aspire to be, for in the pursuit of your dreams, you inspire not only yourself but those around you." <br/><br/> - Anonymous</p>
            </Card.Text>
      </Card.Body>
    </Card>


        </Col>
        <Col sm={8}>
        <Container className="aboutTitle">
         <Row>
          <Col><h1 className='about'>About Me</h1></Col>
        </Row>
         </Container>
         <Container className="aboutBio">
         <Row >
          <Col >My name is Elsie (pronounced "L.C." 😉), and I am only a few weeks away from completing a Full-Stack Developer bootcamp course through UC Davis. For the past few months I've had very little free time to enjoy hobbies such as hiking, dancing, and cooking but it's ok because my time at the bootcamp has been worth the learning experice! I came in to the course with basic understanding of HTML and CSS and am about to finish it up with a vast knowledgebase that covers the client, server, and database.   </Col>
        </Row>
         </Container>




        </Col>
      </Row>
     
    </Container>

      
    );
  }
  